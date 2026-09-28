"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "h-9 w-9",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-28 w-28",
  };

  const textSizes = {
    sm: "text-sm tracking-[0.22em]",
    md: "text-lg tracking-[0.26em]",
    lg: "text-2xl tracking-[0.3em]",
    xl: "text-3xl tracking-[0.35em]",
  };

  const subTextSizes = {
    sm: "text-[7px] tracking-[0.4em]",
    md: "text-[9px] tracking-[0.45em]",
    lg: "text-[11px] tracking-[0.55em]",
    xl: "text-xs tracking-[0.6em]",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group select-none cursor-pointer ${className}`}>
      {/* Vektorski amblem s podebljanim slovom H */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105 shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(215,181,118,0.25)]"
        >
          <defs>
            {/* Tekstura godova drveta */}
            <pattern id="woodPatternBold" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#dfcfb8" />
              <line x1="0" y1="2" x2="10" y2="2" stroke="#cfbc9e" strokeWidth="0.75" />
              <line x1="0" y1="5.5" x2="10" y2="5.5" stroke="#e8ded0" strokeWidth="0.6" />
              <line x1="0" y1="8" x2="10" y2="8" stroke="#cfbc9e" strokeWidth="0.75" />
            </pattern>

            {/* Metalik gradijent za napu */}
            <linearGradient id="hoodMetalBold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8c939d" />
              <stop offset="45%" stopColor="#f3f5f7" />
              <stop offset="70%" stopColor="#cfd4dc" />
              <stop offset="100%" stopColor="#7a828e" />
            </linearGradient>

            {/* Gradijent za zavijeni tok */}
            <linearGradient id="flowMetalBold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#9aa0aa" />
              <stop offset="100%" stopColor="#636974" />
            </linearGradient>
          </defs>

          {/* LIJEVI STUP SLOVA H - Podebljan za 25% */}
          <path
            d="M 13 19 C 23 19 30 23 30 32 V 70 C 30 79 23 83 13 83 H 39 C 29 83 23 79 23 70 V 32 C 23 23 29 19 39 19 H 13 Z"
            fill="url(#woodPatternBold)"
          />

          {/* DESNI STUP SLOVA H - Podebljan za 25% */}
          <path
            d="M 61 19 C 71 19 77 23 77 32 V 70 C 77 79 71 83 61 83 H 87 C 77 83 70 79 70 70 V 32 C 70 23 77 19 87 19 H 61 Z"
            fill="url(#woodPatternBold)"
          />

          {/* KUHINJSKA NAPA U SREDINI */}
          <path
            d="M 46 20 H 54 V 27 L 66 35 H 34 L 46 27 Z"
            fill="url(#hoodMetalBold)"
          />

          {/* ZAVIJENI METALIK TOK */}
          <path
            d="M 35 36 C 44 42 58 41 65 47 C 65 52 64 56 65 56 C 53 50 42 51 35 42 Z"
            fill="url(#flowMetalBold)"
          />

          {/* PODEBLJANI ZAOBLJENI BOČNI SPOJEVI */}
          <path
            d="M 30 46 C 34 66 36 78 45 82 C 40 74 39 53 42 46 Z"
            fill="url(#woodPatternBold)"
          />
          <path
            d="M 70 46 C 66 66 64 78 55 82 C 60 74 61 53 58 46 Z"
            fill="url(#woodPatternBold)"
          />

          {/* KUHINJSKI ORMARIĆ */}
          <rect
            x="36"
            y="48"
            width="28"
            height="29"
            rx="3"
            stroke="url(#woodPatternBold)"
            strokeWidth="3.6"
          />

          {/* RAZDJELNIK */}
          <line
            x1="37"
            y1="60"
            x2="63"
            y2="60"
            stroke="url(#woodPatternBold)"
            strokeWidth="2.8"
          />

          {/* RUČKICE ORMARIĆA */}
          <line
            x1="47"
            y1="54"
            x2="53"
            y2="54"
            stroke="url(#woodPatternBold)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <line
            x1="49"
            y1="64"
            x2="49"
            y2="73"
            stroke="url(#woodPatternBold)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <line
            x1="51"
            y1="64"
            x2="51"
            y2="73"
            stroke="url(#woodPatternBold)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`font-serif font-bold text-white uppercase ${textSizes[size]} leading-tight transition-colors duration-200 group-hover:text-gold-accent`}>
            Hećić Stil
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-gold-accent/60"></span>
            <span className={`font-sans font-semibold text-gold-accent uppercase ${subTextSizes[size]}`}>
              Enterijeri
            </span>
            <span className="h-[1px] w-3 bg-gold-accent/60"></span>
          </div>
        </div>
      )}
    </Link>
  );
}