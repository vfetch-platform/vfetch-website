"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "< 60s",
    label: "Item logged & searchable",
    sub: "vs. 4+ minutes manually",
  },
  {
    value: "40%",
    label: "Higher AI recognition accuracy",
    sub: "on real-world venue photos",
  },
  {
    value: "200+",
    label: "Countries covered for delivery",
    sub: "via our courier integration",
  },
  {
    value: "£0",
    label: "Cost to venues",
    sub: "free forever, no contracts",
  },
];

export function Stats() {
  return (
    <section className="py-16 bg-[#00685f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              <p className="text-white/50 text-xs">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
