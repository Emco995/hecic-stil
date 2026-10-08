"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Početna", href: "#hero" },
    { name: "Galerija radova", href: "#galerija" },
    { name: "Digitron & Mjerenje", href: "#kalkulator" },
    { name: "Plaćanje", href: "#placanje" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "bg-[#111216]/80 backdrop-blur-2xl px-6 py-3 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              : "bg-transparent px-2 py-1"
          }`}
        >
          {/* Logo */}
          <div className="transition-transform duration-500 ease-out origin-left">
            <Logo size={scrolled ? "sm" : "md"} />
          </div>

          {/* Središnji desktop linkovi */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-gold-accent transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desno CTA dugme */}
          <div className="hidden md:flex items-center">
            <a
              href="#kalkulator"
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gold-accent text-[#0d0e12] hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(215,181,118,0.2)]"
            >
              <span>Zatraži ponudu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Animirano Hamburger dugme za mobitele */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50 cursor-pointer"
            aria-label="Navigacija"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-[2px] bg-white block rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[2px] bg-gold-accent block rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-[2px] bg-white block rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobilni meni */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden max-w-[92%] mx-auto mt-2 overflow-hidden bg-[#111216]/95 backdrop-blur-2xl rounded-3xl shadow-2xl"
          >
            <div className="px-6 py-7 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  className="block text-base font-medium text-gray-200 hover:text-gold-accent transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-3">
                <a
                  href="#kalkulator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-xs uppercase tracking-widest font-bold bg-gold-accent text-[#0d0e12]"
                >
                  <span>Zatraži mjerenje</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}