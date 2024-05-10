import  {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { RiAdminFill } from "react-icons/ri";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users-my');
            return res.data;
        }
    });
    // console.log(users);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users-my/${user._id}`, { role: 'admin' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    // Refetch data after successful role update
                    refetch();
                    console.log(`${user.name} is now an Admin!`);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error updating user role:', error);
                // Handle error
            });
    };
    
    const handleMakeUser = user => {
        axiosSecure.patch(`/users-my/${user._id}`, { role: 'user' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    // Refetch data after successful role update
                    refetch();
                    console.log(`${user.name} is now a User!`);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now a User!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error updating user role:', error);
                // Handle error
            });
    };

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users-my/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    // Sort users by timestamp in descending order
    const sortedUsers = users.slice().sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });
    const filteredUsers = sortedUsers.filter(user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });


    return (
        <div className="text-gray-200 min-h-screen overflow-x-auto px-2">
        <div className="flex rounded  lg:w-1/2 items-center lg:mx-auto">
            <input
                className="px-2  rounded-l py-1 outline-none w-[280px] my-1 lg:w-[590px] text-black"
                type="search"
                placeholder="Search here"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="bg-black p-2 px-4">
                <FaSearch />
            </div>
        </div>
        <div className="mt-1">
            <h2 className="lg:text-3xl ">Total Users: {filteredUsers.length}</h2>
        </div>
        {filteredUsers.length === 0 && (
            <div className="text-center mt-4 text-red-500">No users found</div>
        )}
        <div className="overflow-x-auto mt-1 lg:w-1/2 lg:text-xl mx-auto">
            {filteredUsers.map(user => (
                <div key={user._id} className="flex lg:gap-8 lg:my-2 py-1 items-center space-x-2">
                    <img
                        className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] border shadow-2xl border-lime-500 rounded cursor-pointer"
                        src={user?.photoUrl}
                        alt="image"
                    />
                    <div className="">
                        <h2> {user?.name}</h2>
                        <p>{user?.phoneNumber}</p>
                    </div>
                    <div>
                        <p>{user?.work}</p>
                        <p>{user?.email}</p>
                    </div>
                    <div className="mx-1">
                        {user?.role === 'admin' ? 
                            <RiAdminFill className="p-1 rounded-md bg-lime-500 text-3xl" onClick={() => handleMakeUser(user)} /> :
                            <FaUser onClick={() => handleMakeAdmin(user)} className="p-1 rounded-md bg-black text-3xl" />
                        }
                    </div>
                    <div>
                        <p>{user?.gender}</p>
                        <p>{user?.age}</p>
                    </div>
                    <div>
                        <p>{user?.address}</p>
                    </div>
                    <div>
                        {user?.password}
                    </div>
                    <div onClick={() => handleDeleteUser(user)}>
                        <button className="btn btn-ghost btn-lg">
                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default AllUsers;
