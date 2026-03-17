import React from 'react'

const quotes = [
  { who: 'Alice — Manager', text: 'Delivered high-quality work on time.' },
  { who: 'Bob — Client', text: 'Very collaborative and detail-oriented.' }
]

export default function Testimonials(){
  return (
    <div className="grid">
      {quotes.map((q,idx)=> (
        <div className="testimonial" key={idx}>
          <p>“{q.text}”</p>
          <div style={{marginTop:8,fontSize:12,color:'var(--muted)'}}>- {q.who}</div>
        </div>
      ))}
    </div>
  )
}
