"use client";
import React from "react";
import { Card } from "./ui/card";
import { Zap, Globe, Compass, Star, Lightbulb, Map, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="cursor-pointer"
  >
    <Card className="p-6 flex items-center gap-4 h-full hover:shadow-lg transition-shadow">
      <div className="p-3 bg-primary/10 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <TypeAnimation
          sequence={[description, 1000]}
          wrapper="p"
          speed={50}
          className="text-sm text-muted-foreground"
          cursor={false}
          repeat={0}
        />
      </div>
    </Card>
  </motion.div>
);

export default function Features() {
  const features = [
    {
      icon: Globe,
      title: "Accurate Location",
      description:
        "Get precise destination recommendations based on your current location with advanced geolocation technology and real-time updates.",
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description:
        "Leverage cutting-edge AI technology powered by OpenAI API to deliver smart, personalized travel recommendations tailored just for you.",
    },
    {
      icon: Compass,
      title: "Smart Recommendations",
      description:
        "Discover the best destinations based on your unique preferences, travel history, and real-time inputs with our intelligent recommendation system.",
    },
    {
      icon: Star,
      title: "Automatic Itinerary",
      description:
        "Generate complete, optimized travel plans in seconds, all tailored to your preferences.",
    },
    {
      icon: Map,
      title: "Interactive Map",
      description:
        "Explore destinations with our intuitive, easy-to-use interactive maps featuring real-time data, street views, and custom markers.",
    },
    {
      icon: Clock,
      title: "Optimal Timing",
      description:
        "Receive smart recommendations for the best time to visit each destination based on weather, crowds, and seasonal factors.",
    },
  ];

  return (
    <section
      className="px-4 sm:px-12 py-4 relative overflow-hidden"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 pb-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-4"
          >
            <div className="p-3 bg-primary/10 rounded-full">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Features
            </h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the powerful features that make Travel AI your ultimate
            travel companion
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
