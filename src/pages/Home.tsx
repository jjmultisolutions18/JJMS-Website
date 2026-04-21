import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Lightbulb, Cpu, Globe, Rocket, Users, 
  ShieldCheck, Zap, Code, Layout, GraduationCap, 
  BarChart3, CheckCircle2, ChevronRight, Star
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import Partners from '../components/Partners';

const mainServices = [
  {
    title: 'Innovation Support',
    desc: 'Expert mentorship and design thinking workshops to nurture your business ideas from concept to reality.',
    icon: Lightbulb,
    color: 'bg-orange-500',
    size: 'lg',
    link: '/services'
  },
  {
    title: 'Maker Lab',
    desc: 'Rapid prototyping and 3D printing services.',
    icon: Cpu,
    color: 'bg-slate-900',
    size: 'sm',
    link: '/services'
  },
  {
    title: 'ICT Solutions',
    desc: 'Robust digital infrastructure and high-speed connectivity.',
    icon: Globe,
    color: 'bg-slate-900',
    size: 'sm',
    link: '/services'
  },
  {
    title: 'Software & Automation',
    desc: 'Streamlining your business operations with custom-built digital tools and AI integration.',
    icon: Code,
    color: 'bg-slate-900',
    size: 'md',
    link: '/services'
  },
  {
    title: 'Web & Hosting',
    desc: 'Professional web presence and reliable management.',
    icon: Layout,
    color: 'bg-slate-900',
    size: 'sm',
    link: '/services'
  },
  {
    title: 'Skills Development',
    desc: 'Empowering the next generation with future-ready digital and innovation training.',
    icon: GraduationCap,
    color: 'bg-slate-900',
    size: 'md',
    link: '/services'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Split Layout Strategy */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 hidden lg:block" />
        
        <div className="section-padding grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider border border-orange-100"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Innovation Leader in Upington</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
                Innovation <br />
                <span className="text-orange-600 italic">Redefined.</span> <br />
                Solutions Built.
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed pt-4">
                JJ Multi Solutions (Pty) Ltd operates at the intersection of technology and impact. We build the digital future for the Northern Cape, one prototype at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-5"
            >
              <Link
                to="/services"
                className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-2xl shadow-black/10 flex items-center gap-3"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-black border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3"
              >
                Project Inquiry
              </Link>
            </motion.div>

            {/* Quick Stats Banner */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-10 flex flex-wrap gap-10 items-center justify-start border-t border-slate-100"
            >
              <div>
                <p className="text-3xl font-display font-bold">10+</p>
                <p className="text-xs font-bold text-slate-400 uppercase">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-slate-100 hidden sm:block" />
              <div>
                <p className="text-3xl font-display font-bold">500+</p>
                <p className="text-xs font-bold text-slate-400 uppercase">Innovators Supported</p>
              </div>
              <div className="w-px h-10 bg-slate-100 hidden sm:block" />
              <div>
                <p className="text-3xl font-display font-bold">100%</p>
                <p className="text-xs font-bold text-slate-400 uppercase">Local Commitment</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative lg:pl-10"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/innovation-hub/1000/1200"
                alt="JJ Multi Solutions Innovation Lab"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Float Cards */}
            <div className="absolute -bottom-8 -left-4 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <p className="font-bold text-slate-900 leading-none">Maker Lab Active</p>
              </div>
              <p className="text-xs text-slate-500">Prototyping equipment is currently running 24/7 for community projects.</p>
            </div>

            <div className="absolute top-10 -right-4 bg-orange-600 p-6 rounded-3xl shadow-2xl text-white max-w-[180px] space-y-2">
              <Zap className="w-8 h-8 opacity-50" />
              <p className="text-lg font-display font-bold leading-tight">Fastest-Growing Tech Hub in NC</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Partners */}
      <Partners />

      {/* Bento Grid Services Section */}
      <section className="py-32 bg-slate-50">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Our Ecosystem</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">
                One Partner. <br />
                Infinite Tech Solutions.
              </h3>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-2">
              We provide a comprehensive suite of services designed to move ideas from a sketch pad to a scalable market product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            {mainServices.map((service, idx) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -5 }}
                className={cn(
                  "relative rounded-[2.5rem] p-8 overflow-hidden group border",
                  service.size === 'lg' ? "lg:col-span-2 lg:row-span-2 bg-orange-600 text-white border-orange-500" : 
                  service.size === 'md' ? "md:col-span-2 bg-white text-slate-900 border-slate-100" :
                  "bg-white text-slate-900 border-slate-100"
                )}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                    service.size === 'lg' ? "bg-white/20 text-white" : "bg-slate-50 text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-colors"
                  )}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h4 className={cn(
                      "text-2xl font-display font-bold mb-3 tracking-tight",
                      service.size === 'lg' ? "text-3xl" : ""
                    )}>{service.title}</h4>
                    <p className={cn(
                      "text-sm leading-relaxed",
                      service.size === 'lg' ? "text-white/80" : "text-slate-500"
                    )}>{service.desc}</p>
                    
                    <Link 
                      to={service.link}
                      className={cn(
                        "inline-flex items-center gap-2 mt-6 font-bold text-sm",
                        service.size === 'lg' ? "text-white hover:underline" : "text-orange-600 group-hover:text-black transition-colors"
                      )}
                    >
                      View Details <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {service.size === 'lg' && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact Section - Narrative & Trust */}
      <section className="py-32 bg-white">
        <div className="section-padding grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
                Empowering the Northern Cape through intentional innovation.
              </h3>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Based in Upington, JJ Multi Solutions isn't just a service provider—we are a community partner. Since our inception, we've focused on bridging the digital divide by bringing industrial-grade technology and expert mentorship to the heart of our region.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-display">Local First</h4>
                <p className="text-sm text-slate-500 leading-relaxed">We understand the unique challenges of the Northern Cape business ecosystem because we live it every day.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-display">Scalable Impact</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Whether you are a startup or a government institution, our solutions are built to grow with your needs.</p>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
              Read Our Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-12">
              <img src="https://picsum.photos/seed/tech-1/500/700" alt="Tech" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />
              <div className="bg-orange-600 p-8 rounded-3xl text-white">
                <p className="text-4xl font-display font-bold mb-1">98%</p>
                <p className="text-sm font-bold opacity-80 uppercase">Success Rate</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <Users className="w-10 h-10 mb-6 text-orange-500" />
                <p className="text-lg font-bold italic leading-tight">"We bring world-class tech to your doorstep."</p>
                <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">— Jacques J. Multi</p>
              </div>
              <img src="https://picsum.photos/seed/tech-2/500/700" alt="Tech" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <div className="section-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest">How We Work</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold">From Blueprint to Reality</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { step: '01', title: 'Conceptualize', desc: 'We help you refine your idea through expert design thinking sessions and market analysis.' },
              { step: '02', title: 'Prototype', desc: 'Our Maker Lab brings your vision to life using high-precision 3D printing and digital modeling.' },
              { step: '03', title: 'Deploy', desc: 'We implement the final solution, providing infrastructure, software, and ongoing support.' }
            ].map((item) => (
              <div key={item.step} className="space-y-6">
                <p className="text-8xl font-display font-bold text-white/5 absolute -translate-y-12 translate-x-12 select-none">{item.step}</p>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto relative z-10 backdrop-blur-sm">
                  <p className="text-2xl font-display font-bold text-orange-500">{item.step}</p>
                </div>
                <h4 className="text-2xl font-display font-bold relative z-10">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final High-Impact CTA */}
      <section className="py-24">
        <div className="section-padding">
          <div className="bg-black rounded-[4rem] p-12 md:p-32 text-center text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/30 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none">
                Ready to build the <span className="text-orange-500 italic">next big thing?</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto italic font-medium">
                Whether you're a startup needing a prototype or a government body looking to automate, JJ Multi Solutions is ready to deliver.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Link
                  to="/contact"
                  className="bg-orange-600 text-white px-12 py-6 rounded-3xl font-bold text-lg hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/20"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 text-white border border-white/10 px-12 py-6 rounded-3xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
