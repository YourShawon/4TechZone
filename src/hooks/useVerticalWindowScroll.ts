"use client";

import { useState, useEffect, useCallback } from "react";

export default function useVerticalWindowScroll() {
  const [scrollY, setScrollY] = useState(0);

  const scrollTo = useCallback((y: number) => {
    window.scrollTo(0, y);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return [scrollY, scrollTo];
}
