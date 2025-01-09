"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/travel-ai.png";
import { ModeToggle } from "./ui/toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-12 py-4 border-b shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 rounded-lg">
        <div className="flex items-center gap-12">
          <Link href="https://travelwithai.online">
            <Image src={Logo} width={50} height={50} alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-12">
              <li>
                <Link
                  href="#pricing"
                  onClick={(e) => handleSmoothScroll(e, "pricing")}
                  className="hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#integrations"
                  onClick={(e) => handleSmoothScroll(e, "integrations")}
                  className="hover:underline"
                >
                  Integration
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, "faq")}
                  className="hover:underline"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Link href="https://app.travelwithai.online/register">
              <Button className="py-1.5">Try it Now!</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, "pricing")}
                className="p-2 hover:bg-accent rounded block"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#integrations"
                onClick={(e) => handleSmoothScroll(e, "integrations")}
                className="p-2 hover:bg-accent rounded block"
              >
                Integration
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="p-2 hover:bg-accent rounded block"
              >
                FAQ
              </Link>
            </li>
            <li>
              <div className="flex gap-4 p-2">
                <ModeToggle />
                <Link
                  href="https://app.travelwithai.online/register"
                  className="w-full"
                >
                  <Button className="w-full">Try it Now!</Button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
