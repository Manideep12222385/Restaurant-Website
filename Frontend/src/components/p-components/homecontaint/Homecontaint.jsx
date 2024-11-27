import React from "react";
import { motion } from "framer-motion";
import Welcome from "../welcome/Welcome";
import Browsecat from "../browscat/Browsecat";
import Directtodeal from "../Onemoreblack/Directtodeal";
import Slider from "../slider/Slider";
import InitialTransition
 from "../../../animations/intialTransition";
const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

const title = {
  initial: { y: -20, opacity: 0, filter: "blur(5px)"},
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
    filter: "blur(0px)"
  },
};

const products = {
  initial: { y: -20, opacity: 0,filter: "blur(5px)" },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
    filter: "blur(0px)"
  },
};

const Homecontaint = () => {
  return (
    
    <>
    <InitialTransition />
    
    <motion.section
      exit={{ opacity: 0 }}
      className="z-0"
    >
      {/* Ensure InitialTransition component exists and the import path is correct */}

      <motion.div
        initial="initial"
        animate="animate"
        variants={content}
        className="space-y-12"
      >



        <motion.div variants={title}>
          <Slider />
        </motion.div>

        <motion.div variants={title}>
          <Welcome />
        </motion.div>

        <motion.section variants={products}>
          <Browsecat />
        </motion.section>

        <motion.section variants={products}>
          <Directtodeal />
        </motion.section>
      </motion.div>
    </motion.section></>
    
  );
};

export default Homecontaint;
