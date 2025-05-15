import React from "react";
import { Button } from "./ui/button";
import Container from "./container";

const Hero = () => {
  return (
    <section
      id="hero-1"
      className="relative bg-cover bg-center bg-no-repeat pt-32 pb-24"
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          {/* HERO TEXT */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="animate-fade-in-right">
              {/* Title */}
              <h2 className="text-4xl font-jakarta-sans md:text-5xl font-bold mb-6 text-gray-900">
                Unleash your business with our smart solutions
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Mauris donec turpis suscipit sapien primis sapien sagittis
                tempor a volute ligula undo aliquet tortor
              </p>
              <Button asChild>
                <a
                  href="#features-10"
                  className="rounded-md bg-blue-600 hover:bg-black text-white px-6 py-3 text-base font-semibold transition-colors duration-200"
                >
                  Our Core Services
                </a>
              </Button>
              {/* Rating */}
              <div className="flex items-center mt-8 space-x-2">
                {/* Stars */}
                <div className="flex text-yellow-400 text-xl">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-yellow-300">☆</span>
                </div>
                <small className="text-gray-600 ml-2">
                  4.84/5 (Based on 7,296 reviews)
                </small>
              </div>
            </div>
          </div>
          {/* HERO IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="animate-fade-in-left">
              <img
                className="max-w-xs md:max-w-md rounded-xl shadow-lg"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
