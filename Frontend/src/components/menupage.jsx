import React, { useEffect, useRef, useState } from "react";
import CartButton from "./menucart";
import GroceryItem from "./menuitem";
import Sidebar from "./sidebar";
import styles from "./GroceryDetails.module.css";
import { motion } from "framer-motion";
import CardSkeleton from "./surya_ components/skeletonLoading/cardSkeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GroceryDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCategories, setVisibleCategories] = useState({});
  const [delayedItems, setDelayedItems] = useState({});
  const apiUrl = process.env.REACT_APP_BACKEND_URL;

  const categoryRefs = useRef({});

  const cat_heading = {
    hidden: { opacity: 0, x: -50, filter: "blur(5px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  };

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/items`);
        if (!response.ok) throw new Error("Failed to fetch menu data");

        const result = await response.json();
        // Simulate a delay for loading state
        setTimeout(() => {
          setData(result.data); // Expecting 'data' as an array of category groups
          setLoading(false);
        }, 0);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Scroll to selected category
  useEffect(() => {
    if (selectedCategory && categoryRefs.current[selectedCategory]) {
      categoryRefs.current[selectedCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedCategory]);

  // Lazy load categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCategories((prev) => ({
              ...prev,
              [entry.target.dataset.category]: true,
            }));

            // Delay the display of items for the category
            setTimeout(() => {
              setDelayedItems((prev) => ({
                ...prev,
                [entry.target.dataset.category]: true,
              }));
            }, 1500); // 1-second delay
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px" } // Load before fully visible
    );

    Object.keys(categoryRefs.current).forEach((categoryId) => {
      if (categoryRefs.current[categoryId]) {
        observer.observe(categoryRefs.current[categoryId]);
      }
    });

    return () => {
      Object.keys(categoryRefs.current).forEach((categoryId) => {
        if (categoryRefs.current[categoryId]) {
          observer.unobserve(categoryRefs.current[categoryId]);
        }
      });
    };
  }, [data]);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Sidebar onCategorySelect={setSelectedCategory} className={styles.side} />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.6, duration: 0.3, delay: 0.6 }}
      >
        <div className={styles.container}>
          {data.map((categoryGroup) => (
            <div
              key={categoryGroup._id}
              ref={(el) => (categoryRefs.current[categoryGroup._id] = el)}
              data-category={categoryGroup._id}
              className={styles.categorySection}
            >
              <motion.h2
                className={styles.categoryHeading}
                variants={cat_heading}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {categoryGroup._id}
              </motion.h2>

              {visibleCategories[categoryGroup._id] ? (
                categoryGroup.items.map((item) => (
                  <div key={item._id || item.id} className={styles.categoryItem}>
                    {delayedItems[categoryGroup._id] ? (
                      <GroceryItem {...item} />
                    ) : (
                      <CardSkeleton cards={1} />
                    )}
                  </div>
                ))
              ) : (
                <CardSkeleton cards={1} />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default GroceryDetails;


// import React, { useEffect, useRef, useState } from "react";
// import CartButton from "./menucart";
// import GroceryItem from "./menuitem";
// import Sidebar from "./sidebar";
// import styles from "./GroceryDetails.module.css";
// import Navbar from "./p-components/navbar/Navbar";
// import { motion, spring } from "framer-motion";
// import CardSkeleton from "./surya_ components/skeletonLoading/cardSkeleton";

// const GroceryDetails = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [visibleCategories, setVisibleCategories] = useState({});
//   const apiUrl = process.env.REACT_APP_BACKEND_URL;

//   const cat_heading = {
//     hidden: { opacity: 0, x: -50, filter: "blur(5px)" },
//     visible: { opacity: 1, x: 0, filter: "blur(0px)" },
//   };

//   const categoryRefs = useRef({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/api/items`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu data");
//         }
//         const result = await response.json();
  
//         // Simulate a delay
//         setTimeout(() => {
//           setData(result.data); // Expecting 'data' as an array of category groups
//           setLoading(false);
//         }, 2000); // 2-second delay
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   useEffect(() => {
//     if (selectedCategory && categoryRefs.current[selectedCategory]) {
//       categoryRefs.current[selectedCategory].scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [selectedCategory]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleCategories((prev) => ({
//               ...prev,
//               [entry.target.dataset.category]: true,
//             }));
//           }
//         });
//       },
//       { rootMargin: "0px 0px 200px 0px" }
//     );

//     Object.keys(categoryRefs.current).forEach((categoryId) => {
//       if (categoryRefs.current[categoryId]) {
//         observer.observe(categoryRefs.current[categoryId]);
//       }
//     });

//     return () => {
//       Object.keys(categoryRefs.current).forEach((categoryId) => {
//         if (categoryRefs.current[categoryId]) {
//           observer.unobserve(categoryRefs.current[categoryId]);
//         }
//       });
//     };
//   }, [data]);

//   if (loading) {
//     return (
//       <div className={styles.skeletonContainer}>
//         <CardSkeleton cards={8} /> {/* Show skeleton loading */}
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <>
//       <Sidebar onCategorySelect={setSelectedCategory} className={styles.side} />
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         transition={{ staggerChildren: 0.6, duration: 0.3, delay: 0.6 }}
//       >
//         <div className={styles.container}>
//           {data.map((categoryGroup) => (
//             <div
//               key={categoryGroup._id}
//               ref={(el) => (categoryRefs.current[categoryGroup._id] = el)}
//               data-category={categoryGroup._id}
//               className={styles.categorySection}
//             >
//               <motion.h2
//                 className={styles.categoryHeading}
//                 variants={cat_heading}
//                 transition={{ duration: 0.6, ease: "easeInOut", type: spring }}
//               >
//                 {categoryGroup._id}
//               </motion.h2>
//               {visibleCategories[categoryGroup._id] &&
//                 categoryGroup.items.map((item) => (
//                   <div
//                     key={item._id || item.id}
//                     className={styles.categoryItem}
//                     style={{
//                       boxShadow: "10px 10px 19px rgba(0, 0, 0, 0.3)",
//                       margin: "20px",
//                       borderRadius: "35px",
//                       padding: "20px",
//                       width: "380px",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <GroceryItem {...item} />
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default GroceryDetails;
