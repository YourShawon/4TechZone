"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GithubIcon from "@/svg/GithubIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import MediumIcon from "@/svg/MediumIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import YoutubeIcon from "@/svg/YoutubeIcon";
import { EggFried } from "lucide-react";
import Link from "next/link";

const SocialToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      href: "#",
      icon: GithubIcon,
      label: "GitHub",
      position: { x: 0, y: -60 },
    },
    {
      href: "#",
      icon: LinkedInIcon,
      label: "LinkedIn",
      position: { x: 40, y: -60 },
    },
    {
      href: "#",
      icon: TwitterIcon,
      label: "Twitter",
      position: { x: -60, y: 0 },
    },
    {
      href: "#",
      icon: InstagramIcon,
      label: "Instagram",
      position: { x: 60, y: 0 },
    },
    { href: "#", icon: MediumIcon, label: "Medium", position: { x: 0, y: 60 } },
    {
      href: "#",
      icon: YoutubeIcon,
      label: "YouTube",
      position: { x: 40, y: 60 },
    },
  ];

  const containerVariants = {
    hidden: {
      scale: 1,
      rotate: 0,
    },
    visible: {
      scale: 1.2,
      rotate: 90,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: 0,
      y: 0,
    },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      x: custom.position.x,
      y: custom.position.y,
      transition: {
        delay: custom.delay,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  return (
    <div className="relative">
      <motion.div
        className="fixed justify-end -right-4 hover:right-8 md:right-8 bottom-14 md:bottom-15 z-40"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    custom={{ position: social.position, delay: index * 0.1 }}
                    variants={iconVariants}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Link href={social.href} target="_blank" className="block">
                      <motion.div
                        className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl"
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent color="white" size={20} />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="relative cursor-pointer"
          variants={containerVariants}
          animate={isOpen ? "visible" : "hidden"}
        >
          <motion.div
            className="border border-gray-200 bg-white backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="rounded-full border border-gray-100 p-3 m-2"
              animate={isOpen ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full text-white shadow-lg"
                whileHover={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              >
                <motion.div
                  animate={isOpen ? { rotate: -450 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <EggFried size={24} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SocialToggle;
