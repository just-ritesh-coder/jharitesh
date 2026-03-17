import React from 'react'

const primarySkills = [
  'JavaScript (ES6+)',
  'React.js (Hooks, Context, Redux)',
  'Node.js & Express.js',
  'MongoDB, Mongoose & MySQL',
  'RESTful APIs & WebSocket (Socket.io)',
  'WebRTC for video & screen share',
  'Tailwind CSS, Bootstrap, Responsive Design',
  'Git, GitHub, CI-friendly workflows'
]

export default function Skills(){
  return (
    <div className="card">
      <h3>Core skillset</h3>
      <p style={{ color: 'var(--muted)', fontSize: '0.86rem', marginBottom: 8 }}>
        A MERN-focused stack with deep experience in real-time, collaborative applications.
      </p>
      <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.88rem' }}>
        {primarySkills.map((s) => (
          <li key={s} style={{ marginBottom: 4 }}>{s}</li>
        ))}
      </ul>
    </div>
  )
}
