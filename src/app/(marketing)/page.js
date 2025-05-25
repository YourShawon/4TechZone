"use client";
import { motion } from "framer-motion";
import FeaturesSection from "@/components/features-section";
import Integration from "@/components/Integration";
import Hero from "@/components/hero";
import SocialToggle from "@/components/ToggleBar";
import ScrollToTop from "@/components/scroll-to-top";

export default function MarketingPage() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div variants={pageVariants} initial="hidden" animate="visible">
        <motion.section variants={sectionVariants}>
          <Hero />
        </motion.section>

        <motion.section variants={sectionVariants} id="features-10">
          <FeaturesSection />
        </motion.section>

        <motion.section variants={sectionVariants}>
          <Integration />
        </motion.section>
      </motion.div>

      <SocialToggle />
      <ScrollToTop />
    </>
  );
}
