import React from 'react'

export default function Intro({ onPrimaryAction }){
  return (
    <div>
      <div className="intro-layout">
        <div className="intro-meta">
          <h2 className="intro-title">Hi, I'm Ritesh</h2>
          <p className="intro-sub">
            MERN stack developer building real‑time, observatory‑style web experiences with React, WebSocket, and WebRTC.
          </p>
          <div className="intro-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => onPrimaryAction?.()}
            >
              Enter the observatory
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
