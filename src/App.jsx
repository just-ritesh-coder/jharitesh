import React, { useState } from 'react'
import ParticleBackground from './components/ParticleBackground'

const projects = [
  {
    id: 'codelive',
    number: '01',
    title: 'CODELIVE',
    desc:
      'A real-time collaborative coding platform with low-latency sync, integrated chat, and in-session video + screen share.',
    tags: ['SOCKET.IO', 'REACT', 'WEBRTC'],
    metric: 'PERFORMANCE: 99% UPTIME (ARCH)',
    href: 'https://code-live-nine.vercel.app/',
    image:
      '/codelive.png'
  },
  {
    id: 'ezyride',
    number: '02',
    title: 'EZYRIDE',
    desc:
      'Ride-sharing platform built with MERN stack India. Features authentication, booking, live status updates, and SOS alerts — a custom web app built with React Node.js MongoDB.',
    tags: ['NODE', 'REST API', 'MONGODB'],
    metric: 'SPEED: < 200MS LATENCY (TARGET)',
    href: 'https://ezyride-rouge.vercel.app/',
    image:
      '/ezyride.png'
  },
  {
    id: 'jhaprojects',
    number: '03',
    title: 'JHA PROJECTS',
    desc:
      'Premium web development agency in Mumbai delivering high-performance business sites, branding, and custom MERN builds. Affordable website development for startups.',
    tags: ['MERN', 'SEO', 'PERFORMANCE'],
    metric: 'DELIVERY: CLIENT-FIRST BUILD SYSTEM',
    href: 'https://jhaprojects.in/',
    image:
      '/jhaprojects.png'
  }
]

export default function App(){
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [blogs, setBlogs] = useState([
    {
      id: 4,
      slug: 'how-developers-adapt-to-ai-challenges',
      title: 'How Developers Adapt to AI Challenges in 2025 | MERN Stack Perspective',
      excerpt: 'A developer\'s honest take on using AI in MERN stack projects, freelance workflows, and the "will AI replace us" question. No hype, just what\'s actually happening.',
      date: 'Apr 1, 2026',
      category: 'Developer Insights',
      readTime: '7 min read',
      content: `There's a version of this conversation that happens on Twitter every few weeks. Someone posts a clip of GPT-4 generating a full React component in 11 seconds. The replies split predictably — half the devs say "we're cooked," the other half explain why it doesn't count. Then everyone moves on until it happens again.

I've been building with the MERN stack for a couple of years, freelancing on the side while finishing my CS degree in Mumbai. I've watched this loop enough times that I stopped finding it interesting. The honest answer — the one that doesn't perform well on Twitter — is nowhere near as dramatic as either side makes it.

AI didn't replace developers. It changed what a developer's day actually looks like. The people struggling right now mostly didn't notice the shift until it had already settled in.

---

## It Started With Copilot Being Annoying

When GitHub Copilot launched in 2021, most developers I knew either ignored it or mocked it. The completions were unreliable. You'd ask it for a simple Express route and it would confidently generate something that almost worked — which is the most dangerous kind of wrong. You'd accept it, miss the bug, and spend 40 minutes debugging something you didn't write.

By 2023, the tone had changed. ChatGPT could take a description of a MongoDB schema and produce reasonable Mongoose models. It could explain a React hook in plain English better than most documentation. It could spot an async/await mistake faster than Stack Overflow. That's when the real anxiety started — not among engineers who'd been doing this for a decade, mostly among people earlier in their careers who hadn't had time to build the judgment that AI still can't replicate.

The question everyone was asking — "will AI replace developers?" — missed the point. The better question is which parts of development are being automated, and what that leaves behind.

AI is good at the parts of development that are boring and expensive to get wrong. Boilerplate. CRUD routes. Writing tests for code you already understand. Converting a REST endpoint to handle a new data shape. That kind of work.

It falls apart at everything requiring context — your specific database structure, your client's weird edge case, the reason a piece of code was written the way it was three months ago. It has no memory of last week's conversation. It doesn't know your client changed their mind about the schema twice and that's why the models look the way they do.

The developers who are actually being displaced aren't mid-level engineers with years of project context. They're the ones doing entry-level ticket-closing work — the exact work AI does cheapest. That's a real problem for the industry's talent pipeline. It's just a different problem than most people are talking about.

---

## What It Actually Looks Like on a Real MERN Project

On a recent freelance build — a web app for a fashion boutique client — I used Claude and Copilot throughout. Here's what that actually broke down to.

**Where it saved real time:**

Setting up the Express backend structure took 20 minutes instead of an hour. Not because AI wrote it for me — I described what I needed (product listings, user auth, order management) and it gave me a scaffold I could critique and modify. That's different from just accepting output blindly.

Tailwind class combinations for responsive card layouts. I know Tailwind well, but I still end up back-and-forth-ing on spacing and breakpoints. Having something suggest \`md:grid-cols-2 lg:grid-cols-3 gap-6\` that I can immediately evaluate cuts that loop down.

First drafts of API documentation. Nobody loves this. AI handles it fine.

**Where it made things worse:**

MongoDB aggregation pipelines for anything beyond basic grouping. The output looks right. It frequently isn't. I write these myself now and only use AI to explain what broke when something fails.

Auth logic. The suggestions are often outdated — JWT handling without refresh token rotation, bcrypt config that was standard in 2020. I don't let AI near auth without reviewing every line.

React state involving more than two components. It solves the immediate problem and plants a prop-drilling issue three levels up. It doesn't see the whole tree, and it won't tell you that.

What actually works: use AI to move fast on the parts you already understand well, and go slow and manual on the parts you don't. Most developers do the opposite — they reach for AI hardest when they're least confident, which is exactly when they can't evaluate whether the output is correct.

---

## The Freelance Side Nobody Talks About

There's a part of freelance development that rarely comes up in the "AI vs developers" debate — the work that isn't coding.

Client emails. Proposals. Explaining a technical decision to someone who doesn't code. Scope documents. These take real time, and none of it is billable at the same rate as building features.

AI has made this faster. Not perfect — you still need to know what you want to say before you can edit a draft into something accurate. But a proposal that used to take two hours from scratch now takes 40 minutes when you start with something to react to. That's a real difference across a week of client work.

The harder question is pricing. If AI helps you ship faster, do you charge less? Most experienced freelancers say no — you charge for the outcome, not the hours. A client doesn't care whether the login page took four hours or twelve. They care if it works and doesn't break.

The pressure is real though, especially if you're newer. I've seen listings on Upwork where clients expect a full MERN stack web app for ₹5,000 because someone told them AI could build it in a day. Maybe it can build something in a day. Whether that something actually runs in production, handles edge cases, and doesn't expose user data is a separate question.

Chasing that work is a bad idea. The clients who want ₹5,000 for a full stack app are also the ones who come back with 30 change requests after delivery and no budget for any of them. The work AI can fully automate also tends to produce the most support problems when things go wrong and there's no developer who actually understands what was built.

Being specific about what you know — MERN stack, REST APIs, particular project types — brings in clients who are paying for expertise, not just output. Those clients exist. They're not at the top of every Fiverr search, but they're findable.

---

## What Adaptation Actually Looks Like Day to Day

The developers who seem to be doing fine aren't doing anything unusual. They use AI as a first draft, not a final answer. They've made reviewing AI output a normal part of the job rather than a sign that something went wrong. A senior dev I know calls it hiring a very fast, very overconfident junior who needs everything checked. That's a fair description.

They've also gotten more deliberate about the parts AI still can't touch. System design. Client conversations. Knowing why code exists, not just what it does. Database decisions that need to account for how data will be queried six months from now when requirements have shifted twice. That kind of judgment comes from watching real things fail in real ways, and no model has that context loaded.

The developers who seem most rattled are usually the ones who've spent the least time actually using these tools. There's something genuinely clarifying about building with AI daily. You get a feel pretty fast for where it helps and where it quietly makes things worse. That's harder to be afraid of than the abstract version people argue about online.

---

## One More Thing Worth Saying

I don't know what development looks like in two years. If someone tells you they do, that's a newsletter subscription pitch, not a prediction.

What seems reasonable: developers who treat AI as a tool they understand are in a different position than those who treat it as something happening to them. That's not a dramatic conclusion. Most true things about careers aren't.

The MERN stack isn't going anywhere. Full stack web development isn't going anywhere. The projects I actually work on — custom web apps for startups, client sites, freelance builds — still need someone to understand the problem, make architecture calls, and catch the things a model confidently got wrong.

The floor changed. Boilerplate is cheaper now. That means the judgment calls matter more than they did before. Fine by me — the boilerplate was never the interesting part.

---

*Ritesh Jha is a Computer Engineering student and freelance MERN stack developer based in Mumbai. He builds React and Node.js web apps for startups and small businesses across India — [jharitesh.me](https://jharitesh.me)*`
    },
    {
      id: 1,
      title: 'How I Built CodeLive — A Real-Time Collaborative Coding Platform',
      excerpt: 'A deep dive into the architecture behind CodeLive, including WebSocket integration, real-time synchronization, and the challenges I faced building a collaborative code editor from scratch.',
      date: 'Mar 10, 2026',
      category: 'Project',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'My Journey from Frontend to Full-Stack Developer',
      excerpt: 'From writing my first HTML page to building full-stack apps with the MERN Stack — here\'s how I navigated the learning curve and what I wish I knew earlier.',
      date: 'Feb 22, 2026',
      category: 'Career',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Why I Started Jha Projects — A Web Dev Agency as a College Student',
      excerpt: 'How I turned freelancing into a small agency, the lessons I learned about client management, delivering quality work, and growing a business while still in college.',
      date: 'Jan 15, 2026',
      category: 'Entrepreneurship',
      readTime: '6 min read'
    }
  ])
  const [newBlog, setNewBlog] = useState({ title: '', excerpt: '', category: '' })

  const handleAddBlog = (e) => {
    e.preventDefault()
    if (!newBlog.title || !newBlog.excerpt) return
    setBlogs(prev => [{
      id: Date.now(),
      title: newBlog.title,
      excerpt: newBlog.excerpt,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: newBlog.category || 'General',
      readTime: `${Math.max(2, Math.ceil(newBlog.excerpt.split(' ').length / 40))} min read`
    }, ...prev])
    setNewBlog({ title: '', excerpt: '', category: '' })
    setShowBlogForm(false)
  }

  return (
    <>
      <ParticleBackground />

      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 w-full z-50 px-3 sm:px-6 py-3 sm:py-6" data-purpose="main-navigation">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-luxury-gray/40 backdrop-blur-md border border-glass-border rounded-full px-4 sm:px-8 py-2.5 sm:py-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-neon-blue rounded-sm flex items-center justify-center font-bold text-black rotate-45 text-sm sm:text-base">
              R
            </div>
            <span className="font-heading font-bold text-sm sm:text-lg tracking-tighter ml-1 sm:ml-2">RITESH KUMAR JHA</span>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-10 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a className="hover:text-neon-blue transition-colors" href="#expertise">Expertise</a>
            <a className="hover:text-neon-blue transition-colors" href="#education">Education</a>
            <a className="hover:text-neon-blue transition-colors" href="#showroom">Showroom</a>
            <a className="hover:text-neon-blue transition-colors" href="#blog">Blog</a>
            <a className="hover:text-neon-blue transition-colors" href="#contact">Transmission</a>
          </div>
          <a className="hidden sm:inline-block bg-white text-black px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-neon-blue transition-all" href="#contact">
            START PROJECT
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1.5 hover:text-neon-blue transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 mx-auto max-w-7xl bg-luxury-gray/90 backdrop-blur-md border border-glass-border rounded-2xl px-6 py-4 space-y-3">
            <a className="block text-gray-400 hover:text-neon-blue transition-colors text-sm uppercase tracking-widest py-2" href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
            <a className="block text-gray-400 hover:text-neon-blue transition-colors text-sm uppercase tracking-widest py-2" href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a className="block text-gray-400 hover:text-neon-blue transition-colors text-sm uppercase tracking-widest py-2" href="#showroom" onClick={() => setMenuOpen(false)}>Showroom</a>
            <a className="block text-gray-400 hover:text-neon-blue transition-colors text-sm uppercase tracking-widest py-2" href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a className="block text-gray-400 hover:text-neon-blue transition-colors text-sm uppercase tracking-widest py-2" href="#contact" onClick={() => setMenuOpen(false)}>Transmission</a>
            <a className="block bg-white text-black px-4 py-3 rounded-full font-bold text-sm text-center hover:bg-neon-blue transition-all" href="#contact" onClick={() => setMenuOpen(false)}>
              START PROJECT
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <main className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 overflow-hidden" data-purpose="hero-section">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-20 pointer-events-none">
          <svg className="w-full h-auto" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,300 Q250,100 500,300 T1000,300" fill="none" opacity="0.5" stroke="#00B4FF" strokeWidth="0.5" />
            <path d="M0,350 Q250,150 500,350 T1000,350" fill="none" opacity="0.3" stroke="#00B4FF" strokeWidth="0.5" />
            <line opacity="0.2" stroke="#00B4FF" strokeWidth="0.2" x1="100" x2="100" y1="0" y2="600" />
            <line opacity="0.2" stroke="#00B4FF" strokeWidth="0.2" x1="300" x2="300" y1="0" y2="600" />
            <line opacity="0.2" stroke="#00B4FF" strokeWidth="0.2" x1="500" x2="500" y1="0" y2="600" />
            <line opacity="0.2" stroke="#00B4FF" strokeWidth="0.2" x1="700" x2="700" y1="0" y2="600" />
            <line opacity="0.2" stroke="#00B4FF" strokeWidth="0.2" x1="900" x2="900" y1="0" y2="600" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Text Content */}
          <div className="space-y-5 sm:space-y-6">
          {/* Greeting */}
          <p className="text-neon-blue font-semibold text-base sm:text-lg tracking-wide">Hello, I'm</p>

          {/* Name */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            Ritesh Kumar Jha
          </h1>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 tracking-tight">
            <span className="text-neon-blue font-semibold">Freelance Web Developer, Mumbai</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light">
            I'm Ritesh — a full stack developer based in Mumbai, working with the MERN stack. I build custom web apps and websites for startups and small businesses across India. React on the front, Node.js and Express on the back, MongoDB underneath. Fast, clean, no bloat.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            Available for freelance projects. If you're searching for a web developer in Mumbai or need a MERN stack developer for your next build, let's talk.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
            </svg>
            <span>Thane, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 pt-2">
            <a
              className="group flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-neon-blue text-black font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-white transition-all"
              href="/RItesh_SWE_CV.pdf"
              download
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
            <a
              className="group flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 border border-neon-blue/40 text-neon-blue font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-neon-blue hover:text-black transition-all"
              href="#contact"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Get In Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 sm:gap-6 pt-2">
            <a href="https://github.com/just-ritesh-coder" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-neon-blue transition-colors" aria-label="GitHub">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/just-ritesh21/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-neon-blue transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:jharitesh148@gmail.com" className="text-gray-500 hover:text-neon-blue transition-colors" aria-label="Email">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
          </div>

          {/* Right — Developer Animation */}
          <div className="relative w-full h-64 sm:h-80 md:h-[420px] flex items-center justify-center">
            {/* Outer orbit ring */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border border-dashed border-neon-blue/10 rounded-full" style={{ animation: 'spin 30s linear infinite' }} />
            {/* Inner orbit ring */}
            <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 border border-dashed border-white/5 rounded-full" style={{ animation: 'spin 20s linear infinite reverse' }} />

            {/* Center code editor card */}
            <div className="relative z-10 glass-card rounded-2xl p-4 sm:p-5 md:p-6 w-56 sm:w-64 md:w-80 animate-float">
              {/* Editor top bar */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-[9px] sm:text-[10px] text-gray-500 font-mono">App.jsx</span>
              </div>
              {/* Code lines */}
              <div className="font-mono text-[10px] sm:text-xs space-y-1 sm:space-y-1.5">
                <div><span className="text-purple-400">const</span> <span className="text-neon-blue">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span></div>
                <div className="pl-4"><span className="text-gray-400">name:</span> <span className="text-green-400">"Ritesh"</span><span className="text-gray-600">,</span></div>
                <div className="pl-4"><span className="text-gray-400">stack:</span> <span className="text-green-400">"MERN"</span><span className="text-gray-600">,</span></div>
                <div className="pl-4"><span className="text-gray-400">passion:</span> <span className="text-green-400">"Building"</span><span className="text-gray-600">,</span></div>
                <div className="pl-4"><span className="text-gray-400">status:</span> <span className="text-green-400">"🚀 Shipping"</span></div>
                <div><span className="text-yellow-300">{'}'}</span><span className="text-gray-600">;</span></div>
              </div>
              {/* Blinking cursor */}
              <div className="mt-2 sm:mt-3 h-3.5 sm:h-4 w-1.5 sm:w-2 bg-neon-blue" style={{ animation: 'blink 1s step-end infinite' }} />
            </div>

            {/* Orbiting tech icons */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80" style={{ animation: 'spin 25s linear infinite' }}>
              {/* React icon - top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-space-black border border-neon-blue/20 rounded-xl" style={{ animation: 'spin 25s linear infinite reverse' }}>
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.594.063-.846.18C4.947 2.093 4.38 4.1 4.76 6.864c-2.728.753-4.44 2.028-4.44 3.14 0 1.113 1.716 2.395 4.448 3.15-.388 2.764.175 4.77 1.488 5.33.249.106.54.166.855.166 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .594-.057.846-.175 1.31-.574 1.876-2.58 1.496-5.343 2.72-.757 4.432-2.03 4.432-3.143 0-1.11-1.708-2.39-4.432-3.143.38-2.757-.185-4.765-1.496-5.34a1.824 1.824 0 0 0-.848-.175zM21.151 7.2c.246.755.356 1.488.353 2.17 0 .674-.107 1.405-.35 2.158 2.426.677 3.846 1.713 3.846 2.476 0 .77-1.434 1.81-3.87 2.487.244.753.357 1.487.357 2.17 0 .675-.113 1.392-.353 2.121 2.44.682 3.867 1.724 3.867 2.488 0 .77-1.435 1.81-3.87 2.487-.244-.753-.357-1.487-.357-2.17 0-.675.113-1.392.353-2.121-2.44-.682-3.867-1.724-3.867-2.488-.001-.762 1.434-1.798 3.87-2.48z"/></svg>
              </div>
              {/* Node.js icon - right */}
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-space-black border border-green-500/20 rounded-xl" style={{ animation: 'spin 25s linear infinite reverse' }}>
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.249 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.236l2.41 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.795 5.078c-.28.163-.6.247-.924.247z"/></svg>
              </div>
              {/* MongoDB icon - bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 sm:p-2.5 bg-space-black border border-green-600/20 rounded-xl" style={{ animation: 'spin 25s linear infinite reverse' }}>
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.208c.063-.332.16-.657.256-.981.426-.142.908-.252.908-.252l-.023-.044c.728-.616 4.987-3.504 3.934-13.168z"/></svg>
              </div>
              {/* Code bracket icon - left */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-space-black border border-neon-blue/20 rounded-xl" style={{ animation: 'spin 25s linear infinite reverse' }}>
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" /></svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ─── PERSONAL INFORMATION ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" id="about" data-purpose="personal-info-section">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
              Personal Information
            </h3>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-8 sm:mb-10">
              I'm Ritesh Kumar Jha, a <strong className="text-white font-semibold">freelance web developer Mumbai</strong> and a 3rd-year Computer Science student at Universal College of Engineering. I'm passionate about full-stack development and love working on real-world problems. As a <strong className="text-white font-semibold">freelance MERN stack developer</strong>, I'm available for hire for project-based work, specifically for startups and small businesses looking for custom web application development affordable in India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:jharitesh148@gmail.com" className="text-white font-semibold text-sm sm:text-base hover:text-neon-blue transition-colors">jharitesh148@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+919588499371" className="text-white font-semibold text-sm sm:text-base hover:text-neon-blue transition-colors">+91 9588499371</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Thane, India</p>
                </div>
              </div>

              {/* Degree */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-0.5">Degree</p>
                  <p className="text-white font-semibold text-sm sm:text-base">B.E. CSE — May 2026</p>
                </div>
              </div>

              {/* Available For */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-neon-blue/10 border border-neon-blue/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-0.5">Available For</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Internship / Full-Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE / SKILLS ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-space-black to-luxury-gray" id="expertise" data-purpose="expertise-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-4 sm:gap-8">
            <div>
              <span className="text-neon-blue font-bold tracking-widest text-[10px] sm:text-xs uppercase">System Status</span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black mt-2">
                DIAGNOSTIC <br /> DASHBOARD
              </h2>
            </div>
            <p className="text-gray-500 max-w-md md:text-right font-light text-sm sm:text-base">
              Freelance full stack developer India. Real-time performance instincts across the stack. I build as a custom website developer India for startups and small businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: 'MONGODB', label: 'Hire MongoDB Developer', value: '85%', offset: 50 },
              { name: 'EXPRESS.JS', label: 'Node.js Developer for Hire', value: '92%', offset: 30 },
              { name: 'REACT', label: 'Freelance React Developer', value: '98%', offset: 10 },
              { name: 'NODE.JS', label: 'REST API Developer Node.js', value: '90%', offset: 35 }
            ].map((g) => (
              <div key={g.name} className="glass-card p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-6">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                    <circle className="text-white/5" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8" />
                    <circle
                      className="text-neon-blue speedometer-ring group-hover:stroke-white"
                      cx="64"
                      cy="64"
                      fill="transparent"
                      r="58"
                      stroke="currentColor"
                      strokeDasharray="364"
                      strokeDashoffset={g.offset}
                      strokeWidth="8"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-heading font-bold text-base sm:text-xl md:text-2xl">{g.value}</div>
                </div>
                <h3 className="font-bold text-sm sm:text-lg md:text-xl tracking-tighter">{g.name}</h3>
                <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs mt-1 sm:mt-2 uppercase tracking-widest">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden" id="education" data-purpose="education-section">
        {/* Subtle background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-neon-blue font-bold tracking-widest text-[10px] sm:text-xs uppercase">Academic Background</span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black mt-2">EDUCATION</h2>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base font-light max-w-xl mx-auto">
              My academic journey and educational background
            </p>
          </div>

          {/* Education Card */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 relative">
            {/* Currently Pursuing Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-8 md:top-10 md:right-12">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full">
                Currently Pursuing
              </span>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 bg-neon-blue/10 border border-neon-blue/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pr-2 sm:pr-24 md:pr-40">
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Bachelor of Engineering (B.E.)
                </h3>
                <p className="text-neon-blue font-semibold text-sm sm:text-base md:text-lg mt-1">
                  Computer Science & Engineering
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                    </svg>
                    <span>Universal College of Engineering & Technology</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <span>2022 — 2026</span>
                  </div>
                </div>

                <p className="text-gray-500 mt-3 sm:mt-4 text-sm leading-relaxed hidden sm:block">
                  University of Mumbai
                </p>
                <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
                  Focusing on software engineering principles, data structures, algorithms, and modern web technologies.
                </p>

                {/* Focus Area Tags */}
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">Focus Areas</span>
                  </div>
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    {['Software Engineering', 'Data Structures', 'Algorithms', 'Web Technologies', 'Database Management'].map((area) => (
                      <span key={area} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold rounded-full text-gray-300 hover:border-neon-blue/40 hover:text-neon-blue transition-all cursor-default">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Focus Grid */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-8 sm:mb-10">
              Academic Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  ),
                  title: 'Programming',
                  desc: 'Strong foundation in programming languages and software development principles'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  ),
                  title: 'Problem Solving',
                  desc: 'Developing analytical thinking through data structures and algorithms'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  ),
                  title: 'Continuous Learning',
                  desc: 'Staying updated with latest technologies and industry best practices'
                }
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center group hover:border-neon-blue/30">
                  <div className="text-neon-blue mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base md:text-lg text-white mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS / SHOWROOM ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6" id="showroom" data-purpose="projects-section">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <span className="text-neon-blue font-bold tracking-widest text-[10px] sm:text-xs uppercase">The Collection</span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black mt-2">MERN STACK DEVELOPER INDIA</h2>
            <p className="text-gray-400 mt-2">Curated web developer portfolio Mumbai — building scalable web apps with React & Node.js.</p>
          </div>

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {projects.map((p, idx) => (
              <article key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center group">
                {idx % 2 === 0 ? (
                  <>
                    <div className="lg:col-span-7 overflow-hidden rounded-xl sm:rounded-2xl glass-card">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          alt={p.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                          src={p.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 to-transparent" />
                      </div>
                    </div>
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white/10 group-hover:text-neon-blue/20 transition-colors duration-500">
                        {p.number}
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold italic tracking-tighter">{p.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">{p.desc}</p>
                      <div className="flex gap-2 sm:gap-4 flex-wrap">
                        {p.tags.map((t) => (
                          <div key={t} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold rounded-full">{t}</div>
                        ))}
                      </div>
                      <hr className="border-white/10" />
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <span className="text-neon-blue font-mono text-[10px] sm:text-sm tracking-widest">{p.metric}</span>
                        <a
                          className="text-sm font-bold underline underline-offset-8 hover:text-neon-blue transition-colors"
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          DRIVE LIVE
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:col-span-5 order-2 lg:order-1 space-y-4 sm:space-y-6 lg:text-right">
                      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white/10 group-hover:text-neon-blue/20 transition-colors duration-500">
                        {p.number}
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold italic tracking-tighter">{p.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">{p.desc}</p>
                      <div className="flex gap-2 sm:gap-4 flex-wrap lg:justify-end">
                        {p.tags.map((t) => (
                          <div key={t} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold rounded-full">{t}</div>
                        ))}
                      </div>
                      <hr className="border-white/10" />
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 lg:flex-row-reverse">
                        <span className="text-neon-blue font-mono text-[10px] sm:text-sm tracking-widest">{p.metric}</span>
                        <a
                          className="text-sm font-bold underline underline-offset-8 hover:text-neon-blue transition-colors"
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          DRIVE LIVE
                        </a>
                      </div>
                    </div>
                    <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-xl sm:rounded-2xl glass-card">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          alt={p.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                          src={p.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 to-transparent" />
                      </div>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative" id="contact" data-purpose="contact-section">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl sm:rounded-[40px] p-6 sm:p-8 md:p-16 border-t-2 border-t-neon-blue/40">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">HIRE FREELANCE WEB DEVELOPER INDIA</h2>
            <p className="text-gray-400 text-sm sm:text-base">Looking for an **affordable web developer Mumbai**? Ready to ship something fast? Initiate contact sequence below.</p>
          </div>
          <form
            className="space-y-4 sm:space-y-6 md:space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('pilotName');
              const email = formData.get('email');
              const message = formData.get('message');
              const text = `Hello! I have a new project enquiry:\n\n*Pilot Name:* ${name}\n*Email:* ${email}\n*Mission Parameters:* ${message}`;
              const whatsappUrl = `https://wa.me/919588499371?text=${encodeURIComponent(text)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase ml-2">Pilot Name</label>
                <input name="pilotName" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder:text-gray-700 text-sm sm:text-base" placeholder="e.g. John Doe" type="text" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase ml-2">Frequency (Email)</label>
                <input name="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder:text-gray-700 text-sm sm:text-base" placeholder="john@nebula.com" type="email" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase ml-2">Mission Parameters</label>
              <textarea name="message" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder:text-gray-700 text-sm sm:text-base" placeholder="Describe the project scope, timeline, and goals..." rows="4" required />
            </div>
            <button className="w-full py-4 sm:py-5 md:py-6 bg-white text-black font-black uppercase tracking-widest text-sm sm:text-base md:text-lg hover:bg-neon-blue transition-all active:scale-95 flex items-center justify-center gap-3 sm:gap-4" type="submit">
              ENGAGE IGNITION <span className="text-xl sm:text-2xl" aria-hidden="true">⚡</span>
            </button>
          </form>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-space-black to-luxury-gray" id="blog" data-purpose="blog-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-neon-blue font-bold tracking-widest text-[10px] sm:text-xs uppercase">Dev Log</span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black mt-2">BLOG</h2>
              <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg">Thoughts, tutorials, and behind-the-scenes from my development journey.</p>
            </div>
            <button
              onClick={() => setShowBlogForm(true)}
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-neon-blue text-black font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:bg-white transition-all"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              New Post
            </button>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between group cursor-pointer" onClick={() => setSelectedBlog(blog)}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full">{blog.category}</span>
                    <span className="text-gray-600 text-[10px] sm:text-xs">{blog.readTime}</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors leading-tight">{blog.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">{blog.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-5 sm:mt-6 pt-4 border-t border-white/5">
                  <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">{blog.date}</span>
                  <span className="text-neon-blue text-xs sm:text-sm font-bold group-hover:underline underline-offset-4">Read More →</span>
                </div>
              </article>
            ))}
          </div>

          {/* Add Blog Modal */}
          {showBlogForm && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4" onClick={() => setShowBlogForm(false)}>
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-lg border border-neon-blue/20" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">New Blog Post</h3>
                  <button onClick={() => setShowBlogForm(false)} className="text-gray-500 hover:text-white transition-colors p-1">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <form className="space-y-4 sm:space-y-5" onSubmit={handleAddBlog}>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase ml-1">Title</label>
                    <input
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder:text-gray-700 text-sm"
                      placeholder="Blog post title..."
                      value={newBlog.title}
                      onChange={(e) => setNewBlog(prev => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase ml-1">Category</label>
                    <input
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder:text-gray-700 text-sm"
                      placeholder="e.g. Project, Career, Tutorial..."
                      value={newBlog.category}
                      onChange={(e) => setNewBlog(prev => ({ ...prev, category: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase ml-1">Content / Excerpt</label>
                    <textarea
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder:text-gray-700 text-sm"
                      placeholder="Write your blog content here..."
                      rows="5"
                      value={newBlog.excerpt}
                      onChange={(e) => setNewBlog(prev => ({ ...prev, excerpt: e.target.value }))}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-4 bg-neon-blue text-black font-black uppercase tracking-widest text-sm hover:bg-white transition-all rounded-xl flex items-center justify-center gap-2"
                  >
                    Publish Post <span aria-hidden="true">🚀</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Read Blog Modal */}
          {selectedBlog && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-8" onClick={() => setSelectedBlog(null)}>
              <div
                className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-3xl max-h-full overflow-y-auto border border-neon-blue/20 custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-3 items-center">
                    <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full">{selectedBlog.category}</span>
                    <span className="text-gray-500 text-[10px] sm:text-xs">{selectedBlog.readTime}</span>
                  </div>
                  <button onClick={() => setSelectedBlog(null)} className="text-gray-500 hover:text-white transition-colors p-1">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{selectedBlog.title}</h3>
                <div className="flex items-center gap-2 mb-8 text-gray-400 text-xs sm:text-sm">
                  <span>Ritesh Jha</span>
                  <span>•</span>
                  <span>{selectedBlog.date}</span>
                </div>
                <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedBlog.content ? selectedBlog.content.split('\n').map((line, i) => {
                    if (line.trim() === '') return <div key={i} className="h-4"></div>;
                    if (line.startsWith('## ')) return <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">{line.replace('## ', '')}</h2>;
                    if (line.startsWith('---')) return <hr key={i} className="my-8 border-white/10" />;
                    if (line.startsWith('*Ritesh Jha')) return <p key={i} className="italic text-gray-400 border-t border-white/5 pt-4 mt-8">{line.replace(/\*/g, '').replace(/\[(.*?)\]\((.*?)\)/g, '$1')}</p>;
                    let text = [];
                    let parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
                    parts.forEach((part, j) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        text.push(<strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>);
                      } else if (part.startsWith('`') && part.endsWith('`')) {
                        text.push(<code key={j} className="bg-white/10 text-neon-blue px-1.5 py-0.5 rounded text-xs sm:text-sm">{part.slice(1, -1)}</code>);
                      } else {
                        text.push(part);
                      }
                    });
                    return <p key={i} className="mb-4">{text}</p>;
                  }) : <p>{selectedBlog.excerpt}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 sm:py-12 border-t border-white/5 bg-luxury-gray" data-purpose="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8">
          <div className="text-center md:text-left">
            <div className="font-heading font-black text-xl sm:text-2xl tracking-tighter">
              RITESH <span className="text-neon-blue">KUMAR JHA</span>
            </div>
            <p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-widest mt-1">Freelance Web Developer Mumbai | India</p>
          </div>
          <div className="flex gap-6 sm:gap-8 text-gray-400 text-sm">
            <a className="hover:text-neon-blue transition-colors" href="https://github.com/just-ritesh-coder" target="_blank" rel="noreferrer">Github</a>
            <a className="hover:text-neon-blue transition-colors" href="https://www.linkedin.com/in/just-ritesh21/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-neon-blue transition-colors" href="mailto:jharitesh148@gmail.com">Email</a>
          </div>
          <div className="text-gray-600 text-[9px] sm:text-[10px] uppercase tracking-widest text-center">© {new Date().getFullYear()} JHA PROJECTS. ALL SYSTEMS OPERATIONAL.</div>
        </div>
      </footer>
    </>
  )
}
