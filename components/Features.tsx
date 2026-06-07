"use client";
import { motion } from "framer-motion";
import { Camera, Bell, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Vision Search",
    description:
      "Upload a photo and our AI instantly identifies your item - category, brand, colour, and model auto-filled. No manual typing needed.",
    gradient: "from-[#0D7B6C] to-[#0B6B5E]",
    bg: "bg-[#89f5e7]/10",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Get notified the second a match is found. Email alerts delivered instantly when a venue logs an item that matches your search.",
    gradient: "from-[#D97706] to-[#F59E0B]",
    bg: "bg-[#FEF3C7]/40",
  },
  {
    icon: ShieldCheck,
    title: "Secure Claims",
    description:
      "Verified ownership process keeps your item safe. PCI-compliant Stripe payments. Your card data is never stored on our servers.",
    gradient: "from-[#0D7B6C] to-[#0B6B5E]",
    bg: "bg-[#89f5e7]/10",
  },
  {
    icon: Truck,
    title: "Courier Delivery",
    description:
      "Can't get to the venue? We integrate with leading couriers - choose Royal Mail, DPD, and more. Real-time tracking included.",
    gradient: "from-[#D97706] to-[#F59E0B]",
    bg: "bg-[#FEF3C7]/40",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Why VFetch?
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            We&apos;ve reimagined lost and found from the ground up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`${f.bg} rounded-3xl border border-[#E5E7EB] p-8 hover:shadow-lg hover:-translate-y-1 transition-all`}
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-5`}
              >
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-3">{f.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
