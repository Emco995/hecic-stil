"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator as CalcIcon, 
  CreditCard, 
  Send, 
  Check, 
  Info,
  CalendarCheck
} from "lucide-react";

type ItemType = "kuhinja" | "ormar" | "stol";
type KitchenLayout = "ravna" | "l-oblik" | "u-oblik";
type MaterialTier = "standard" | "premium" | "luxury";

export default function Calculator() {
  const [itemType, setItemType] = useState<ItemType>("kuhinja");
  const [kitchenLayout, setKitchenLayout] = useState<KitchenLayout>("l-oblik");
  const [lengthMeters, setLengthMeters] = useState<number>(3.5);
  const [material, setMaterial] = useState<MaterialTier>("premium");

  // Form tab: 'upit' ili 'rezervacija'
  const [actionType, setActionType] = useState<"upit" | "rezervacija">("upit");
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal" | "gotovina">("stripe");

  // Podaci forme
  const [formData, setFormData] = useState({
    ime: "",
    telefon: "",
    grad: "",
    napomena: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Izračun okvirne cijene u KM
  const calculateEstimate = () => {
    let basePerMeter = 900;

    if (itemType === "ormar") basePerMeter = 650;
    if (itemType === "stol") return material === "luxury" ? 1800 : material === "premium" ? 1200 : 750;

    let multiplier = 1;
    if (kitchenLayout === "l-oblik") multiplier = 1.25;
    if (kitchenLayout === "u-oblik") multiplier = 1.55;

    let materialMultiplier = 1;
    if (material === "premium") materialMultiplier = 1.35;
    if (material === "luxury") materialMultiplier = 1.85;

    const total = Math.round(lengthMeters * basePerMeter * multiplier * materialMultiplier);
    return total;
  };

  const estimatedPrice = calculateEstimate();
  // Deterministički prikaz broja s tačkom kao razdjelnikom hiljada (sprječava SSR/Locale mismatch)
  const formattedPrice = estimatedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const mjerenjeFeeKM = 50;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="kalkulator" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gold-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Digitron & Mjerenje</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Izračunajte investiciju za vaš dom
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Odaberite opcije prema vašim mjerama za brzi izračun u KM ili odmah zakažite profesionalno mjerenje na adresi.
          </p>
        </div>

        <div className="bg-[#121318] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LIJEVA STRANA */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  1. Šta želite opremiti?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "kuhinja", label: "Kuhinja" },
                    { id: "ormar", label: "Ugradbeni ormar" },
                    { id: "stol", label: "Stol po mjeri" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setItemType(t.id as ItemType)}
                      className={`py-3 px-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                        itemType === t.id
                          ? "bg-gold-accent text-[#0d0e12] shadow-[0_0_15px_rgba(215,181,118,0.25)]"
                          : "bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {itemType === "kuhinja" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    2. Oblik kuhinje
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "ravna", label: "Ravna (1 zid)" },
                      { id: "l-oblik", label: "L-oblik" },
                      { id: "u-oblik", label: "U-oblik / Otok" },
                    ].map((layout) => (
                      <button
                        key={layout.id}
                        type="button"
                        onClick={() => setKitchenLayout(layout.id as KitchenLayout)}
                        className={`py-3 px-2 rounded-xl text-xs font-medium transition-all ${
                          kitchenLayout === layout.id
                            ? "border border-gold-accent text-gold-accent bg-gold-accent/10"
                            : "bg-white/5 border border-transparent text-gray-400 hover:text-white"
                        }`}
                      >
                        {layout.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {itemType !== "stol" && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Okvirna dužina prostora:
                    </label>
                    <span className="text-sm font-bold text-gold-accent">
                      {lengthMeters.toFixed(1)} m
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="8.0"
                    step="0.1"
                    value={lengthMeters}
                    onChange={(e) => setLengthMeters(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none accent-gold-accent"
                  />
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-mono">
                    <span>1.5m</span>
                    <span>4.5m</span>
                    <span>8.0m</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Nivo završne obrade i okova:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "standard", title: "Standard", sub: "Kvalitetan iveral & Blum" },
                    { id: "premium", title: "Premium", sub: "MDF mat lakirani" },
                    { id: "luxury", title: "Exclusive", sub: "Fenix / Furnir / Kvarc" },
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setMaterial(mat.id as MaterialTier)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        material === mat.id
                          ? "border-gold-accent bg-gold-accent/10"
                          : "border-white/5 bg-white/[0.02] hover:bg-white/5"
                      }`}
                    >
                      <p className={`text-xs font-bold uppercase ${material === mat.id ? "text-gold-accent" : "text-white"}`}>
                        {mat.title}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">{mat.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* DESNA STRANA */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#181a20] border border-white/5 rounded-2xl p-6 sm:p-7">
              <div>
                <div className="pb-6 border-b border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400">
                    Procijenjeni raspon investicije
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      ~ {formattedPrice}
                    </span>
                    <span className="text-xl font-bold text-gold-accent">KM</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-gold-accent shrink-0" />
                    <span>Uključuje izradu, dostavu i kompletnu montažu.</span>
                  </p>
                </div>

                <div className="mt-6 flex rounded-xl bg-black/40 p-1 border border-white/5">
                  <button
                    type="button"
                    onClick={() => setActionType("upit")}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      actionType === "upit"
                        ? "bg-white/10 text-white shadow"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Besplatan upit
                  </button>
                  <button
                    type="button"
                    onClick={() => setActionType("rezervacija")}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      actionType === "rezervacija"
                        ? "bg-gold-accent text-[#0d0e12] font-bold shadow"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Mjerenje ({mjerenjeFeeKM} KM)</span>
                  </button>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Vaše ime i prezime"
                        value={formData.ime}
                        onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="Broj telefona"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-accent transition-colors"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Grad / Lokacija"
                        value={formData.grad}
                        onChange={(e) => setFormData({ ...formData, grad: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>

                    {actionType === "rezervacija" && (
                      <div className="pt-2">
                        <p className="text-[11px] text-gray-400 mb-2 font-medium">
                          Način uplate kapare za mjerenje ({mjerenjeFeeKM} KM):
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod("stripe")}
                            className={`py-2 px-1 text-[10px] uppercase font-bold rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${
                              paymentMethod === "stripe"
                                ? "border-gold-accent bg-gold-accent/15 text-gold-accent"
                                : "border-white/5 bg-black/20 text-gray-400"
                            }`}
                          >
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Kartica</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod("paypal")}
                            className={`py-2 px-1 text-[10px] uppercase font-bold rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${
                              paymentMethod === "paypal"
                                ? "border-gold-accent bg-gold-accent/15 text-gold-accent"
                                : "border-white/5 bg-black/20 text-gray-400"
                            }`}
                          >
                            <span className="font-serif italic font-extrabold text-xs">P</span>
                            <span>PayPal</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod("gotovina")}
                            className={`py-2 px-1 text-[10px] uppercase font-bold rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${
                              paymentMethod === "gotovina"
                                ? "border-gold-accent bg-gold-accent/15 text-gold-accent"
                                : "border-white/5 bg-black/20 text-gray-400"
                            }`}
                          >
                            <span>💵</span>
                            <span>Na terenu</span>
                          </button>
                        </div>
                        <p className="text-[10px] text-gold-accent/80 mt-2 italic">
                          * Iznos od 50 KM se u potpunosti odbija od konačnog računa pri realizaciji posla.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full mt-4 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-bold bg-gold-accent text-[#0d0e12] hover:bg-white transition-all shadow-[0_0_20px_rgba(215,181,118,0.25)]"
                    >
                      {actionType === "rezervacija" ? (
                        <>
                          <span>Zakaži mjerenje ({mjerenjeFeeKM} KM)</span>
                          <CalendarCheck className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Pošalji besplatan upit</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 rounded-2xl bg-white/[0.03] border border-gold-accent/30 text-center space-y-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold-accent text-[#0d0e12] flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white">Upit uspješno poslan!</h4>
                    <p className="text-xs text-gray-300">
                      Hvala vam, {formData.ime || "na ukazanom povjerenju"}. Kontaktirat ćemo vas na broj telefona unutar 24h sa detaljnim prijedlogom.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-[11px] uppercase tracking-wider text-gold-accent hover:underline pt-2 block mx-auto"
                    >
                      Novi proračun
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}