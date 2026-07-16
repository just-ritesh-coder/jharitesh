import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10" data-testid="main-nav">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
        <a className="flex items-center gap-3 group" href="#home">
          <div className="w-8 h-8 border-2 border-racing-red flex items-center justify-center font-display font-black text-racing-red text-sm">
            RJ
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-xs text-white uppercase tracking-widest">
              Ritesh Jha
            </div>
            <div className="font-mono text-[9px] text-white/40 tracking-widest">
              GP · 2026 SEASON
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          <a className="group relative px-4 py-2 font-mono text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors" data-testid="nav-link-home" href="#home">
            <span className="relative z-10">S1 · Home</span>
            <span className="absolute left-4 right-4 bottom-1 h-px bg-racing-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a className="group relative px-4 py-2 font-mono text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors" data-testid="nav-link-about" href="#about">
            <span className="relative z-10">S2 · Driver</span>
            <span className="absolute left-4 right-4 bottom-1 h-px bg-racing-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a className="group relative px-4 py-2 font-mono text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors" data-testid="nav-link-projects" href="#projects">
            <span className="relative z-10">S3 · Grand Prix</span>
            <span className="absolute left-4 right-4 bottom-1 h-px bg-racing-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a className="group relative px-4 py-2 font-mono text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors" data-testid="nav-link-skills" href="#skills">
            <span className="relative z-10">S4 · Garage</span>
            <span className="absolute left-4 right-4 bottom-1 h-px bg-racing-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a className="group relative px-4 py-2 font-mono text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors" data-testid="nav-link-contact" href="#contact">
            <span className="relative z-10">S5 · Paddock</span>
            <span className="absolute left-4 right-4 bottom-1 h-px bg-racing-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 border border-white/10 px-3 py-1.5 clip-slant">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 hud-pulse"></span>
            <span className="font-mono text-[10px] tracking-widest text-white/70">LIVE</span>
            <span className="font-mono text-[10px] text-white/50">16:39:55</span>
          </div>
          <a className="btn-race hidden md:inline-flex bg-white text-black font-heading font-bold uppercase tracking-widest text-[11px] px-4 py-2 clip-slant hover:bg-racing-red hover:text-white transition-colors" href="#contact">
            Radio →
          </a>
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div 
        ref={menuRef}
        className="lg:hidden bg-black/95 border-b border-white/10 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <nav className="flex flex-col items-start px-6 py-6 gap-6">
          <a onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[11px] tracking-[0.25em] uppercase text-white hover:text-racing-red transition-colors w-full border-b border-white/10 pb-2" href="#home">S1 · Home</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[11px] tracking-[0.25em] uppercase text-white hover:text-racing-red transition-colors w-full border-b border-white/10 pb-2" href="#about">S2 · Driver</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[11px] tracking-[0.25em] uppercase text-white hover:text-racing-red transition-colors w-full border-b border-white/10 pb-2" href="#projects">S3 · Grand Prix</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[11px] tracking-[0.25em] uppercase text-white hover:text-racing-red transition-colors w-full border-b border-white/10 pb-2" href="#skills">S4 · Garage</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="font-mono text-[11px] tracking-[0.25em] uppercase text-white hover:text-racing-red transition-colors w-full border-b border-white/10 pb-2" href="#contact">S5 · Paddock</a>
        </nav>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-racing-red via-transparent to-electric-cyan">
      </div>
    </header>
  );
}
