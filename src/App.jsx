import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroLoader from './components/portfolio/IntroLoader';
import Navigation from './components/portfolio/Navigation';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';

export default function App() {
  const [showLoader, setShowLoader] = useState(() => {
    return !sessionStorage.getItem('hasSeenIntro');
  });

  return (
    <div className="bg-bg-base text-white font-mono antialiased selection:bg-racing-red/30 selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {showLoader && (
          <IntroLoader 
            key="loader"
            onComplete={() => {
              sessionStorage.setItem('hasSeenIntro', 'true');
              setShowLoader(false);
            }} 
          />
        )}
      </AnimatePresence>
      
      {!showLoader && (
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
