import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from '../Providers/AuthProviders';
import { useNavigate } from "react-router-dom";

const UserStartService = () => {
    const {user} = useContext(AuthContext)
    const [publicPrice, setPublicPrice] = useState(0);
    const taxPrice = 5;
    const othersCost = 0;
    const [totalPassenger, setTotalPassenger] = useState(0);
    const [selectedPlace, setSelectedPlace] = useState("");
    const [totalCost, setTotalCost] = useState(5);
    const [errorMessage, setErrorMessage] = useState("");
    const [nullError, setNullError] = useState("আপনার যায়গা সিলেক্ট করুন");
    const navigate = useNavigate();
    

    const handlePlaceChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedPlace(selectedValue);
    
        if(selectedValue === "null") {
            setNullError("আপনার যায়গা সিলেক্ট করুন ")
            setPublicPrice(0);
            setTotalCost(0);
            setTotalPassenger(0); // Reset the total passenger count
            setErrorMessage(""); // Reset the error message
            return;
        } else if (selectedValue === "হোমনা থেকে গোয়ারিভাংঙ্গা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        } else if (selectedValue === "গোয়ারিভাংঙ্গা থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        } else if (selectedValue === "হোমনা থেকে গৌরিপুর") {
            setPublicPrice(50);
            setTotalCost(50 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === " গৌরিপুর থেকে হোমনা") {
            setPublicPrice(50);
            setTotalCost(50 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে বাতাকান্দি") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "বাতাকান্দি থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে ঘারমোড়া") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "ঘারমোড়া থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে পঞ্চবটী") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "পঞ্চবটী থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে মিশিকারী") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "মিশিকারী থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে কাশিপুর") {
            setPublicPrice(35);
            setTotalCost(35 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "কাশিপুর থেকে হোমনা") {
            setPublicPrice(35);
            setTotalCost(35 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে ওপারচর") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "ওপারচর থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে দুলালপুর") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "দুলালপুর থেকে হোমনা") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে বাঞ্ছারামপুর") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "বাঞ্ছারামপুর থেকে হোমনা") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে কাচারকান্দি") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "কাচারকান্দি থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে মঙ্গলকান্দি") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "মঙ্গলকান্দি থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "চান্দেরচর  থেকে হোমনা") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে চান্দেরচর ") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে মিরাস") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "মিরাস থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে নিলুখিলালবাগ") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "নিলুখিলালবাগ থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে বাবরকান্দি") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "বাবরকান্দি থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে পায়রাবন্দ") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "পায়রাবন্দ থেকে হোমনা") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে ববানীপুর") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "ববানীপুর থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "সিনাইয়া থেকে মক্তিনাগর/মাইনকাচড় ") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "মক্তিনাগর/মাইনকাচড় থেকে সিনাইয়া ") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
        
         else if (selectedValue === "হোমনা থেকে মুড়গাচড়") {
            setPublicPrice(45);
            setTotalCost(45 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "মুড়গাচড় থেকে হোমনা") {
            setPublicPrice(45);
            setTotalCost(45 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে সিনাইয়া") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        } 
        else if (selectedValue === "সিনাইয়া থেকে হোমনা") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে কালমিনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "কালমিনা থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে কারাকান্দি") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "কারাকান্দি থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে আলিপুর") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "আলিপুর থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে দরিচড়") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "দরিচড় থেকে হোমনা") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে চড়েগাঁও") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "চড়েগাঁও থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে লটিয়া") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "লটিয়া থেকে হোমনা") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে শ্রীমুদ্দিঘাট") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "শ্রীমুদ্দিঘাট থেকে হোমনা") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে শ্রীমুদ্দিমোড়") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "শ্রীমুদ্দিমোড় থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে কলাকান্দি") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "কলাকান্দি থেকে হোমনা") {
            setPublicPrice(20);
            setTotalCost(20 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে কলাগাছিয়া") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "কলাগাছিয়া থেকে হোমনা") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে আসাদপুর") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "আসাদপুর থেকে হোমনা") {
            setPublicPrice(30);
            setTotalCost(30 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে বাগমারা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "বাগমারা থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "ঘনিয়ারচড় থেকে হোমনা") {
            setPublicPrice(45);
            setTotalCost(45 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "হোমনা থেকে ঘনিয়ারচড়") {
            setPublicPrice(45);
            setTotalCost(45 + taxPrice);
            setNullError("");
        }
       
         else if (selectedValue === "দাড়িগাও থেকে হোমনা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "গোয়ারিভাংঙ্গা থেকে বাসটান্ড") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "বাসটান্ড থেকে গোয়ারিভাংঙ্গা") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "ওপারচর থেকে বাতাকান্দি") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "বাতাকান্দি থেকে ওপারচর") {
            setPublicPrice(55);
            setTotalCost(55 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "দুলালপুর থেকে ওপারচর") {
            setPublicPrice(35);
            setTotalCost(35 + taxPrice);
            setNullError("");
        }
         else if (selectedValue === "ওপারচর থেকে দুলালপুর") {
            setPublicPrice(35);
            setTotalCost(35 + taxPrice);
            setNullError("");
        }
        
        else {
            setNullError("");
            setPublicPrice(0);
        }
    };
    
    const handlePublicNumber = (e) => {
        const selectedValue = parseInt(e.target.value); // Convert to number
    
        if (isNaN(selectedValue) || selectedValue === 0) {
            // Show error message
            setErrorMessage("Please enter a valid number greater than 0.");
            return; // Exit the function early
        } 
        setErrorMessage('');
        setTotalPassenger(selectedValue);
        
        // Recalculate total cost based on updated total passenger count
        setTotalCost((publicPrice + taxPrice) * selectedValue); 
    };
    
    const handleCarChange = () => {
       
    };

    useEffect(() => {
        // Calculate total cost whenever publicPrice, totalPassenger, or taxPrice changes
        setTotalCost((publicPrice + taxPrice) * totalPassenger);
      }, [publicPrice, totalPassenger, taxPrice]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Gather form data
        const orderDate = new Date().toISOString(); // Get current date and time
        const formData = new FormData(e.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
    
        // Add orderDate to formDataObject
        formDataObject['orderDate'] = orderDate;
    
        // Add additional data
        formDataObject['publicPrice'] = publicPrice;
        formDataObject['totalCost'] = totalCost;
    
        // Fetch options
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        };
    
        try {
            // Sending POST request
            const response = await fetch('http://localhost:5000/users-orders', options);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
    
            // Handle successful response
            // console.log('Order placed successfully!');
            navigate('/order-success'); // Redirect to home or any other page
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            // Handle errors here
        }
    };
    
    
    
    // console.log(totalCost);

    return (
        <div className="text-white px-3 min-h-screen">
            <div className="lg:mx-auto mt-8 text-center">
                <p className="text-yellow-300 lg:text-xl ">
                    গাড়ির জন্য ঘন্টার পর ঘন্টা বসে না থেকে এখনই গাড়ি অর্ডার দিন।আর খুব সহজে পৌঁছে যান আপনার গন্তব্যে !!!
                </p>
              
            </div>
            <form onSubmit={handleSubmit} className="lg:w-1/2 text-[14px] lg:text-[16px]  mx-auto my-8">
                <div className="my-2">
                    <label className="font-bold" htmlFor="name">আপনার নাম লিখুন</label>
                    <input required defaultValue={user?.displayName} className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="text" name="name" placeholder="এখানে আপনার নাম লিখুন" />
                </div>
                <div className="my-2">
                    <label className="font-bold" htmlFor="mobile-number">আপনার মোবাইল নাম্বার </label>
                    <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="mobile-number" placeholder="এখানে আপনার নাম লিখুন" />
                </div>
                <div className="my-2">
                    <label  className="font-bold" htmlFor="email">আপনার ইমেইল লিখুন</label>
                    <input defaultValue={user?.email} required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="email" name="email" placeholder="এখানে আপনার ইমেইল লিখুন" />
                </div>
                <div className="my-2">
                    <p className="text-yellow-400 text-[13px] lg:text-[16px] w-11/12">আপনি যদি কাঙ্ক্ষিত যায়গাটি খুজে না পান অথবা <span className="text-lime-400">রিজার্ভ</span> যেতে চান কল করুন 01906951915 / 01605969098</p>
                    <label className="font-bold" htmlFor="targetplace">আপনি কোথায় থেকে কোথায় যেতে চান</label>
                    <select required onChange={handlePlaceChange} className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="targetplace" name="targetplace">

                        <option value="">এখানে ক্লিক করুন </option>

                        <option value="হোমনা থেকে গোয়ারিভাংঙ্গা">হোমনা থেকে গোয়ারিভাংঙ্গা</option>
                        <option value="গোয়ারিভাংঙ্গা থেকে হোমনা">গোয়ারিভাংঙ্গা থেকে হোমনা</option>
                        <option value="গোয়ারিভাংঙ্গা থেকে বাসটান্ড">গোয়ারিভাংঙ্গা থেকে বাসটান্ড </option>
                        <option value="বাসটান্ড থেকে গোয়ারিভাংঙ্গা">বাসটান্ড থেকে গোয়ারিভাংঙ্গা </option>
                    
                        <option value="দাড়িগাও থেকে হোমনা">দাড়িগাও থেকে হোমনা </option>
                        <option value="দাড়িগাও থেকে হোমনা">দাড়িগাও থেকে হোমনা </option>
                        <option value="হোমনা থেকে গৌরিপুর">হোমনা থেকে গৌরিপুর </option>
                        <option value="হোমনা থেকে গৌরিপুর">গৌরিপুর থেকে হোমনা </option>
                        <option value="হোমনা থেকে বাতাকান্দি">হোমনা থেকে বাতাকান্দি </option>
                        <option value="বাতাকান্দি থেকে হোমনা">বাতাকান্দি থেকে হোমনা </option>
                        <option value="হোমনা থেকে ঘারমোড়া">হোমনা থেকে ঘারমোড়া </option>
                        <option value="ঘারমোড়া থেকে হোমনা">ঘারমোড়া থেকে হোমনা </option>
                        <option value="হোমনা থেকে ঘনিয়ারচড়">হোমনা থেকে ঘনিয়ারচড় </option>
                        <option value="ঘনিয়ারচড় থেকে হোমনা">ঘনিয়ারচড় থেকে হোমনা </option>
                        <option value="হোমনা থেকে পঞ্চবটী">হোমনা থেকে পঞ্চবটী </option>
                        <option value="পঞ্চবটী থেকে হোমনা">পঞ্চবটী থেকে হোমনা </option>
                        <option value="হোমনা থেকে মিশিকারী">হোমনা থেকে মিশিকারী </option>
                        <option value="মিশিকারী থেকে হোমনা">মিশিকারী থেকে হোমনা </option>
                        <option value="হোমনা থেকে কাশিপুর">হোমনা থেকে কাশিপুর </option>
                        <option value="কাশিপুর থেকে হোমনা">কাশিপুর থেকে হোমনা </option>
                        <option value="হোমনা থেকে ওপারচর">হোমনা থেকে ওপারচর </option>
                        <option value="ওপারচর থেকে হোমনা">ওপারচর থেকে হোমনা </option>
                        <option value="ওপারচর থেকে হোমনা">ওপারচর থেকে বাতাকান্দি </option>
                        <option value="ওপারচর থেকে হোমনা">বাতাকান্দি থেকে ওপারচর </option>
                        <option value="ওপারচর থেকে হোমনা">দুলালপুর থেকে ওপারচর </option>
                        <option value="ওপারচর থেকে হোমনা">ওপারচর থেকে দুলালপুর </option>
                        <option value="হোমনা থেকে দুলালপুর">হোমনা থেকে দুলালপুর </option>
                        <option value="দুলালপুর থেকে হোমনা">দুলালপুর থেকে হোমনা </option>                        
                        <option value="হোমনা থেকে শ্রীমুদ্দিঘাট">হোমনা থেকে শ্রীমুদ্দিঘাট </option>
                        <option value="শ্রীমুদ্দিঘাট থেকে হোমনা">শ্রীমুদ্দিঘাট থেকে হোমনা </option>                      
                        <option value="হোমনা থেকে লটিয়া">হোমনা থেকে লটিয়া </option>
                        <option value="লটিয়া থেকে হোমনা">লটিয়া থেকে হোমনা </option>
                        <option value="হোমনা থেকে বাঞ্ছারামপুর">হোমনা থেকে বাঞ্ছারামপুর </option>
                        <option value="বাঞ্ছারামপুর থেকে হোমনা">বাঞ্ছারামপুর থেকে হোমনা </option>
                        <option value="হোমনা থেকে কাচারকান্দি">হোমনা থেকে কাচারকান্দি </option>
                        <option value="কাচারকান্দি থেকে হোমনা">কাচারকান্দি থেকে হোমনা </option>
                        <option value="হোমনা থেকে মঙ্গলকান্দি">হোমনা থেকে মঙ্গলকান্দি </option>
                        <option value="মঙ্গলকান্দি থেকে হোমনা">মঙ্গলকান্দি থেকে হোমনা </option>
                        <option value="হোমনা থেকে মিরাস">হোমনা থেকে মিরাস </option>
                        <option value="মিরাস থেকে হোমনা">মিরাস থেকে হোমনা </option>
                        <option value="হোমনা থেকে নিলুখিলালবাগ">হোমনা থেকে নিলুখিলালবাগ </option>
                        <option value="নিলুখিলালবাগ থেকে হোমনা">নিলুখিলালবাগ থেকে হোমনা </option>
                        <option value="হোমনা থেকে বাবরকান্দি">হোমনা থেকে বাবরকান্দি </option>
                        <option value="বাবরকান্দি থেকে হোমনা">বাবরকান্দি থেকে হোমনা </option>
                        <option value="হোমনা থেকে পায়রাবন্দ">হোমনা থেকে পায়রাবন্দ </option>
                        <option value="পায়রাবন্দ থেকে হোমনা">পায়রাবন্দ থেকে হোমনা </option>
                        <option value="হোমনা থেকে ববানীপুর">হোমনা থেকে ববানীপুর </option>
                        <option value="ববানীপুর থেকে হোমনা">ববানীপুর থেকে হোমনা </option>
                        <option value="সিনাইয়া থেকে মক্তিনাগর/মাইনকাচড়
                        ">সিনাইয়া থেকে মক্তিনাগর/মাইনকাচড়
                         </option>
                        <option value="মক্তিনাগর/মাইনকাচড় থেকে সিনাইয়া 
                        ">মক্তিনাগর/মাইনকাচড় থেকে সিনাইয়া 
                         </option>
                        <option value="হোমনা থেকে মুড়গাচড়">হোমনা থেকে মুড়গাচড় </option>
                        <option value="মুড়গাচড় থেকে হোমনা">মুড়গাচড় থেকে হোমনা </option>
                        <option value="মুড়গাচড় থেকে সিনাইয়া">মুড়গাচড় থেকে সিনাইয়া </option>
                        <option value="সিনাইয়া থেকে মুড়গাচড়">সিনাইয়া থেকে মুড়গাচড় </option>
                        <option value="হোমনা থেকে কালমিনা">হোমনা থেকে কালমিনা </option>
                        <option value="কালমিনা থেকে হোমনা">কালমিনা থেকে হোমনা </option>
                        <option value="হোমনা থেকে কারাকান্দি">হোমনা থেকে কারাকান্দি </option>
                        <option value="কারাকান্দি থেকে হোমনা">কারাকান্দি থেকে হোমনা </option>
                        <option value="হোমনা থেকে আলিপুর">হোমনা থেকে আলিপুর </option>
                        <option value="আলিপুর থেকে হোমনা">আলিপুর থেকে হোমনা </option>
                        <option value="হোমনা থেকে দরিচড়">হোমনা থেকে দরিচড় </option>
                        <option value="দরিচড় থেকে হোমনা">দরিচড় থেকে হোমনা </option>
                        <option value="হোমনা থেকে চড়েগাঁও">হোমনা থেকে চড়েগাঁও </option>
                        <option value="চড়েগাঁও থেকে হোমনা">চড়েগাঁও থেকে হোমনা </option>
                        <option value="হোমনা থেকে কলাকান্দি">হোমনা থেকে কলাকান্দি </option>
                        <option value="কলাকান্দি থেকে হোমনা">কলাকান্দি থেকে হোমনা </option>
                        <option value="হোমনা থেকে কলাগাছিয়া">হোমনা থেকে কলাগাছিয়া </option>
                        <option value="কলাগাছিয়া থেকে হোমনা">কলাগাছিয়া থেকে হোমনা </option>
                        <option value="হোমনা থেকে আসাদপুর">হোমনা থেকে আসাদপুর </option>
                        <option value="আসাদপুর থেকে হোমনা">আসাদপুর থেকে হোমনা </option>                       
                        <option value="হোমনা থেকে বাগমারা">হোমনা থেকে বাগমারা </option>
                        <option value="বাগমারা থেকে হোমনা">বাগমারা থেকে হোমনা </option>                        
                    
                    </select>
                    {nullError && <span className="text-red-500">{nullError}</span>}
                </div>
                <div className="my-2">
                    <label className="font-bold" htmlFor="choosecar">আপনার কোন ধরনের গাড়ি প্রয়োজন</label>
                    <select  onChange={handleCarChange} className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="choosecar" name="choosecar">
                        <option value="auto car">অটো গাড়ি</option>
                        <option value="rikshaw">রিক্সা</option>
                        <option value="cng">সিএনজি</option>
                        <option value="van">ভ্যান</option>
                        <option value="bike">বাইক</option>
                        <option value="cycle">সাইকেল</option>
                        <option value="nosimon car">নসিমন মালবহনকারী গাড়ি </option>
                        <option value="nosimon malbhi car">নসিমন যাত্রীবহনকারী গাড়ি</option>
                        <option value="private car">মাইক্রো গাড়ি</option>
                        <option value="hybrid car">হাইব্রিড গাড়ি</option>
                        <option value="bus">বাস</option>
                        <option value="track">ট্রাক</option>
                        <option value="backu">বেকু</option>
                        <option value="others">অন্যান্য</option>
                    </select>

                </div>

                <div className="flex gap-5">
                    <div className="my-2">
                        <label className="font-bold" htmlFor="my-work">আপনার পেশা</label>
                        <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="my-work" name="my-work">
                            <option value="student">ছাত্র/ছাত্রী </option>
                            <option value="public">সাধারণ যাত্রী</option>
                        </select>
                    </div>
                </div>            
                <div className="my-2 mb-3">
                        <label className="font-bold" htmlFor="public-number">যাত্রী সংখ্যা</label>
                        <input required onChange={handlePublicNumber} className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="public-number" id="public-number" placeholder="যাত্রী সংখ্যা লিখুন" />
                        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                 </div>

                <div className="bg-white  lg:text-xl text-black px-4 rounded py-4">
                    <h3 className="mx-auto  text-center">আপনার হিসাব-নিকাশ</h3>
                    <div className="flex  justify-between">
                        <p className=" ">
                            একজন যাত্রীর ভাড়া
                        </p> <span >{publicPrice} টাকা</span>
                    </div>
                    
                    <div className="flex justify-between">
                        <p>মোট যাত্রীসংখ্যা</p> <span>{totalPassenger} জন</span>
                    </div>
                    <div className="flex justify-between">
                        <p>সার্ভিসজনিত ট্যাক্স/ভ্যাট</p> <span>{taxPrice} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p>অন্যান্য খরচ</p> <span> {othersCost} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p>সর্বমোট খরচ</p>
                        <p className="text-[13px] text-yellow-700">সময় ও পরিস্থিতি ও সার্ভারজনিত কারনে ভিন্ন/ভুল হতে পারে</p>
                         <span className="font-bold"> {totalCost} টাকা</span>
                    </div>
                </div>

                <div className="mx-auto  text-center">
                    <div className='bg-emerald-950 mx-auto text-center  to-yellow-300 mt-5 p-2 rounded-md font-semibold cursor-pointer '>
                        <input className=' lg:w-[350px] text-center mx-auto font-bold text-white cursor-pointer' type="submit" value="সাবমিট করুন" />
                    </div>
                </div>
            </form>

        </div>
    )
}
export default UserStartService;
