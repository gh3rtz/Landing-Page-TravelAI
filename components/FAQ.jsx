"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const faqData = [
  {
    question: "What counts as a request?",
    answer:
      "Each AI-generated response, including destination recommendations, itinerary planning, and travel advice, counts as one request.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time. Your remaining requests will be carried over to the new plan.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely! We use industry-standard encryption to protect your payment information and ensure secure transactions.",
  },
  {
    question: "What happens if I exceed my daily request limit?",
    answer:
      "If you exceed your daily limit, you'll need to wait until the next day or upgrade to a higher plan for more requests.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={fadeIn} className="border-b dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium dark:text-gray-200">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-gray-600 dark:text-gray-400">{answer}</p>
      </div>
    </motion.div>
  );
};

export default function FAQ() {
  return (
    <section className="px-12 py-20 relative overflow-hidden" id="faq">
      <div className="flex flex-col gap-8 pb-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-4"
        >
          <h1 className="text-6xl font-bold">FAQ</h1>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
