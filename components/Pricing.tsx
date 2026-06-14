"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useCalendly } from "./CalendlyContext";

const venuePricing = [
  "Free setup",
  "No software subscription",
  "Owners pay a small recovery fee when claiming items",
  "Courier return options available for guests",
];

export function Pricing() {
  const { open: openCalendly } = useCalendly();

  return (
    <section id="pricing" className="py-24 bg-[#F3F4F6]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-[#0D7B6C] mb-3">
            Simple pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Low-friction for venues. Clear for guests.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            VFetch is designed to remove lost-property admin without adding another
            software bill to every location.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-[#9CA3AF]/25 shadow-sm p-8 sm:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <p className="text-sm font-bold text-[#0D7B6C] uppercase tracking-widest mb-3">
                For venues
              </p>
              <h3 className="text-3xl font-extrabold text-[#111827] mb-3">
                Free setup, no subscription
              </h3>
              <p className="text-[#6B7280] leading-relaxed max-w-xl">
                Venue teams get the operational platform. Item owners pay a small
                recovery fee when they claim, with optional courier costs handled at checkout.
              </p>
            </div>
            <button
              onClick={openCalendly}
              className="bg-[#0D7B6C] hover:bg-[#0B6B5E] text-white rounded-xl px-7 py-3.5 font-bold transition-colors shadow-lg shadow-[#0D7B6C]/20 shrink-0"
            >
              Book Demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {venuePricing.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#0D7B6C]/5 p-4">
                <CheckCircle2 className="text-[#0D7B6C] shrink-0" size={18} />
                <span className="text-sm font-semibold text-[#111827]">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
