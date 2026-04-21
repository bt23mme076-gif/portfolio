import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CATEGORIES = [
  'SHOPIFY AUTOMATION',
  'AI CHATBOT',
  'WHATSAPP INTEGRATION',
  'CUSTOM DASHBOARD',
  'WEB SCRAPING',
  'FAILED DELIVERY FIX',
  'SOMETHING ELSE',
]

// ✅ WhatsApp number configured
const WA_NUMBER = '919753324876'
const YOUR_EMAIL = 'nitin@atyant.in'
// ✅ Calendly link configured
const CALENDAR_LINK = 'https://calendly.com/nitinrai2266/30min'

export default function CTA() {
  const { ref, visible } = useScrollReveal()
  const [selected, setSelected] = useState([])
  const [problem, setProblem] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const toggleChip = (cat) =>
    setSelected(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])

  const validate = () => {
    const e = {}
    if (!problem.trim()) e.problem = true
    if (!contact.trim()) e.contact = true
    setErrors(e)
    return !Object.keys(e).length
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)
    const category = selected.length ? selected.join(', ') : 'General'
    const msg = `*New Problem Submission*\n\nName: ${name || 'Not provided'}\nContact: ${contact}\nCategory: ${category}\n\nProblem:\n${problem}`
    await new Promise(r => setTimeout(r, 1150))
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    setLoading(false)
    setSubmitted(true)
  }

  const inp = (err) => ({
    width: '100%',
    background: '#0d0d1a',
    border: `1px solid ${err ? 'rgba(255,100,100,0.5)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 8, padding: '0.75rem 1rem',
    color: '#f0eff8', fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.88rem', outline: 'none', transition: 'border-color 0.2s',
  })

  return (
    <section id="cta" style={{ padding: 'var(--section-pad)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,229,160,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

      <style>{`
        @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:.25} }
        @keyframes spin   { to{transform:rotate(360deg)} }
        @keyframes pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(0,229,160,.3)} 50%{box-shadow:0 0 0 10px rgba(0,229,160,0)} }
        @media (max-width: 600px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .cta-form { padding: 1.5rem !important; }
        }
      `}</style>

      <div ref={ref} style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity .7s, transform .7s' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.2)', padding: '6px 16px', borderRadius: 100, fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--green)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
          <div style={{ width: 6, height: 6, background: 'var(--green)', borderRadius: '50%', animation: 'blink 1.5s infinite' }} />
          TAKING US CLIENTS — 24HR RESPONSE
        </div>

        <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1rem' }}>
          Book a free 15-min call.<br /><span style={{ color: 'var(--green)' }}>Let's fix your problem.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 480, marginBottom: '1.5rem' }}>
          Tell me what's broken, slow, or costing you money. I'll tell you if I can fix it, how long it'll take, and what it costs. No sales pitch — just a straight answer.
        </p>

        {/* Quick Booking Options */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button
            data-hover
            onClick={() => {
              const msg = `Hi Nitin! I'd like to book a 15-minute call to discuss my project. Looking forward to connecting!`
              window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.background = '#25D366'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.background = '#128C7E'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            style={{
              background: '#128C7E',
              color: '#fff',
              padding: '0.9rem 2rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: 8,
              border: 'none',
              letterSpacing: '0.02em',
              transition: 'all .2s',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>💬</span>
            Message on WhatsApp
          </button>

          <button
            data-hover
            onClick={() => window.open(CALENDAR_LINK, '_blank')}
            onMouseEnter={e => { 
              e.currentTarget.style.background = 'var(--green)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            style={{
              background: 'transparent',
              color: 'var(--green)',
              padding: '0.9rem 2rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: 8,
              border: '1px solid var(--green)',
              letterSpacing: '0.02em',
              transition: 'all .2s',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>📅</span>
            Schedule on Calendar
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: 1,
            background: 'var(--border)',
            zIndex: 0,
          }} />
          <span style={{
            position: 'relative',
            background: 'var(--bg)',
            padding: '0 1rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: 'var(--muted2)',
            letterSpacing: '0.15em',
            zIndex: 1,
          }}>
            OR SHARE YOUR PROBLEM BELOW
          </span>
        </div>

        {!submitted ? (
          <div className="cta-form" style={{ background: 'var(--bg2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '2rem' }}>

            {/* Chips */}
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.15em', marginBottom: 8, display: 'block' }}>WHAT TYPE OF PROBLEM?</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.5rem' }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => toggleChip(cat)} data-hover style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.1em',
                  padding: '6px 14px', borderRadius: 100,
                  border: selected.includes(cat) ? '1px solid rgba(0,229,160,0.4)' : '1px solid rgba(255,255,255,0.1)',
                  background: selected.includes(cat) ? 'rgba(0,229,160,0.08)' : 'transparent',
                  color: selected.includes(cat) ? 'var(--green)' : 'var(--muted)',
                  transition: 'all 0.2s',
                }}>{cat}</button>
              ))}
            </div>

            {/* Problem */}
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.15em', marginBottom: 8, display: 'block' }}>WHAT'S THE PROBLEM?</span>
            <textarea value={problem}
              onChange={e => { if (e.target.value.length <= 500) setProblem(e.target.value); setErrors(p => ({ ...p, problem: false })) }}
              placeholder="e.g. I run a dental practice and spend 10 hours/week manually confirming appointments. I want an AI assistant that texts patients and updates my calendar automatically..."
              style={{ ...inp(errors.problem), resize: 'none', height: 110, display: 'block', marginBottom: 4 }}
            />
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: problem.length > 400 ? 'var(--green)' : 'var(--muted2)', textAlign: 'right', marginBottom: '1.25rem' }}>
              {problem.length} / 500
            </div>

            {/* Name + Contact */}
            <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.15em', marginBottom: 8, display: 'block' }}>YOUR NAME</span>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Rahul Sharma" style={inp(false)} />
              </div>
              <div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.15em', marginBottom: 8, display: 'block' }}>EMAIL / PHONE</span>
                <input type="text" value={contact}
                  onChange={e => { setContact(e.target.value); setErrors(p => ({ ...p, contact: false })) }}
                  placeholder="john@example.com" style={inp(errors.contact)} />
              </div>
            </div>

            {/* Submit */}
            <button data-hover onClick={handleSubmit} disabled={loading} style={{
              width: '100%', background: 'var(--green)', color: '#080810',
              padding: '0.9rem', fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '0.95rem', borderRadius: 8, border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              letterSpacing: '0.02em', opacity: loading ? 0.7 : 1,
              transition: 'opacity .2s, transform .15s',
            }}>
              {loading
                ? <><div style={{ width: 16, height: 16, border: '2px solid rgba(8,8,16,0.3)', borderTopColor: '#080810', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Sending...</>
                : 'Send Personal Dm →'
              }
            </button>
          </div>

        ) : (
          <div style={{ background: 'var(--bg2)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: 12, padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.3rem', animation: 'pulse 2s ease-in-out infinite' }}>✓</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Got it — I'll reach out within 24 hours.</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.75 }}>
              I personally review every submission.<br />Expect a reply with a clear plan and timeline.
            </p>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--green)', letterSpacing: '0.1em', marginTop: '1.25rem', padding: '8px 16px', background: 'rgba(0,229,160,0.08)', borderRadius: 100, display: 'inline-block' }}>
              RECEIVED · REVIEWING NOW
            </div>
          </div>
        )}

        {/* Bottom links */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          {[{ l: 'nitin@atyant.in', h: `mailto:${YOUR_EMAIL}` }, { l: 'LinkedIn', h: 'https://www.linkedin.com/in/nitin-rai-479ab7288/' }, { l: 'atyant.in', h: 'https://atyant.in' }].map(({ l, h }) => (
            <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" data-hover
              onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted2)'}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted2)', letterSpacing: '0.1em', transition: 'color .2s', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 2 }}
            >{l}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
