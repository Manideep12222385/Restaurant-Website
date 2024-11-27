// import React from "react";
// import "./deals.css";
// import Navbar from "../../p-components/navbar/Navbar";
// export const Deals = () => {
//   return (
//     <>
//     <div className="address">
//       <div className="banner">
//         <div className="deals-image-text">DEALS & OFFERS</div>
//       </div>

//       <div className="stripes">
//         <img
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
//           alt="" />
//       </div>

//       <h1 className="offertitle">OFFERS FOR YOU</h1>

//       <div className="card">
//         <img
//           src="   https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="offers-menu-product-image"
//           alt="offer" />
//         <h4 className="offers-deals-product-title">1 Double ka meetha...</h4>
//         <h5 className="offers-deals-product-desc">
//           1 Pc Double ka meetha on a single peace biryani.
//         </h5>
//         <div className="hotncrispydiv">
//           <button className="view-details-btn">View Details</button>
//           <button className="redeem-btn">Redeem</button>
//         </div>
//       </div>
//     </div></>
//   );
// };
// import React, { useEffect, useState } from "react";
// import "./deals.css";

// export const Deals = () => {
//   const [deals, setDeals] = useState([]); // State to store deals
//   const [loading, setLoading] = useState(true); // State to manage loading
//   const apiUrl = process.env.REACT_APP_BACKEND_URL;

//   // Fetch deals from backend API
//   // useEffect(() => {
//   //   const fetchDeals = async () => {
//   //     try {
//   //       const response = await fetch(`${apiUrl}/api/deals`);
//   //       const data = await response.json();
//   //       setDeals(data); // Update state with fetched data
//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error("Error fetching deals:", error);
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchDeals();
//   // }, []);
//   useEffect(() => {
//     const fetchDeals = async () => {
//       console.log("Fetching deals...");
//       try {
//         const response = await fetch("http://localhost:5000/api/deals");
//         console.log("Raw Response:", response);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Parsed Data:", data);
//         setDeals(data); // Update state with fetched data
//       } catch (error) {
//         console.error("Error in fetchDeals:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchDeals();
//   }, []);
  

//   return (
//     <>
     
//       <div className="address">
//         <div className="banner">
//           <div className="deals-image-text">DEALS & OFFERS</div>
//         </div>

//         <div className="stripes">
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
//             alt=""
//           />
//         </div>

//         <h1 className="offertitle">OFFERS FOR YOU</h1>

//         <div className="deals-container">
//           {loading ? (
//             <p>Loading deals...</p>
//           ) : deals.length > 0 ? (
//             deals.map((deal) => (
//               <div className="card" key={deal._id}>
//                 <img
//                   src={deal.image}
//                   className="offers-menu-product-image"
//                   alt={deal.heading}
//                 />
//                 <h4 className="offers-deals-product-title">{deal.heading}</h4>
//                 <h5 className="offers-deals-product-desc">
//                   {deal.description}
//                 </h5>
//                 <div className="hotncrispydiv">
//                   <button className="view-details-btn">View Details</button>
//                   <button className="redeem-btn">Redeem</button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No deals available at the moment.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
import React, { useEffect, useState } from "react";
import "./deals.css";
import CardSkeleton from "../skeletonLoading/cardSkeleton";
const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const Deals = () => {
  const [deals, setDeals] = useState([]); // State to store deals
  const [loading, setLoading] = useState(true); // State to manage loading
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/deals`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data } = await response.json(); // Extract data from response
        setDeals(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching deals:", error);
      } finally {
        // Add a delay before stopping the loading animation
        setTimeout(() => {
          setLoading(false);
        }, 2000); // 2-second delay
      }
    };
  
    fetchDeals();
  }, []);
  

  return (
    <div className="address">
      <div className="banner">
        <div className="deals-image-text">DEALS & OFFERS</div>
      </div>

      <div className="stripes">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>

      <h1 className="offertitle">OFFERS FOR YOU</h1>

      <div className="deals-container">
        {loading ? (
          <p className="loadingContainer"> <CardSkeleton cards={4}/></p>
        ) : deals.length > 0 ? (
          deals.map((deal) => (
            <div className="card" key={deal._id}>
              <img
                src={deal.image}
                className="offers-menu-product-image"
                alt={deal.heading}
              />
              <h4 className="offers-deals-product-title">{deal.heading}</h4>
              <h5 className="offers-deals-product-desc">
                {deal.description}
              </h5>
              {deal.discount > 0 && (
                <p className="offer-discount">Discount: {deal.discount}%</p>
              )}
              {deal.expirationDate && (
                <p className="offer-expiration">
                  Expires on: {new Date(deal.expirationDate).toLocaleDateString()}
                </p>
              )}
              <div className="hotncrispydiv">
                <button className="view-details-btn">View Details</button>
                <button className="redeem-btn">Redeem</button>
              </div>
            </div>
          ))
        ) : (
          <p>No deals available at the moment.</p>
        )}
      </div>
    </div>
  );
};
