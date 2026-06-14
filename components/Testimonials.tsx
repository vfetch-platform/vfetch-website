"use client";
import { motion } from "framer-motion";

const stories = [
  {
    metric: "Under 1 min",
    title: "Faster item registration",
    quote:
      "Pilot teams can move from manual lost-property forms to photo-first logging in under a minute per item.",
  },
  {
    metric: "3x",
    title: "More recoverable items",
    quote:
      "AI matching and automated notifications help more guests find the right record before items disappear into storage.",
  },
  {
    metric: "80%",
    title: "Less manual admin",
    quote:
      "Structured claims, approvals and courier options reduce the back-and-forth that normally lands with front-desk teams.",
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
          <p className="text-xs font-bold tracking-widest uppercase text-[#0D7B6C] mb-3">
            Currently piloting with UK hospitality venues
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Early operators are using VFetch to cut lost-property handling time.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Practical outcomes for teams that need a cleaner process before, during and
            after peak guest demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl border border-[#9CA3AF]/25 p-8 hover:shadow-md transition-shadow"
            >
              <p className="text-4xl font-extrabold text-[#0D7B6C] mb-4">{story.metric}</p>
              <h3 className="text-lg font-bold text-[#111827] mb-3">{story.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{story.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
