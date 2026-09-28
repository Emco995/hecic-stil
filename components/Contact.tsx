"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  Check,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    ime: "",
    kontakt: "",
    poruka: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="kontakt" className="py-24 bg-[#0a0b0d] relative overflow-hidden">
      {/* Pozadinski svjetlosni akcent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-accent/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stupite u kontakt</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Pretvorite ideje u stvarnost
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Javite nam se za savjetovanje, dogovor oko 3D nacrta ili bilo kakva pitanja vezana za vaš novi enterijer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* LIJEVA STRANA: KONTAKT PODACI & DRUŠTVENE MREŽE */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#121318] border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white">
                Direktan kontakt
              </h3>

              <div className="space-y-5">
                {/* Telefon za direktan poziv */}
                <a
                  href="tel:+38761886715"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-accent/40 transition-colors group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Pozovite nas
                    </p>
                    <p className="text-sm font-bold text-white group-hover:text-gold-accent transition-colors mt-0.5">
                      +387 61 886 715
                    </p>
                    <span className="text-[10px] text-gray-500">Dostupni Pon - Sub (08:00 - 18:00)</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hecicstil@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-accent/40 transition-colors group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      E-mail adresa
                    </p>
                    <p className="text-sm font-bold text-white group-hover:text-gold-accent transition-colors mt-0.5">
                      hecicstil@gmail.com
                    </p>
                    <span className="text-[10px] text-gray-500">Odgovaramo unutar 24h</span>
                  </div>
                </a>

                {/* Adresa / Lokacija */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Lokacija & Radionica
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      25. Novembra br. 20
                    </p>
                    <span className="text-xs text-gold-accent/90 block mt-0.5 font-medium">
                      Gradačac 76250, BiH
                    </span>
                  </div>
                </div>
              </div>

              {/* Društvene mreže: Facebook plavi hover, Instagram gradient hover */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Pratite naš rad:
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Instagram sa autentičnim gradient stilom */}
                  <a
                    href="https://www.instagram.com/stolarijahecic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E1306C]/70 hover:bg-[#E1306C]/10 transition-all text-xs font-medium text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-[#E1306C] transition-colors fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="group-hover:text-white transition-colors">Instagram</span>
                  </a>

                  {/* Facebook sa originalnom plavom bojom (#1877F2) */}
                  <a
                    href="https://www.facebook.com/stolarijahecic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#1877F2]/70 hover:bg-[#1877F2]/10 transition-all text-xs font-medium text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-[#1877F2] transition-colors fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="group-hover:text-white transition-colors">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DESNA STRANA: BRZA FORMA ZA UPIT */}
          <div className="lg:col-span-7 bg-[#121318] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Pošaljite nam direktnu poruku
              </h3>
              <p className="text-xs text-gray-400 font-light mb-6">
                Opišite nam prostor koji uređujete ili ostavite pitanje, a naš majstor će vam se javiti.
              </p>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-1.5">
                        Vaše Ime
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ime i prezime"
                        value={formData.ime}
                        onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 text-xs focus:outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-1.5">
                        Telefon ili E-mail
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Broj telefona ili mail"
                        value={formData.kontakt}
                        onChange={(e) => setFormData({ ...formData, kontakt: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 text-xs focus:outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-1.5">
                      Kako vam možemo pomoći?
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Npr. Treba mi kuhinja po mjeri za novi stan u Gradačcu, dimenzije cca 3.5 metra..."
                      value={formData.poruka}
                      onChange={(e) => setFormData({ ...formData, poruka: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-600 text-xs focus:outline-none focus:border-gold-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-gold-accent text-[#0d0e12] hover:bg-white transition-all shadow-[0_0_20px_rgba(215,181,118,0.25)] flex items-center justify-center gap-2"
                  >
                    <span>Pošalji poruku</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gold-accent text-[#0d0e12] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">Poruka je poslana!</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Hvala vam, <strong>{formData.ime}</strong>. Odgovorit ćemo vam u najkraćem mogućem roku.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-[11px] text-gray-500">
              <Clock className="w-3.5 h-3.5 text-gold-accent" />
              <span>Prosječno vrijeme odgovora na upite je manje od 2 sata.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}