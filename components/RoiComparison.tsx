"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const comparisons = [
  ["Manual spreadsheets", "AI-powered item logging"],
  ["Staff answering calls", "Automated guest notifications"],
  ["Lost items sitting for months", "Faster recovery workflows"],
  ["Manual courier coordination", "Integrated shipping options"],
  ["Difficult ownership verification", "Secure claim approval flow"],
];

export function RoiComparison() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-[#0D7B6C] mb-3">
            Why venue teams choose VFetch
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Replace lost-property admin with an operational workflow.
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            VFetch is designed for front-desk, guest services, security and operations teams
            that need fewer interruptions, cleaner records and faster guest resolutions.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-[#9CA3AF]/25 bg-[#FAFBFC]">
          <div className="grid grid-cols-[1fr_auto_1fr] bg-[#0D7B6C] text-white px-5 sm:px-8 py-4 text-sm font-bold">
            <span>Before VFetch</span>
            <span className="sr-only">Becomes</span>
            <span>With VFetch</span>
          </div>
          {comparisons.map(([before, after], i) => (
            <motion.div
              key={before}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center px-5 sm:px-8 py-5 border-t border-[#9CA3AF]/25"
            >
              <p className="text-sm sm:text-base font-semibold text-[#6B7280]">{before}</p>
              <ArrowRight className="text-[#0D7B6C]" size={20} aria-hidden="true" />
              <p className="text-sm sm:text-base font-bold text-[#111827] flex items-center gap-2">
                <CheckCircle2 className="text-[#0D7B6C] shrink-0" size={18} aria-hidden="true" />
                {after}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
