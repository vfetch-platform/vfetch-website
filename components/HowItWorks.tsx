"use client";
import { motion } from "framer-motion";
import { Bell, Camera, Cpu, Truck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Staff takes photo",
    subtitle: "Under 10 seconds",
    description:
      "A team member snaps a photo of the found item from the venue dashboard. No spreadsheet rows, inconsistent descriptions or long handover notes.",
    iconColor: "bg-[#0D7B6C]/10 text-[#0D7B6C]",
    accentColor: "text-[#0D7B6C]",
    cardBg: "bg-[#0D7B6C]/5 border-[#0D7B6C]/10",
  },
  {
    icon: Cpu,
    title: "AI logs item",
    subtitle: "Automatic enrichment",
    description:
      "Category, colour, brand and model are detected automatically so the item is searchable and ready for matching in under a minute.",
    iconColor: "bg-[#D97706]/10 text-[#D97706]",
    accentColor: "text-[#D97706]",
    cardBg: "bg-[#D97706]/5 border-[#D97706]/10",
  },
  {
    icon: Bell,
    title: "Guests are matched",
    subtitle: "Fewer inbound calls",
    description:
      "Owners receive notifications when their search matches a logged item, then submit a secure claim for venue staff to review.",
    iconColor: "bg-[#0D7B6C]/10 text-[#0D7B6C]",
    accentColor: "text-[#0D7B6C]",
    cardBg: "bg-[#0D7B6C]/5 border-[#0D7B6C]/10",
  },
  {
    icon: Truck,
    title: "Return completed",
    subtitle: "Collection or courier",
    description:
      "Guests can collect in person or arrange courier delivery through VFetch, with the venue keeping control of release approval.",
    iconColor: "bg-[#D97706]/10 text-[#D97706]",
    accentColor: "text-[#D97706]",
    cardBg: "bg-[#D97706]/5 border-[#D97706]/10",
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
            How it works for venue teams
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            A practical workflow for logging, matching and returning property without
            pulling staff away from guests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
