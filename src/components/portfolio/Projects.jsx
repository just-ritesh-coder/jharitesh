import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const projectsData = [
    {
      id: 'p1',
      title: 'Velocity — Real-Time Trading Console',
      position: 'P1',
      color: 'rgb(225,6,0)',
      type: 'Fintech · WebSocket',
      lap: '0.14s',
      metric: 'LCP · Bundle 82kb',
      tech: [
        { name: 'React', score: 92, pct: '92%' },
        { name: 'Node', score: 88, pct: '88%' },
        { name: 'Redis', score: 76, pct: '76%' },
        { name: 'Mongo', score: 70, pct: '70%' },
      ]
    },
    {
      id: 'p2',
      title: 'PitLane — Collaborative IDE',
      position: 'P2',
      color: 'rgb(0,163,224)',
      type: 'DevTools · CRDT',
      lap: '0.22s',
      metric: 'TTI · 60fps sync',
      tech: [
        { name: 'React', score: 90, pct: '90%' },
        { name: 'Yjs', score: 82, pct: '82%' },
        { name: 'Node', score: 78, pct: '78%' },
        { name: 'Mongo', score: 65, pct: '65%' },
      ]
    },
    {
      id: 'p3',
      title: 'Apex — Live Analytics Grid',
      position: 'P3',
      color: 'rgb(243,169,0)',
      type: 'Data Viz · Streaming',
      lap: '0.31s',
      metric: '10k rows · 60fps',
      tech: [
        { name: 'React', score: 85, pct: '85%' },
        { name: 'D3', score: 74, pct: '74%' },
        { name: 'Kafka', score: 68, pct: '68%' },
        { name: 'Node', score: 80, pct: '80%' },
      ]
    },
    {
      id: 'p4',
      title: 'Podium — E-Commerce Engine',
      position: 'P4',
      color: 'rgb(225,6,0)',
      type: 'Commerce · Edge',
      lap: '0.42s',
      metric: 'CVR +38%',
      tech: [
        { name: 'Next', score: 88, pct: '88%' },
        { name: 'Node', score: 82, pct: '82%' },
        { name: 'Mongo', score: 75, pct: '75%' },
        { name: 'Stripe', score: 90, pct: '90%' },
      ]
    },
    {
      id: 'p5',
      title: 'Chicane — Realtime Chat SDK',
      position: 'P5',
      color: 'rgb(0,163,224)',
      type: 'Messaging · SDK',
      lap: '0.19s',
      metric: '30ms round-trip',
      tech: [
        { name: 'Socket', score: 92, pct: '92%' },
        { name: 'Node', score: 88, pct: '88%' },
        { name: 'Mongo', score: 72, pct: '72%' },
        { name: 'React', score: 80, pct: '80%' },
      ]
    },
    {
      id: 'p6',
      title: 'Slipstream — Telemetry Dashboard',
      position: 'P6',
      color: 'rgb(243,169,0)',
      type: 'Observability',
      lap: '0.27s',
      metric: '5M events/day',
      tech: [
        { name: 'React', score: 84, pct: '84%' },
        { name: 'Node', score: 82, pct: '82%' },
        { name: 'Grafana', score: 78, pct: '78%' },
        { name: 'Mongo', score: 74, pct: '74%' },
      ]
    }
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-black" data-testid="projects-section" id="projects">
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
            <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase leading-none">
              Race Results
            </h2>
            <p className="mt-4 font-mono text-sm text-white/50 max-w-xl">
              Selected projects — ranked by production impact, engineered for peak performance.
            </p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-widest uppercase text-white/40">
            <span>Season · 2026</span>
            <span>Points · 483</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.article 
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-surface border border-white/10 hover:border-white/40 transition-colors p-6 flex flex-col gap-5 overflow-hidden" 
              data-testid="project-race-card"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-30 group-hover:opacity-60 transition-opacity" style={{ background: `radial-gradient(circle at right top, ${project.color}, transparent 70%)` }}></div>
              <div className="flex items-center justify-between relative">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-black" style={{ color: project.color }}>{project.position}</span>
                  <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">{project.type}</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Lap</div>
                  <div className="font-display text-lg text-white font-bold">{project.lap}</div>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-white leading-tight">
                {project.title}
              </h3>
              <div className="font-mono text-[11px] text-electric-cyan">
                {project.metric}
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-widest text-white/50 w-14">{t.name}</span>
                    <div className="flex-1 h-[3px] bg-white/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: t.pct }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        className="h-full" 
                        style={{ background: project.color }}
                      ></motion.div>
                    </div>
                    <span className="text-[10px] font-mono text-white/60 w-8 text-right">{t.score}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Case Study</span>
                <span className="font-mono text-[10px] text-white group-hover:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Enter Pit →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
