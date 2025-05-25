"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./container";
import Items from "./Items";

import Branding from "../../public/image.png";

const CompleteItems = [
  {
    id: 1,
    name: "Branding Services",
    description:
      "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Branding,
  },
  {
    id: 2,
    name: "Market Research",
    description:
      "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Branding,
  },
  {
    id: 3,
    name: "Content Creation",
    description:
      "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Branding,
  },
  {
    id: 4,
    name: "e-Commerce Solutions",
    description:
      "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Branding,
  },
  {
    id: 5,
    name: "Competitor Analysis",
    description:
      "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Branding,
  },
  {
    id: 6,
    name: "SEO & SMM Services",
    description:
      "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Branding,
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      y: 30,
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20"
    >
      <Container>
        <motion.div variants={titleVariants} className="text-center mb-16">
          <motion.h2
            className="lg:text-[60px] font-jakarta-sans font-bold md:text-[32px] sm:text-[26px] text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            The Complete Solutions
          </motion.h2>
          <motion.p
            className="text-center pt-[22px] text-[22px] pb-[80px] text-gray-600"
            variants={titleVariants}
          >
            Ligula risus auctor tempus magna feugiat lacinia fusce blandit
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 grid-cols-1 gap-[30px] justify-center"
          variants={containerVariants}
        >
          {CompleteItems?.map((CompItmes, index) => {
            return (
              <motion.div
                key={CompItmes.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Items CompItmes={CompItmes} index={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default FeaturesSection;
