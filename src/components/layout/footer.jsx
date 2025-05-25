"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../container";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
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

  const socialIconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-white to-gray-50 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.h3
              className="font-bold mb-6 text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              4TechZone
            </motion.h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "Core Services",
                "Integrations",
                "Latest Projects",
                "Pricing Plans",
                "Help & Support",
                "Advertising",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200"
                    whileHover={{ x: 5, color: "#2563eb" }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="font-bold mb-6 text-xl text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Solutions
            </motion.h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "Libero quisque and massa",
                "Aliquam auris dapibus libero",
                "Purus justo lacus ligula",
                "Tortor sagittis lacinia",
                "Gravida aliquet ipsum ultrices",
                "Lacinia molestie egestas",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200"
                    whileHover={{ x: 5, color: "#2563eb" }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3
              className="font-bold mb-6 text-xl text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Discover
            </motion.h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              {["Success Stories", "Our Blog"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="#"
                    className="hover:text-blue-600 transition-colors duration-200"
                    whileHover={{ x: 5, color: "#2563eb" }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            <motion.h3
              className="font-bold mb-6 text-xl text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Legal
            </motion.h3>
            <ul className="space-y-3 text-gray-600">
              {["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 2) * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="hover:text-blue-600 transition-colors duration-200"
                      whileHover={{ x: 5, color: "#2563eb" }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div className="flex flex-col gap-8" variants={itemVariants}>
            <div>
              <motion.h3
                className="font-bold mb-6 text-xl text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                About Us
              </motion.h3>
              <ul className="space-y-3 text-gray-600">
                {["About Us", "Our Team", "Careers"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="hover:text-blue-600 transition-colors duration-200"
                      whileHover={{ x: 5, color: "#2563eb" }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h3
                className="font-bold mb-6 text-xl text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                Follow the Best
              </motion.h3>
              <motion.form
                className="flex items-center bg-white rounded-xl px-4 py-2 w-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <motion.input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent outline-none flex-1 py-2 px-2 text-gray-700"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="text-gray-400 hover:text-blue-600 p-2 rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    color: "#2563eb",
                    rotate: 15,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{ color: "#6b7280" }}
          >
            © 2024 4TechZone. All Rights Reserved
          </motion.p>

          <motion.div className="flex space-x-4" variants={containerVariants}>
            {[
              {
                name: "Facebook",
                path: "M17 2.1C16.4 2 15.8 2 15.2 2H8.8C8.2 2 7.6 2 7 2C4.2 2.6 2 4.8 2 7.6V16.4C2 19.2 4.2 21.4 7 21.9C7.6 22 8.2 22 8.8 22H15.2C15.8 22 16.4 22 17 21.9C19.8 21.4 22 19.2 22 16.4V7.6C22 4.8 19.8 2.6 17 2.1ZM15 8H13C12.4 8 12 8.4 12 9V11H15L14.5 13H12V18H10V13H8V11H10V9C10 7.3 11.3 6 13 6H15V8Z",
              },
              {
                name: "X",
                path: "M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 1 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z",
              },
              {
                name: "LinkedIn",
                path: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z",
              },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="text-gray-400 hover:text-blue-600 p-2 rounded-lg"
                variants={socialIconVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#2563eb",
                  rotate: 10,
                  boxShadow: "0 5px 15px rgba(37, 99, 235, 0.2)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}

            <motion.a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-blue-600 p-2 rounded-lg"
              variants={socialIconVariants}
              whileHover={{
                scale: 1.2,
                color: "#2563eb",
                rotate: 10,
                boxShadow: "0 5px 15px rgba(37, 99, 235, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3.2" />
                <path d="M16.8 2H7.2C4.4 2 2 4.4 2 7.2v9.6C2 19.6 4.4 22 7.2 22h9.6c2.8 0 5.2-2.4 5.2-5.2V7.2C22 4.4 19.6 2 16.8 2zm-4.8 15.2A5.2 5.2 0 1 1 17.2 12a5.2 5.2 0 0 1-5.2 5.2zm6.4-9.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
