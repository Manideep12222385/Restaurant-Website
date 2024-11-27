
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase Auth imports
import { Otp } from "./Otp";
import axios from "axios"; // Import Axios for making HTTP requests
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "kaishka Dhaba",
    email: "kanishkadhaba78@gmail.com",
    phone: "78422-42865",
    address: "Mayuri Garden Lane, Revenue Colony, near R.E.C. Petrol Pump, Hanamkonda, Telangana 506004",
  });
  const [activeSection, setActiveSection] = useState("orders"); // Sidebar active section
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To check user login status
  const [orderHistory, setOrderHistory] = useState([]); // To store order history
  const [loading, setLoading] = useState(false); // To manage loading state
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  
  const sections = [
    { name: "Orders", id: "orders" },
    { name: "Gift Cards", id: "gift-cards" },
    { name: "Contact Us", id: "contact-us" },
    { name: "Saved Cards", id: "saved-cards" },
    { name: "Logout", id: "logout" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSectionChange = (section) => {
    console.log(section); 
    if (section === "logout") {
      const auth = getAuth();
      auth.signOut()
      .then(() => {
        toast.warning("You have been logged out.", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored", // Options: "light", "dark", "colored"
        });
        setIsLoggedIn(false);
      })      
        .catch((error) => alert("Error logging out: " + error.message));
    } else {
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserDetails((prevDetails) => ({
          ...prevDetails,
          name: user.displayName || "User",
          email: user.email,
        }));
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch order history from API
  const fetchOrderHistory = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/cart-history/${userId}`);
      setOrderHistory(response.data);
    } catch (error) {
      console.error("Error fetching order history:", error);
      alert("Failed to fetch order history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        fetchOrderHistory(user.uid); // Fetch order history when logged in
      }
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Otp />; // Render Login component if user is not logged in
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-64  text-white p-6 flex flex-col space-y-6"
      >
        <h2 className="text-2xl font-bold">User Dashboard</h2>
        <nav className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg text-black ${
                activeSection === section.id
                  ? "bg-red-500 text-white-600 font-bold"
                  : "hover:bg-red-500"  
              }`}
            >
              {section.name}
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6 text-black">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl text-upper font-bold text-red-600 mb-2">
            {activeSection}
          </h1>
          
          <p className="text-gray-600 m-50px">

            {activeSection === "orders"
              ? "View your order history and manage orders."
              : activeSection === "gift-cards"
              ? "Manage your gift cards and redeem codes."
              : activeSection === "contact-us"
              ? "Reach out to us for any assistance."
              : activeSection === "saved-cards"
              ? "View and manage your saved payment methods."
              : ""}
          </p>
        </motion.div>

        {/* Dynamic Section Content */}
        {activeSection === "orders" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="space-y-4"
  >
    {loading ? (
      <Skeleton height={40} />
    ) : (
        orderHistory.map((order) => (
          <div key={order._id} className="p-6 bg-white rounded-lg shadow-md space-y-4">
            <p className="text-xl font-semibold">Order ID: {order._id}</p>
            <p className="text-gray-600">Order Date: {new Date(order._id).toLocaleDateString()}</p>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item._id} className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500">{item.description}</p>
                          <p className="text-red-600 font-bold">₹{item.price}</p>
                          <p className="text-gray-500">Quantity: {item.quantity}</p>
                          
                        </div>
                        <p className="text-green-400 mt-15px ">Deliverd</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </motion.div>
        )}


        {activeSection === "Gift Cards" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-gray-100 rounded-lg shadow text-black"
          >
            <p>No gift cards available. Add or redeem a gift card code.</p>
          </motion.div>
        )}

        {activeSection === "Contact Us" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-gray-100 rounded-lg shadow"
          >
            <p>Email: kanishkadhaba78@gmail.com</p>
            <p>Phone: +91 78422-42865</p>
            <p>Address: Mayuri Garden Lane, Revenue Colony, near R.E.C. Petrol Pump, Hanamkonda, Telangana 506004</p>
          </motion.div>
        )}

        {activeSection === "Saved Cards" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-gray-100 rounded-lg shadow"
          >
            <p>No saved cards available. Add a payment method.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
