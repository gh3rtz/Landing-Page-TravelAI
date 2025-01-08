"use client";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section
      className="px-12 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-center text-muted-foreground mb-8">
            Have questions or need assistance? We're here to help! Reach out to
            us and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                Please enter a valid email
              </span>
            )}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground"
              rows="5"
              {...register("message", { required: true, minLength: 10 })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                Message must be at least 10 characters
              </span>
            )}
          </div>

          <Button type="submit" className="w-full py-6">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
