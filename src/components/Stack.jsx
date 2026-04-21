import { stack } from '../data/tools'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Stack() {
  const { ref, visible } = useScrollReveal()
  return (
    <section style={{ padding: '5rem 2.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)', transition: 'opacity .6s, transform .6s' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--green)', letterSpacing: '0.25em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'block', width: 15, height: 1, background: 'var(--green)' }} />
          STACK
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '3rem' }}>
          Tools I ship with.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(80px, 25vw, 110px), 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
        {stack.map((s, i) => (
          <div key={i}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
            style={{ background: 'var(--bg2)', padding: '1.25rem 1rem', textAlign: 'center', transition: 'background 0.2s' }}>
            <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{s.icon}</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em' }}>{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
