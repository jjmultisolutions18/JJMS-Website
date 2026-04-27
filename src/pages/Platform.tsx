import React from 'react';
import { 
  LayoutDashboard, Bot, Users, BarChart, Shield, 
  Globe, Zap, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Innovation Tracking',
    desc: 'Monitor the progress of ideas from conception to market launch with intuitive pipelines.',
    icon: LayoutDashboard,
  },
  {
    title: 'AI Assistant',
    desc: 'Integrated AI tools to help innovators refine their business models and pitches.',
    icon: Bot,
  },
  {
    title: 'Mentorship Tracking',
    desc: 'Connect innovators with mentors and track engagement and impact in real-time.',
    icon: Users,
  },
  {
    title: 'Reporting Dashboard',
    desc: 'Generate comprehensive reports for stakeholders and funding institutions.',
    icon: BarChart,
  },
];

export default function Platform() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 text-orange-500 text-sm font-semibold border border-orange-500/30">
              <Zap className="w-4 h-4" />
              <span>Proprietary Technology Stack</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
              Innovation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300 italic">Management</span> <br />
              Platform.
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              A scalable, AI-powered mission control for regional innovation programmes, incubators, and government institutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-800 rounded-3xl p-4 shadow-2xl border border-slate-700">
              <img
                src="https://picsum.photos/seed/dashboard/1000/700"
                alt="Platform Dashboard"
                className="rounded-2xl shadow-inner"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-accent p-4 rounded-2xl shadow-xl animate-bounce">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-24 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest">Platform Features</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900">Everything you need to manage innovation at scale</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 rounded-3xl border border-slate-100 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5 transition-all group">
                <div className="w-14 h-14 bg-slate-50 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Showcase */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-display font-bold text-slate-900">Built for Institutions</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our platform is designed to handle the complexities of large-scale innovation programmes. From tracking thousands of applications to monitoring the long-term success of alumni, we provide the data you need.
            </p>
            <ul className="space-y-4">
              {[
                'Customizable workflows for different programmes',
                'Secure data storage and GDPR/POPIA compliance',
                'Automated communication with participants',
                'Real-time analytics and impact visualization',
                'Multi-user access with role-based permissions'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all"
              >
                Request a technical overview <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-slate-900 border border-slate-700 rounded-[2rem] overflow-hidden">
            <div className="p-8 md:p-12 border-r border-b border-slate-700 space-y-4 hover:bg-white/5 transition-colors group">
              <BarChart className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-white">85%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Efficiency Increase</p>
              </div>
            </div>
            <div className="p-8 md:p-12 border-b border-slate-700 space-y-4 hover:bg-white/5 transition-colors group">
              <Users className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-white">500+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Innovators Tracked</p>
              </div>
            </div>
            <div className="p-8 md:p-12 border-r border-slate-700 space-y-4 hover:bg-white/5 transition-colors group">
              <Globe className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-white">100%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Cloud Based</p>
              </div>
            </div>
            <div className="p-8 md:p-12 space-y-4 hover:bg-white/5 transition-colors group">
              <Shield className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-4xl md:text-5xl font-display font-bold text-white">AES-256</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Encryption Standard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="section-padding">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Ready to scale your innovation programme?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Schedule a personalized demo with our team to see how the JJMS Platform can transform your institution.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-brand-accent text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-brand-accent/20"
            >
              Book My Demo Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
