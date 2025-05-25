"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Container from "./container";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: {
      x: -60,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: {
      x: 60,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero-1"
      className="relative bg-cover bg-center bg-no-repeat pt-32 pb-24 overflow-hidden"
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
      }}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <Container>
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* HERO TEXT */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div variants={fadeInRight}>
              {/* Title */}
              <motion.h2
                className="text-4xl font-jakarta-sans md:text-5xl font-bold mb-6 text-gray-900"
                variants={fadeInUp}
              >
                Unleash your business with our{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  smart solutions
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-700 mb-8"
                variants={fadeInUp}
              >
                Mauris donec turpis suscipit sapien primis sapien sagittis
                tempor a volute ligula undo aliquet tortor
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button asChild>
                  <motion.a
                    href="#features-10"
                    className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Core Services
                  </motion.a>
                </Button>
              </motion.div>

              {/* Rating */}
              <motion.div
                className="flex items-center mt-8 space-x-2"
                variants={fadeInUp}
              >
                {/* Stars */}
                <motion.div
                  className="flex text-yellow-400 text-xl"
                  initial="hidden"
                  animate="visible"
                >
                  {[1, 2, 3, 4].map((star) => (
                    <motion.span
                      key={star}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 1 + star * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      ★
                    </motion.span>
                  ))}
                  <motion.span
                    className="text-yellow-300"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 1.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    ☆
                  </motion.span>
                </motion.div>
                <motion.small
                  className="text-gray-600 ml-2"
                  variants={fadeInUp}
                >
                  4.84/5 (Based on 7,296 reviews)
                </motion.small>
              </motion.div>
            </motion.div>
          </div>

          {/* HERO IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div variants={fadeInLeft}>
              <motion.img
                className="max-w-xs md:max-w-md rounded-xl shadow-lg"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="hero-image"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
