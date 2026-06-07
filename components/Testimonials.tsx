"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "photo_camera",
    title: "Photo-first logging",
    body: "Staff take one photo. Our AI extracts the category, colour, brand, and model automatically. No typing, no inconsistent descriptions.",
  },
  {
    icon: "search",
    title: "Semantic matching",
    body: "Guests search in plain English. Our engine matches vague descriptions like \"black jacket with something in the pocket\" to precise logged records.",
  },
  {
    icon: "inventory_2",
    title: "Packaging included",
    body: "We supply venues with packing materials so every item is securely packaged before it ships. No hunting for a box - everything is ready to go.",
  },
  {
    icon: "local_shipping",
    title: "International courier",
    body: "Our courier integration means owners anywhere in the world can get their item back. Royal Mail, DPD, and more - label generated automatically.",
  },
  {
    icon: "verified_user",
    title: "Verified claims only",
    body: "Every claim is reviewed by venue staff before anything is released. A small fee filters for genuine claimants. The venue always has the final say.",
  },
  {
    icon: "currency_pound",
    title: "Pricing that scales",
    body: "Pay only for what your venue needs. Pricing is based on capacity, with tiers designed for venues of all sizes.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Built differently
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Every part of VFetch is designed to make lost property effortless - for venues and for guests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${i % 2 === 0 ? "bg-[#EAF7F4] border-[#C8EDE8]" : "bg-[#FEF9EC] border-[#FDF0C0]"} rounded-3xl border p-8 hover:shadow-md transition-shadow`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 text-white ${i % 2 === 0 ? "bg-[#0D7B6C]" : "bg-[#D97706]"}`}
              >
                <span className="material-symbols-outlined text-xl">{r.icon}</span>
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2">{r.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
