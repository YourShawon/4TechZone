"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          className="text-6xl flex items-start font-bold mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-[#0C6980]"
            animate={{
              color: ["#0C6980", "#038EA7", "#0C6980"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            4
          </motion.p>
          <div className="flex flex-col items-center">
            <span className="flex text-2xl items-center">
              <p className="text-black">Tech</p>
              <motion.p
                className="text-[#038EA7]"
                animate={{
                  color: ["#038EA7", "#0C6980", "#038EA7"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                zone
              </motion.p>
            </span>
            <span className="text-[13px] text-gray-400 font-medium">
              Software Agency
            </span>
          </div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex space-x-2"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              variants={circleVariants}
              transition={circleTransition}
            />
          ))}
        </motion.div>

        <motion.p
          className="mt-4 text-gray-600 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading amazing experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
