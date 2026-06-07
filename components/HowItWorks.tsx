"use client";
import { motion } from "framer-motion";
import { Camera, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Snap",
    subtitle: "AI Extraction",
    description:
      "Take a quick photo of the found item. VFetch AI instantly extracts visual details - category, colour, brand, and model - to create a digital fingerprint for matching.",
    iconColor: "bg-[#EAF7F4] text-[#0D7B6C]",
    accentColor: "text-[#0D7B6C]",
    cardBg: "bg-[#F2FAF8] border-[#D1F0EB]",
  },
  {
    icon: Cpu,
    title: "Match",
    subtitle: "Algorithm + AI",
    description:
      "Our intelligent algorithm scans thousands of listings in milliseconds. AI correlates descriptions and visual patterns to find the best match across all venues.",
    iconColor: "bg-[#FEF9EC] text-[#D97706]",
    accentColor: "text-[#D97706]",
    cardBg: "bg-[#FEFCF3] border-[#FDF5D6]",
  },
  {
    icon: CheckCircle,
    title: "Reconnect",
    subtitle: "Fast Return",
    description:
      "Once a match is confirmed, the owner is notified instantly. Choose to collect in person or have it shipped anywhere in the world - via Royal Mail, DPD, and more.",
    iconColor: "bg-[#EAF7F4] text-[#0D7B6C]",
    accentColor: "text-[#0D7B6C]",
    cardBg: "bg-[#F2FAF8] border-[#D1F0EB]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Simple 3-Step Recovery
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            From lost to found in three steps - powered by AI, built for speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <div className="text-7xl font-black text-[#9CA3AF]/50 mb-4 leading-none">
                0{i + 1}
              </div>
              <div className={`${step.cardBg} rounded-3xl p-8 border flex-1 hover:shadow-md transition-shadow`}>
                <div className={`w-14 h-14 rounded-2xl ${step.iconColor} flex items-center justify-center mb-6`}>
                  <step.icon size={26} />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-1">{step.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${step.accentColor} mb-4`}>
                  {step.subtitle}
                </p>
                <p className="text-[#6B7280] leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
