"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  // Znatno veće fiksne visine u pikselima kako Tailwind ne bi komprimirao sliku
  const sizes = {
    sm: "h-12 w-auto",
    md: "h-16 sm:h-20 w-auto",
    lg: "h-24 w-auto",
    xl: "h-32 w-auto",
  };

  return (
    <Link href="/" className={`inline-flex items-center group select-none cursor-pointer py-1 ${className}`}>
      <div className={`relative ${sizes[size]} transition-transform duration-300 group-hover:scale-105 flex items-center`}>
        <Image
          src="/logo.svg"
          alt="Hećić Stil Enterijeri"
          width={320}
          height={120}
          priority
          unoptimized
          className="h-full w-auto object-contain max-h-[80px] drop-shadow-[0_4px_20px_rgba(215,181,118,0.35)]"
        />
      </div>
    </Link>
  );
}