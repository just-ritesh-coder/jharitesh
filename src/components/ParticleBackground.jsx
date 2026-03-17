import React from 'react'

export default function ParticleBackground(){
  const canvasRef = React.useRef(null)
  const rafRef = React.useRef(null)
  const particlesRef = React.useRef([])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const init = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.floor(Math.min(160, Math.max(70, window.innerWidth / 12)))
      particlesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.8 + 0.2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.9
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = '#00B4FF'

      const ps = particlesRef.current
      for (const p of ps) {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > window.innerWidth) p.speedX *= -1
        if (p.y < 0 || p.y > window.innerHeight) p.speedY *= -1

        ctx.globalAlpha = p.opacity
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const onResize = () => init()

    init()
    animate()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas id="particle-bg" ref={canvasRef} aria-hidden="true" />
}

