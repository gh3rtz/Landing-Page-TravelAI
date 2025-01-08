"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SocialIcon = ({ icon: Icon, href }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="text-2xl" />
    </a>
  </li>
);

export default function Hero() {
  return (
    <section
      className="px-12 py-24 relative overflow-hidden flex justify-center text-center"
      id="hero"
    >
      <div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 items-center max-w-lg"
        >
          <h1 className="text-6xl font-bold">TRAVEL AI</h1>
          <p className="text-lg dark:text-slate-300/80">
            Plan your dream trip effortlessly with Travel AI! Get personalized
            destination recommendations, smart itineraries, and travel tips
            powered by cutting-edge AI technology. Start your adventure now!
          </p>

          <div className="flex items-center gap-8">
            <Link href="http://localhost:3001">
              <Button className="py-6 hover:bg-gray-950 dark:hover:bg-slate-300">
                Try it now
              </Button>
            </Link>

            <ul className="flex items-center gap-4">
              <SocialIcon icon={FaInstagram} href="https://instagram.com" />
              <SocialIcon icon={FaTiktok} href="https://tiktok.com" />
              <SocialIcon icon={FaYoutube} href="https://youtube.com" />
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
