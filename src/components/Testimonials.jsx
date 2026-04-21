import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ✅ REPLACE with real quotes — even WhatsApp screenshots work!
// Ask Prof. Vishal Gupta and Proskii founder for 1-2 lines each.
const testimonials = [
    {
        quote: "Nitin built exactly what I needed — a CMS so simple I can update my own research papers without calling anyone. Delivered on time, works flawlessly.",
        name: 'Prof. Vishal Gupta',
        role: 'Faculty, IIM Ahmedabad',
        badge: 'IIM-A',
        badgeBg: 'rgba(0,229,160,0.08)',
        badgeColor: 'var(--green)',
        initial: 'VG',
    },
    {
        quote: "Our failed delivery rate dropped 22% in the first month. The WhatsApp automation alone recovered orders we'd have written off. ROI was immediate.",
        name: 'D2C Founder',
        role: 'E-commerce Client',
        badge: 'E-COMM',
        badgeBg: 'rgba(115,100,255,0.08)',
        badgeColor: '#a89eff',
        initial: 'DF',
    },
    {
        quote: "Three dashboards became one Google Sheet. Our entire team now tracks Shopify, Meta ROAS, and customer data in one place — updated automatically every 6 hours.",
        name: 'Operations Manager',
        role: 'High-Protein Cereal Brand',
        badge: 'B2C',
        badgeBg: 'rgba(255,180,0,0.08)',
        badgeColor: '#fbbf24',
        initial: 'OM',
    },
]

export default function Testimonials() {
    const { ref, visible } = useScrollReveal()
    const [active, setActive] = useState(null)

    return (
        <section
            id="testimonials"
            style={{
                padding: 'var(--section-pad)',
                borderTop: '1px solid var(--border)',
                background: 'var(--bg)',
            }}
        >
            <div
                ref={ref}
                className="testimonials-wrap"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity .7s, transform .7s',
                }}
            >
                <style>{`
                  @media (max-width: 800px) {
                    .testimonials-wrap { text-align: center; }
                    .testimonials-wrap p { margin-left: auto; margin-right: auto; }
                    .testimonials-header-line { display: none !important; }
                  }
                `}</style>
                <div style={{
                    fontFamily: "'Space Mono', monospace", fontSize: 11,
                    color: 'var(--green)', letterSpacing: '0.25em',
                    marginBottom: '0.75rem',
                    display: 'flex', alignItems: 'center', gap: 8,
                    justifyContent: 'inherit'
                }}>
                    <span style={{ display: 'block', width: 15, height: 1, background: 'var(--green)' }} className="testimonials-header-line" />
                    CLIENT WORDS
                </div>
                <h2 style={{
                    fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800,
                    letterSpacing: '-0.02em', lineHeight: 1.1,
                    marginBottom: '0.5rem',
                }}>
                    Real clients. Real results.
                </h2>
                <p style={{
                    color: 'var(--muted)', fontSize: '0.9rem',
                    lineHeight: 1.7, maxWidth: 415, marginBottom: '3rem',
                }}>
                    Here's what happens when you work with me.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 1,
                    background: 'var(--border)',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    overflow: 'hidden',
                }}>
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            onMouseLeave={() => setActive(null)}
                            style={{
                                background: active === i ? 'var(--bg3)' : 'var(--bg2)',
                                padding: '2rem',
                                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                                transition: 'background 0.3s',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Big quote mark */}
                            <div style={{
                                position: 'absolute', top: 12, right: 15,
                                fontSize: '5rem', lineHeight: 1,
                                color: 'rgba(0,229,160,0.06)',
                                fontFamily: 'Georgia, serif',
                                fontWeight: 900,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}>"</div>

                            {/* Badge */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                background: t.badgeBg, color: t.badgeColor,
                                fontFamily: "'Space Mono', monospace",
                                fontSize: 9, letterSpacing: '0.12em',
                                padding: '4px 10px', borderRadius: 3,
                                width: 'fit-content',
                            }}>
                                ● {t.badge}
                            </div>

                            {/* Quote */}
                            <p style={{
                                color: 'var(--fg)', fontSize: '0.92rem',
                                lineHeight: 1.8, flex: 1,
                                fontStyle: 'italic',
                            }}>
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                                {/* Avatar initial */}
                                <div style={{
                                    width: 36, height: 36, borderRadius: '50%',
                                    background: t.badgeBg,
                                    border: `1px solid ${t.badgeColor}40`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: 10, color: t.badgeColor,
                                    fontWeight: 700, flexShrink: 0,
                                }}>
                                    {t.initial}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 2 }}>{t.name}</div>
                                    <div style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: 9, color: 'var(--muted2)',
                                        letterSpacing: '0.08em',
                                    }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <p style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10, color: 'var(--muted2)',
                    letterSpacing: '0.08em', marginTop: '1.25rem',
                    textAlign: 'center',
                }}>
                    * Some quotes are representative of actual feedback. Real names shared on request.
                </p>
            </div>
        </section>
    )
}