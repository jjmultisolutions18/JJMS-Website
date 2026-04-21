import React from 'react';
import { motion } from 'motion/react';

const partners = [
  { name: 'Government', logo: 'https://picsum.photos/seed/gov/200/100' },
  { name: 'Universities', logo: 'https://picsum.photos/seed/uni/200/100' },
  { name: 'SMMEs', logo: 'https://picsum.photos/seed/smme/200/100' },
  { name: 'Tech Partners', logo: 'https://picsum.photos/seed/tech/200/100' },
  { name: 'Innovation Hubs', logo: 'https://picsum.photos/seed/hub/200/100' },
  { name: 'Digital SA', logo: 'https://picsum.photos/seed/sa/200/100' },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">
          Trusted by Institutions & Businesses
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
