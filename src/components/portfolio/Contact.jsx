import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black" data-testid="contact-section" id="contact">
      <div className="absolute inset-0 carbon-fiber opacity-40"></div>
      <div className="absolute inset-0 grid-lines opacity-[0.07]"></div>
      <div className="absolute inset-0 speed-streaks opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.12),transparent_60%)]"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[2px] w-10 bg-racing-red"></span>
          <span className="font-mono text-[11px] tracking-[0.35em] text-racing-red uppercase">
            Sector 05 · Paddock Radio
          </span>
          <span className="h-[2px] w-10 bg-racing-red"></span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white uppercase leading-tight"
        >
          OPEN CHANNEL — Hire a Freelance Web Developer in Mumbai
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 font-heading text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-snug"
        >
          Ready to race? Radio in — I respond within one flying lap.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-4 font-mono text-sm text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          Looking for a freelance web developer in Mumbai or a MERN stack developer for your next project? Whether you're a startup or small business anywhere in Maharashtra or India, let's build something fast.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative h-24 my-10 flex items-center justify-center"
        >
          <div className="absolute w-24 h-24 border-2 border-electric-cyan rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute w-24 h-24 border-2 border-racing-red rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
          <div className="relative w-16 h-16 border-2 border-white/30 flex items-center justify-center rounded-full bg-black/60 backdrop-blur">
            <svg fill="none" height="24" stroke="#00A3E0" strokeWidth="2" viewBox="0 0 24 24" width="24">
              <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"></path>
            </svg>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left"
        >
          {/* Form */}
          <form className="flex flex-col gap-5">
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-white/60 uppercase mb-2">Pilot Name</label>
              <input type="text" placeholder="e.g. John Doe" className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white placeholder-white/30 focus:border-racing-red focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-white/60 uppercase mb-2">Frequency (Email)</label>
              <input type="email" placeholder="john@nebula.com" className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white placeholder-white/30 focus:border-racing-red focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-white/60 uppercase mb-2">Mission Parameters</label>
              <textarea placeholder="Describe the project scope, timeline, and goals..." rows="4" className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white placeholder-white/30 focus:border-racing-red focus:outline-none transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="btn-race bg-racing-red text-white font-heading font-bold uppercase tracking-[0.25em] text-sm px-8 py-4 clip-slant border border-racing-red hover:shadow-[0_0_30px_var(--red-glow)] transition-shadow">
              ENGAGE IGNITION ⚡
            </button>
          </form>

          {/* Contact Info Rows */}
          <div className="flex flex-col gap-6 justify-center bg-surface border border-white/10 p-8 carbon-fiber">
            <div className="border-l border-racing-red pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Radio Channel</div>
              <a href="mailto:jharitesh148@gmail.com" className="font-heading text-lg text-white hover:text-racing-red transition-colors break-all">jharitesh148@gmail.com</a>
            </div>
            <div className="border-l border-electric-cyan pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Phone</div>
              <div className="font-heading text-lg text-white">+91 9588499371</div>
            </div>
            <div className="border-l border-white/30 pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Location</div>
              <div className="font-heading text-lg text-white">Thane, Mumbai, Maharashtra, India</div>
            </div>
            <div className="border-l border-white/30 pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Team Principal</div>
              <a href="https://linkedin.com/in/just-ritesh21" target="_blank" rel="noopener noreferrer" className="font-heading text-lg text-white hover:text-electric-cyan transition-colors break-all">linkedin.com/in/just-ritesh21</a>
            </div>
          </div>
        </motion.div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-widest uppercase text-white/40">
          <span>© 2026 Ritesh Jha · Team Emergent</span>
          <span>Chassis · RJ-26 · Season 03</span>
        </div>
      </div>
    </section>
  );
}
