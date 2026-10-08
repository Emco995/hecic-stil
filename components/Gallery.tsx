"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  MapPin, 
  Layers,
  PlayCircle,
  Video as VideoIcon,
  Plus
} from "lucide-react";

type Category = "sve" | "kuhinje" | "ormari" | "stolovi";

interface MediaItem {
  type: "image" | "video";
  url: string;
}

interface ProjectItem {
  id: number;
  title: string;
  category: "kuhinje" | "ormari" | "stolovi";
  categoryLabel: string;
  location: string;
  material: string;
  description: string;
  coverImage: string;
  coverVideo: string;
  media: MediaItem[];
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Kuhinja Lakirani Medijapan — Retro Stil",
    category: "kuhinje",
    categoryLabel: "Kuhinja po mjeri",
    location: "Gradačac",
    material: "CNC profilisani lakirani MDF • Antik mesing ručkice • Blum Blumotion",
    description:
      "Kuhinja u retro stilu od kvalitetnog medijapana, visoki sjaj u bijeloj boji. Elegantan i bezvremenski izgled, profinjena estetika, pažljivo osmišljen dizajn i visoka funkcionalnost. Sjajne površine koje dodatno naglašavaju osjećaj čistoće, svjetlosti i prostranosti. Precizna izrada i kvalitetni materijali osiguravaju dugotrajnost i praktičnost u svakodnevnoj upotrebi.Hvala na ukazanom povjerenju!",
    coverImage: "/galerija/kuhinja-lakirani medijapan-retro/1.jpg",
    coverVideo: "/galerija/kuhinja-lakirani medijapan-retro/video.mp4",
    media: [
      { type: "video", url: "/galerija/kuhinja-lakirani medijapan-retro/video.mp4" },
      ...Array.from({ length: 13 }, (_, i) => ({
        type: "image" as const,
        url: `/galerija/kuhinja-lakirani medijapan-retro/${i + 1}.jpg`,
      })),
    ],
  },
  {
    id: 2,
    title: "Kuhinja Retro Medijapan — Visoki Sjaj",
    category: "kuhinje",
    categoryLabel: "Kuhinja po mjeri",
    location: "Tuzla",
    material: "Profilisani MDF u visokom sjaju (Mirror Gloss) • Soft-close usporivači",
    description:
      "Izuzetno atraktivan koncept koji kombinuje klasične profilacije sa visokim sjajem koji vizualno proširuje prostor i stvara zrcalni efekat pod ambijentalnim svjetlom. Donji elementi uključuju skrivene kutne mehanizme za maksimalno iskorištenje prostora i tiho zatvaranje bez lupanja.",
    coverImage: "/galerija/kuhinja-retro medijapan-visoki sjaj/1.jpg",
    coverVideo: "/galerija/kuhinja-retro medijapan-visoki sjaj/video.mp4",
    media: [
      { type: "video", url: "/galerija/kuhinja-retro medijapan-visoki sjaj/video.mp4" },
      ...Array.from({ length: 12 }, (_, i) => ({
        type: "image" as const,
        url: `/galerija/kuhinja-retro medijapan-visoki sjaj/${i + 1}.jpg`,
      })),
    ],
  },
  {
    id: 3,
    title: "Kuhinja Visoki Sjaj & Zlatni Hrast (Model 1)",
    category: "kuhinje",
    categoryLabel: "Kuhinja po mjeri",
    location: "Sarajevo",
    material: "Akril visoki sjaj • Egger Zlatni Hrast tekstura • Skriveni Gola profili",
    description:
      "Kuhinja po mjeri u bijelom visokom sjaju i toplim tonovima zlatnog hrasta.Prilagođena prostoru, izrađena s preciznošću i stilom. ",
    coverImage: "/galerija/kuhinja-visoki sjaj-zlatni hrast/1.jpg",
    coverVideo: "/galerija/kuhinja-visoki sjaj-zlatni hrast/video.mp4",
    media: [
      { type: "video", url: "/galerija/kuhinja-visoki sjaj-zlatni hrast/video.mp4" },
      ...Array.from({ length: 11 }, (_, i) => ({
        type: "image" as const,
        url: `/galerija/kuhinja-visoki sjaj-zlatni hrast/${i + 1}.jpg`,
      })),
    ],
  },
  {
    id: 4,
    title: "Kuhinja Visoki Sjaj & Zlatni Hrast (Model 2)",
    category: "kuhinje",
    categoryLabel: "Kuhinja po mjeri",
    location: "Brčko",
    material: "Besprijekorni visoki sjaj bez ručkica • Zlatni Hrast korpus i otok",
    description:
      "Kombinacija bezvremenske bijele boje na medijapanu i radne ploče u toplom tonu zlatnog hrasta. Crna granitna sudopera i diskretne crne ručke daju snažan kontrast i unose dozu sofisticiranosti u cjelokupan izgled. Precizno izrađena po mjeri – moderna, funkcionalna i estetski uravnotežena.",
    coverImage: "/galerija/kuhinja-visoki sjaj-zlatni hrast 2/1.jpg",
    coverVideo: "/galerija/kuhinja-visoki sjaj-zlatni hrast 2/video.mp4",
    media: [
      { type: "video", url: "/galerija/kuhinja-visoki sjaj-zlatni hrast 2/video.mp4" },
      ...Array.from({ length: 12 }, (_, i) => ({
        type: "image" as const,
        url: `/galerija/kuhinja-visoki sjaj-zlatni hrast 2/${i + 1}.jpg`,
      })),
    ],
  },
];

function ProjectCard({
  project,
  onClick,
  idx,
}: {
  project: ProjectItem;
  onClick: () => void;
  idx: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayback = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const stopPlayback = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: (idx % 6) * 0.06 }}
      onClick={onClick}
      onMouseEnter={startPlayback}
      onMouseLeave={stopPlayback}
      onTouchStart={startPlayback}
      className="group cursor-pointer rounded-3xl bg-[#121318] border border-white/5 hover:border-gold-accent/40 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/40">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          src={project.coverVideo}
          loop
          muted
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isPlaying ? "opacity-100 scale-105" : "opacity-0 pointer-events-none"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-[#121318]/20 to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none z-10">
          <div className="px-2.5 py-1 rounded-full bg-gold-accent/20 backdrop-blur-md border border-gold-accent/40 text-[10px] text-gold-accent flex items-center gap-1 font-semibold">
            <PlayCircle className="w-3.5 h-3.5 fill-gold-accent/30 text-gold-accent" />
            <span>Video & Slike</span>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-gray-300 flex items-center gap-1 font-mono">
            <Layers className="w-3 h-3 text-gold-accent" />
            <span>{project.media.length - 1} fotografija</span>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <Maximize2 className="w-4 h-4 text-gold-accent" />
        </div>

        <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[11px] text-gray-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5 z-10 pointer-events-none">
          <MapPin className="w-3 h-3 text-gold-accent" />
          <span>{project.location}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <span className="text-[10px] uppercase tracking-widest text-gold-accent font-semibold block mb-1">
          {project.categoryLabel}
        </span>
        <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-accent transition-colors leading-snug line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1.5 font-light line-clamp-2 leading-relaxed">
          {project.material}
        </p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("sve");
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

  // Modal
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const filteredProjects = projects.filter((item) =>
    activeTab === "sve" ? true : item.category === activeTab
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleTabChange = (cat: Category) => {
    setActiveTab(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setActiveMediaIndex(0);
  }, []);

  const nextMedia = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (!selectedProject) return;
      setActiveMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
    },
    [selectedProject]
  );

  const prevMedia = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (!selectedProject) return;
      setActiveMediaIndex((prev) =>
        prev === 0 ? selectedProject.media.length - 1 : prev - 1
      );
    },
    [selectedProject]
  );

  // Esc za izlaz, strelice za navigaciju
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        nextMedia();
      } else if (e.key === "ArrowLeft") {
        prevMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, closeModal, nextMedia, prevMedia]);

  return (
    <section id="galerija" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio radova</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Naša djela govore sama
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Pregledajte video snimke i fotografije gotovih kuhinja i enterijera.
          </p>
        </div>

        {/* Tabovi */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: "sve", label: "Svi radovi" },
            { id: "kuhinje", label: "Kuhinje po mjeri" },
            { id: "ormari", label: "Ugradbeni ormari" },
            { id: "stolovi", label: "Stolovi" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as Category)}
              className={`cursor-pointer px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gold-accent text-[#0d0e12] shadow-[0_0_20px_rgba(215,181,118,0.25)]"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 kolone x 2 reda */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
                onClick={() => openModal(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dugme "Više radova" */}
        {hasMore ? (
          <div className="mt-14 text-center">
            <button
              onClick={handleLoadMore}
              className="cursor-pointer inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-[#15171d] border border-gold-accent/40 text-gold-accent hover:bg-gold-accent hover:text-[#0d0e12] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)] group"
            >
              <span>Više radova</span>
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
            </button>
            <p className="text-[11px] text-gray-500 font-mono mt-3">
              Prikazano {visibleProjects.length} od {filteredProjects.length} radova
            </p>
          </div>
        ) : filteredProjects.length > INITIAL_COUNT ? (
          <div className="mt-12 text-center text-xs text-gray-500 font-mono">
            Prikazani su svi dostupni radovi iz ove kategorije.
          </div>
        ) : null}
      </div>

      {/* POPUP / MODALNI PREGLED */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#121318] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-gold-accent hover:text-black transition-all"
                title="Zatvori (Esc)"
                aria-label="Zatvori (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
                {selectedProject.media[activeMediaIndex].type === "video" ? (
                  <video
                    key={selectedProject.media[activeMediaIndex].url}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src={selectedProject.media[activeMediaIndex].url} type="video/mp4" />
                    Vaš preglednik ne podržava video.
                  </video>
                ) : (
                  <Image
                    key={selectedProject.media[activeMediaIndex].url}
                    src={selectedProject.media[activeMediaIndex].url}
                    alt={selectedProject.title}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                )}

                <button
                  onClick={prevMedia}
                  className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-gold-accent hover:text-black transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextMedia}
                  className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-gold-accent hover:text-black transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-black/60 px-4 py-2.5 border-t border-white/5 flex items-center gap-2 overflow-x-auto">
                {selectedProject.media.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                      activeMediaIndex === idx
                        ? "border-gold-accent scale-105"
                        : "border-white/10 opacity-50 hover:opacity-90"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="w-full h-full bg-[#1b1d24] flex items-center justify-center text-gold-accent">
                        <VideoIcon className="w-4 h-4" />
                      </div>
                    ) : (
                      <Image
                        src={item.url}
                        alt="Thumbnail"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    )}
                  </button>
                ))}
                <span className="text-[11px] text-gray-400 font-mono ml-auto pr-2 shrink-0">
                  {activeMediaIndex + 1} / {selectedProject.media.length}
                </span>
              </div>

              <div className="p-5 sm:p-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 bg-[#15171d] border-t border-white/5 overflow-y-auto">
                <div className="space-y-1.5 max-w-2xl">
                  <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
                    {selectedProject.categoryLabel} • {selectedProject.location}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-gold-accent/80 font-medium">
                    {selectedProject.material}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed pt-1">
                    {selectedProject.description}
                  </p>
                </div>

                <a
                  href="#kalkulator"
                  onClick={closeModal}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-gold-accent text-[#0d0e12] hover:bg-white transition-all shrink-0 shadow-[0_0_20px_rgba(215,181,118,0.2)]"
                >
                  <span>Zatraži ponudu za slično</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}