import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence Timeline
    const t1 = setTimeout(() => setPhase(1), 1000);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => setPhase(4), 2500);
    const t5 = setTimeout(() => setPhase(5), 3000);
    
    // Lights out moment
    const t6 = setTimeout(() => setPhase(6), 4000); 
    
    // Trigger unmount and reveal main app
    const t7 = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg-base flex flex-col items-center justify-center overflow-hidden"
      initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      exit={{ 
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Faint Grid Lines Overlay */}
      <motion.div 
        className="absolute inset-0 grid-lines-anim opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      {/* Sweeping Scan Line */}
      <motion.div 
        className="absolute left-0 right-0 h-[2px] bg-racing-red shadow-[0_0_15px_rgb(225,6,0)] z-10 pointer-events-none"
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 1.5, ease: 'linear' }}
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
      <AnimatePresence>
        {phase === 6 && (
          <motion.div 
            className="absolute inset-0 bg-white z-30 pointer-events-none"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Car Speed Streak */}
      <AnimatePresence>
        {phase === 6 && (
          <motion.img
            src="/images/image.png"
            alt="Speed Streak"
            className="absolute w-full h-auto object-cover pointer-events-none"
            style={{ top: '25%', filter: 'blur(8px)', scaleX: 1.15, zIndex: 35 }}
            initial={{ x: '120%', opacity: 0 }}
            animate={{ x: '-120%', opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.7, ease: "linear" }}
          />
        )}
      </AnimatePresence>

      {/* Ritesh Jha Text Reveal */}
      <AnimatePresence>
        {phase === 6 && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none"
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
          >
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white">
              Ritesh<br className="md:hidden"/> Jha
            </h1>
            <motion.p 
              className="mt-4 font-mono text-sm md:text-base tracking-[0.35em] text-racing-red uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              GP · 2026 SEASON
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
