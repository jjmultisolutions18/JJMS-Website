import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', service: 'General Inquiry', message: '' });
  };

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="section-padding text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have a question or ready to start your innovation journey? We're here to help.
          </p>
        </div>
      </section>

      <section className="section-padding grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-slate-900">Contact Information</h3>
            <p className="text-slate-600">
              Reach out to us via any of the channels below. Our team is ready to assist you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase mb-1">Email Us</p>
                <p className="text-slate-900 font-medium">webdesign@jjmultisolutions.co.za</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase mb-1">Call / WhatsApp</p>
                <p className="text-slate-900 font-medium">062 542 5434</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase mb-1">Visit Us</p>
                <p className="text-slate-900 font-medium">Upington, Northern Cape, SA</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-brand-primary text-white rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand-accent" />
              <h4 className="font-bold">Business Hours</h4>
            </div>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>08:00 - 17:00</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>09:00 - 13:00</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Innovation Support</option>
                  <option>Maker Lab & Prototyping</option>
                  <option>ICT & Digital Solutions</option>
                  <option>Software & Digital Tools</option>
                  <option>Website & Hosting</option>
                  <option>Training & Skills</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding">
        <div className="bg-slate-200 rounded-[3rem] h-[400px] flex items-center justify-center overflow-hidden relative group">
          <img
            src="https://picsum.photos/seed/map/1200/400"
            alt="Map"
            className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 text-center space-y-4 max-w-sm">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900">Our Headquarters</h4>
              <p className="text-slate-600 text-sm">Upington, Northern Cape, South Africa</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-brand-accent font-bold text-sm hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
