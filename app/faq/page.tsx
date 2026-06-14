"use client";
import { motion } from "framer-motion";

const ownerFaqs = [
  {
    q: "How does VFetch find my item?",
    a: "VFetch uses AI vision technology to parse your description or photo and match it against items logged by venues in our network. Results are ranked by similarity score, giving you the most likely matches first.",
  },
  {
    q: "Is my personal data safe?",
    a: "Yes. We use JWT-based authentication, industry-standard encryption, and your email is hashed (SHA-256) before any external processing. We never share your data with third parties.",
  },
  {
    q: "Why is there a claim fee?",
    a: "The fee covers operational costs, secure Stripe payment processing, and helps verify that claims are genuine. It's a one-time charge per claim - not a subscription. Venues pay nothing.",
  },
  {
    q: "How long does it take to get my item back?",
    a: "The average return time is 18 hours from search to collection. Courier delivery adds 1–2 business days depending on your location and chosen carrier.",
  },
  {
    q: "Can I have my item shipped to me?",
    a: "Yes. When submitting a claim, you can choose courier delivery. Options include Royal Mail, DPD, and more. You pay for shipping at checkout.",
  },
  {
    q: "What if the venue rejects my claim?",
    a: "You can appeal via the portal. Provide additional proof of ownership and our support team will mediate. Legitimate claims are always resolved.",
  },
  {
    q: "Can I search without creating an account?",
    a: "You can browse results freely. To submit a claim and receive match notifications, you'll need to create a free account.",
  },
];

const venueFaqs = [
  {
    q: "How do I add VFetch to my venue?",
    a: "Sign up at our venue portal, create your venue profile, and you're ready to go. The whole process takes under 5 minutes. No technical setup required.",
  },
  {
    q: "How does VFetch pricing work for venues?",
    a: "VFetch pricing is based on your venue's capacity. We offer three tiers - Starter, Growth, and Enterprise - to suit venues of all sizes. Contact our team to get a tailored quote for your venue.",
  },
  {
    q: "How does AI identify items from a photo?",
    a: "We use AI vision technology to analyse photos. It identifies item type, colour, brand, and model automatically - saving your staff time and improving match accuracy significantly.",
  },
  {
    q: "Can we integrate courier shipping?",
    a: "Yes. VFetch integrates with leading courier services for worldwide delivery. When an owner chooses courier collection, a shipping label is generated automatically and emailed to venue staff.",
  },
  {
    q: "What happens to unclaimed items?",
    a: "After a set period (defined by your venue policy), items can be marked as unclaimed and disposed of according to your local regulations. VFetch logs the full audit trail.",
  },
  {
    q: "Is there a mobile app for venue staff?",
    a: "Venue staff use our responsive web portal, accessible on any browser including mobile devices. A dedicated native app for venues is on our roadmap.",
  },
  {
    q: "Can I manage multiple venues?",
    a: "Yes. Our admin panel supports multi-venue management. Each venue has its own profile, staff list, and item inventory. Admins can switch between venues easily.",
  },
];

function FaqGroup({
  title,
  faqs,
}: {
  title: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-extrabold text-[#111827] tracking-tight mb-6">{title}</h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="border border-[#E5E7EB] bg-[#FAFBFC] rounded-2xl p-6 group"
          >
            <summary className="font-semibold text-[#111827] cursor-pointer list-none flex justify-between items-center gap-3">
              <span>{faq.q}</span>
              <span className="text-[#0D7B6C] text-xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-[#6B7280] leading-relaxed text-sm">{faq.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-[#FAFBFC] py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0D7B6C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#111827] tracking-tight mb-4">
              How can we{" "}
              <span className="text-[#0D7B6C] italic">help</span>{" "}
              you today?
            </h1>
            <p className="text-[#6B7280] text-lg">
              Everything you need to know about VFetch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FaqGroup title="For Item Owners" faqs={ownerFaqs} />
          <FaqGroup title="For Venues" faqs={venueFaqs} />
        </div>
      </section>
    </>
  );
}
