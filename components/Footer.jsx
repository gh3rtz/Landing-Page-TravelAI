import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow p-4 border">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="http://localhost:3000/" className="hover:underline">
            Travel AI
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:underline me-4 md:me-6">
              Pricing
            </a>
          </li>
          <li>
            <a href="contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
