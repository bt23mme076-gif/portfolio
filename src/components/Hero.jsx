export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{
      minHeight: '100vh', display: 'grid', placeItems: 'center',
      padding: '6rem 2.5rem 4rem', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
      }} />
      {/* Green glow */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
        <style>{`
          @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          .hu1{opacity:0;animation:fadeUp .8s ease .1s forwards}
          .hu2{opacity:0;animation:fadeUp .8s ease .25s forwards}
          .hu3{opacity:0;animation:fadeUp .8s ease .4s forwards}
          .hu4{opacity:0;animation:fadeUp .8s ease .55s forwards}
        `}</style>

        <div className="hu1" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.2)',
          padding: '6px 16px', borderRadius: 100,
          fontFamily: "'Space Mono', monospace", fontSize: 11,
          color: 'var(--green)', letterSpacing: '0.15em', marginBottom: '2rem',
        }}>
          <div style={{ width: 6, height: 6, background: 'var(--green)', borderRadius: '50%' }} />
          AI AUTOMATION BUILDER · Made In India
        </div>

        <h1 className="hu2" style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800,
          lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '1.5rem',
        }}>
          I build tools<br />
          <span style={{ color: 'var(--green)' }}>that actually work.</span>
        </h1>

        <p className="hu3" style={{
          fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75,
          maxWidth: 520, margin: '0 auto 3rem',
        }}>
          Custom AI automations, scrapers, Shopify pipelines, and web solutions — built for real clients with real problems. Not templates. Not demos. Tools.
        </p>

        <div className="hu4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            data-hover
            onClick={() => go('tools')}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            style={{
              background: 'var(--green)', color: '#080810',
              padding: '0.8rem 2rem', fontWeight: 600, fontSize: '0.9rem',
              borderRadius: 6, letterSpacing: '0.02em',
              transition: 'opacity .2s, transform .15s',
            }}
          >See My Tools ↓</button>

          <button
            data-hover
            onClick={() => go('cta')}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,160,0.6)'; e.currentTarget.style.color = 'var(--green)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)' }}
            style={{
              border: '1px solid var(--border2)', color: 'var(--muted)',
              padding: '0.8rem 2rem', fontWeight: 500, fontSize: '0.9rem',
              borderRadius: 6, transition: 'border-color .2s, color .2s',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'blink 1.5s infinite' }} />
            Tell Me Your Problem →
          </button>
        </div>
      </div>
    </section>
  )
}
