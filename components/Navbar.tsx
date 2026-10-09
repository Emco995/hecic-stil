"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Početna", href: "#hero" },
    { name: "O nama", href: "#o-nama" },
    { name: "Galerija", href: "#galerija" },
    { name: "Kalkulator", href: "#kalkulator" },
    { name: "Recenzije", href: "#recenzije" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#hero") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0e12]/90 backdrop-blur-md border-b border-white/10 py-2 sm:py-2.5 shadow-2xl"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[70px] sm:min-h-[80px]">
        {/* LOGO */}
        <Logo size="md" />

        {/* DESKTOP NAVIGACIJA */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-widest text-gray-300 hover:text-gold-accent transition-colors duration-200 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA DUGME */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+38761000000"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-gold-accent/40 text-gold-accent hover:bg-gold-accent hover:text-[#0d0e12] transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(215,181,118,0.15)]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Pozovite nas</span>
          </a>
        </div>

        {/* HAMBURGER DUGME */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Izbornik"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILNI IZBORNIK */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e12]/98 border-b border-white/10 px-4 pt-4 pb-6 space-y-3 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-sm uppercase tracking-wider text-gray-300 hover:text-gold-accent py-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="tel:+38761000000"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-xs uppercase tracking-wider font-bold bg-gold-accent text-[#0d0e12] transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Pozovite nas</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}