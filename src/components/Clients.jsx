import { useState } from 'react'
import { clients } from '../data/tools'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Clients() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="clients" style={{ padding: 'var(--section-pad)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)', transition: 'opacity .6s, transform .6s' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--green)', letterSpacing: '0.25em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'block', width: 15, height: 1, background: 'var(--green)' }} />
          CLIENTS & CONTEXT
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '3rem' }}>
          Who I've built for.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
        {clients.map((c, i) => {
          const [hov, setHov] = useState(false)
          return (
            <div key={i} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
              style={{ background: hov ? 'var(--bg3)' : 'var(--bg2)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'background 0.3s' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: c.badgeBg, color: c.badgeColor, fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.12em', padding: '4px 10px', borderRadius: 3, width: 'fit-content' }}>
                ● {c.badge}
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{c.name}</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65 }}>{c.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
