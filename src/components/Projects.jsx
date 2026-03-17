import React from 'react'

const projects = [
  {
    id: 'codelive',
    title: 'CodeLive – Real‑Time Code Collaboration',
    stack: 'MERN Stack · WebSocket (Socket.io) · WebRTC',
    year: '2025',
    bullets: [
      'Full‑stack collaborative coding platform with real‑time code sync for multiple users.',
      'Integrated WebRTC for peer‑to‑peer video calling and screen sharing inside sessions.',
      'Built real‑time chat with persistence and connection recovery for stable collaboration.'
    ]
  },
  {
    id: 'ezyride',
    title: 'EzyRide – Ride Sharing Platform',
    stack: 'React.js · Node.js · MongoDB · REST APIs',
    year: '2025',
    bullets: [
      'End‑to‑end ride‑sharing app with authentication, ride booking and live status updates.',
      'Live chat, OTP verification, SOS alerts and distance‑based fare calculation.',
      'Optimized MongoDB queries and backend logic to reduce response times significantly.'
    ]
  },
  {
    id: 'jha-projects',
    title: 'Jha Projects – Web Development Agency',
    stack: 'MERN Stack · Digital Services · Realtime Experiences',
    year: '2025',
    bullets: [
      'Full‑service web dev agency delivering responsive, high‑performance client websites.',
      'Real‑time collaboration features using WebSocket and WebRTC in select solutions.',
      'Focused on SEO, branding and performance, improving UX and load times for clients.'
    ]
  }
]

export default function Projects(){
  return (
    <div className="grid">
      {projects.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.title}</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: 6 }}>
            {p.stack} · {p.year}
          </p>
          <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem' }}>
            {p.bullets.map((b, idx) => (
              <li key={idx} style={{ marginBottom: 4 }}>{b}</li>
            ))}
          </ul>
          <div className="projects-meta" style={{ marginTop: 10 }}>
            <span>GitHub & live links can go here</span>
            <a href="#" onClick={(e)=>e.preventDefault()}>Detailed case study soon</a>
          </div>
        </div>
      ))}
    </div>
  )
}
