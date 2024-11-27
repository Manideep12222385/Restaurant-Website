
// <motion.div
//   className="absolute z-50 flex items-center justify-center w-full bg-black"
//   initial="initial"
//   animate="animate"
//   variants={blackBox}
// >
// 	<motion.svg className="absolute z-50 flex">
// 	  <pattern
// 	    id="pattern"
// 	    patternUnits="userSpaceOnUse"
// 	    width={750}
// 	    height={800}
// 	    className="text-white"
// 	  >
// 	    <rect className="w-full h-full fill-current" />
// 	    <motion.rect className="w-full h-full text-gray-600 fill-current" />
// 	  </pattern>
// 	  <text
// 	    className="text-4xl font-bold"
// 	    text-anchor="middle"
// 	    x="50%"
// 	    y="50%"
// 	    style={{ fill: "url(#pattern)" }}
// 	  >
// 	    tailstore
// 	  </text>
// 	</svg>
// </motion.svg>|
// const blackBox = {
//     initial: {
//       height: "100vh",
//       bottom: 0,
//     },
//     animate: {
//       height: 0,
//       transition: {
//         when: "afterChildren",
//         duration: 1.5,
//         ease: [0.87, 0, 0.13, 1],
//       },
//     },
//   };

// const textContainer = {
//     initial: {
//       opacity: 1,
//     },
//     animate: {
//       opacity: 0,
//       transition: {
//         duration: 0.25,
//         when: "afterChildren",
//       },
//     },
//   };
  
//   <motion.svg variants={textContainer} className="absolute z-50 flex"></motion.svg>

  
// const text = {
//     initial: {
//       y: 40,
//     },
//     animate: {
//       y: 80,
//       transition: {
//         duration: 1.5,
//         ease: [0.87, 0, 0.13, 1],
//       },
//     },
//   };
  
//   <motion.rect    variants={text}    className="w-full h-full text-gray-600 fill-current"/>;

// <motion.div
//   className="absolute z-50 flex items-center justify-center w-full bg-black"
//   initial="initial"
//   animate="animate"
//   variants={blackBox}
//   onAnimationStart={() => document.body.classList.add("overflow-hidden")}
//   onAnimationComplete={() =>
//     document.body.classList.remove("overflow-hidden")
//   }
// > 
// </motion.div>


// const content = {
//     animate: {
//       transition: { staggerChildren: 0.1, delayChildren: 2.8 },
//     },
//   };
  
//   const title = {
//     initial: { y: -20, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };
  
//   const products = {
//     initial: { y: -20, opacity: 0 },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.7,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };
  
//   export default function IndexPage() {
//     return (
//       <motion.section exit={{ opacity: 0 }}>
//         <InitialTransition />
  
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={content}
//           className="space-y-12"
//         >
//           <motion.h1 variants={title} className="text-6xl font-black text-center">
//             Welcome to tailstore!
//           </motion.h1>
  
//           <motion.section variants={products} className="text-gray-700 body-font">
//           </motion.section>
//         </motion.div>
//       </motion.section>
//     );
//   }

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const useAnimations = () => {
  const blackBoxAnimation = useAnimation();
  const textRevealAnimation = useAnimation();
  const staggeredAnimation = useAnimation();

  useEffect(() => {
    // Trigger black box animation on page load or route change
    blackBoxAnimation.start({
      height: '100vh',
      bottom: 0,
      transition: { duration: 1.5, ease: [0.87, 0, 0.13, 1] },
    });

    // Trigger text reveal animation after a delay
    setTimeout(() => {
      textRevealAnimation.start({
        opacity: 1,
        transition: { duration: 0.25, delay: 1.5 },
      });
    }, 1000);

    // Trigger staggered animation for multiple elements
    staggeredAnimation.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], staggerChildren: 0.1, delayChildren: 2.8 },
    });
  }, []);

  return {
    blackBoxAnimation,
    textRevealAnimation,
    staggeredAnimation,
  };
};

export default useAnimations;