import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');

    // Staggered entrance
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );

    cards.forEach(card => {
      // Tech tags entrance
      gsap.fromTo(card.querySelectorAll('.tech-tag'),
        { opacity: 0, x: -10, scale: 0.8 },
        { 
          opacity: 1, x: 0, scale: 1, stagger: 0.1, duration: 0.4, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: card, start: "top 90%" }
        }
      );

      gsap.fromTo(card.querySelectorAll('.tech-bar'),
        { width: 0 },
        { 
          width: (i, target) => target.dataset.width, 
          duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: card, start: "top 90%" }
        }
      );

      // Magnetic 3D Tilt
      gsap.set(card, { transformPerspective: 1000 });
      const xTo = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power3" });
      
      const link = card.querySelector('.enter-pit-link');
      const linkXTo = gsap.quickTo(link, "x", { duration: 0.4, ease: "power3" });
      const linkYTo = gsap.quickTo(link, "y", { duration: 0.4, ease: "power3" });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const xNorm = (relX / rect.width) * 2 - 1;
        const yNorm = (relY / rect.height) * 2 - 1;
        
        xTo(xNorm * 10);
        yTo(yNorm * -10);

        if (link) {
          const linkRect = link.getBoundingClientRect();
          const linkCenterX = linkRect.left + linkRect.width / 2;
          const linkCenterY = linkRect.top + linkRect.height / 2;
          const distToLink = Math.hypot(e.clientX - linkCenterX, e.clientY - linkCenterY);
          
          if (distToLink < 60) {
            linkXTo((e.clientX - linkCenterX) * 0.4);
            linkYTo((e.clientY - linkCenterY) * 0.4);
          } else {
            linkXTo(0);
            linkYTo(0);
          }
        }
      });

      card.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
        linkXTo(0);
        linkYTo(0);
      });
    });
  }, { scope: containerRef });

  const projectsData = [
    {
      id: 'p1', title: 'JHA Projects', position: 'P1', color: 'rgb(225,6,0)',
      type: 'MERN · SEO · Performance', lap: '0.14s', metric: 'Client-First Build System',
      description: 'A web development agency based in Mumbai, delivering affordable, high-performance business websites, branding, and custom MERN builds for startups across India.',
      link: 'https://jhaprojects.in',
      tech: [
        { name: 'React', score: 85, pct: '85%' }, { name: 'Node', score: 80, pct: '80%' },
        { name: 'Mongo', score: 70, pct: '70%' }, { name: 'Tailwind', score: 95, pct: '95%' },
      ]
    },
    {
      id: 'p2', title: 'Kaswan Transport', position: 'P2', color: 'rgb(0,163,224)',
      type: 'React · Logistics', lap: '0.22s', metric: 'Fast & Reliable Transport',
      description: 'A professional website for Kaswan Transport, showcasing their logistics services, fleet, and contact details for reliable transportation across India.',
      link: 'https://kaswantransport.in',
      tech: [
        { name: 'React', score: 90, pct: '90%' }, { name: 'Tailwind', score: 85, pct: '85%' },
        { name: 'Node', score: 75, pct: '75%' }, { name: 'Express', score: 80, pct: '80%' },
      ]
    },
    {
      id: 'p3', title: 'Bhumi Cargo Express', position: 'P3', color: 'rgb(243,169,0)',
      type: 'Web App · Cargo', lap: '0.31s', metric: 'Efficient Cargo Management',
      description: 'An online presence for Bhumi Cargo Express, providing tracking, booking, and cargo management solutions for seamless logistics operations.',
      link: 'https://bhumicargoexpress.in',
      tech: [
        { name: 'React', score: 88, pct: '88%' }, { name: 'Node', score: 82, pct: '82%' },
        { name: 'Mongo', score: 78, pct: '78%' }, { name: 'Express', score: 85, pct: '85%' },
      ]
    }
  ];

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black" data-testid="projects-section" id="projects">
      <div className="absolute inset-0 carbon-fiber opacity-40"></div>
      <div className="absolute inset-0 grid-lines opacity-[0.07]"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-racing-red"></span>
              <span className="font-mono text-[11px] tracking-[0.35em] text-racing-red uppercase">
                Sector 03 · Grand Prix Circuit
              </span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-none">
              RACE RESULTS — Web Development Projects by a Freelance MERN Stack Developer
            </h2>
            <p className="mt-4 font-mono text-sm text-white/50 max-w-xl">
              Selected projects built as a freelance web developer in Mumbai — real-time systems, ride-sharing platforms, and business websites, engineered with the MERN stack for startups and small businesses across India.
            </p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-widest uppercase text-white/40">
            <span>Season · 2026</span>
            <span>Points · 483</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <article 
              key={project.id}
              className="project-card group relative bg-surface border border-white/10 hover:border-white/40 transition-colors p-6 flex flex-col gap-5 overflow-hidden opacity-0" 
              data-testid="project-race-card"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-30 group-hover:opacity-60 transition-opacity" style={{ background: `radial-gradient(circle at right top, ${project.color}, transparent 70%)` }}></div>
              <div className="flex items-center justify-between relative pointer-events-none">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-black" style={{ color: project.color }}>{project.position}</span>
                  <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">{project.type}</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Lap</div>
                  <div className="font-display text-lg text-white font-bold">{project.lap}</div>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-white leading-tight pointer-events-none">
                {project.title}
              </h3>
              <div className="font-mono text-[11px] text-electric-cyan pointer-events-none">
                {project.metric}
              </div>
              {project.description && (
                <p className="font-sans text-sm text-white/70 mt-2 mb-2 line-clamp-3 pointer-events-none">
                  {project.description}
                </p>
              )}
              <div className="flex flex-col gap-2 mt-auto pointer-events-none">
                {project.tech.map((t, i) => (
                  <div key={i} className="tech-tag flex items-center gap-3 opacity-0">
                    <span className="text-[10px] font-mono tracking-widest text-white/50 w-14">{t.name}</span>
                    <div className="flex-1 h-[3px] bg-white/10">
                      <div 
                        className="tech-bar h-full w-0" 
                        data-width={t.pct}
                        style={{ background: project.color }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-mono text-white/60 w-8 text-right">{t.score}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2 pointer-events-auto">
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Live Project</span>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enter-pit-link font-mono text-[10px] text-white group-hover:text-electric-cyan transition-colors inline-flex items-center gap-1 cursor-pointer relative z-10"
                >
                  Visit Website →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
