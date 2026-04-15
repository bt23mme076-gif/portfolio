import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.25rem 2.5rem',
      paddingLeft: 'max(1.25rem, calc((100vw - 1200px) / 2))',
      paddingRight: 'max(1.25rem, calc((100vw - 1200px) / 2))',
      borderBottom: '1px solid var(--border)',
      background: scrolled ? 'rgba(8,8,16,0.92)' : 'rgba(8,8,16,0.6)',
      backdropFilter: 'blur(20px)',
      transition: 'background 0.3s',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 8, height: 8, background: 'var(--green)', borderRadius: '50%',
          animation: 'blink 2s ease-in-out infinite',
        }} />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, letterSpacing: '0.12em' }}>
          NITIN RAI
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--green)', letterSpacing: '0.1em' }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', animation: 'blink 1.5s ease-in-out infinite' }} />
        OPEN TO WORK
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.25}}`}</style>
    </nav>
  )
}
