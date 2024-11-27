import React from "react";
import { motion } from "framer-motion";
import BackgroundZoom from "./grainyFilter";
const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const grain = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: "100vh",
    opacity:0,
    transition: {
        when: "afterChildren",
        duration:3.75,
        ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
    scale: 1.2,
  },
  animate: {
    y: 80,
    scale:1,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <>
    <motion.div className="fixed top-0 left-0 w-full h-full z-[100] pointer-events-none">
        {/* Grainy Effect */}
        <motion.img
            className="w-full \"
            initial="initial"
            animate="animate"
            variants={grain}
            style={{
                opacity: 0.2, // Adjust grain visibility
            }}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40550ab9-0dde-4376-ae73-77355bb45d73/d37pwfa-82dd8ce8-a772-4e1d-9f03-e355a2aa1722.jpg/v1/fill/w_1024,h_768,q_75,strp/film_texture___grain_explosion_by_stephanepellennec_d37pwfa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNDA1NTBhYjktMGRkZS00Mzc2LWFlNzMtNzczNTViYjQ1ZDczXC9kMzdwd2ZhLTgyZGQ4Y2U4LWE3NzItNGUxZC05ZjAzLWUzNTVhMmFhMTcyMi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SS6BpDtRHP9Z2ROaHftKv8hr6_LhiVjOB8i0WiXuyKw"
        />



        
    </motion.div>
    
    <motion.div
          className="fixed z-50 flex items-center justify-center w-full h-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
      >
          {/* Container for text fade-out effect */}
          <motion.svg variants={textContainer} className="absolute z-50 flex">
              <pattern
                  id="pattern"
                  patternUnits="userSpaceOnUse"
                  width={750}
                  height={800}
                  className="text-white"
              >
                  <rect className="w-full h-full fill-current" />
                  <motion.rect
                      variants={text}
                      className="w-full h-full text-gray-600 fill-current" />
              </pattern>

              {/* Animated text */}
              <text
                  className="text-4xl font-bold"
                  textAnchor="middle"
                  x="50%"
                  y="50%"
                  style={{ fill: "url(#pattern)" }}
              >

                  Kanishka Dhaba
              </text>
          </motion.svg>
      </motion.div>
      </>
  );
};

export default InitialTransition;
