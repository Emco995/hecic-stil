"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.03,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0e12] text-white"
        >
          {/* Mekani zlatni ambijent u pozadini */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#D7B576]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

          {/* Vektorski logo s podebljanim H monogramom */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center relative z-10 w-full max-w-[320px] sm:max-w-[380px] px-4"
          >
            <svg
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-[0_10px_35px_rgba(215,181,118,0.35)]"
            >
              <defs>
                {/* Uzorak teksture drveta */}
                <pattern id="woodPatternLgBold" width="12" height="12" patternUnits="userSpaceOnUse">
                  <rect width="12" height="12" fill="#e1d2bc" />
                  <line x1="0" y1="2.5" x2="12" y2="2.5" stroke="#cebc9d" strokeWidth="0.8" />
                  <line x1="0" y1="7" x2="12" y2="7" stroke="#ebe2d5" strokeWidth="0.7" />
                  <line x1="0" y1="10" x2="12" y2="10" stroke="#cebc9d" strokeWidth="0.8" />
                </pattern>

                {/* Srebrno-metalni preliv za napu */}
                <linearGradient id="hoodMetalLgBold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7a828e" />
                  <stop offset="35%" stopColor="#ffffff" />
                  <stop offset="70%" stopColor="#cfd4dc" />
                  <stop offset="100%" stopColor="#636974" />
                </linearGradient>

                {/* Srebrni tok */}
                <linearGradient id="flowMetalLgBold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#9aa0aa" />
                  <stop offset="100%" stopColor="#555a63" />
                </linearGradient>
              </defs>

              {/* LIJEVI STUP H - Podebljan za puniji i moćniji izgled */}
              <path
                d="M 40 26 C 68 26 88 36 88 58 V 162 C 88 184 68 194 40 194 H 112 C 84 194 70 184 70 162 V 58 C 70 36 84 26 112 26 H 40 Z"
                fill="url(#woodPatternLgBold)"
              />

              {/* DESNI STUP H - Podebljan za puniji i moćniji izgled */}
              <path
                d="M 188 26 C 216 26 230 36 230 58 V 162 C 230 184 216 194 188 194 H 260 C 232 194 212 184 212 162 V 58 C 212 36 232 26 260 26 H 188 Z"
                fill="url(#woodPatternLgBold)"
              />

              {/* KUHINJSKA NAPA */}
              <path
                d="M 136 28 H 164 V 46 L 196 70 H 104 L 136 46 Z"
                fill="url(#hoodMetalLgBold)"
              />

              {/* ZAVIJENI S-TOK */}
              <path
                d="M 106 72 C 132 87 172 85 192 98 C 192 108 190 116 192 116 C 160 102 128 106 106 86 Z"
                fill="url(#flowMetalLgBold)"
              />

              {/* PODEBLJANI ZAOBLJENI BOČNI SPOJEVI */}
              <path
                d="M 92 96 C 102 148 106 180 132 190 C 117 172 115 116 122 96 Z"
                fill="url(#woodPatternLgBold)"
              />
              <path
                d="M 208 96 C 198 148 194 180 168 190 C 183 172 185 116 178 96 Z"
                fill="url(#woodPatternLgBold)"
              />

              {/* KUHINJSKI ORMARIĆ */}
              <rect
                x="108"
                y="102"
                width="84"
                height="76"
                rx="6"
                stroke="url(#woodPatternLgBold)"
                strokeWidth="8"
              />

              {/* HORIZONTALNI RAZDJELNIK */}
              <line
                x1="110"
                y1="132"
                x2="190"
                y2="132"
                stroke="url(#woodPatternLgBold)"
                strokeWidth="6"
              />

              {/* RUČKICE */}
              <line
                x1="140"
                y1="117"
                x2="160"
                y2="117"
                stroke="url(#woodPatternLgBold)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1="146"
                y1="142"
                x2="146"
                y2="164"
                stroke="url(#woodPatternLgBold)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
              <line
                x1="154"
                y1="142"
                x2="154"
                y2="164"
                stroke="url(#woodPatternLgBold)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />

              {/* NATPIS: HEĆIĆ STIL */}
              <text
                x="150"
                y="240"
                textAnchor="middle"
                fill="#ffffff"
                fontFamily="serif"
                fontSize="31"
                fontWeight="bold"
                letterSpacing="4"
              >
                HEĆIĆ STIL
              </text>

              {/* LIJEVA CRTA */}
              <line 
                x1="45" 
                y1="262" 
                x2="65" 
                y2="262" 
                stroke="#ffffff" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
              />
              
              {/* NATPIS: ENTERIJERI */}
              <text
                x="150"
                y="266"
                textAnchor="middle"
                fill="#ffffff"
                fontFamily="sans-serif"
                fontSize="13"
                fontWeight="700"
                letterSpacing="5"
              >
                ENTERIJERI
              </text>
              
              {/* DESNA CRTA */}
              <line 
                x1="235" 
                y1="262" 
                x2="255" 
                y2="262" 
                stroke="#ffffff" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
              />
            </svg>

            {/* Zlatna linija progresa */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#D7B576] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}