"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "85%+",
    label: "Match accuracy",
    sub: "Using AI-powered item recognition",
  },
  {
    value: "<60s",
    label: "Average item registration",
    sub: "Photo-first logging for staff",
  },
  {
    value: "200+",
    label: "Countries supported",
    sub: "For courier returns",
  },
];

export function Stats() {
  return (
    <section className="py-16 bg-[#0D7B6C]" aria-label="VFetch trust signals">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-10">
          Launching with UK hospitality and event venues
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <p className="text-4xl sm:text-5xl font-extrabold mb-1 tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/90 text-sm font-semibold leading-snug mb-1">{stat.label}</p>
              <p className="text-white/65 text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
