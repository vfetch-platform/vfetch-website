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
    color: "bg-[#89f5e7]/30 text-[#00685f]",
    accentColor: "text-[#00685f]",
  },
  {
    icon: Cpu,
    title: "Match",
    subtitle: "Algorithm + AI",
    description:
      "Our intelligent algorithm scans thousands of listings in milliseconds. AI correlates descriptions and visual patterns to find the best match across all venues.",
    color: "bg-[#e2dfff]/50 text-[#4b41e1]",
    accentColor: "text-[#4b41e1]",
  },
  {
    icon: CheckCircle,
    title: "Reconnect",
    subtitle: "Fast Return",
    description:
      "Once a match is confirmed, the owner is notified instantly. Choose to collect in person or have it shipped anywhere in the world - via Royal Mail, DPD, and more.",
    color: "bg-[#ffd8e7]/30 text-[#a12e70]",
    accentColor: "text-[#a12e70]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f0f3ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111c2d] tracking-tight mb-4">
            Simple 3-Step Recovery
          </h2>
          <p className="text-[#3d4947] text-lg max-w-xl mx-auto">
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
              <div className="text-7xl font-black text-[#bcc9c6]/40 mb-4 leading-none">
                0{i + 1}
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e7eeff] flex-1 hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6`}>
                  <step.icon size={26} />
                </div>
                <h3 className="text-2xl font-bold text-[#111c2d] mb-1">{step.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${step.accentColor} mb-4`}>
                  {step.subtitle}
                </p>
                <p className="text-[#3d4947] leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
