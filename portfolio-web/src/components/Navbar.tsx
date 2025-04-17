"use client";

import Link from "next/link";
import MQLogo from "@/icons/MQLogo";
import { Moon, Sun2 } from "@/icons";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";
import FadeScaleRotate from "@/components/animations/FadeScaleRotate";

interface NavbarProps {
  setTheme: (theme: "light" | "dark") => void;
  currentTheme?: "light" | "dark";
}

interface ThemeIconProps {
  showSun: boolean;
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ showSun }) => {
  return (
    <>
      {showSun ? (
        <Sun2 fill="var(--text)" width={24} height={24} />
      ) : (
        <Moon fill="var(--text)" width={24} height={24} />
      )}
    </>
  );
};

export default function Navbar({ setTheme, currentTheme }: NavbarProps) {
  const [showSun, setShowSun] = useState(true);

  useEffect(() => {
    setShowSun(currentTheme === "dark");
  }, [currentTheme]);

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "#", label: "Projects" },
    { href: "#", label: "Contact" },
  ];

  const linkClasses =
    "hover:text-[var(--accent)] relative group overflow-hidden ";
  const spanClasses =
    "absolute bottom-0 left-1/2 w-0 h-[2px] bg-[var(--accent)] group-hover:w-full transition-all duration-200 group-hover:left-0";

  const [logoFill, setLogoFill] = useState("var(--text)");

  return (
    <div className="py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          aria-label="Go to homepage"
          onMouseEnter={() => setLogoFill("var(--accent)")}
          onMouseLeave={() => setLogoFill("var(--text)")}
        >
          <MQLogo fill={logoFill} width={24} height={24} />
        </Link>
        <div className="flex gap-4 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={linkClasses}
              aria-label={`View ${link.label}`}
            >
              {link.label}
              <span className={spanClasses}></span>
            </Link>
          ))}
        </div>
        <button
          className="cursor-pointer"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait">
            <FadeScaleRotate key={showSun ? "sun" : "moon"}>
              <ThemeIcon showSun={showSun} />
            </FadeScaleRotate>
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
