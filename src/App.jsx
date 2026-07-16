import React, { useState, useEffect, useRef } from 'react';
import IntroLoader from './components/portfolio/IntroLoader';
import Navigation from './components/portfolio/Navigation';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';

// GSAP + Lenis + Three
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showLoader, setShowLoader] = useState(() => {
    return !sessionStorage.getItem('hasSeenIntro');
  });

  const cursorRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // Custom Cursor using quickTo
    const xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.2, ease: "power3"});
    const yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.2, ease: "power3"});

    const updateMousePosition = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        gsap.to(cursorRef.current, { scale: 2.5, duration: 0.3, ease: "back.out(1.7)" });
      } else {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    // Scroll Progress Bar
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-bg-base text-white font-mono antialiased selection:bg-racing-red/30 selection:text-white overflow-x-hidden relative">
      {/* Three.js Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach="background" args={['#0A0A0C']} />
          <ambientLight intensity={0.5} />
          <Sparkles count={150} scale={12} size={2} speed={0.2} opacity={0.3} color="#00A3E0" />
          <Sparkles count={100} scale={12} size={3} speed={0.1} opacity={0.2} color="#E10600" />
        </Canvas>
      </div>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-1 bg-racing-red origin-left z-[9998] scale-x-0"
      />
      
      {showLoader ? (
        <IntroLoader 
          onComplete={() => {
            sessionStorage.setItem('hasSeenIntro', 'true');
            setShowLoader(false);
          }} 
        />
      ) : (
        <>
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
