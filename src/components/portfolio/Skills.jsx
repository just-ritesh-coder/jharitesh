import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden" data-testid="skills-section" id="skills">
      <div className="absolute inset-0 grid-lines opacity-[0.06]"></div>
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-racing-red/10 blur-[140px]"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-electric-cyan"></span>
              <span className="font-mono text-[11px] tracking-[0.35em] text-electric-cyan uppercase">
                Sector 04 · Team Garage
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white uppercase leading-tight">
              TYRE COMPOUNDS — Tech Stack of a Freelance MERN Stack Developer
            </h2>
            <p className="mt-4 font-mono text-sm text-white/50 max-w-xl">
              The technology stack I use as a full-stack developer in Mumbai — from React and Node.js to MongoDB — engineered for performance, reliability, and scalable web applications across India.
            </p>
          </div>
          <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase border border-white/10 px-3 py-1.5">
            Pit Wall · Ready
          </div>
        </div>
        
        <div className="max-w-3xl mt-12">
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between font-mono text-[11px] tracking-widest text-white/50 uppercase mb-2">
                <span title="Hire a MongoDB developer for scalable data-driven apps">MONGODB</span>
                <span className="text-white">85%</span>
              </div>
              <div className="h-1 w-full bg-white/10 relative"><div className="absolute inset-y-0 left-0 bg-electric-cyan" style={{ width: '85%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[11px] tracking-widest text-white/50 uppercase mb-2">
                <span title="Node.js developer for hire — REST API specialist">EXPRESS.JS</span>
                <span className="text-white">92%</span>
              </div>
              <div className="h-1 w-full bg-white/10 relative"><div className="absolute inset-y-0 left-0 bg-racing-red" style={{ width: '92%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[11px] tracking-widest text-white/50 uppercase mb-2">
                <span title="Freelance React developer for fast, modern UIs">REACT</span>
                <span className="text-white">98%</span>
              </div>
              <div className="h-1 w-full bg-white/10 relative"><div className="absolute inset-y-0 left-0 bg-emerald-400" style={{ width: '98%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between font-mono text-[11px] tracking-widest text-white/50 uppercase mb-2">
                <span title="REST API development with Node.js">NODE.JS</span>
                <span className="text-white">90%</span>
              </div>
              <div className="h-1 w-full bg-white/10 relative"><div className="absolute inset-y-0 left-0 bg-blue-500" style={{ width: '90%' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
