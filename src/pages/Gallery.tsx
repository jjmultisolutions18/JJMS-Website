import React from 'react';
import { motion } from 'motion/react';

const galleryItems = [
  { id: 1, title: 'Innovation Workshop', category: 'Events', image: 'https://picsum.photos/seed/gallery1/800/800' },
  { id: 2, title: '3D Printing Lab', category: 'Maker Lab', image: 'https://picsum.photos/seed/gallery2/800/800' },
  { id: 3, title: 'Community Outreach', category: 'Events', image: 'https://picsum.photos/seed/gallery3/800/800' },
  { id: 4, title: 'Prototype Testing', category: 'Maker Lab', image: 'https://picsum.photos/seed/gallery4/800/800' },
  { id: 5, title: 'Digital Skills Training', category: 'Workshops', image: 'https://picsum.photos/seed/gallery5/800/800' },
  { id: 6, title: 'Tech Expo 2023', category: 'Events', image: 'https://picsum.photos/seed/gallery6/800/800' },
  { id: 7, title: 'Laser Cutting Session', category: 'Maker Lab', image: 'https://picsum.photos/seed/gallery7/800/800' },
  { id: 8, title: 'Design Thinking Session', category: 'Workshops', image: 'https://picsum.photos/seed/gallery8/800/800' },
  { id: 9, title: 'New Equipment Arrival', category: 'Equipment', image: 'https://picsum.photos/seed/gallery9/800/800' },
];

export default function Gallery() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="section-padding text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900">Visual Gallery</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A glimpse into our workshops, events, and the innovative solutions we build every day.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden shadow-sm break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{item.category}</p>
                <h4 className="text-white text-xl font-display font-bold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipment Highlight */}
      <section className="bg-slate-900 text-white py-24">
        <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold">World-Class Equipment</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our Maker Lab is equipped with the latest technology to ensure that your prototypes are of the highest quality. From industrial-grade 3D printers to precision laser cutters, we have the tools to bring any idea to life.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">5+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">3D Printers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">2</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Laser Cutters</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">100%</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Digital Control</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">24/7</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Monitoring</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://picsum.photos/seed/equipment/800/600"
              alt="Equipment"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
