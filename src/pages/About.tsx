import React from 'react';
import { Target, Eye, Heart, Award, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import Partners from '../components/Partners';

export default function About() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/northern-cape/1920/1080"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="section-padding relative z-10 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold"
          >
            Our Story & Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Empowering communities through innovation, one solution at a time.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-display font-bold text-slate-900">Who We Are</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            JJ Multi Solutions (Pty) Ltd is a forward-thinking technology and innovation hub based in Upington, Northern Cape. We operate at the intersection of digital transformation and community development, providing high-impact solutions to entrepreneurs, institutions, and government bodies.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our unique position in the Northern Cape allows us to bridge the gap between world-class technology and local needs, ensuring that innovation is accessible to everyone, regardless of their location.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/team-work/800/600"
            alt="Our Team"
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-8 rounded-2xl shadow-xl">
            <p className="text-4xl font-bold">10+</p>
            <p className="text-sm font-medium opacity-80">Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6">
            <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To provide accessible, high-quality innovation support and digital solutions that empower individuals and businesses in underserved communities to thrive in the global digital economy.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the leading catalyst for digital transformation and innovation in the Northern Cape, recognized for building sustainable, tech-driven ecosystems that foster economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://picsum.photos/seed/founder/600/800"
            alt="Founder"
            className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest">The Visionary</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900">A Message from our Founder</h3>
          </div>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed italic">
            <p>
              "Innovation shouldn't be a privilege reserved for big cities. When I started JJ Multi Solutions, my goal was simple: to bring the tools of the future to the people of the Northern Cape."
            </p>
            <p>
              "We believe that with the right mentorship, technology, and mindset, any idea can become a world-changing business. Our Maker Lab and digital platforms are just the beginning of what we can achieve together."
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100">
            <p className="text-xl font-bold text-slate-900">Jacques J. Multi</p>
            <p className="text-brand-accent font-medium">Founder & Managing Director</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-primary text-white py-24">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide every project we undertake.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries and exploring new technologies.', icon: Lightbulb },
              { title: 'Community', desc: 'Putting people first and building solutions that matter locally.', icon: Heart },
              { title: 'Excellence', desc: 'Delivering professional, high-impact results in everything we do.', icon: Award }
            ].map((value) => (
              <div key={value.title} className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center space-y-4">
                <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-display font-bold">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
    </div>
  );
}
