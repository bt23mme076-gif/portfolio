import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: '🤖',
    title: 'AI Automation & Chatbots',
    desc: 'Custom AI assistants using Claude/GPT that handle customer support, lead qualification, appointment booking, or internal workflows. Integrated with your existing tools (Shopify, CRM, WhatsApp, email).',
    deliverables: [
      'Custom AI chatbot trained on your data',
      'WhatsApp/SMS/Email integration',
      'CRM & calendar sync',
      'Analytics dashboard',
    ],
    timeline: '2-3 weeks',
    price: '$1,500',
    priceNote: 'Starting price',
    color: 'var(--green)',
    colorDim: 'rgba(0,229,160,0.08)',
  },
  {
    icon: '🛍️',
    title: 'Shopify Automation',
    desc: 'End-to-end automation for Shopify stores — failed delivery prediction, COD confirmation, inventory sync, order tagging, Meta Ads tracking, and custom dashboards. Stop losing money on manual ops.',
    deliverables: [
      'Failed delivery (NDR) predictor',
      'Auto-confirmation system',
      'Custom order workflows',
      'Real-time dashboard',
    ],
    timeline: '2-4 weeks',
    price: '$2,000',
    priceNote: 'Starting price',
    color: 'var(--blue)',
    colorDim: 'rgba(77,159,255,0.08)',
  },
  {
    icon: '📊',
    title: 'Custom Dashboards & Tools',
    desc: 'Consolidate your data chaos into one clean dashboard. Pull from Shopify, Meta Ads, Google Analytics, Stripe, or any API. Auto-updating Google Sheets, web apps, or internal tools built exactly how you need them.',
    deliverables: [
      'Multi-source data integration',
      'Auto-updating reports',
      'Custom metrics & KPIs',
      'Mobile-friendly interface',
    ],
    timeline: '1-3 weeks',
    price: '$1,150',
    priceNote: 'Starting price',
    color: 'var(--purple)',
    colorDim: 'rgba(168,158,255,0.08)',
  },
]

export default function Services() {
  const { ref, visible } = useScrollReveal()
  const [activeService, setActiveService] = useState(null)

  return (
    <section
      id="services"
      style={{
        padding: 'var(--section-pad)',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity .7s, transform .7s',
        }}
      >
        <style>{`
          @media (max-width: 900px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: 11,
          color: 'var(--green)', letterSpacing: '0.25em',
          marginBottom: '0.75rem',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ display: 'block', width: 15, height: 1, background: 'var(--green)' }} />
          SERVICES & PRICING
        </div>

        <h2 style={{
          fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800,
          letterSpacing: '-0.02em', lineHeight: 1.1,
          marginBottom: '0.5rem',
        }}>
          What I can build for you.
        </h2>

        <p style={{
          color: 'var(--muted)', fontSize: '0.95rem',
          lineHeight: 1.7, maxWidth: 515, marginBottom: '3rem',
        }}>
          Fixed-scope projects with clear deliverables and timelines. No hourly rates, no surprises.
        </p>

        <div
          className="services-grid"
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
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveService(i)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                background: activeService === i ? 'var(--bg3)' : 'var(--bg2)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'background 0.3s',
                position: 'relative',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 10,
                background: service.colorDim,
                border: `1px solid ${service.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                {service.icon}
              </div>

              {/* Title & Description */}
              <div>
                <h3 style={{
                  fontSize: '1.15rem', fontWeight: 700,
                  marginBottom: '0.75rem', lineHeight: 1.3,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '0.88rem', color: 'var(--muted)',
                  lineHeight: 1.75,
                }}>
                  {service.desc}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9, color: 'var(--muted2)',
                  letterSpacing: '0.12em', marginBottom: '0.75rem',
                }}>
                  WHAT YOU GET:
                </div>
                <ul style={{
                  listStyle: 'none', padding: 0, margin: 0,
                  display: 'flex', flexDirection: 'column', gap: '0.5rem',
                }}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: '0.82rem', color: 'var(--muted)',
                      display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                    }}>
                      <span style={{ color: service.color, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & Price */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, color: 'var(--muted2)',
                    letterSpacing: '0.1em', marginBottom: 4,
                  }}>
                    TIMELINE
                  </div>
                  <div style={{
                    fontSize: '0.9rem', fontWeight: 600,
                    color: 'var(--fg)',
                  }}>
                    {service.timeline}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, color: 'var(--muted2)',
                    letterSpacing: '0.1em', marginBottom: 4,
                  }}>
                    {service.priceNote.toUpperCase()}
                  </div>
                  <div style={{
                    fontSize: '1.5rem', fontWeight: 800,
                    color: service.color,
                    lineHeight: 1,
                  }}>
                    {service.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '0.88rem', color: 'var(--muted)',
            lineHeight: 1.75, margin: 0,
          }}>
            <strong style={{ color: 'var(--fg)' }}>Need something custom?</strong> Most projects are unique. These are starting points — I'll give you an exact quote after our call based on your specific needs.
          </p>
        </div>
      </div>
    </section>
  )
}
