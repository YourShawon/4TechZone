"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./container";
import IntegrationItems from "./IntegrationItems";
import zapier from "../../public/integration-image/zapier.png";
import discord from "../../public/integration-image/discord.png";
import firebase from "../../public/integration-image/firebase.png";
import hubspot from "../../public/integration-image/hubspot.png";
import intercom from "../../public/integration-image/intercom.png";
import mailchimp from "../../public/integration-image/mailchimp.png";
import notion from "../../public/integration-image/notion.png";
import shopify from "../../public/integration-image/shopify.png";
import slack from "../../public/integration-image/slack.png";
import trello from "../../public/integration-image/trello.png";
import zendeskDark from "../../public/integration-image/zendesk.png";
import zoom from "../../public/integration-image/zoom.png";

const integrationArray = [
  {
    id: 1,
    name: "Zapier",
    image: zapier,
  },
  {
    id: 2,
    name: "Discord",
    image: discord,
  },
  {
    id: 3,
    name: "Firebase",
    image: firebase,
  },
  {
    id: 4,
    name: "Hubspot",
    image: hubspot,
  },
  {
    id: 5,
    name: "Intercom",
    image: intercom,
  },
  {
    id: 6,
    name: "Mailchimp",
    image: mailchimp,
  },
  {
    id: 7,
    name: "Notion",
    image: notion,
  },
  {
    id: 8,
    name: "Shopify",
    image: shopify,
  },
  {
    id: 9,
    name: "Slack",
    image: slack,
  },
  {
    id: 10,
    name: "Trello",
    image: trello,
  },
  {
    id: 11,
    name: "Zendesk",
    image: zendeskDark,
  },
  {
    id: 12,
    name: "Zoom",
    image: zoom,
  },
];

const Integration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <Container>
        <motion.div
          className="pb-[70px] pt-[100px] max-w-[800px] mx-auto text-center"
          variants={titleVariants}
        >
          <motion.h2
            className="md:text-[40px] lg:text-[50px] xl:text-[60px] text-[32px] text-center font-bold lg:leading-[75px] bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            Seamless integration with all your essential tools
          </motion.h2>
          <motion.p
            className="pt-[22px] md:text-xl text-[16px] text-center text-[#6c757d]"
            variants={titleVariants}
          >
            Ligula risus auctor tempus magna feugiat lacinia fusce blandit
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-[30px] justify-center"
          variants={containerVariants}
        >
          {integrationArray?.map((Intragrationparts, index) => {
            return (
              <motion.div key={Intragrationparts.id} variants={itemVariants}>
                <IntegrationItems
                  Intragrationparts={Intragrationparts}
                  index={index}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className=""
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mt-[30px] w-[240px] mx-auto">
            <motion.button
              className="text-[#000] font-[600] text-[16px] px-[31px] py-[15px] borderpart rounded-lg bg-white hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Integrations
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Integration;
