"use client";
import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import pricingPlans from "../data/pricingPlans.json";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Pricing = () => {
  const handleWhatsAppClick = (planName) => {
    const phoneNumber = "+6285156097430";
    const message = `Hi, I want to order the ${planName} plan.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="px-4 sm:px-12 py-20 relative overflow-hidden"
      id="pricing"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 pb-12 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Start your AI-powered travel journey with plans that fit every
            explorer. From casual trips to unlimited adventures, we've got you
            covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {plan.highlight && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg z-10">
                  Most Popular
                </div>
              )}

              <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 mt-8 hover:opacity-100 hover:from-blue-400 hover:to-purple-400 hover:shadow-[0_0_30px_10px_rgba(99,102,241,0.4)] transition-all duration-300 group-hover:scale-[1.02]">
                <Card
                  className={`p-8 rounded-xl ${
                    plan.highlight
                      ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
                      : "bg-white dark:bg-gray-800"
                  }`}
                >
                  <h2
                    className={`text-4xl font-semibold ${
                      plan.textColor || "text-black dark:text-white"
                    }`}
                  >
                    {plan.name}
                  </h2>
                  <p className="mt-4 text-2xl font-bold">{plan.price}</p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-center justify-center"
                      >
                        {feature.available ? (
                          <span className="text-green-500 mr-2">✔️</span>
                        ) : (
                          <span className="text-red-500 mr-2">❌</span>
                        )}
                        <span
                          className={`${
                            plan.name === "Gold" ? plan.itemTextColor : ""
                          } ${
                            feature.available
                              ? "dark:text-gray-300"
                              : "line-through text-gray-400 dark:text-gray-500"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-6 w-full py-6 text-lg font-semibold hover:scale-105 transition-transform"
                    onClick={() => {
                      if (plan.name !== "Basic") {
                        handleWhatsAppClick(plan.name);
                      }
                    }}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.name === "Basic" ? (
                      <a href="https://app.travelwithai.online/register">
                        Get Started
                      </a>
                    ) : (
                      <span>Choose Plan</span>
                    )}
                  </Button>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
