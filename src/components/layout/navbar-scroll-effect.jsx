"use client";

import useVerticalWindowScroll from "@/hooks/useVerticalWindowScroll";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "fixed w-full z-[1000]",
        scrolledOnTop
          ? "bg-transparent transition-colors duration-400 ease-in-out"
          : "bg-dark-1 transition-colors duration-400 ease-in-out shadow-[0px_5px_5px_-5px_rgba(200,_200,_200,_0.5),_0_5px_10px_-5px_rgba(180,_180,_180,_0.5)]"
      )}
    >
      {children}
    </div>
  );
};

export default NavbarScrollEffect;
