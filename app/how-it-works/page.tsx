"use client";
import { motion } from "framer-motion";
import {
  Search,
  Camera,
  ShieldCheck,
  CreditCard,
  Truck,
  Upload,
  CheckCircle,
  Bell,
} from "lucide-react";
import Link from "next/link";

const ownerSteps = [
  {
    icon: Search,
    title: "Search",
    description:
      "Describe your item in plain English or upload a photo. Our AI extracts category, colour, brand, and location cues automatically.",
  },
  {
    icon: Camera,
    title: "Match",
    description:
      "Our AI engine scans all venues in the VFetch network and returns ranked matches within seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Verify",
    description:
      "Answer venue-set verification questions to prove ownership. This keeps your item secure and ensures legitimate claims only.",
  },
  {
    icon: CreditCard,
    title: "Pay Claim Fee",
    description:
      "A small claim fee is processed securely via Stripe. PCI-DSS compliant - your card data is never stored on our servers.",
  },
  {
    icon: Truck,
    title: "Collect or Ship",
    description:
      "Pick up from the venue at your convenience, or choose courier delivery - Royal Mail, DPD, and more. Real-time tracking included.",
  },
];

const venueSteps = [
  {
    icon: Upload,
    title: "Log Found Item",
    description:
      "Take a photo of the found item. Our AI auto-fills the title, category, colour, brand, and model - saving your team minutes. Add a location note and save.",
  },
  {
    icon: Bell,
    title: "Receive Claims",
    description:
      "When an owner submits a claim, venue staff receive an email notification with the claimant's details and item description.",
  },
  {
    icon: CheckCircle,
    title: "Approve or Reject",
    description:
      "Review the claim and approve or reject in one click from your dashboard. The owner is notified instantly by email.",
  },
  {
    icon: Truck,
    title: "Item Returned",
    description:
      "The owner collects in person (using a pickup code) or a courier collects from your venue. The claim is then closed automatically.",
  },
];

const faqs = [
  {
    q: "How does VFetch find my item?",
    a: "VFetch uses AI vision technology to parse your description or photo and match it against items logged by venues in our network. Results are ranked by similarity score.",
  },
  {
    q: "Is my personal data safe?",
    a: "Yes. We use industry-standard encryption, JWT-based authentication, and never share your data with third parties. Your email is hashed (SHA-256) before any external processing.",
  },
  {
    q: "Why is there a claim fee?",
    a: "The fee covers operational costs, Stripe payment processing, and helps verify serious claims. It is charged to the item owner - venues pay nothing.",
  },
  {
    q: "How long does it take to get my item back?",
    a: "The average return time is 18 hours from search to collection. Courier delivery adds 1–2 business days depending on your location.",
  },
  {
    q: "Can I have my item shipped to me?",
    a: "Yes. When claiming, choose courier delivery. We integrate with leading carriers for worldwide delivery via Royal Mail, DPD, and more. You pay for shipping separately.",
  },
  {
    q: "What if the venue rejects my claim?",
    a: "You can appeal via the portal or contact our support team. If the item genuinely belongs to you, we'll work with the venue to resolve it.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBFC] py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#89f5e7] rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#89f5e7] text-[#00201d] mb-5 tracking-widest uppercase">
              Automated Recovery
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#111827] tracking-tight mb-5">
              The Smart{" "}
              <span className="text-[#0D7B6C] italic">VFetch</span>{" "}
              Flow.
            </h1>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              From the moment you lose something to the moment you get it back -
              powered by AI, designed for speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Item Owners */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-[#111827] tracking-tight mb-14 text-center"
          >
            For Item Owners
          </motion.h2>
          <div className="flex flex-col gap-8">
            {ownerSteps.map((step, i) => (
              <motion.div
                key={step.title + i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#89f5e7]/30 text-[#0D7B6C] flex items-center justify-center">
                  <step.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827] mb-1">{step.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Venues */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-[#111827] tracking-tight mb-14 text-center"
          >
            For Venues
          </motion.h2>
          <div className="flex flex-col gap-8">
            {venueSteps.map((step, i) => (
              <motion.div
                key={step.title + i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#FEF3C7]/50 text-[#D97706] flex items-center justify-center">
                  <step.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827] mb-1">{step.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-[#E5E7EB] bg-[#FAFBFC] rounded-2xl p-6 group"
              >
                <summary className="font-semibold text-[#111827] cursor-pointer list-none flex justify-between items-center gap-3">
                  <span>{faq.q}</span>
                  <span className="text-[#0D7B6C] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[#6B7280] leading-relaxed text-sm">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D7B6C] text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
          Ready to find your item?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/for-venues#contact"
            className="bg-white text-[#0D7B6C] font-bold rounded-xl px-7 py-3.5 hover:bg-[#89f5e7] transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            href="/for-venues"
            className="border border-white text-white font-bold rounded-xl px-7 py-3.5 hover:bg-white/10 transition-colors"
          >
            For Venues
          </Link>
        </div>
      </section>
    </>
  );
}
