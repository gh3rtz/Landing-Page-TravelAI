"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SocialIcon = ({ icon: Icon, href }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="text-2xl hover:text-primary transition-colors" />
    </a>
  </li>
);

export default function Hero() {
  return (
    <section className="px-4 sm:px-12 py-14 relative overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 items-center text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your AI Travel Companion
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Effortless trip planning with AI-powered recommendations, smart
            itineraries, and travel tips.
          </p>

          <div className="flex items-center gap-6 mt-4">
            <Link href="https://app.travelwithai.online/register">
              <Button className="py-6 text-lg font-semibold hover:scale-105 transition-transform">
                Try it now
              </Button>
            </Link>

            <ul className="flex items-center gap-4">
              <SocialIcon
                icon={FaInstagram}
                href="https://instagram.com/givarirmdn"
              />
              <SocialIcon
                icon={FaTiktok}
                href="https://tiktok.com/ghertz.mkv"
              />
              <SocialIcon icon={FaTwitter} href="https://x.com/gh3rtz" />
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
