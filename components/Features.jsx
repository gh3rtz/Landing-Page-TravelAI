"use client";
import React from "react";
import { Card } from "./ui/card";
import { Zap, Globe, Compass, Star, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.5 }}
  >
    <Card className="p-6 flex items-center gap-4">
      <Icon className="w-8 h-8" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Card>
  </motion.div>
);

export default function Features() {
  return (
    <section className="px-12 py-16" id="features">
      <div className="flex flex-col gap-8 pb-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-4"
        >
          <Lightbulb className="w-12 h-12 text-yellow-400" />
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-center"
          >
            Features
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Globe}
            title="Worldwide Coverage"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate deserunt."
          />
          <FeatureCard
            icon={Zap}
            title="Instant Results"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate deserunt."
          />
          <FeatureCard
            icon={Compass}
            title="Customizable"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate deserunt."
          />
        </div>
      </div>
    </section>
  );
}
