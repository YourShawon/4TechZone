"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageOne from "../../public/integration-image/zapier.png";

const IntegrationItems = ({ Intragrationparts, index }) => {
  return (
    <motion.div
      className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30, rotateY: -15 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateY: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.05,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
    >
      <div className="px-[20px] py-[25px]">
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={Intragrationparts.image}
            width={50}
            height={50}
            className="m-auto"
            alt={`${Intragrationparts.name} integration`}
          />
        </motion.div>
        <motion.h6
          className="text-[17px] leading-[34px] mt-[18px] font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }}
          viewport={{ once: true }}
        >
          {Intragrationparts.name}
        </motion.h6>
      </div>
    </motion.div>
  );
};

export default IntegrationItems;
