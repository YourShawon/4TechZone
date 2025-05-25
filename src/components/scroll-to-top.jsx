"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            x: -100,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronUpIcon className="w-6 h-6" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
