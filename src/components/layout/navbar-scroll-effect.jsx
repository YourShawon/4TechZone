"use client";

import useVerticalWindowScroll from "@/hooks/useVerticalWindowScroll";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const NavbarScrollEffect = ({ children }) => {
  const [scrolledOnTop, setScrolledOnTop] = React.useState(true);
  const [scrollY] = useVerticalWindowScroll();

  useEffect(() => {
    if (scrollY === 0) {
      setScrolledOnTop(true);
    } else {
      setScrolledOnTop(false);
    }
  }, [scrollY]);

  return (
    <motion.div
      className="fixed w-full z-[1000]"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolledOnTop
          ? "rgba(255, 255, 255, 0)"
          : "rgba(255, 255, 255, 0.95)",
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      style={{
        backdropFilter: scrolledOnTop ? "none" : "blur(10px)",
        boxShadow: scrolledOnTop
          ? "none"
          : "0px 5px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.05)",
      }}
    >
      {children}
    </motion.div>
  );
};

export default NavbarScrollEffect;
