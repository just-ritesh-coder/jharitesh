import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { year: '2020', title: 'Started Development', desc: 'Built first React apps' },
  { year: '2021', title: 'Freelance', desc: 'First client projects' },
  { year: '2023', title: '3D Experiences', desc: 'Started using Three.js in production' }
]

export default function Timeline(){
  return (
    <div className="card">
      {items.map((it,i)=> (
        <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{padding:'10px 0',borderBottom:'1px dashed rgba(0,0,0,0.04)'}}>
          <strong>{it.year}</strong> — <span style={{color:'var(--muted)'}}>{it.title}</span>
          <div style={{marginTop:6,color:'var(--muted)'}}>{it.desc}</div>
        </motion.div>
      ))}
    </div>
  )
}
