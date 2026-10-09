"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0e12] text-white select-none pointer-events-auto"
        >
          {/* Pojačani zlatni ambijent u pozadini */}
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-[#D7B576]/20 to-transparent rounded-full blur-[150px] pointer-events-none" />

          {/* Kontejner s uvećanim originalnim logotipom */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center relative z-10 w-full max-w-[340px] sm:max-w-[420px] px-4"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Hećić Stil Enterijeri"
                width={420}
                height={420}
                priority
                unoptimized
                className="w-full h-auto object-contain drop-shadow-[0_12px_45px_rgba(215,181,118,0.35)]"
              />
            </div>

            {/* Zlatna animirana linija progresa */}
            <div className="w-52 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6">
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