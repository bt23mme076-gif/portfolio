import { useState } from 'react'
import { tools } from '../data/tools'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ToolCard({ tool, index }) {
  const [hovered, setHovered] = useState(false)
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'var(--bg)',
        padding: '2rem',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.3s, opacity 0.5s ease, transform 0.5s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {/* Accent line bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: tool.color,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s ease',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 8,
          background: tool.colorDim,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem',
        }}>{tool.icon}</div>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.15em' }}>
          {tool.num}
        </span>
      </div>

      <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>
        {tool.title}
      </div>
      <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        {tool.desc}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {tool.tags.map((tag, i) => (
            <span key={tag} style={{
              fontFamily: "'Space Mono', monospace", fontSize: 9,
              letterSpacing: '0.1em', padding: '3px 8px', borderRadius: 3,
              border: `1px solid ${i === 0 ? tool.color + '40' : 'var(--border)'}`,
              background: i === 0 ? tool.colorDim : 'transparent',
              color: i === 0 ? tool.color : 'var(--muted)',
            }}>{tag}</span>
          ))}
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '1rem', fontWeight: 700, color: tool.color, lineHeight: 1 }}>
            {tool.impactNum}
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.05em' }}>
            {tool.impactLabel}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tools() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="tools" style={{ padding: 'var(--section-pad)' }}>
      <div ref={ref} style={{
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity .6s ease, transform .6s ease',
      }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--green)', letterSpacing: '0.25em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'block', width: 20, height: 1, background: 'var(--green)' }} />
          TOOLS BUILT
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          Every project = a real tool.
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 500, marginBottom: '3rem' }}>
          I don't just write code. I solve specific problems with specific tools — built fast, deployed for real users.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 1, background: 'var(--border)',
        border: '1px solid var(--border)',
      }}>
        {tools.map((tool, i) => <ToolCard key={tool.num} tool={tool} index={i} />)}
      </div>
    </section>
  )
}
