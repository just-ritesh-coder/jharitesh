import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const items = [
  { year: '2020', title: 'Started Development', desc: 'Built first React apps' },
  { year: '2021', title: 'Freelance', desc: 'First client projects' },
  { year: '2023', title: '3D Experiences', desc: 'Started using Three.js in production' }
]

export default function Timeline(){
  return (
    <div className="card">
      {items.map((it,i)=> (
        <div key={i} className="timeline-item" style={{padding:'10px 0',borderBottom:'1px dashed rgba(0,0,0,0.04)'}}>
          <strong>{it.year}</strong> — <span style={{color:'var(--muted)'}}>{it.title}</span>
          <div style={{marginTop:6,color:'var(--muted)'}}>{it.desc}</div>
        </div>
      ))}
    </div>
  )
}
