"use client";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "hotel",
    title: "Hotels & Hostels",
    description:
      "Our primary focus: Streamlining front-desk operations across global chains and boutique shared-living spaces. From 5-star resorts to high-turnover hostels, we ensure guests are reunited with their belongings before they even checkout.",
    wide: true,
  },
  {
    icon: "stadium",
    title: "Stadiums & Arenas",
    description:
      "Handling thousands of items from mass events. Our batch-processing allows security teams to catalog an entire stadium's lost property in under an hour.",
    wide: false,
  },
  {
    icon: "festival",
    title: "Music & Arts Festivals",
    description:
      "Perfect for pop-up events like The Fringe. Manage massive surges of lost items in open-air environments with easy mobile registration.",
    wide: false,
  },
  {
    icon: "home_work",
    title: "Airbnbs & Rentals",
    description:
      "Automated shipping and recovery for remote hosts. We bridge the gap between cleaner findings and guest inquiries without manual back-and-forth.",
    wide: false,
  },
  {
    icon: "car_rental",
    title: "Car Rental Agencies",
    description:
      "Instantly log items left in vehicles during return inspections. Track items across different fleet hubs with regional oversight.",
    wide: false,
  },
];

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] mb-4">
            Sectors We Serve
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg max-w-3xl mx-auto">
            VFetch is the ultimate solution for any venue managing lost property at scale, tailored for
            high-traffic environments where efficiency and accuracy are critical.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`${cat.wide ? "sm:col-span-2 lg:col-span-2" : ""} ${
                i % 2 === 0 ? "bg-[#F2FAF8] border-[#D1F0EB]" : "bg-[#FEFCF3] border-[#FDF5D6]"
              } rounded-3xl p-6 sm:p-8 border hover:shadow-md transition-shadow ${cat.wide ? "flex flex-col md:flex-row gap-6 md:gap-8 items-center" : ""}`}
            >
              <div className="flex-1 w-full">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${
                  i % 2 === 0 ? "bg-[#0D7B6C] text-white" : "bg-[#D97706] text-white"
                }`}>
                  <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#111827]">{cat.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{cat.description}</p>
              </div>
              {cat.wide && (
                <div className="w-full md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyAGaBHuu_kWCqCLh3n7f9WU84rrBmL8mFZvFEuj0tdAU7l65eocIP6cT3-7y0mtDmSuL6A6DkrZFSw0f5AtLIlchIHwLiX_LDlmtwY3BmtoiwI9vtV0nIKsND6DXU4VuqDbS74DQ3qApPki6AiZtheFJEDl56uOYSfp9x1gburx97o-nMxgqv2Ih9ZapF9CeLqDmfaGiVfruybYBHm7li0ajfMvz5k1YVwjAsr4eNL6xjazkPV8pQLpii5Li07v348bCewUmb90Q"
                    alt="Hotels & Hostels"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
