import { useScrollReveal } from '../hooks/useScrollReveal'

const signals = [
  {
    icon: '🇺🇸',
    title: 'US-Friendly',
    desc: 'Work in your timezone. Clear communication. Payments via PayPal, Wise, or Stripe.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'Most projects ship in 2-4 weeks. Reply to messages within 24 hours, usually same-day.',
  },
  {
    icon: '💰',
    title: 'Fixed Pricing',
    desc: 'No hourly rates. You get a clear quote upfront with deliverables and timeline.',
  },
  {
    icon: '🎓',
    title: 'Proven Track Record',
    desc: 'Built for IIM professors, D2C brands, and SaaS founders. 1500+ users on live products.',
  },
  {
    icon: '🔒',
    title: 'Your Code, Your IP',
    desc: 'You own everything. Full source code, documentation, and deployment access included.',
  },
  {
    icon: '🛠️',
    title: 'Post-Launch Support',
    desc: '30 days of bug fixes included. Optional maintenance plans available after that.',
  },
]

export default function TrustSignals() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity .7s, transform .7s',
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .trust-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: 'var(--green)',
              letterSpacing: '0.25em',
              marginBottom: '0.75rem',
            }}
          >
            WHY WORK WITH ME
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            Built for US clients.
          </h2>
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              maxWidth: 515,
              margin: '0 auto',
            }}
          >
            I know what US businesses need — clear communication, fast delivery, and results you can measure.
          </p>
        </div>

        <div
          className="trust-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          {signals.map((signal, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg)',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
            >
              <div
                style={{
                  fontSize: '2rem',
                  lineHeight: 1,
                }}
              >
                {signal.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}
                >
                  {signal.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {signal.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
