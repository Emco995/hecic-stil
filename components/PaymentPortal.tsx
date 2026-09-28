"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  Receipt, 
  CheckCircle2, 
  ArrowRight,
  FileCheck
} from "lucide-react";

export default function PaymentPortal() {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Ovdje ćemo na kraju povezati pravi Stripe Checkout ili PayPal pop-up
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1200);
  };

  return (
    <section id="placanje" className="py-24 bg-[#0a0b0d] relative overflow-hidden">
      {/* Pozadinski svjetlosni akcent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gold-accent/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-gold-accent text-xs uppercase tracking-widest font-semibold mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Sigurna naplata radova</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Plaćanje gotovih projekata
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Izvršite sigurnu uplatu preostalog iznosa za montiranu kuhinju ili namještaj putem kartice ili PayPal-a.
          </p>
        </div>

        <div className="bg-[#121318] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {!isPaid ? (
            <form onSubmit={handlePay} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Broj ugovora ili predračuna */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5 text-gold-accent" />
                    <span>Broj predračuna / ugovora</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="npr. HS-2026-01"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-gold-accent transition-colors"
                  />
                </div>

                {/* Ime kupca */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                    Ime i prezime kupca
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ime i prezime s ugovora"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-gold-accent transition-colors"
                  />
                </div>
              </div>

              {/* Iznos za plaćanje */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Iznos za uplatu (KM)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    step="any"
                    required
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-4 pr-16 py-3.5 rounded-xl bg-black/40 border border-white/10 text-xl font-bold text-white placeholder-gray-600 focus:outline-none focus:border-gold-accent transition-colors"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gold-accent bg-white/5 px-2.5 py-1 rounded-md">
                    KM
                  </div>
                </div>
              </div>

              {/* Odabir načina plaćanja */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Odaberite kanal naplate:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Kartica / Stripe */}
                  <div
                    onClick={() => setPaymentMethod("card")}
                    className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition-all ${
                      paymentMethod === "card"
                        ? "border-gold-accent bg-gold-accent/10 shadow-[0_0_15px_rgba(215,181,118,0.15)]"
                        : "border-white/10 bg-black/20 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-accent">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Kreditna / Debitna kartica</p>
                        <p className="text-[11px] text-gray-400">Visa, Mastercard, Maestro (Stripe)</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "card" ? "border-gold-accent" : "border-gray-600"}`}>
                      {paymentMethod === "card" && <div className="w-2 h-2 rounded-full bg-gold-accent" />}
                    </div>
                  </div>

                  {/* PayPal */}
                  <div
                    onClick={() => setPaymentMethod("paypal")}
                    className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition-all ${
                      paymentMethod === "paypal"
                        ? "border-gold-accent bg-gold-accent/10 shadow-[0_0_15px_rgba(215,181,118,0.15)]"
                        : "border-white/10 bg-black/20 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-accent">
                        <span className="font-serif italic font-extrabold text-base">P</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">PayPal Račun</p>
                        <p className="text-[11px] text-gray-400">Brzo i zaštićeno online plaćanje</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "paypal" ? "border-gold-accent" : "border-gray-600"}`}>
                      {paymentMethod === "paypal" && <div className="w-2 h-2 rounded-full bg-gold-accent" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sigurnosna napomena */}
              <div className="flex items-center gap-2 text-[11px] text-gray-400 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transakcija je kriptovana 256-bitnom SSL zaštitom. Podaci kartice se ne čuvaju na serveru.</span>
              </div>

              {/* Dugme za plaćanje */}
              <button
                type="submit"
                disabled={isProcessing}
                className="cursor-pointer w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-gold-accent text-[#0d0e12] hover:bg-white transition-all shadow-[0_0_25px_rgba(215,181,118,0.25)] flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Obrada u toku...</span>
                ) : (
                  <>
                    <span>Plati račun {amount ? `(${amount} KM)` : ""}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Uspješno plaćanje prikaz */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gold-accent/20 border border-gold-accent flex items-center justify-center mx-auto text-gold-accent">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Uplata je uspješno evidentirana!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Hvala vam, <strong>{clientName}</strong>. Za predračun <strong>#{invoiceNumber}</strong> proknjižena je uplata od <strong>{amount} KM</strong>. Potvrda je poslana na vašu evidenciju.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsPaid(false);
                    setAmount("");
                    setInvoiceNumber("");
                  }}
                  className="cursor-pointer px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-gray-300 hover:text-white hover:border-gold-accent transition-all"
                >
                  Nova uplata
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}