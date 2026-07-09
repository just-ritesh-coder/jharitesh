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
            <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase leading-none">
              Tyre Compounds
            </h2>
            <p className="mt-4 font-mono text-sm text-white/50 max-w-xl">
              Skill inventory grouped by compound — from race-day peak specialities to long-run fundamentals.
            </p>
          </div>
          <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase border border-white/10 px-3 py-1.5">
            Pit Wall · Ready
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Soft */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative border border-white/10 bg-surface p-6 md:p-8 carbon-fiber hover:border-white/40 transition-colors overflow-hidden" data-testid="skill-tyre-card"
          >
            <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: 'rgb(225,6,0)' }}></div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-display font-black text-3xl md:text-4xl uppercase" style={{ color: 'rgb(225,6,0)' }}>Soft</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-white/50 mt-1">Peak Performance</div>
              </div>
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 rounded-full border-[6px]" style={{ borderColor: 'rgb(225,6,0)', opacity: 0.9 }}></div>
                <div className="absolute inset-2 rounded-full border border-dashed border-white/30 wheel-spin" style={{ animationDuration: '2.4s' }}></div>
                <div className="absolute inset-6 rounded-full bg-white/5 border border-white/20"></div>
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'rgba(225,6,0,0.267) 0px 0px 30px' }}></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js'].map(skill => (
                <span key={skill} className="font-mono text-[11px] tracking-wide text-white/80 border border-white/10 px-3 py-1.5 hover:border-white/40 hover:text-white transition-colors" style={{ background: 'rgba(0,0,0,0.4)' }}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-white/40 border-t border-white/10 pt-4">
              <span>Compound · SOFT</span>
              <span className="hud-pulse" style={{ color: 'rgb(225,6,0)' }}>●</span>
            </div>
          </motion.div>
          
          {/* Medium */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative border border-white/10 bg-surface p-6 md:p-8 carbon-fiber hover:border-white/40 transition-colors overflow-hidden" data-testid="skill-tyre-card"
          >
            <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: 'rgb(243,169,0)' }}></div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-display font-black text-3xl md:text-4xl uppercase" style={{ color: 'rgb(243,169,0)' }}>Medium</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-white/50 mt-1">Balanced Deployment</div>
              </div>
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 rounded-full border-[6px]" style={{ borderColor: 'rgb(243,169,0)', opacity: 0.9 }}></div>
                <div className="absolute inset-2 rounded-full border border-dashed border-white/30 wheel-spin" style={{ animationDuration: '2.4s' }}></div>
                <div className="absolute inset-6 rounded-full bg-white/5 border border-white/20"></div>
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'rgba(243,169,0,0.267) 0px 0px 30px' }}></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Redis', 'GraphQL', 'Docker', 'AWS', 'PostgreSQL', 'Framer Motion'].map(skill => (
                <span key={skill} className="font-mono text-[11px] tracking-wide text-white/80 border border-white/10 px-3 py-1.5 hover:border-white/40 hover:text-white transition-colors" style={{ background: 'rgba(0,0,0,0.4)' }}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-white/40 border-t border-white/10 pt-4">
              <span>Compound · MEDIUM</span>
              <span className="hud-pulse" style={{ color: 'rgb(243,169,0)' }}>●</span>
            </div>
          </motion.div>
          
          {/* Hard */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative border border-white/10 bg-surface p-6 md:p-8 carbon-fiber hover:border-white/40 transition-colors overflow-hidden" data-testid="skill-tyre-card"
          >
            <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: 'rgb(255,255,255)' }}></div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-display font-black text-3xl md:text-4xl uppercase" style={{ color: 'rgb(255,255,255)' }}>Hard</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-white/50 mt-1">System Fundamentals</div>
              </div>
              <div className="relative w-20 h-20 shrink-0">
                <div className="absolute inset-0 rounded-full border-[6px]" style={{ borderColor: 'rgb(255,255,255)', opacity: 0.9 }}></div>
                <div className="absolute inset-2 rounded-full border border-dashed border-white/30 wheel-spin" style={{ animationDuration: '2.4s' }}></div>
                <div className="absolute inset-6 rounded-full bg-white/5 border border-white/20"></div>
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'rgba(255,255,255,0.267) 0px 0px 30px' }}></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Data Structures', 'System Design', 'Networking', 'Linux', 'CI/CD', 'Testing'].map(skill => (
                <span key={skill} className="font-mono text-[11px] tracking-wide text-white/80 border border-white/10 px-3 py-1.5 hover:border-white/40 hover:text-white transition-colors" style={{ background: 'rgba(0,0,0,0.4)' }}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-white/40 border-t border-white/10 pt-4">
              <span>Compound · HARD</span>
              <span className="hud-pulse" style={{ color: 'rgb(255,255,255)' }}>●</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
