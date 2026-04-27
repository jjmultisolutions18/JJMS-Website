import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'The Future of 3D Printing in the Northern Cape',
    excerpt: 'How rapid prototyping is transforming local manufacturing and reducing supply chain dependencies.',
    category: 'Technology',
    author: 'Jacques J. Multi',
    date: 'April 20, 2024',
    image: 'https://picsum.photos/seed/3dprint/800/600',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'AI in Governance: Automating Municipal Services',
    excerpt: 'Exploring how simple AI integrations can lead to 40% more efficient service delivery in local municipalities.',
    category: 'Innovation',
    author: 'Tech Team',
    date: 'April 15, 2024',
    image: 'https://picsum.photos/seed/ai-gov/800/600',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Bridging the Digital Divide with 5G Infrastructure',
    excerpt: 'The impact of high-speed connectivity on remote education and SMME growth in underserved areas.',
    category: 'Digital',
    author: 'ICT Dept',
    date: 'April 10, 2024',
    image: 'https://picsum.photos/seed/5g/800/600',
    readTime: '6 min read'
  }
];

export default function Insights() {
  return (
    <div className="pb-24 bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="section-padding relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-semibold"
          >
            <Tag className="w-4 h-4" />
            <span>Innovation Hub</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter"
          >
            Insights & <span className="text-brand-accent">Innovations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Exploring the intersection of technology, community impact, and the future of the Northern Cape.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding -mt-20 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/featured/1200/800" 
              alt="Featured Insight" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4 text-sm font-bold text-brand-accent uppercase tracking-widest">
              <span>Featured Insight</span>
              <span className="w-10 h-px bg-brand-accent/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-[1.1]">
              Scaling Tech Ventures in Rural Ecosystems
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Why the Northern Cape is the next frontier for technological innovation and how we are building the infrastructure to support it.
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Jacques J. Multi</p>
                  <p className="text-slate-400 text-xs tracking-wider uppercase">Managing Director</p>
                </div>
              </div>
              <Link to="/contact" className="ml-auto w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-brand-accent/20">
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{post.category}</span>
                  <span className="text-xs text-slate-400 font-medium">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-brand-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 line-clamp-2 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <button className="text-slate-400 hover:text-brand-accent transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12 border border-slate-100">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Stay ahead of the curve.</h3>
            <p className="text-slate-600 text-lg">Join 2,000+ stakeholders receiving our monthly innovation digest.</p>
          </div>
          <div className="lg:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-8 py-5 rounded-2xl border border-slate-200 focus:border-brand-accent outline-none bg-white transition-all shadow-sm"
              />
              <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-4 px-2 italic">By subscribing, you agree to our POPIA policy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
