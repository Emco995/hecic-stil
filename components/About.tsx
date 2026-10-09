"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Besplatno uzimanje mjera i 3D vizualizacija prostora",
    "Rad isključivo s renomiranim europskim okovima (Blum, Grass)",
    "Fronte od visoko otpornog lakiranog medijapana i akrila",
    "Precizno CNC rezanje i lasersko kantiranje bez vidljivih spojeva",
  ];

  const stats = [
    { value: "15+", label: "Godina tradicije" },
    { value: "500+", label: "Realiziranih enterijera" },
    { value: "100%", label: "Po želji i mjeri" },
    { value: "5 god", label: "Garancija na okove" },
  ];

  return (
    <section id="o-nama" className="py-24 bg-[#0a0b0e] relative overflow-hidden border-t border-white/5">
      {/* Ambijentalno pozadinsko svjetlo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LIJEVA STRANA: Prava slika enterijera */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Slika kuhinje */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#121318]">
                <Image
                  src="/o-nama.jpg"
                  alt="Hećić Stil Enterijeri — moderna kuhinja po mjeri"
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-transparent opacity-60" />
              </div>

              {/* Plutajuća kartica garancije */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#15171d]/95 backdrop-blur-xl border border-gold-accent/40 rounded-2xl p-4 sm:p-5 shadow-2xl max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-accent/20 flex items-center justify-center text-gold-accent shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-serif font-bold text-sm">Vrhunski okovi</p>
                    <p className="text-[11px] text-gray-400">Blum Blumotion tiho zatvaranje</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DESNA STRANA: O firmi Hećić Stil */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O firmi Hećić Stil</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Strast prema drvetu. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae7be] via-gold-accent to-[#b47b2e]">
                Inženjerska preciznost.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              <strong>Hećić Stil Enterijeri</strong> nastao je iz posvećenosti vrhunskom zanatu i želji da svaki dom dobije namještaj koji savršeno odgovara dimenzijama, životnim navikama i estetici vlasnika.
            </p>

            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
              Od prvog crteža i preciznog uzimanja mjera laserom, preko CNC obrade medijapana i pažljivog višeslojnog lakiranja, do same montaže u vašem domu — svaki korak vodimo s maksimalnom pažnjom na detalje.
            </p>

            {/* Ključne prednosti */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 font-light leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Statistike u brojkama */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="font-serif text-2xl font-bold text-gold-accent">{stat.value}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}