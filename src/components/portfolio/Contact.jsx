import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Entrance animations
    gsap.fromTo('.contact-anim',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo('.contact-anim-scale',
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );

    // Magnetic Button Effect
    const btn = document.querySelector('.contact-btn');
    if (btn) {
      const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        
        xTo(relX * 0.3);
        yTo(relY * 0.3);
      });

      btn.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'back.out(1.5)' });
      });
      
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'back.out(1.5)' });
      });
      
      btn.addEventListener('mousedown', () => {
        gsap.to(btn, { scale: 0.95, duration: 0.1 });
      });
      
      btn.addEventListener('mouseup', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'back.out(1.5)' });
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black" data-testid="contact-section" id="contact">
      <div className="absolute inset-0 carbon-fiber opacity-40"></div>
      <div className="absolute inset-0 grid-lines opacity-[0.07]"></div>
      <div className="absolute inset-0 speed-streaks opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.12),transparent_60%)]"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="contact-anim flex items-center justify-center gap-3 mb-6 opacity-0">
          <span className="h-[2px] w-10 bg-racing-red"></span>
          <span className="font-mono text-[11px] tracking-[0.35em] text-racing-red uppercase">
            Sector 05 · Paddock Radio
          </span>
          <span className="h-[2px] w-10 bg-racing-red"></span>
        </div>
        <h2 className="contact-anim font-display font-black text-3xl md:text-5xl lg:text-6xl text-white uppercase leading-tight opacity-0">
          OPEN CHANNEL — Hire a Freelance Web Developer in Mumbai
        </h2>
        <p className="contact-anim mt-6 font-heading text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-snug opacity-0">
          Ready to race? Radio in — I respond within one flying lap.
        </p>
        <p className="contact-anim mt-4 font-mono text-sm text-white/50 max-w-2xl mx-auto leading-relaxed opacity-0">
          Looking for a freelance web developer in Mumbai or a MERN stack developer for your next project? Whether you're a startup or small business anywhere in Maharashtra or India, let's build something fast.
        </p>
        <div className="contact-anim-scale relative h-24 my-10 flex items-center justify-center opacity-0">
          <div className="absolute w-24 h-24 border-2 border-electric-cyan rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute w-24 h-24 border-2 border-racing-red rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
          <div className="relative w-16 h-16 border-2 border-white/30 flex items-center justify-center rounded-full bg-black/60 backdrop-blur">
            <svg fill="none" height="24" stroke="#00A3E0" strokeWidth="2" viewBox="0 0 24 24" width="24">
              <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"></path>
            </svg>
          </div>
        </div>
        <div className="contact-anim mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left opacity-0">
          {/* Form */}
          <form action="https://formsubmit.co/jharitesh148@gmail.com" method="POST" className="flex flex-col gap-5">
            <input type="hidden" name="_subject" value="New Inquiry from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-white/60 uppercase mb-2">Pilot Name</label>
              <input type="text" name="name" required placeholder="e.g. John Doe" className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white placeholder-white/30 focus:border-racing-red focus:shadow-[0_0_15px_rgba(225,6,0,0.4)] focus:outline-none transition-all duration-300" />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-white/60 uppercase mb-2">Frequency (Email)</label>
              <input type="email" name="email" required placeholder="john@nebula.com" className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white placeholder-white/30 focus:border-racing-red focus:shadow-[0_0_15px_rgba(225,6,0,0.4)] focus:outline-none transition-all duration-300" />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-widest text-white/60 uppercase mb-2">Mission Parameters</label>
              <textarea name="message" required placeholder="Describe the project scope, timeline, and goals..." rows="4" className="w-full bg-black/40 border border-white/10 p-4 font-sans text-white placeholder-white/30 focus:border-racing-red focus:shadow-[0_0_15px_rgba(225,6,0,0.4)] focus:outline-none transition-all duration-300 resize-none"></textarea>
            </div>
            <button 
              type="submit" 
              className="contact-btn btn-race bg-racing-red text-white font-heading font-bold uppercase tracking-[0.25em] text-sm px-8 py-4 clip-slant border border-racing-red hover:shadow-[0_0_30px_var(--red-glow)] transition-shadow inline-block"
            >
              ENGAGE IGNITION ⚡
            </button>
          </form>

          {/* Contact Info Rows */}
          <div className="flex flex-col gap-6 justify-center bg-surface border border-white/10 p-8 carbon-fiber">
            <div className="border-l border-racing-red pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Radio Channel</div>
              <a href="mailto:jharitesh148@gmail.com" className="font-heading text-lg text-white hover:text-racing-red transition-colors break-all">jharitesh148@gmail.com</a>
            </div>
            <div className="border-l border-electric-cyan pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Phone</div>
              <div className="font-heading text-lg text-white">+91 9588499371</div>
            </div>
            <div className="border-l border-white/30 pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Location</div>
              <div className="font-heading text-lg text-white">Thane, Mumbai, Maharashtra, India</div>
            </div>
            <div className="border-l border-white/30 pl-4">
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Team Principal</div>
              <a href="https://linkedin.com/in/just-ritesh21" target="_blank" rel="noopener noreferrer" className="font-heading text-lg text-white hover:text-electric-cyan transition-colors break-all">linkedin.com/in/just-ritesh21</a>
            </div>
          </div>
        </div>
        <div className="contact-anim mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-widest uppercase text-white/40 opacity-0">
          <span>Â© 2026 Ritesh Jha · Team Emergent</span>
          <span>Chassis · RJ-26 · Season 03</span>
        </div>
      </div>
    </section>
  );
}
