"use client";

import React, { useState, useRef } from "react";
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
  Video as VideoIcon
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
      "Bezvremenski spoj tradicionalne elegancije i modernog komfora. Frontalni elementi izrađeni su od precizno glodanog medijapana lakiranog višeslojnim poliuretanskim lakom otpornim na vlagu. Unutrašnjost krase Blum Antaro soft-close ladice punog izvlačenja sa nosivošću do 65 kg i integrisana neutralna LED rasvjeta u donjoj zoni visećih elemenata.",
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
      "Topli kontrast modernog hladnog akrila i prirodne teksture hrasta. Radna ploča debljine 38 mm usklađena je sa zidnim panelom bez vidljivih fugni, što znatno olakšava čišćenje. Kuhinja posjeduje usklađeni prostor za ugradbene aparate, duboke ostavinske ladice i diskretne LED profile urezane u korpus.",
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
      "Arhitektonski osmišljen prostor sa centralnim kuhinjskim otokom koji služi i kao šank i radna površina. Potpuni 'handleless' dizajn postiže se aluminijumskim profilima za otvaranje po cijeloj dužini. Opremljena integrisanim izvlačnim kantama za otpad i organizatorima pribora od prirodnog masiva.",
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

// Pomoćna komponenta za svaku karticu (rješava play/pause na hover i prikazuje poster sliku)
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

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: idx * 0.05 }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer rounded-3xl bg-[#121318] border border-white/5 hover:border-gold-accent/40 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
        {/* Pozadinska slika (1.jpg) koja garantuje da NIKADA nema crnog ekrana */}
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video sloj koji se pokreće automatski na hover ili dodir */}
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

        {/* Gradient preliv */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-[#121318]/20 to-transparent pointer-events-none" />

        {/* Bedževi gore */}
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

        {/* Lokacija */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[11px] text-gray-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5 z-10 pointer-events-none">
          <MapPin className="w-3 h-3 text-gold-accent" />
          <span>{project.location}</span>
        </div>
      </div>

      {/* Tekst na kartici */}
      <div className="p-6 sm:p-7">
        <span className="text-[10px] uppercase tracking-widest text-gold-accent font-semibold block mb-1">
          {project.categoryLabel}
        </span>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-accent transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 mt-2 font-light line-clamp-2 leading-relaxed">
          {project.material}
        </p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("sve");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Modal stanje
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const filteredProjects = projects.filter((item) =>
    activeTab === "sve" ? true : item.category === activeTab
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = (cat: Category) => {
    setActiveTab(cat);
    setCurrentPage(1);
  };

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveMediaIndex(0);
  };

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveMediaIndex((prev) =>
      prev === 0 ? selectedProject.media.length - 1 : prev - 1
    );
  };

  return (
    <section id="galerija" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Zaglavlje */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio radova</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Naša djela govore sama
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Pređite mišem preko kuhinje za video pregled ili kliknite za kompletnu galeriju fotografija i detaljan opis.
          </p>
        </div>

        {/* Filter tabovi */}
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

        {/* KARTICE */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
                onClick={() => openModal(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Paginacija */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="cursor-pointer p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-gold-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`cursor-pointer w-9 h-9 rounded-full text-xs font-semibold transition-all ${
                  currentPage === i + 1
                    ? "bg-gold-accent text-[#0d0e12] font-bold shadow"
                    : "bg-white/5 border border-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="cursor-pointer p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-gold-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* POPUP / MODALNI PREGLED (PUN VIDEO + SLIKE + DETALJAN OPIS) */}
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
              {/* Dugme za zatvaranje */}
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-gold-accent hover:text-black transition-all"
                aria-label="Zatvori"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Glavni prikaz u modalu (Video ili Slika) */}
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

                {/* Strelice lijevo / desno */}
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

              {/* Mini thumbnails traka */}
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

              {/* Detaljni opis */}
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