"use client";
import { motion } from "framer-motion";

const venueTypes = [
  "Pubs & Bars",
  "Hotels",
  "Hostels",
  "Stadiums",
  "Festivals",
  "Car Rentals",
  "Airbnbs",
  "Gyms",
  "Restaurants",
  "Conference Centres",
  "Hotels & Hostels",
  "Stadiums & Arenas",
  "Festivals",
  "Vacation Rentals",
  "Transport & Car Rental",
  "Universities",
  "Conference Centres",
  "Hospitality Groups",
];

export function CategoryGrid() {
  return (
    <section id="industries" className="py-10 bg-white border-y border-[#9CA3AF]/20 overflow-hidden">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#6B7280] mb-8">
            Built for every venue type
          </p>
          <div className="flex whitespace-nowrap animate-marquee">
            {[...venueTypes, ...venueTypes].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-2xl sm:text-3xl font-extrabold text-[#9CA3AF]/45 mx-8 flex-shrink-0"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
