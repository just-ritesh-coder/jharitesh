import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedBar = ({ name, pct, color, description }) => {
  return (
    <div className="about-skill-row opacity-0 -translate-x-5">
      <div className="flex justify-between font-mono text-[10px] tracking-widest text-white/50 uppercase mb-2">
        <span title={description}>{name}</span>
        <span className="text-white about-skill-number" data-target={parseInt(pct, 10)}>0%</span>
      </div>
      <div className="h-1 w-full bg-white/10 relative">
        <div 
          className={`absolute inset-y-0 left-0 ${color} about-skill-bar`} 
          style={{ width: '0%' }}
          data-target={pct}
        />
      </div>
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
      }
    });

    // Left content reveal
    tl.fromTo('.about-left', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.4 });

    // Right cards reveal
    tl.fromTo('.about-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.2 }, "-=0.2");

    // Staggered skill rows reveal
    tl.to('.about-skill-row', {
      opacity: 1,
      x: 0,
      duration: 0.3,
      stagger: 0.15
    }, "-=0.2");

    // Bar fills and numbers
    const bars = gsap.utils.toArray('.about-skill-bar');
    const nums = gsap.utils.toArray('.about-skill-number');
    
    bars.forEach((bar, i) => {
      tl.to(bar, {
        width: bar.dataset.target,
        duration: 1,
        ease: "none"
      }, `-=0.8`);
      
      tl.to(nums[i], {
        innerHTML: nums[i].dataset.target,
        snap: { innerHTML: 1 },
        duration: 1,
        ease: "none",
        modifiers: {
          innerHTML: (value) => Math.round(value) + "%"
        }
      }, `<`);
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden" data-testid="about-section" id="about">
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
          <div className="about-left lg:col-span-5 relative opacity-0 -translate-x-12">
            <div className="font-display font-black text-[16rem] leading-none text-white/[0.04] absolute -top-10 -left-4 select-none pointer-events-none">
              21
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">
                #21 · Team Emergent
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase leading-tight">
                THE DRIVER — #21 · Freelance MERN Stack Developer, Mumbai
              </h2>
              <div className="mt-6 h-[2px] w-24 bg-racing-red"></div>
              <div className="mt-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-1 font-heading text-xl text-white/80 leading-snug">
                  I'm a full-stack developer and final-year Computer Engineering student at Universal College of Engineering, based in Thane, Mumbai. I specialize in the MERN stack — building real-time systems, scalable web applications, and clean, modern interfaces for clients across Maharashtra and India.
                  <p className="mt-4 font-mono text-sm text-white/50 leading-relaxed">
                    As a freelance web developer serving Mumbai, Thane, and clients India-wide, I focus on affordable, high-performance web development for startups and small businesses — from custom web apps to full production deployments.
                  </p>
                  <div className="mt-6 p-4 border border-white/10 bg-black/40 font-mono text-[10px] sm:text-xs text-white/70 flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row"><span className="w-32 text-white/40 shrink-0 mb-1 sm:mb-0">EMAIL</span><span className="break-all">jharitesh148@gmail.com</span></div>
                    <div className="flex flex-col sm:flex-row"><span className="w-32 text-white/40 shrink-0 mb-1 sm:mb-0">PHONE</span><span>+91 9588499371</span></div>
                    <div className="flex flex-col sm:flex-row"><span className="w-32 text-white/40 shrink-0 mb-1 sm:mb-0">LOCATION</span><span>Thane, Mumbai, Maharashtra, India</span></div>
                    <div className="flex flex-col sm:flex-row"><span className="w-32 text-white/40 shrink-0 mb-1 sm:mb-0">DEGREE</span><span>B.E. Computer Engineering — Final Year (2026)</span></div>
                    <div className="flex flex-col sm:flex-row"><span className="w-32 text-white/40 shrink-0 mb-1 sm:mb-0">AVAILABLE FOR</span><span>Freelance Projects · Internship · Full-Time</span></div>
                  </div>
                </div>

                <div className="w-[180px] flex-shrink-0 group">
                  <div className="relative w-full aspect-[3/4] clip-slant border border-white/10 border-l-2 border-l-racing-red overflow-hidden bg-[#1A1A1A]">
                    <img 
                      src="/images/driver-portrait.png" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Ritesh Jha — freelance full stack developer Mumbai, MERN stack specialist"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-3 right-3 font-mono text-[10px] text-white/60 tracking-wider pointer-events-none">
                      #21 · RITESH JHA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div 
              className="about-card border border-white/10 bg-surface p-6 md:p-8 carbon-fiber opacity-0 translate-y-8" data-testid="driver-stats"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.3em] text-white/60 uppercase">
                  Skill Telemetry
                </span>
                <span className="font-mono text-[10px] text-electric-cyan">
                  â— ACTIVE
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <AnimatedBar name="MONGODB" pct="85%" color="bg-electric-cyan" index={0} description="Hire a MongoDB developer for scalable data-driven apps" />
                <AnimatedBar name="EXPRESS.JS" pct="92%" color="bg-racing-red" index={1} description="Node.js developer for hire — REST API specialist" />
                <AnimatedBar name="REACT" pct="98%" color="bg-emerald-400" description="Freelance React developer for fast, modern UIs" />
                <AnimatedBar name="NODE.JS" pct="90%" color="bg-blue-500" description="REST API development with Node.js" />
              </div>
            </div>
            <div 
              className="about-card border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-8 opacity-0 translate-y-8"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
