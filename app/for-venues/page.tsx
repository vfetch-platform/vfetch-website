"use client";
import { motion } from "framer-motion";
import {
  Zap,
  Camera,
  PhoneOff,
  BarChart2,
  Shield,
  CheckCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const benefits = [
  {
    icon: Zap,
    title: "5 minutes to onboard",
    description:
      "Sign up, create your venue profile, and start logging found items in under 5 minutes. No technical setup required.",
  },
  {
    icon: Camera,
    title: "AI does the work",
    description:
      "Take a photo - our AI fills in title, category, colour, brand, and model automatically. No manual typing.",
  },
  {
    icon: PhoneOff,
    title: "No more phone calls",
    description:
      "Guests search and claim items through the portal. Your team just reviews and approves - one tap.",
  },
  {
    icon: BarChart2,
    title: "Analytics dashboard",
    description:
      "See claim rates, item volumes, and trends at a glance. Understand your lost property operation.",
  },
  {
    icon: Shield,
    title: "Role-based access",
    description:
      "Separate accounts for venue staff and venue admins. Each team member sees only their venue's data.",
  },
  {
    icon: Users,
    title: "Staff management",
    description:
      "Add and manage staff accounts from your admin panel. Control who can log items and approve claims.",
  },
];

const showcase = [
  {
    title: "AI-Powered Item Logging",
    description:
      "Take a photo of the found item. Our AI instantly suggests title, category, colour, and brand - just confirm and save. Saves your staff minutes per item.",
    image: "/ai_search.png",
    reverse: false,
    cover: true,
  },
  {
    title: "Claims Management",
    description:
      "When an owner submits a claim, venue staff are notified immediately. Review claimant details, verify ownership, and approve or reject with one click.",
    image: "/claim.png",
    reverse: true,
    cover: true,
  },
  {
    title: "Courier Integration",
    description:
      "Owners who can't collect in person can book international courier delivery through our courier integration. Royal Mail, DPD, and more - label generation handled automatically.",
    image: "/parcels.png",
    reverse: false,
    cover: false,
  },
];

export default function ForVenuesPage() {
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#f9f9ff] py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#89f5e7] rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#89f5e7] text-[#00201d] mb-5 tracking-widest uppercase">
              For Pubs, Hotels, Gyms &amp; More
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#111c2d] tracking-tight mb-6">
              Turn your lost property{" "}
              <span className="text-[#00685f] italic">into a system.</span>
            </h1>
            <p className="text-[#3d4947] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              VFetch gives your team a simple web portal to log found items, review claims,
              and reunite guests with their belongings - all powered by AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-[#00685f] hover:bg-[#005049] text-white rounded-xl px-7 py-3.5 font-bold transition-colors shadow-lg shadow-[#00685f]/20"
              >
                Get Started for Free
              </a>
              <a
                href="#contact"
                className="border border-[#bcc9c6] text-[#111c2d] hover:border-[#00685f] rounded-xl px-7 py-3.5 font-bold transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-[#111c2d] tracking-tight mb-14 text-center"
          >
            Why Venues Choose VFetch
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#f0f3ff] rounded-3xl p-8 border border-[#e7eeff] hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#00685f] text-white flex items-center justify-center mb-5">
                  <b.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#111c2d] mb-2">{b.title}</h3>
                <p className="text-[#3d4947] text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-24 bg-[#f0f3ff]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-24">
          {showcase.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${
                item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-[#111c2d] tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-[#3d4947] leading-relaxed text-lg">{item.description}</p>
              </div>
              <div className="flex-1 w-full">
                {/* Browser mockup frame */}
                <div className="rounded-2xl shadow-2xl overflow-hidden bg-[#00685f]">
                  {/* Fake browser bar */}
                  <div className="bg-[#005049] px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 bg-white/10 rounded-md h-5 mx-4" />
                  </div>
                  {/* Screenshot */}
                  <div className="h-[440px] overflow-hidden flex items-center justify-center bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={440}
                      className={`w-full ${item.cover ? "h-full object-cover object-top" : "h-auto max-h-[440px] object-contain"}`}
                      style={item.image === "/claim.png" ? { marginLeft: "-20px", width: "calc(100% + 20px)" } : {}}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111c2d] tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#3d4947] mb-12">No surprises. Venues join for free.</p>
          <div className="border-2 border-[#89f5e7] rounded-3xl p-10 bg-[#f0f3ff] mb-6">
            <h3 className="text-2xl font-extrabold text-[#00685f] mb-4">
              Free for Venues
            </h3>
            <ul className="text-left flex flex-col gap-3 mb-8">
              {[
                "Unlimited found item logging",
                "AI-powered item identification",
                "Claims management dashboard",
                "Email notifications for new claims",
                "Staff management & role-based access",
                "International courier integration",
                "Basic analytics",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#111c2d]">
                  <CheckCircle size={18} className="text-[#00685f] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#6d7a77]">
              Small claim fee charged to item owners - not venues. Optional premium tiers
              with advanced analytics and priority support{" "}
              <span className="text-[#00685f] font-semibold">Coming Soon</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Demo Form */}
      <section id="contact" className="py-24 bg-[#f0f3ff]">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#111c2d] tracking-tight mb-4 text-center">
            Get Started or Book a Demo
          </h2>
          <p className="text-[#3d4947] text-center mb-10">
            Fill in your details and we&apos;ll be in touch within 24 hours.
          </p>
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle size={48} className="text-[#00685f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#111c2d] mb-2">
                Thanks! We&apos;ll be in touch.
              </h3>
              <p className="text-[#3d4947]">We typically respond within a few hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-[#e7eeff] shadow-sm p-8 flex flex-col gap-5"
            >
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                { id: "venue", label: "Venue Name", type: "text", placeholder: "The Crown Pub" },
                { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-bold text-[#3d4947] mb-2 uppercase tracking-wider"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full border border-[#e7eeff] bg-[#f0f3ff] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00685f]/30 focus:border-[#00685f] transition text-[#111c2d] placeholder:text-[#bcc9c6]"
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, [field.id]: e.target.value }))
                    }
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-[#3d4947] mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your venue and how we can help..."
                  className="w-full border border-[#e7eeff] bg-[#f0f3ff] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00685f]/30 focus:border-[#00685f] transition resize-none text-[#111c2d] placeholder:text-[#bcc9c6]"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-[#00685f] hover:bg-[#005049] text-white rounded-xl px-6 py-3.5 font-bold transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
