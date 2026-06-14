"use client";
import { motion } from "framer-motion";
import {
  Lock,
  UserCheck,
  CreditCard,
  FileText,
} from "lucide-react";

const controls = [
  {
    icon: Lock,
    title: "Secure Data Handling",
    body: "Protecting guest PII with rigorous security measures throughout the recovery process.",
  },
  {
    icon: UserCheck,
    title: "Verified Ownership",
    body: "Ensuring items are accurately matched and returned to the correct guest.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    body: "PCI-compliant Stripe integration for safe, transparent return shipping transactions.",
  },
  {
    icon: FileText,
    title: "Chain of Custody",
    body: "Complete audit trails for every item from registration to final handover.",
  },
];

export function SecurityCompliance() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Left Column - Sticky wrapper container without transform to avoid breaking sticky positioning */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0D7B6C] mb-4">
                Security &amp; compliance
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-5">
                Protecting Guest Trust
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed max-w-xl">
                Our AI-powered lost property system is built to uphold the highest service standards,
                ensuring guest data and belonging workflows are secure, traceable, and handled with care.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 sm:gap-12">
            {controls.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-5 sm:gap-6 items-start text-left"
              >
                {/* Circular Icon Container */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-105 ${
                    i % 2 === 0
                      ? "border-[#0D7B6C]/20 bg-[#0D7B6C]/5 text-[#0D7B6C] group-hover:bg-[#0D7B6C]/10 group-hover:border-[#0D7B6C]/40"
                      : "border-[#D97706]/20 bg-[#D97706]/5 text-[#D97706] group-hover:bg-[#D97706]/10 group-hover:border-[#D97706]/40"
                  }`}
                >
                  <item.icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#6B7280] text-sm sm:text-base leading-relaxed max-w-xl">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
