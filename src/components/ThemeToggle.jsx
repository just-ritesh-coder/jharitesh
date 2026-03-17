import React from 'react'

export default function ThemeToggle({theme,setTheme}){
  const toggle = ()=> setTheme(prev => prev === 'light' ? 'dark' : 'light')
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <span className="theme-toggle-icon" aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  )
}
