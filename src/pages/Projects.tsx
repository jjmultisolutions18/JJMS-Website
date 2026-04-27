import React, { useState } from 'react';
import { ExternalLink, Tag, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const categories = ['All', 'Innovation', 'Maker Lab', 'Digital', 'Web'];

const projects = [
  {
    id: 1,
    title: 'DEDaT Innovation Programme',
    category: 'Innovation',
    desc: 'Managed a regional innovation challenge for DEDaT, identifying 10 high-potential SMMEs in the Green Economy.',
    image: 'https://picsum.photos/seed/gov-challenge/800/600',
    tags: ['Government', 'Economic Development'],
    year: '2024'
  },
  {
    id: 2,
    title: 'Industrial Parts Prototyping',
    category: 'Maker Lab',
    desc: 'Developed precision 3D-printed prototypes for local mining machinery, reducing lead times by 70%.',
    image: 'https://picsum.photos/seed/mining-3d/800/600',
    tags: ['Mining', 'Prototyping'],
    year: '2023'
  },
  {
    id: 3,
    title: 'Municipality E-Portal',
    category: 'Digital',
    desc: 'Custom automation tool for tracking municipal service requests and reporting dashboards.',
    image: 'https://picsum.photos/seed/muni-tech/800/600',
    tags: ['Public Sector', 'Automation'],
    year: '2024'
  },
  {
    id: 4,
    title: 'Upington Logistics Website',
    category: 'Web',
    desc: 'A full e-commerce and logistics tracking website for a Northern Cape transport hub.',
    image: 'https://picsum.photos/seed/logistics-web/800/600',
    tags: ['E-commerce', 'Hosting'],
    year: '2023'
  },
  {
    id: 5,
    title: 'AI-Powered Crop Monitoring',
    category: 'Innovation',
    desc: 'Collaborated with agricultural tech firms to implement AI-driven computer vision for early pest detection in vineyards.',
    image: 'https://picsum.photos/seed/agri-ai/800/600',
    tags: ['AI', 'Agri-Tech', 'Innovation'],
    year: '2024'
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="section-padding text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900">Our Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of our work in innovation, prototyping, and digital transformation across the Northern Cape.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-bold transition-all border',
                activeCategory === cat 
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-accent hover:text-brand-accent'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary flex items-center gap-1 shadow-sm">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest">
                    <Tag className="w-3 h-3" />
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-slate-50">
                    <button className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:gap-3 transition-all">
                      View Case Study <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Client Quote */}
      <section className="bg-brand-primary py-24 text-white">
        <div className="section-padding text-center space-y-8">
          <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold max-w-3xl mx-auto italic">
            "JJ Multi Solutions didn't just build us a website; they helped us rethink our entire digital strategy. Their impact on our growth has been immense."
          </h2>
          <div className="space-y-1">
            <p className="text-xl font-bold">Sarah M. Khumalo</p>
            <p className="text-slate-400">CEO, Northern Cape Agri-Tech</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="section-padding space-y-8">
          <h2 className="text-4xl font-display font-bold text-slate-900">Have a project in mind?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Whether it's a new product prototype or a full digital transformation, we're ready to help you build it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Rocket({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.6 1.26-1.34 1.62-2.17.36-.83.54-1.72.54-2.62V11c0-.9-.18-1.79-.54-2.62-.36-.83-.91-1.57-1.62-2.17-1.26-1.5-5-2-5-2s.5 3.74 2 5c.6.71 1.34 1.26 2.17 1.62.83.36 1.72.54 2.62.54H11c.9 0 1.79-.18 2.62-.54.83-.36 1.57-.91 2.17-1.62" />
      <path d="M10 10l4 4" />
      <path d="M13 3l.64 2.56L16 6l-2.56.64L13 9l-.64-2.56L10 6l2.56-.64L13 3z" />
      <path d="M18 9l.48 1.92L20 11.4l-1.52.48L18 13.8l-.48-1.92L16 11.4l1.52-.48L18 9z" />
      <path d="M19 15l.32 1.28L20.6 16.6l-1.28.32L19 18.2l-.32-1.28L17.4 16.6l1.28-.32L19 15z" />
    </svg>
  );
}
