import React from "react";
import { motion,useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./PageWrapper.css"; 

// // Curtain animation variants
// const curtainVariants = {
//   initial: { x: 0 }, // Initial state for the curtain
//   enterLeft: { x: "100%",transition:{duration:0.6} }, // Curtain comes to the center
//   enterRight:{x:"100%",transition:{duration:0.6} },
//   exitLeft: { x: "-100%",transition:{duration:0.6}  }, // Left curtain exits left
//   exitRight: { x: "100%", transition:{duration:0.6} } // Right curtain exits right
// };

// const PageWrapper = ({ children }) => (
//   <div className="page-wrapper">
    
//     <motion.div
//       className="curtain left-curtain"
//       initial="initial"
//       animate="enter"
//       exit="exitLeft"
//       variants={curtainVariants}
      
//     />

   
//     <motion.div
//       className="curtain right-curtain"
//       initial="initial"
//       animate="enter"
//       exit="exitRight"
//       variants={curtainVariants}
//     />
    {/* <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    /> */}
//     <div className="page-content">
//       {children}
//     </div>
    
//   </div>
  
// );

// export default PageWrapper;


const curtainVariants = {
  initial: { x: 0 },
  openLeft: { x: "-100%" },
  openRight: { x: "100%" },
  closeLeft: { x: "-100%" },
  closeRight: { x: "100%" },
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const controls = useAnimation();

  React.useEffect(() => {
    // Trigger the curtain animation on route change
    if (location.pathname !== "/") {
      controls.start("openLeft");
      controls.start("openRight");
    } else {
      controls.start("closeLeft");
      controls.start("closeRight");
    }
  }, [location, controls]);

  return (
    <div className="page-wrapper">
      <motion.div
        className="curtain left-curtain"
        variants={curtainVariants}
        initial="initial"
        animate={controls}
      />
      <motion.div
        className="curtain right-curtain"
        variants={curtainVariants}
        initial="initial"
        animate={controls}
      />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageWrapper;