"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Gallery from "@/components/Gallery";
import Calculator from "@/components/Calculator";
import PaymentPortal from "@/components/PaymentPortal";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const [contentReady, setContentReady] = useState(false);

  return (
    <>
      {/* Preloader stoji na najvišem z-indexu (9999) od prve milisekunde */}
      <Preloader onComplete={() => setContentReady(true)} />

      {/* Sadržaj stranice: u startu potpuno skriven i zaključan, glatko se pojavljuje kada preloader ispari */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen bg-[#0d0e12] text-gray-100 selection:bg-gold-accent selection:text-[#0d0e12] relative"
      >
        <Navbar />

        {/* HERO SEKCIJA */}
        <section
          id="hero"
          className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
              alt="Moderne kuhinje po mjeri Hećić Stil"
              fill
              priority
              loading="eager"
              fetchPriority="high"
              unoptimized
              sizes="100vw"
              className="object-cover opacity-20 filter brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/80 to-[#0d0e12]/60" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0d0e12]/70 to-[#0d0e12]" />
          </div>

          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#D7B576]/15 to-transparent rounded-full blur-[140px] pointer-events-none z-[1]" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-gold-accent text-xs uppercase tracking-[0.25em] font-medium mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Namještaj po mjeri</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Stil koji definira prostor. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae7be] via-gold-accent to-[#b47b2e]">
                Preciznost bez kompromisa.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto font-light leading-relaxed drop-shadow"
            >
              Projektiranje, izrada i montaža vrhunskih kuhinja, ugradbenih ormara i modernih stolova.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#kalkulator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs bg-gold-accent text-[#0d0e12] hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(215,181,118,0.25)] cursor-pointer"
              >
                <span>Digitron & Mjerenje</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#galerija"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs bg-black/40 backdrop-blur-md border border-white/20 hover:border-gold-accent hover:text-gold-accent text-gray-200 transition-all duration-300 cursor-pointer"
              >
                <span>Pogledaj radove</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* GALERIJA SA FILTRIRANJEM I PAGINACIJOM */}
        <Gallery />

        {/* DIGITRON & MJERENJE (U KM) */}
        <Calculator />

        {/* RECENZIJE ZADOVOLJNIH KLIJENATA */}
        <Reviews />

        {/* ONLINE PLAĆANJE GOTOVIH RADOVA */}
        <PaymentPortal />

        {/* ČESTO POSTAVLJANA PITANJA (FAQ) */}
        <FAQ />

        {/* KONTAKT SEKCIJA */}
        <Contact />

        {/* FOOTER */}
        <footer className="py-12 bg-[#08090b] border-t border-white/10 text-gray-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                Hećić Stil <span className="text-gold-accent text-xs font-sans font-normal">— Enterijeri</span>
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">© 2026 Sva prava pridržana.</p>
            </div>
            <div className="flex items-center gap-6 text-xs tracking-wider">
              <span>Gradačac, BiH</span>
              <span>•</span>
              <a href="#placanje" className="text-gold-accent hover:underline cursor-pointer">Online plaćanje</a>
              <span>•</span>
              <a href="#faq" className="text-gray-400 hover:text-white cursor-pointer">FAQ</a>
              <span>•</span>
              <a href="#kontakt" className="text-gray-400 hover:text-white cursor-pointer">Kontakt</a>
            </div>
          </div>
        </footer>
      </motion.main>
    </>
  );
}