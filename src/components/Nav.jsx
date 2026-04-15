// ============================================================
// UPDATED Nav.jsx — Drop this into src/components/Nav.jsx
// Changes: + WhatsApp direct button + Starting price tag
// ============================================================

import { useState, useEffect } from 'react'

const WA_NUMBER = '919753324876' // ✅ already correct from your CTA.jsx
const WA_MSG = encodeURIComponent("Hi Nitin! I saw your portfolio and want to discuss a project.")

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
      padding: '1rem 2.5rem',
      paddingLeft: 'max(1.25rem, calc((100vw - 1200px) / 2))',
      paddingRight: 'max(1.25rem, calc((100vw - 1200px) / 2))',
      borderBottom: '1px solid var(--border)',
      background: scrolled ? 'rgba(8,8,16,0.95)' : 'rgba(8,8,16,0.6)',
      backdropFilter: 'blur(20px)',
      transition: 'background 0.3s',
      gap: '1rem',
    }}>
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.25}}
        .nav-wa-btn:hover { background: #00c98d !important; transform: translateY(-1px); }
        @media (max-width: 600px) {
          .nav-price-tag { display: none !important; }
          .nav-wa-btn span.wa-label { display: none !important; }
        }
      `}</style>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{
          width: 8, height: 8, background: 'var(--green)', borderRadius: '50%',
          animation: 'blink 2s ease-in-out infinite',
        }} />
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, letterSpacing: '0.12em' }}>
          NITIN RAI
        </span>
      </div>

      {/* Center: price tag */}
      <div className="nav-price-tag" style={{
        display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: "'Space Mono', monospace", fontSize: 10,
        color: 'var(--muted2)', letterSpacing: '0.1em',
      }}>
        <span style={{
          background: 'rgba(0,229,160,0.08)',
          border: '1px solid rgba(0,229,160,0.18)',
          color: 'var(--green)',
          padding: '3px 12px', borderRadius: 100,
          fontSize: 10, letterSpacing: '0.1em',
        }}>
          PROJECTS FROM ₹15,000
        </span>
      </div>

      {/* Right: WhatsApp CTA */}
      <a
        className="nav-wa-btn"
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'var(--green)', color: '#080810',
          padding: '0.5rem 1.1rem', borderRadius: 6,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '0.82rem',
          letterSpacing: '0.02em',
          textDecoration: 'none', flexShrink: 0,
          transition: 'background 0.2s, transform 0.15s',
        }}
      >
        {/* WhatsApp icon SVG */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="wa-label">WhatsApp Me</span>
      </a>
    </nav>
  )
}


// ============================================================
// HOW TO UPDATE App.jsx
// Add About and Testimonials to your component order like this:
//
// import About from './components/About'
// import Testimonials from './components/Testimonials'
//
// In your JSX, insert them like:
//   <Hero />
//   <Marquee />
//   <About />          ← ADD after Marquee
//   <Tools />
//   <Testimonials />   ← ADD after Tools
//   <Clients />
//   <Stack />
//   <CTA />
//   <Footer />
// ============================================================