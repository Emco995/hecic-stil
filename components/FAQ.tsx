"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Koji je uobičajeni rok za izradu i montažu kuhinje?",
    answer:
      "Nakon što obavimo preciznu terensku izmjeru, usuglasimo 3D model i odaberemo materijale, prosječan rok isporuke i montaže je između 3 do 5 sedmica, zavisno od kompleksnosti projekta i dostupnosti specifičnih okova.",
  },
  {
    question: "Da li je 3D vizualizacija i savjetovanje uključeno u cijenu?",
    answer:
      "Da. Za sve klijente pripremamo detaljan 3D nacrt sa realnim rasporedom elemenata, rasvjete i ugradbenih aparata kako biste tačno vidjeli prostor prije početka same stolarske obrade.",
  },
  {
    question: "Koje okove i materijale koristite u proizvodnji?",
    answer:
      "Koristimo isključivo provjerene vrhunske sisteme: Blum i Hettich soft-close mehanizme s doživotnom pouzdanošću, lakirani MDF (medijapan), Egger pločaste materijale, te Fenix NTM površine otporne na ogrebotine i otiske prstiju.",
  },
  {
    question: "Da li radite montažu izvan Gradačca?",
    answer:
      "Apsolutno. Redovno radimo izmjere, dostavu i montažu širom Bosne i Hercegovine (Tuzlanski kanton, Sarajevo, Zenica, Brčko, Posavina i ostale regije po dogovoru).",
  },
  {
    question: "Šta pokriva garancija na montirani namještaj?",
    answer:
      "Dajemo punu garanciju na izvedene radove, stabilnost spojeva i funkcionalnost ugrađenih okova. Naš tim stoji iza svakog sklopljenog elementa.",
  },
  {
    question: "Kako funkcionira plaćanje (kapara i ostatak)?",
    answer:
      "Uobičajena praksa je uplata avansa (kapare) prilikom potpisivanja ugovora za nabavku repromaterijala, dok se preostali iznos plaća po završetku i pregledu kompletne montaže (gotovinski, karticom ili preko bankovnog računa).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Česta pitanja</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Sve što trebate znati
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Odgovori na najvažnija pitanja o procesu izmjere, materijalima, rokovima i garanciji.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#121318] border border-white/5 overflow-hidden transition-all duration-300 hover:border-gold-accent/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-gold-accent text-[#0d0e12]"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-400 font-light leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}