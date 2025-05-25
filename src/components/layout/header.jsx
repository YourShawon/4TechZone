"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarScrollEffect from "./navbar-scroll-effect";
import { Button } from "../ui/button";
import Container from "../container";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#works", label: "Works" },
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div className="" initial="hidden" animate="visible">
      <NavbarScrollEffect>
        <Container>
          <nav className="flex items-center justify-between px-4 py-3">
            <motion.a
              href="/"
              className="flex items-center"
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-6xl flex items-start text-[#0C6980] font-bold">
                <motion.p
                  animate={{
                    color: ["#0C6980", "#038EA7", "#0C6980"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  4
                </motion.p>
                <div className="flex flex-col items-center ">
                  <span className="flex text-2xl items-center">
                    <p className="text-black">Tech</p>
                    <motion.p
                      className="text-[#038EA7]"
                      animate={{
                        color: ["#038EA7", "#0C6980", "#038EA7"],
                      }}
                      transition={{
                        duration: 3,
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
              </div>
            </motion.a>

            <motion.button
              className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>

            {/* Desktop Menu */}
            <motion.ul
              className="hidden md:flex items-center space-x-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {menuItems.map((item, index) => (
                <motion.li key={item.href} variants={menuItemVariants}>
                  <motion.a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Contact Us button outside menu on desktop */}
            <motion.div
              className="hidden md:block ml-4"
              variants={menuItemVariants}
            >
              <Button asChild>
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="md:hidden bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 shadow-lg rounded-b-xl border border-gray-100"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.ul
                  variants={{
                    visible: {
                      transition: {
                        delayChildren: 0.1,
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <motion.a
                        href={item.href}
                        className="block py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg px-3 hover:bg-gray-50"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Button asChild>
                      <motion.a
                        href="/contact"
                        className="mt-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setMenuOpen(false)}
                      >
                        Contact Us
                      </motion.a>
                    </Button>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </NavbarScrollEffect>
    </motion.div>
  );
};

export default Header;
