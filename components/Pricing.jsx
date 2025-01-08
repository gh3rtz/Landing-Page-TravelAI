import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import pricingPlans from "../data/pricingPlans.json";

const Pricing = () => {
  return (
    <section className="px-12 py-20 relative overflow-hidden" id="pricing">
      <div className="flex flex-col gap-8 pb-12 text-center">
        <h1 className="text-6xl font-bold">Pricing</h1>
        <p className="text-lg max-w-lg mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic
          neque quibusdam eveniet maxime! Ipsam voluptas fuga nesciunt nisi,
          enim minima omnis, id quos libero cupiditate nihil hic laudantium
          numquam.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-6 transition-transform transform hover:scale-105 ${
              plan.highlight
                ? "bg-black/90 dark:bg-white/10 text-white dark:text-gray-100"
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
            <ul className="mt-4 space-y-2">
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
            <Button className="mt-4">{plan.price}</Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
