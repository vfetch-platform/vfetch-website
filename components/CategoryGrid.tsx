"use client";
import { motion } from "framer-motion";

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
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface mb-4">
            Sectors We Serve
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg max-w-3xl mx-auto">
            VFetch is the ultimate solution for any venue managing lost property at scale, tailored for
            high-traffic environments where efficiency and accuracy are critical.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {/* Hotels & Hostels Featured (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="sm:col-span-2 lg:col-span-2 bg-primary/5 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center border border-primary/10"
          >
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-11 h-11 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">hotel</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface">Hotels &amp; Hostels</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-4 text-sm sm:text-base lg:text-lg">
                Our primary focus: Streamlining front-desk operations across global chains and boutique
                shared-living spaces. From 5-star resorts to high-turnover hostels, we ensure guests are
                reunited with their belongings before they even checkout.
              </p>
            </div>
            <div className="w-full md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 bg-surface rounded-2xl overflow-hidden shadow-inner border border-outline-variant/20 shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyAGaBHuu_kWCqCLh3n7f9WU84rrBmL8mFZvFEuj0tdAU7l65eocIP6cT3-7y0mtDmSuL6A6DkrZFSw0f5AtLIlchIHwLiX_LDlmtwY3BmtoiwI9vtV0nIKsND6DXU4VuqDbS74DQ3qApPki6AiZtheFJEDl56uOYSfp9x1gburx97o-nMxgqv2Ih9ZapF9CeLqDmfaGiVfruybYBHm7li0ajfMvz5k1YVwjAsr4eNL6xjazkPV8pQLpii5Li07v348bCewUmb90Q"
                alt="hospitality focus"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Stadiums & Arenas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.07 }}
            className="bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/10"
          >
            <div className="w-11 h-11 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">stadium</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-on-surface">Stadiums &amp; Arenas</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Handling thousands of items from mass events. Our batch-processing allows security teams to
              catalog an entire stadium&apos;s lost property in under an hour.
            </p>
          </motion.div>

          {/* Music & Arts Festivals */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/10"
          >
            <div className="w-11 h-11 bg-tertiary/10 text-tertiary rounded-2xl flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">festival</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-on-surface">Music &amp; Arts Festivals</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Perfect for pop-up events like The Fringe. Manage massive surges of lost items in open-air
              environments with easy mobile registration.
            </p>
          </motion.div>

          {/* Airbnbs & Rentals */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.21 }}
            className="bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/10"
          >
            <div className="w-11 h-11 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">home_work</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-on-surface">Airbnbs &amp; Rentals</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Automated shipping and recovery for remote hosts. We bridge the gap between cleaner findings
              and guest inquiries without manual back-and-forth.
            </p>
          </motion.div>

          {/* Car Rental Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/10"
          >
            <div className="w-11 h-11 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mb-5">
              <span className="material-symbols-outlined">car_rental</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-on-surface">Car Rental Agencies</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Instantly log items left in vehicles during return inspections. Track items across different
              fleet hubs with regional oversight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
