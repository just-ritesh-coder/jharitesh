import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ bgImage = 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Lewis_Hamilton_2022_Austrian_Grand_Prix_%281%29.jpg', carImage = 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Lewis_Hamilton_2022_Austrian_Grand_Prix_%281%29.jpg' }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-28" data-testid="hero-section" id="home">
      <div className="absolute inset-0">
        <img alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-40" src={bgImage} style={{ filter: 'saturate(0.4) contrast(1.2)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="absolute inset-0 carbon-fiber opacity-40"></div>
        <div className="absolute inset-0 grid-lines-anim opacity-30"></div>
        <div className="absolute inset-0 speed-streaks"></div>
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-racing-red/20 blur-[120px]"></div>
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-electric-cyan/15 blur-[120px]"></div>
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 px-6 md:px-12 lg:px-20 pb-16 lg:pb-0 min-h-[calc(100vh-6rem)] items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 lg:col-span-6 flex flex-col z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-racing-red"></span>
            <span className="font-mono text-[11px] tracking-[0.35em] text-racing-red uppercase" data-testid="hero-label">
              Full Stack Engineer · P01
            </span>
          </div>
          <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.9] tracking-tight text-white" data-testid="hero-heading">
            Ritesh<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgb(225,6,0)' }}>Jha</span>
          </h1>
          <div className="mt-6 font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 max-w-xl leading-tight" data-testid="hero-subheading">
            Building <span className="text-electric-cyan">ultra-fast</span> real-time digital experiences.
            <p className="mt-6 font-mono text-sm text-white/60 max-w-lg leading-relaxed" data-testid="hero-description">
              MERN stack developer focused on scalable systems, real-time applications, and modern interactive experiences engineered for velocity, precision and reliability.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="border-l border-white/10 pl-3">
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Uptime</div>
                <div className="font-display text-lg text-white font-bold">99.99%</div>
              </div>
              <div className="border-l border-white/10 pl-3">
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Deploys</div>
                <div className="font-display text-lg text-white font-bold">1.2k</div>
              </div>
              <div className="border-l border-white/10 pl-3">
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Latency</div>
                <div className="font-display text-lg text-white font-bold">14ms</div>
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a className="btn-race group inline-flex items-center justify-center gap-3 bg-racing-red text-white font-heading font-bold uppercase tracking-[0.25em] text-sm px-8 py-4 clip-slant border border-racing-red hover:shadow-[0_0_30px_var(--red-glow)] transition-shadow" data-testid="view-grand-prix-btn" href="#projects">
                <span>View Grand Prix</span>
                <svg fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
              <a className="btn-race group inline-flex items-center justify-center gap-3 border border-white/30 text-white font-heading font-bold uppercase tracking-[0.25em] text-sm px-8 py-4 clip-slant hover:border-electric-cyan hover:text-electric-cyan hover:shadow-[0_0_25px_var(--cyan-glow)] transition-all" data-testid="enter-garage-btn" href="#skills">
                <svg fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 3v18M3 12h18"></path>
                </svg>
                <span>Enter Garage</span>
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="col-span-1 lg:col-span-6 relative w-full h-full overflow-hidden min-h-[420px] lg:min-h-[560px]"
        >
          <img alt="F1 Car on Track" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" src="/images/image.png" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 pointer-events-none" data-testid="telemetry-hud">
            {/* Velocity */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="absolute top-4 left-4 md:top-6 md:left-6 pointer-events-auto">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 clip-slant px-4 py-3 font-mono" data-testid="hud-speedometer">
                <div className="text-[10px] tracking-widest text-electric-cyan uppercase">Velocity</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl text-white font-bold">327</span>
                  <span className="text-[10px] text-white/50">KM/H</span>
                </div>
                <div className="mt-2 h-1 w-40 bg-white/10 relative">
                  <div className="absolute inset-y-0 left-0 bg-electric-cyan" style={{ width: '93.4286%' }}></div>
                </div>
              </div>
            </motion.div>
            {/* Gear */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="absolute top-4 right-4 md:top-6 md:right-6 pointer-events-auto">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 clip-slant px-4 py-3 font-mono text-center min-w-[110px]" data-testid="hud-gear">
                <div className="text-[10px] tracking-widest text-white/60 uppercase">Gear</div>
                <div className="font-display text-5xl text-racing-red font-black leading-none">8</div>
                <div className="text-[10px] text-white/50 mt-1"><span>12,800</span> RPM</div>
              </div>
            </motion.div>
            {/* ERS */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 clip-slant px-4 py-3 font-mono min-w-[180px]" data-testid="hud-ers">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-white/60 uppercase">ERS Deploy</span>
                  <span className="w-2 h-2 rounded-full bg-electric-cyan hud-pulse"></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-widest text-white/50 w-10">MGU-K</span>
                  <div className="flex-1 h-1 bg-white/10 relative"><div className="h-full bg-electric-cyan" style={{ width: '82%' }}></div></div>
                  <span className="text-[10px] font-mono text-white/70 w-8 text-right">82%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-widest text-white/50 w-10">MGU-H</span>
                  <div className="flex-1 h-1 bg-white/10 relative"><div className="h-full bg-racing-red" style={{ width: '64%' }}></div></div>
                  <span className="text-[10px] font-mono text-white/70 w-8 text-right">64%</span>
                </div>
              </div>
            </motion.div>
            {/* Tyres */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }} className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 clip-slant px-4 py-3 font-mono min-w-[150px]" data-testid="hud-tyre">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-widest text-white/60 uppercase">Tyres · Soft</span>
                  <span className="w-2 h-2 rounded-full bg-racing-red hud-pulse"></span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between border border-white/10 px-2 py-1"><span className="text-[10px] text-white/50">FL</span><span className="text-[11px] text-white font-bold">104°</span></div>
                  <div className="flex items-center justify-between border border-white/10 px-2 py-1"><span className="text-[10px] text-white/50">FR</span><span className="text-[11px] text-white font-bold">108°</span></div>
                  <div className="flex items-center justify-between border border-white/10 px-2 py-1"><span className="text-[10px] text-white/50">RL</span><span className="text-[11px] text-white font-bold">112°</span></div>
                  <div className="flex items-center justify-between border border-white/10 px-2 py-1"><span className="text-[10px] text-white/50">RR</span><span className="text-[11px] text-white font-bold">110°</span></div>
                </div>
              </div>
            </motion.div>
            {/* Fuel */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }} className="absolute bottom-4 left-4 md:bottom-6 md:left-6 pointer-events-auto">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 clip-slant px-4 py-3 font-mono" data-testid="hud-fuel">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-[10px] tracking-widest text-white/60 uppercase">Fuel</div>
                    <div className="font-display text-lg text-white font-bold">42.3 <span className="text-[10px] text-white/50 ml-1">KG</span></div>
                  </div>
                  <div className="h-8 w-px bg-white/10"></div>
                  <div>
                    <div className="text-[10px] tracking-widest text-white/60 uppercase">Lap</div>
                    <div className="font-display text-lg text-white font-bold">37 <span className="text-[10px] text-white/50">/58</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Engine */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }} className="absolute bottom-4 right-4 md:bottom-6 md:right-6 pointer-events-auto">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 clip-slant px-4 py-3 font-mono" data-testid="hud-engine">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 hud-pulse"></span>
                  <span className="text-[10px] tracking-widest text-white/70 uppercase">Engine · Nominal</span>
                </div>
                <div className="text-[10px] text-white/50 font-mono mt-1">PU · Mercedes M15</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">Scroll · Sector 1</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
}
