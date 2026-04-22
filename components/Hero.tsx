"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const marqueeItems = [
  "Hotels", "Pubs & Bars", "Hostels", "Stadiums", "Festivals",
  "Car Rentals", "Airbnbs", "Gyms", "Restaurants", "Conference Centres",
  "Hotels", "Pubs & Bars", "Hostels", "Stadiums", "Festivals",
  "Car Rentals", "Airbnbs", "Gyms", "Restaurants", "Conference Centres",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f9ff] pt-16 pb-0">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#89f5e7] rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#e2dfff] rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 md:pb-20">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full bg-[#89f5e7] text-[#00201d] mb-5 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00685f] animate-pulse" />
              AI-Powered Lost &amp; Found
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#111c2d] leading-[1.05] tracking-tight mb-6">
              Reconnect with{" "}
              <span className="text-[#00685f] italic">what matters.</span>
            </h1>
            <p className="text-lg text-[#3d4947] mb-8 leading-relaxed max-w-lg">
              VFetch uses AI matching and photo recognition to reunite people with
              their lost belongings at venues across the UK - in hours, not days.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/for-venues#contact"
                className="bg-[#00685f] hover:bg-[#005049] text-white rounded-xl px-7 py-3.5 font-bold transition-colors shadow-lg shadow-[#00685f]/20"
              >
                Get Started Free
              </Link>
              <Link
                href="/how-it-works"
                className="border border-[#bcc9c6] text-[#111c2d] hover:border-[#00685f] hover:text-[#00685f] rounded-xl px-7 py-3.5 font-bold transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#6d7a77]">
              <div className="flex items-center gap-1.5">
                <span className="text-[#00685f] font-bold">✓</span>
                <span>Free to search &amp; claim</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00685f] font-bold">✓</span>
                <span>85%+ match accuracy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00685f] font-bold">✓</span>
                <span>Courier delivery available</span>
              </div>
            </div>
          </motion.div>

          {/* Right: two-column photo card grid matching the design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative grid grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md">

              {/* Left column - offset down */}
              <div className="flex flex-col gap-4 pt-12">
                {/* Card 1: grayscale reported photo */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#d8e3fb] rounded-2xl p-3 shadow-lg -rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDmu4xtkjjrlkqJRKshFYf4P_5QncJAMZjL1uRq_-6Lo64-PsdzkS3mlIZCmBGxcZi4W3Imf4vYVym8wFl4j377fVh7Dy1BHDbbOPljsgrkz9q_6cVWN6p7JWe0IJdhV1cv3Y2Ay02uN4kMF_dqcNYwpY_mUho6z70ayLLPKgU1-KcDfpbw_by48dRka8PpOXBB02ZffeAYecSyn1CFpHRogF_SNztAbzTHkru0hagZAPVXrloSsN8AJKmJXNjr4RXSjUFfRjG2yo"
                    alt="Lost keys reported"
                    className="w-full h-36 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#6d7a77]">PHOTO_01</span>
                    <span className="bg-red-100 text-red-600 text-[9px] px-2 py-0.5 rounded-full font-black">REPORTED</span>
                  </div>
                </motion.div>

                {/* Card 2: AI analyzing progress bar */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border border-[#89f5e7]/30 rotate-2 hover:rotate-0 transition-transform duration-500"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#00685f] animate-pulse" />
                    <span className="text-[9px] font-black tracking-widest text-[#00685f] uppercase">Analyzing photo...</span>
                  </div>
                  <div className="h-2 bg-[#f0f3ff] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00685f] w-3/4 rounded-full" />
                  </div>
                </motion.div>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4">
                {/* Card 3: colour matched photo */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#d8e3fb] rounded-2xl p-3 shadow-lg rotate-6 hover:rotate-0 transition-transform duration-500"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDmu4xtkjjrlkqJRKshFYf4P_5QncJAMZjL1uRq_-6Lo64-PsdzkS3mlIZCmBGxcZi4W3Imf4vYVym8wFl4j377fVh7Dy1BHDbbOPljsgrkz9q_6cVWN6p7JWe0IJdhV1cv3Y2Ay02uN4kMF_dqcNYwpY_mUho6z70ayLLPKgU1-KcDfpbw_by48dRka8PpOXBB02ZffeAYecSyn1CFpHRogF_SNztAbzTHkru0hagZAPVXrloSsN8AJKmJXNjr4RXSjUFfRjG2yo"
                    alt="Found keys matched"
                    className="w-full h-36 object-cover rounded-xl"
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#6d7a77]">ITEM_MATCHED</span>
                    <span className="bg-[#89f5e7]/40 text-[#00685f] text-[9px] px-2 py-0.5 rounded-full font-black">MATCH 98%</span>
                  </div>
                </motion.div>

                {/* Card 4: Smart Verification badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-[#4b41e1] rounded-2xl p-5 shadow-xl"
                >
                  <svg className="text-white mb-2" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="text-sm font-bold text-white">Smart Verification</p>
                  <p className="text-[10px] text-white/70 mt-1 leading-relaxed">Our matching system confirmed the details automatically.</p>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-t border-[#e7eeff] bg-white py-5 overflow-hidden">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-[#6d7a77] mb-4">
          Built for every venue type
        </p>
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((name, i) => (
            <span key={i} className="text-xl font-bold text-slate-200 mx-8 flex-shrink-0">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
