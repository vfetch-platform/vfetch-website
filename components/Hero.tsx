"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCalendly } from "./CalendlyContext";

const dashboardStats = [
  ["Items today", "147"],
  ["Avg. log time", "42s"],
  ["Claims pending", "18"],
];

export function Hero() {
  const { open: openCalendly } = useCalendly();

  return (
    <section className="relative overflow-hidden bg-[#FAFBFC] pt-16 pb-0">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0D7B6C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-[#0D7B6C]/10 text-[#0D7B6C] mb-5 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D7B6C] animate-pulse" />
              Built for venue operations
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#111827] leading-[1.05] tracking-tight mb-6">
              AI-powered lost property management for venues
            </h1>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed max-w-lg">
              Reduce lost-property workload by up to 80% while helping guests recover
              items faster. VFetch helps hotels, stadiums, festivals and hospitality
              venues log items, verify claims and manage courier returns.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={openCalendly}
                className="bg-[#0D7B6C] hover:bg-[#0B6B5E] text-white rounded-xl px-7 py-3.5 font-bold transition-colors shadow-lg shadow-[#0D7B6C]/20"
              >
                Book Demo
              </button>
              <Link
                href="/for-venues"
                className="border border-[#9CA3AF]/25 text-[#111827] hover:border-[#0D7B6C] hover:text-[#0D7B6C] rounded-xl px-7 py-3.5 font-bold transition-colors"
              >
                For Venues
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#9CA3AF]">
              <div className="flex items-center gap-1.5">
                <span className="text-[#0D7B6C] font-bold">✓</span>
                <span>Automated item logging</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#0D7B6C] font-bold">✓</span>
                <span>85%+ match accuracy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#0D7B6C] font-bold">✓</span>
                <span>Secure courier returns</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="rounded-3xl bg-[#111827] shadow-2xl shadow-[#111827]/20 overflow-hidden border border-[#111827]">
                <div className="bg-[#0B6B5E] px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-md h-5 mx-4" />
                  <span className="hidden sm:block text-xs font-bold text-white/70">
                    Venue dashboard
                  </span>
                </div>
                <div className="bg-white p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {dashboardStats.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl bg-[#0D7B6C]/5 border border-[#0D7B6C]/10 p-3"
                      >
                        <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-2xl font-extrabold text-[#111827]">{value}</p>
                      </div>
                    ))}
                  </div>
                  <Image
                    src="/ai_search.png"
                    alt="VFetch AI item logging dashboard"
                    width={720}
                    height={430}
                    className="rounded-2xl border border-[#9CA3AF]/25 shadow-sm w-full h-auto"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-[#9CA3AF]/25 p-4 max-w-[240px]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0D7B6C] mb-1">
                  Automated match
                </p>
                <p className="text-sm font-semibold text-[#111827]">
                  Guest notified, claim verified, courier label ready.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
