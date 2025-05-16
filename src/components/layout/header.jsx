'use client'
import React, { useState } from "react";
import NavbarScrollEffect from "./navbar-scroll-effect";
import { Button } from "../ui/button";
import Container from "../container";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <NavbarScrollEffect>
        <Container>
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center">
              <div className="text-6xl flex items-start text-[#0C6980] font-bold">
                <p>4</p>
                <div className="flex flex-col items-center ">
                  <span className="flex text-2xl items-center">
                    <p className="text-black">Tech</p>
                    <p className="text-[#038EA7]">zone</p>
                  </span>
                  <span className="text-[13px] text-gray-400 font-medium">Software Agency</span>
                </div>
              </div>

            </a>

            <button
              className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {/* Menu */}
            <ul className="hidden md:flex items-center space-x-6">
              <li><a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a></li>
              <li><a href="#works" className="text-gray-700 hover:text-blue-600 font-medium">works</a></li>
            </ul>
            {/* Contact Us button outside menu on desktop */}
            <div className="hidden md:block ml-4">
              <Button asChild>
                <a href="">contact us</a>
              </Button>
            </div>
          </nav>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white/95 px-4 pt-2 pb-4 shadow rounded-b">
              <ul>
                <li><a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a></li>
                <li><a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a></li>
                <li><a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a></li>
                <li><a href="#works" className="block py-2 text-gray-700 hover:text-blue-600">works</a></li>
                <li><Button asChild>
                  <a href="">contact us</a>
                </Button></li>
              </ul>
            </div>
          )}
        </Container>
      </NavbarScrollEffect>

    </div>

  );
};

export default Header;
