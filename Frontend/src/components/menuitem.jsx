// import React, { useEffect, useState } from "react";
// import CartButton from "./menucart";
// import { motion,useInView } from "framer-motion";
// import styles from './GroceryDetails.module.css';

// const GroceryItem = ({ name, description, price, image, category, _id }) => {
//   const item = { name, description, price, image, category, _id };
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Animation variants
//   const photo = {
//     hidden: { opacity: 0, scale: 0.8, filter: "blur(5px)" },
//     visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
//   };
//   const desp={
//     hidden:{opacity:0, x:-150},
//     visible:{opacity:1 ,x:0,},
//   }

//   useEffect(() => {
//     const loadTimer = setTimeout(() => {
//       setIsLoaded(true); 
//     }, 600); 
//     return () => clearTimeout(loadTimer); 
//   }, []);

//   return (
//     <motion.div
//       initial="hidden"  
//       animate="visible" 
//       transition={{ staggerChildren: 0.5, duration: 0.9, type: "spring", delay: 0.6 }} // Adding staggerChildren and delay
//       className={styles.grocery}
//     >
//       <div className="upper" >
//         <motion.img
//           variants={photo}
//           style={{ width: "auto", height: "350px", borderRadius: "15px",zIndex:1 }}
//           src={image}
//           alt={name}
//         />
//       </div>
//       <motion.p 
//       style={{ fontWeight: 600, fontSize: '25px' }}
//       variants={desp}
//       >{name}</motion.p>
//       <div className="price-div">
//         <div style={{ display: "flex", flexDirection: "column", marginTop: "2px" }}>
//           <motion.p style={{ fontWeight: '400' }} variants={desp}>₹ {price}</motion.p>
//           <motion.p variants={desp}>{description}</motion.p>
//         </div>
//       </div>
//       <CartButton item={item} />
//     </motion.div>
//   );
// };

// export default GroceryItem;
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton"; // Import skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Skeleton styles

import CartButton2, { CartButton1,CartButton } from "./menucart";
import { motion } from "framer-motion";
import styles from './GroceryDetails.module.css';

const GroceryItem = ({ name, description, price, image, category, _id }) => {
  const item = { name, description, price, image, category, _id };
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation variants
  const photo = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(5px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  };
  const desp = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true); 
    }, 0); // Simulate a loading delay
    return () => clearTimeout(loadTimer); 
  }, []);


  return (
    <motion.div
      initial="hidden"  
      animate="visible" 
      transition={{ staggerChildren: 0.5, duration: 0.9, type: "spring", delay: 0.6 }} 
      className={styles.grocery}
    >
      <div className="upper">
        <motion.img
          variants={photo}
          style={{ width: "auto", height: "350px", borderRadius: "15px", zIndex: 1 }}
          src={image}
          alt={name}
        />
      </div>
      <motion.p 
        style={{ fontWeight: 600, fontSize: '25px' }}
        variants={desp}
      >
       {name}
      </motion.p>
      <div className="price-div">
        <div style={{ display: "flex", flexDirection: "column", marginTop: "2px" }}>
          <motion.p style={{ fontWeight: '400' }} variants={desp}>
            {isLoaded ? (
              `₹ ${price}`
            ) : (
              <Skeleton height={20} width={"40%"} style={{ marginBottom: "0.5rem" }} />
            )}
          </motion.p>
          <motion.p variants={desp}>
            {isLoaded ? (
              description
            ) : (
              <Skeleton height={20} width={"80%"} />
            )}
          </motion.p>
        </div>
      </div>
      {/* {isLoaded ? (
        <CartButton item={item} />
      ) : (
        <Skeleton height={40} width={"100%"} style={{ marginTop: "1rem" }} />
      )} */}
      {/* <CartButton item={item} />
      <CartButton1 item={item} /> */}
      <CartButton2 item={item} />
    </motion.div>
  );
};

export default GroceryItem;
