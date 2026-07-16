import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedBar = ({ name, pct, color, description }) => {
  return (
    <div className="skill-row opacity-0 -translate-x-5">
      <div className="flex justify-between font-mono text-[11px] tracking-widest text-white/50 uppercase mb-2">
        <span title={description}>{name}</span>
        <span className="text-white skill-number" data-target={parseInt(pct, 10)}>0%</span>
      </div>
      <div className="h-1 w-full bg-white/10 relative">
        <div 
          className={`absolute inset-y-0 left-0 ${color} skill-bar`} 
          style={{ width: '0%' }}
          data-target={pct}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal header
    gsap.fromTo('.skills-header', 
      { opacity: 0, y: 24 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Pinning timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
      }
    });

    // Staggered reveal
    tl.to('.skill-row', {
      opacity: 1,
      x: 0,
      duration: 0.3,
      stagger: 0.15
    });

    // Staggered bar fill
    const bars = gsap.utils.toArray('.skill-bar');
    const nums = gsap.utils.toArray('.skill-number');
    
    bars.forEach((bar, i) => {
      tl.to(bar, {
        width: bar.dataset.target,
        duration: 1,
        ease: "none"
      }, `-=0.8`); // overlap with previous animations
      
      tl.to(nums[i], {
        innerHTML: nums[i].dataset.target,
        snap: { innerHTML: 1 },
        duration: 1,
        ease: "none",
        modifiers: {
          innerHTML: (value) => Math.round(value) + "%"
        }
      }, `<`); // start with bar animation
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden" data-testid="skills-section" id="skills">
      <div className="absolute inset-0 grid-lines opacity-[0.06]"></div>
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-racing-red/10 blur-[140px]"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="skills-header flex items-end justify-between flex-wrap gap-4 mb-12">
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
            <AnimatedBar name="MONGODB" pct="85%" color="bg-electric-cyan" description="Hire a MongoDB developer for scalable data-driven apps" />
            <AnimatedBar name="EXPRESS.JS" pct="92%" color="bg-racing-red" description="Node.js developer for hire — REST API specialist" />
            <AnimatedBar name="REACT" pct="98%" color="bg-emerald-400" description="Freelance React developer for fast, modern UIs" />
            <AnimatedBar name="NODE.JS" pct="90%" color="bg-blue-500" description="REST API development with Node.js" />
          </div>
        </div>
      </div>
    </section>
  );
}
