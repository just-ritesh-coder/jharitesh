import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden" data-testid="about-section" id="about">
      <div className="absolute inset-0 grid-lines opacity-[0.06]"></div>
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-electric-cyan/10 blur-[140px]"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-10 bg-electric-cyan"></span>
          <span className="font-mono text-[11px] tracking-[0.35em] text-electric-cyan uppercase">
            Sector 02 · Driver Profile
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="font-display font-black text-[16rem] leading-none text-white/[0.04] absolute -top-10 -left-4 select-none pointer-events-none">
              21
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">
                #21 · Team Emergent
              </div>
              <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase leading-none">
                The Driver
              </h2>
              <div className="mt-6 h-[2px] w-24 bg-racing-red"></div>
              <div className="mt-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-1 font-heading text-xl text-white/80 leading-snug">
                  Full stack engineer engineering full-throttle systems — from real-time telemetry pipelines to millisecond-precise interfaces.
                  <p className="mt-4 font-mono text-sm text-white/50 leading-relaxed">
                    MERN specialist chasing the perfect racing line between developer experience, performance, and design integrity.
                  </p>
                </div>

                <div className="w-[180px] flex-shrink-0 group">
                  <div className="relative w-full aspect-[3/4] clip-slant border border-white/10 border-l-2 border-l-racing-red overflow-hidden bg-[#1A1A1A]">
                    <img 
                      src="/images/driver-portrait.png" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Ritesh Jha"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-3 right-3 font-mono text-[10px] text-white/60 tracking-wider pointer-events-none">
                      #21 · RITESH JHA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-white/10 bg-surface p-6 md:p-8 carbon-fiber" data-testid="driver-stats"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.3em] text-white/60 uppercase">
                  Career Telemetry
                </span>
                <span className="font-mono text-[10px] text-electric-cyan">
                  ● LIVE
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="border-l border-racing-red/60 pl-4">
                  <div className="font-display text-2xl md:text-3xl text-white font-bold whitespace-nowrap">4,829</div>
                  <div className="text-[10px] tracking-widest text-white/50 uppercase mt-1">Commits</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="border-l border-racing-red/60 pl-4">
                  <div className="font-display text-2xl md:text-3xl text-white font-bold whitespace-nowrap">312</div>
                  <div className="text-[10px] tracking-widest text-white/50 uppercase mt-1">Deployments</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="border-l border-racing-red/60 pl-4">
                  <div className="font-display text-2xl md:text-3xl text-white font-bold whitespace-nowrap">99.99%</div>
                  <div className="text-[10px] tracking-widest text-white/50 uppercase mt-1">Uptime</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="border-l border-racing-red/60 pl-4">
                  <div className="font-display text-2xl md:text-3xl text-white font-bold whitespace-nowrap">0.02%</div>
                  <div className="text-[10px] tracking-widest text-white/50 uppercase mt-1">Bug Rate</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-8"
            >
              <div className="font-mono text-[11px] tracking-[0.3em] text-white/60 uppercase mb-4">
                Race History
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6 border-b border-white/5 pb-3 last:border-none last:pb-0">
                  <div className="font-display text-2xl text-racing-red font-bold w-16">2024</div>
                  <div className="font-mono text-sm text-white/70">Started competitive engineering circuit</div>
                </div>
                <div className="flex items-center gap-6 border-b border-white/5 pb-3 last:border-none last:pb-0">
                  <div className="font-display text-2xl text-racing-red font-bold w-16">2025</div>
                  <div className="font-mono text-sm text-white/70">Podium in three real-time systems projects</div>
                </div>
                <div className="flex items-center gap-6 border-b border-white/5 pb-3 last:border-none last:pb-0">
                  <div className="font-display text-2xl text-racing-red font-bold w-16">2026</div>
                  <div className="font-mono text-sm text-white/70">Chasing personal best on scalable MERN stacks</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
