"use client";
import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Multi-location management",
    description:
      "Manage lost property across hotels, arenas, campuses or regional venue groups from a central workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Claims and release control",
    description:
      "Structured claims, staff permissions and audit trails keep venues in control of every release decision.",
  },
  {
    icon: Truck,
    title: "Integrated courier management",
    description:
      "Offer collection or courier return options without staff coordinating labels and delivery details manually.",
  },
  {
    icon: BarChart3,
    title: "Reporting and payments",
    description:
      "Track item volumes, claim rates and recovery fees without storing payment data in venue systems.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Sticky wrapper container without transform to avoid breaking sticky positioning */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0D7B6C] mb-4">
                Operations layer
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-5">
                One workflow for every lost-property handoff.
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed max-w-xl">
                VFetch gives front desk, guest services, security and operations teams
                the same source of truth, from item intake to verified return.
              </p>
            </motion.div>
          </div>

          <div className="rounded-3xl border border-[#9CA3AF]/25 bg-[#FAFBFC] overflow-hidden">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex gap-5 p-6 sm:p-8 ${
                  i === features.length - 1 ? "" : "border-b border-[#9CA3AF]/25"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex shrink-0 items-center justify-center ${
                    i % 2 === 0
                      ? "bg-[#0D7B6C]/10 text-[#0D7B6C]"
                      : "bg-[#D97706]/10 text-[#D97706]"
                  }`}
                >
                  <f.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{f.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
