"use client";
import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const integrations = [
  {
    name: "Google Maps",
    logo: "/img/googlemaps.jpg",
    description:
      "Interactive maps with real-time location data and immersive street views",
    features: [
      "Real-time traffic updates",
      "Street view integration",
      "Custom map markers",
      "Route optimization",
    ],
  },
  {
    name: "OpenAI",
    logo: "/img/openai.jpg",
    description:
      "Advanced natural language processing for personalized travel recommendations",
    features: [
      "AI-powered itinerary planning",
      "Natural language queries",
      "Personalized suggestions",
      "Multilingual support",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
    <svg
      className="w-4 h-4 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    <TypeAnimation
      sequence={[feature, 1000, "", 500]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
      cursor={true}
    />
  </div>
);

const IntegrationCard = ({ integration, index }) => (
  <motion.div
    key={index}
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <Card className="p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800 h-full">
      <img
        src={integration.logo}
        alt={integration.name}
        className="h-20 w-20 object-contain bg-transparent opacity-90 hover:opacity-100 transition-opacity"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/img/travel-ai.png";
        }}
      />
      <h3 className="text-xl font-semibold">{integration.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {integration.description}
      </p>
      <div className="w-full mt-4 space-y-2">
        {integration.features.map((feature, i) => (
          <FeatureItem key={i} feature={feature} />
        ))}
      </div>
    </Card>
  </motion.div>
);

export default function Integration() {
  return (
    <section
      className="px-4 sm:px-12 py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      id="integrations"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-12 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Powerful Integrations
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Travel AI seamlessly integrates with leading platforms to deliver an
          enhanced travel experience
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={index}
              integration={integration}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
