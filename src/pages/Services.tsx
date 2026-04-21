import React from 'react';
import { 
  Lightbulb, Cpu, Globe, Code, Layout, GraduationCap, 
  ArrowRight, CheckCircle2, Zap, Users, BarChart3, Smartphone 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const serviceCategories = [
  {
    id: 'innovation',
    title: 'Innovation Support & Programmes',
    icon: Lightbulb,
    desc: 'Comprehensive support for startups and innovators to turn ideas into businesses.',
    features: ['Innovation challenges', 'Mentorship programmes', 'Design thinking workshops', 'Commercialisation support'],
    benefits: 'Accelerated growth, expert guidance, and access to innovation ecosystems.',
    for: 'Startups, SMMEs, and aspiring entrepreneurs.',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'maker-lab',
    title: 'Maker Lab & Prototyping',
    icon: Cpu,
    desc: 'State-of-the-art facility for physical product development and testing.',
    features: ['3D printing', 'Laser cutting', 'Product design', 'Rapid prototyping services'],
    benefits: 'Low-cost prototyping, fast iteration, and professional product design.',
    for: 'Inventors, engineers, and product designers.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'ict',
    title: 'ICT & Digital Solutions',
    icon: Globe,
    desc: 'Reliable digital infrastructure to keep your business connected.',
    features: ['Internet solutions (LTE, 5G)', 'Network setup', 'IT support', 'Digital infrastructure'],
    benefits: 'Seamless connectivity, reduced downtime, and secure networks.',
    for: 'Businesses of all sizes and government institutions.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    id: 'software',
    title: 'Software & Digital Tools',
    icon: Code,
    desc: 'Custom digital tools to automate and optimize your business operations.',
    features: ['Business automation', 'Systems setup', 'Data dashboards', 'AI tools integration'],
    benefits: 'Increased efficiency, data-driven decisions, and modern workflows.',
    for: 'SMMEs looking to scale and automate.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'web',
    title: 'Website & Hosting Services',
    icon: Layout,
    desc: 'Professional online presence with reliable hosting and maintenance.',
    features: ['Domain registration', 'Website design', 'Email hosting', 'Maintenance'],
    benefits: 'Professional brand image, 99.9% uptime, and secure email.',
    for: 'New businesses and brands needing a digital home.',
    color: 'bg-rose-100 text-rose-600'
  },
  {
    id: 'training',
    title: 'Training & Skills Development',
    icon: GraduationCap,
    desc: 'Empowering the workforce with essential digital and innovation skills.',
    features: ['Digital skills training', 'AI tools (ChatGPT, Canva AI)', 'Innovation training', 'Business development'],
    benefits: 'Future-ready workforce, increased productivity, and tech literacy.',
    for: 'Individuals, corporate teams, and students.',
    color: 'bg-cyan-100 text-cyan-600'
  }
];

export default function Services() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="section-padding text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide a full spectrum of technology and innovation services designed to help you thrive in a digital-first world.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{service.desc}</p>
              
              <div className="space-y-4 mb-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Key Features</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full bg-slate-50 text-brand-primary py-4 rounded-xl font-bold hover:bg-brand-primary hover:text-white transition-all text-center"
              >
                Request a Quote
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      {serviceCategories.map((service, index) => (
        <section 
          key={service.id} 
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
            <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
                <service.icon className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">{service.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {service.desc} Our approach is tailored to the unique needs of the Northern Cape, ensuring that every solution we build is both world-class and locally relevant.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-accent font-bold">
                    <Zap className="w-5 h-5" />
                    <span>Key Benefits</span>
                  </div>
                  <p className="text-slate-600 text-sm">{service.benefits}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-accent font-bold">
                    <Users className="w-5 h-5" />
                    <span>Who It's For</span>
                  </div>
                  <p className="text-slate-600 text-sm">{service.for}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Get Started with {service.title.split(' ')[0]}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={`https://picsum.photos/seed/${service.id}/800/600`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-[200px]">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Success Rate</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-slate-900">98%</span>
                    <BarChart3 className="w-6 h-6 text-emerald-500 mb-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Web Development Packages</h2>
            <h3 className="text-4xl font-display font-bold">Transparent Pricing for Big Impacts</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: 'R5,500',
                desc: 'Perfect for startups and individuals needing a professional start.',
                features: ['3-Page Website', 'Standard SEO', 'Mobile Responsive', '1 Month Support', 'Domain Registration'],
                cta: 'Start Basic'
              },
              {
                name: 'Standard',
                price: 'R12,500',
                desc: 'Ideal for SMMEs looking to grow their digital footprint.',
                features: ['8-Page Website', 'Advanced SEO', 'Contact Form Integration', 'Social Media Links', '3 Months Maintenance', 'Email Hosting'],
                cta: 'Go Standard',
                popular: true
              },
              {
                name: 'Premium',
                price: 'R25,000+',
                desc: 'For corporations and government institutions needing custom solutions.',
                features: ['Custom Web App', 'E-commerce Capable', 'Database Integration', 'Full Automation Tools', '12 Months Support', 'Priority Training'],
                cta: 'Contact for Premium'
              }
            ].map((pkg) => (
              <div key={pkg.name} className={cn(
                "p-10 rounded-[2.5rem] border flex flex-col h-full space-y-8",
                pkg.popular ? "bg-white text-slate-900 border-brand-accent scale-105" : "bg-white/5 border-white/10"
              )}>
                <div>
                  <h4 className="text-2xl font-display font-bold mb-2">{pkg.name}</h4>
                  <p className={cn("text-3xl font-bold", pkg.popular ? "text-brand-accent" : "text-white")}>{pkg.price}</p>
                </div>
                <p className={cn("text-sm leading-relaxed", pkg.popular ? "text-slate-600" : "text-slate-400")}>{pkg.desc}</p>
                <ul className="space-y-4 flex-grow">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-center transition-all",
                    pkg.popular ? "bg-brand-accent text-white hover:bg-orange-600" : "bg-white text-slate-900 hover:bg-slate-100"
                  )}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-primary text-white text-center">
        <div className="section-padding space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Ready to transform your business?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's find the right solutions for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-accent text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-brand-accent/20"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
