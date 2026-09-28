"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ZoomIn, 
  Sparkles, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Layers
} from "lucide-react";

type ProjectCategory = "sve" | "kuhinje" | "ormari" | "stolovi";

interface Project {
  id: number;
  title: string;
  category: "kuhinje" | "ormari" | "stolovi";
  categoryLabel: string;
  // Glavna naslovna slika za karticu
  coverImage: string;
  // Niz od 6-7 slika koje se prikazuju kada se projekt otvori
  galleryImages: string[];
  dimensions: string;
  materials: string[];
  description: string;
}

// Ovdje ćeš lako zamijeniti linkove sa stvarnim slikama tvog prijatelja (npr. '/radovi/kuhinja-1.jpg')
const projects: Project[] = [
  {
    id: 1,
    title: "Matte Black & Zlatni Hrast",
    category: "kuhinje",
    categoryLabel: "Kuhinja po mjeri",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "L-oblik (3.8m x 2.4m)",
    materials: ["MDF mat lakirani", "Prirodni furnir hrasta", "Blum Tip-On okovi"],
    description: "Kuhinja modernog minimalističkog koncepta bez ručkica sa skrivenim LED profilima i radnom pločom od kvarca.",
  },
  {
    id: 2,
    title: "Smoked Oak Garderober",
    category: "ormari",
    categoryLabel: "Ugradbeni ormar",
    coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "Zidni front 3.2m x 2.7m",
    materials: ["Dimljeno staklo sa brončanim tonom", "Alu profili crni mat", "Unutrašnja senzorska rasvjeta"],
    description: "Prostrani garderober sa kliznim staklenim stijenama i pametno organiziranim ladicama za modne dodatke.",
  },
  {
    id: 3,
    title: "Monolitni Blagovaonski Stol",
    category: "stolovi",
    categoryLabel: "Stol",
    coverImage: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "240cm x 100cm (za 8 do 10 osoba)",
    materials: ["Masiv masivnog hrasta (45mm)", "Plastificirana čelična X konstrukcija"],
    description: "Unikatan trpezarijski stol izrađen od pažljivo sušenog hrasta i zaštićen ekološkim mat uljem sa visokom otpornošću na habanje.",
  },
  {
    id: 4,
    title: "Antracit Kuhinja s Otokom",
    category: "kuhinje",
    categoryLabel: "Kuhinja po mjeri",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "Kuhinja 4.2m + Otok 2.6m",
    materials: ["Fenix NTM anti-fingerprint", "Integrirana bora napa", "LED soft-ambient rasvjeta"],
    description: "Kuhinjski otok sa šankom i integriranim kuhalištem. Površine su tretirane nanotehnologijom protiv otisaka prstiju.",
  },
  {
    id: 5,
    title: "Minimalist Ulazni Ormar",
    category: "ormari",
    categoryLabel: "Ugradbeni ormar",
    coverImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "Visina do stropa 2.85m",
    materials: ["Kašmir sivi MDF", "Hettich skrivene vodilice", "Ogledalo sa zatamnjenjem"],
    description: "Kompaktan ulazni ormar sa skrivenim cipelarom, sjedištem i ogledalom s pozadinskim toplim svjetlom.",
  },
  {
    id: 6,
    title: "Klupski Stol 'Artisan'",
    category: "stolovi",
    categoryLabel: "Stol",
    coverImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "Set od 2 stolića (Ø80cm i Ø60cm)",
    materials: ["Mramorni kompozit", "Zlatno četkani metal"],
    description: "Elegantan duo stolića za dnevni boravak koji se mogu djelomično uvlačiti jedan pod drugi za uštedu prostora.",
  },
  {
    id: 7,
    title: "Bijela Mat Kuhinja sa Šankom",
    category: "kuhinje",
    categoryLabel: "Kuhinja po mjeri",
    coverImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "Front 3.5m + Šank 2m",
    materials: ["Supermat akril", "Egervood radna ploča", "Blum Legrabox ladice"],
    description: "Čista bijela linija koja otvara prostor, oplemenjena toplim drvenim dekorom na pultu i polici za začine.",
  },
  {
    id: 8,
    title: "Walk-in Garderober po Mjeri",
    category: "ormari",
    categoryLabel: "Ugradbeni ormar",
    coverImage: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    ],
    dimensions: "Kompletna soba 3.0m x 2.2m",
    materials: ["Tamno sivi iveral s teksturom tekstila", "Vješalice s integriranim LED svjetlom"],
    description: "Potpuno organizirana zasebna garderoba sa otvorenim policama, ladicama sa staklenim frontama i ogledalom od poda do stropa.",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("sve");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Stanje za modal i trenutnu sliku unutar modala
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filtriranje
  const filteredProjects =
    activeFilter === "sve"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Paginacija kalkulacija
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (cat: ProjectCategory) => {
    setActiveFilter(cat);
    setCurrentPage(1); // Resetiraj na prvu stranicu kad promijeniš kategoriju
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const galleryEl = document.getElementById("galerija");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
    );
  };

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: "sve", label: "Svi radovi" },
    { id: "kuhinje", label: "Kuhinje po mjeri" },
    { id: "ormari", label: "Ugradbeni ormari" },
    { id: "stolovi", label: "Stolovi" },
  ];

  return (
    <section id="galerija" className="py-24 bg-[#0a0b0d] relative overflow-hidden">
      {/* Blagi ambijentalni sjaj */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Naslov sekcije */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Naši radovi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Inspiracija za vaš prostor
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Kliknite na bilo koji projekt kako biste pregledali detaljnu galeriju i korištene materijale.
          </p>
        </div>

        {/* Filter Tabovi */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-[#0d0e12] font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gold-accent rounded-full -z-10 shadow-[0_0_15px_rgba(215,181,118,0.25)]"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Mreža sa glatkim kaskadnim prijelazom */}
        <motion.div 
          key={`${activeFilter}-${currentPage}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {paginatedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => openProjectModal(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#121318] border border-white/5 hover:border-gold-accent/40 transition-all duration-500 shadow-xl flex flex-col"
            >
              {/* Slika s hover zoom efektom */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 relative">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Indikator broja fotografija unutar projekta */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] text-white border border-white/10">
                  <Layers className="w-3 h-3 text-gold-accent" />
                  <span>{project.galleryImages.length} slika</span>
                </div>

                {/* Tag kategorije */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-black/60 backdrop-blur-md text-gold-accent border border-gold-accent/20">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Zoom ikona */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-gold-accent" />
                </div>
              </div>

              {/* Informacije */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-gold-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gold-accent/90 font-medium">
                  <span>Pogledaj galeriju projekta</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NUMERISANA PAGINACIJA */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-gold-accent/40 disabled:opacity-30 disabled:pointer-events-none transition-all"
              aria-label="Prethodna stranica"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-full text-xs font-semibold transition-all duration-300 ${
                    currentPage === pageNum
                      ? "bg-gold-accent text-[#0d0e12] shadow-[0_0_15px_rgba(215,181,118,0.3)]"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-gold-accent/40 disabled:opacity-30 disabled:pointer-events-none transition-all"
              aria-label="Sljedeća stranica"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* POPUP SLIDER / DETALJNI MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative max-w-5xl w-full bg-[#111216] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dugme za zatvaranje */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Zatvori"
              >
                <X className="w-4 h-4" />
              </button>

              {/* LIJEVA STRANA: SLIDER FOTOGRAFIJA */}
              <div className="lg:w-3/5 bg-black flex flex-col justify-between relative group/slider">
                {/* Glavna uvećana fotografija */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:h-[460px] w-full overflow-hidden flex items-center justify-center bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={selectedProject.galleryImages[activeImageIndex]}
                      alt={`${selectedProject.title} - slika ${activeImageIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full object-contain sm:object-cover"
                    />
                  </AnimatePresence>

                  {/* Strelice za navigaciju slika */}
                  {selectedProject.galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all"
                        aria-label="Prethodna slika"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all"
                        aria-label="Sljedeća slika"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Brojač fotografija */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono border border-white/10">
                    {activeImageIndex + 1} / {selectedProject.galleryImages.length}
                  </div>
                </div>

                {/* Minijature na dnu (Thumbnails) */}
                {selectedProject.galleryImages.length > 1 && (
                  <div className="p-3 bg-[#0d0e12] border-t border-white/5 flex items-center gap-2 overflow-x-auto">
                    {selectedProject.galleryImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                          activeImageIndex === i
                            ? "border-gold-accent scale-105"
                            : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* DESNA STRANA: SPECIFIKACIJE & CTA */}
              <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-gold-accent">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Detalji & Izrada:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                        <span><strong>Dimenzije:</strong> {selectedProject.dimensions}</span>
                      </li>
                      {selectedProject.materials.map((mat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href="#kontakt"
                    onClick={() => setSelectedProject(null)}
                    className="w-full inline-flex justify-center items-center py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-bold bg-gold-accent text-[#0d0e12] hover:bg-white transition-all shadow-[0_0_20px_rgba(215,181,118,0.25)]"
                  >
                    Zatraži ponudu za ovakav model
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}