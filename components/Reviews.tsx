"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  CheckCircle, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  project: string;
  comment: string;
  rating: number;
  date: string;
}

const allReviews: Review[] = [
  // Set 1
  {
    id: 1,
    name: "Emir & Lejla H.",
    location: "Sarajevo",
    project: "Kuhinja po mjeri s otokom",
    comment:
      "Apsolutno besprijekorno odrađen posao! Od prvog 3D nacrta do same montaže svaki detalj je ispao točno kako smo zamislili. Soft-close ladice i Fenix fronte su vrhunske kvalitete.",
    rating: 5,
    date: "Prije 2 sedmice",
  },
  {
    id: 2,
    name: "Mirza K.",
    location: "Tuzla",
    project: "Ugradbeni ormar & Trpezarijski stol",
    comment:
      "Momci su stigli u tačno dogovoreno vrijeme. Montaža ormara do stropa je odrađena milimetarski precizno, a stol od masiva hrasta je postao glavni ukras naše kuće. Svaka preporuka!",
    rating: 5,
    date: "Prije mjesec dana",
  },
  {
    id: 3,
    name: "Adnan B.",
    location: "Zenica",
    project: "Kuhinja mat akril & LED profil",
    comment:
      "Najviše me oduševila urednost tokom i nakon montaže. Nema skrivenih troškova — cijena koja je dogovorena na izmjeri bila je i konačna. Pravi profesionalci u svom poslu.",
    rating: 5,
    date: "Prije 2 mjeseca",
  },

  // Set 2
  {
    id: 4,
    name: "Dino & Amra V.",
    location: "Mostar",
    project: "Kuhinja L-oblik s ugradbenim aparatima",
    comment:
      "Prezadovoljni smo kako su iskoristili svaki ugao prostora. Imali smo specifične zidove pod kosinom, ali su sve uklopili bez ijedne greške. Kuhinja izgleda skupocjeno i moderno.",
    rating: 5,
    date: "Prije 3 sedmice",
  },
  {
    id: 5,
    name: "Haris S.",
    location: "Bihać",
    project: "Dva velika ugradbena ormara",
    comment:
      "Kvalitet okova i kliznih vrata je fantastičan. Sve klizi bešumno, unutrašnji raspored polica i rasvjeta su tačno po našim zahtjevima. Radit ćemo sigurno i kuhinju s njima.",
    rating: 5,
    date: "Prije mjesec i pol",
  },
  {
    id: 6,
    name: "Jasmina T.",
    location: "Banja Luka",
    project: "Kuhinjski otok & Trpezarija",
    comment:
      "Kombinacija crnog mat medijapana i prirodnog drvenog furnira ostavlja bez daha svakog ko nam uđe u stan. Majstori su kulturni, brzi i vrlo pedantni. Čista desetka!",
    rating: 5,
    date: "Prije 2 sedmice",
  },

  // Set 3
  {
    id: 7,
    name: "Senad M.",
    location: "Gradačac",
    project: "Kompletno opremanje stana",
    comment:
      "Radili su nam kuhinju, ormar u hodniku i TV policu za dnevni boravak. Sve je usklađeno u istom tonu i stilu. Izuzetno cijenim što su ispoštovali obećani rok isporuke.",
    rating: 5,
    date: "Prije 3 mjeseca",
  },
  {
    id: 8,
    name: "Alma & Kenan R.",
    location: "Sarajevo",
    project: "Bijela minimalistička kuhinja",
    comment:
      "Tražili smo jednostavan, čist izgled bez ručkica i sa kvarcnom radnom pločom. Izvedba je na nivou njemačkih salona namještaja, a cijena višestruko korektnija.",
    rating: 5,
    date: "Prije 10 dana",
  },
  {
    id: 9,
    name: "Nermin D.",
    location: "Srebrenik",
    project: "Klupski i trpezarijski stolovi",
    comment:
      "Stolovi su masivni, stabilni i s prekrasnom obradom drveta. Vidi se da se posvećuje pažnja svakom detalju završne zaštite. Svaka čast majstorima!",
    rating: 5,
    date: "Prije mjesec dana",
  },
];

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = Math.ceil(allReviews.length / 3);

  // Sada se prebacuje svakih 5 sekundi (znatno brže i uočljivije)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentPage, isPaused, totalPages]);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const currentReviews = allReviews.slice(currentPage * 3, currentPage * 3 + 3);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section
      id="recenzije"
      className="py-24 bg-[#0d0e12] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Iskustva naših klijenata</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Povjerenje izgrađeno kvalitetom
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Zadovoljstvo kupaca nakon montirane kuhinje i namještaja naša je najbolja preporuka.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-gold-accent/20">
            <div className="flex text-gold-accent gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-accent" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">5.0 / 5.0</span>
            <span className="text-xs text-gray-500">• Preko 150+ montiranih enterijera</span>
          </div>
        </div>

        {/* GLAVNI PRIKAZ 3 RECENZIJE UZ BRZU TRANZICIJU */}
        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {currentReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="relative p-7 sm:p-8 rounded-3xl bg-[#121318] border border-white/5 hover:border-gold-accent/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-white/[0.05]" />

                  <div>
                    <div className="flex text-gold-accent gap-1 mb-4">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-accent" />
                      ))}
                    </div>

                    <p className="text-sm text-gray-300 font-light leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base font-bold text-white flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                      </h4>
                      <p className="text-[11px] text-gold-accent/90 font-medium mt-0.5">
                        {rev.project}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        {rev.location} • {rev.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* KONTROLE */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer p-3 rounded-full bg-white/5 border border-white/10 hover:border-gold-accent/50 text-gray-300 hover:text-gold-accent hover:bg-gold-accent/10 transition-all shadow-md active:scale-95"
            aria-label="Prethodne recenzije"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentPage ? 1 : -1);
                  setCurrentPage(i);
                }}
                className={`cursor-pointer transition-all duration-300 rounded-full ${
                  currentPage === i
                    ? "w-8 h-2 bg-gold-accent"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Stranica recenzija ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="cursor-pointer p-3 rounded-full bg-white/5 border border-white/10 hover:border-gold-accent/50 text-gray-300 hover:text-gold-accent hover:bg-gold-accent/10 transition-all shadow-md active:scale-95"
            aria-label="Sljedeće recenzije"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}