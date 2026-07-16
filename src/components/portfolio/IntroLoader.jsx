import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const containerRef = useRef(null);
  const scanLineRef = useRef(null);
  const flashRef = useRef(null);
  const carRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Grid fade in
    gsap.to(gridRef.current, { opacity: 0.2, duration: 1 });
    
    // Sweeping Scan Line
    gsap.to(scanLineRef.current, { top: '110%', duration: 1.5, ease: 'none', repeat: -1 });

    // Phases for lights (handled by React state/timeouts below, but we can animate the exit with GSAP)
    
  }, { scope: containerRef });

  useEffect(() => {
    // Sequence Timeline for lights
    const t1 = setTimeout(() => setPhase(1), 1000);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => setPhase(4), 2500);
    const t5 = setTimeout(() => setPhase(5), 3000);
    
    // Lights out moment
    const t6 = setTimeout(() => {
      setPhase(6);
      
      // GSAP Animations for phase 6 (Lights Out)
      gsap.fromTo(flashRef.current, { opacity: 0.8 }, { opacity: 0, duration: 0.8, ease: "power2.out" });
      gsap.fromTo(carRef.current, { x: '120%', opacity: 0 }, { x: '-120%', opacity: 1, duration: 0.7, ease: "none" });
      gsap.fromTo(textRef.current, { scale: 0.8, opacity: 0, filter: 'blur(10px)' }, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.4, ease: "power2.out", delay: 0.35 });
      gsap.fromTo(subTextRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.8 });
      
    }, 4000); 
    
    // Trigger unmount
    const t7 = setTimeout(() => {
      gsap.to(containerRef.current, { 
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', 
        duration: 0.8, 
        ease: "power4.inOut",
        onComplete: onComplete 
      });
    }, 6000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-bg-base flex flex-col items-center justify-center overflow-hidden"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      {/* Faint Grid Lines Overlay */}
      <div 
        ref={gridRef}
        className="absolute inset-0 grid-lines-anim opacity-0 pointer-events-none"
      />

      {/* Sweeping Scan Line */}
      <div 
        ref={scanLineRef}
        className="absolute left-0 right-0 h-[2px] bg-racing-red shadow-[0_0_15px_rgb(225,6,0)] z-10 pointer-events-none"
        style={{ top: '-10%' }}
      />

      {/* 5 Circular F1 Start Lights */}
      <div className="flex gap-4 md:gap-8 z-20">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`w-10 h-10 md:w-16 md:h-16 rounded-full border-[3px] border-white/10 transition-colors duration-75
              ${phase >= i && phase < 6 ? 'bg-racing-red shadow-[0_0_20px_rgb(225,6,0)] border-transparent' : 'bg-black/80'}
            `}
          />
        ))}
      </div>

      {/* Lights Out Flash */}
      <div 
        ref={flashRef}
        className="absolute inset-0 bg-white z-30 pointer-events-none opacity-0"
      />

      {/* Car Speed Streak */}
      <img
        ref={carRef}
        src="/images/image.png"
        alt="Speed Streak"
        className="absolute w-full h-auto object-cover pointer-events-none opacity-0"
        style={{ top: '25%', filter: 'blur(8px)', scaleX: 1.15, zIndex: 35, transform: 'translateX(120%)' }}
      />

      {/* Ritesh Jha Text Reveal */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none opacity-0"
      >
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white">
          Ritesh<br className="md:hidden"/> Jha
        </h1>
        <p 
          ref={subTextRef}
          className="mt-4 font-mono text-sm md:text-base tracking-[0.35em] text-racing-red uppercase opacity-0"
        >
          GP · 2026 SEASON
        </p>
      </div>
    </div>
  );
}
