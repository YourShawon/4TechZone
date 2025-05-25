"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import itemsImage from "../../public/image.png";

const Items = ({ CompItmes, index }) => {
  return (
    <motion.div
      className="flex items-start gap-[30px] p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
          <Image
            src={CompItmes.icon}
            width={60}
            height={60}
            alt="Service Icon"
            className="filter brightness-0 invert"
          />
        </div>
      </motion.div>
      <div className="flex-1">
        <motion.h3
          className="font-bold pb-[12px] md:text-[26px] text-[18px] text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {CompItmes.name}
        </motion.h3>
        <motion.p
          className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {CompItmes.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Items;
