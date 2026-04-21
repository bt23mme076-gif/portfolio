import { useScrollReveal } from '../hooks/useScrollReveal'

// ✅ Professional placeholder with your initials (dark theme matching)
// TO ADD YOUR REAL PHOTO: Upload to imgur.com and replace this link
const PHOTO_URL = 'https://ui-avatars.com/api/?name=Nitin+Rai&size=400&background=0D1117&color=00e5a0&bold=true&font-size=0.35'

const stats = [
    { num: '2000+', label: 'USERS SERVED' },
    { num: '22%', label: 'AVG NDR DROP' },
    { num: '<24hr', label: 'RESPONSE TIME' },
    { num: '$500+', label: 'PROJECTS FROM' },
]

export default function About() {
    const { ref, visible } = useScrollReveal()

    return (
        <section
            id="about"
            style={{
                padding: 'var(--section-pad)',
                borderTop: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle bg glow */}
            <div style={{
                position: 'absolute', width: 500, height: 300,
                background: 'radial-gradient(ellipse, rgba(0,229,160,0.04) 0%, transparent 70%)',
                top: '50%', left: '0%', transform: 'translateY(-50%)',
                pointerEvents: 'none',
            }} />

            <div
                ref={ref}
                className="main-about-grid"
                style={{
                    maxWidth: 1000, margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '4rem',
                    alignItems: 'start',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity .7s, transform .7s',
                }}
            >
                <style>{`
          @media (max-width: 800px) {
            .main-about-grid { grid-template-columns: 1fr !important; justify-items: center; text-align: center; gap: 2.5rem !important; }
            .about-grid { justify-items: center; }
            .about-photo-wrap { width: 140px !important; height: 140px !important; }
            .about-links { justify-content: center; }
          }
          @media (max-width: 500px) {
            .stats-row { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>

                {/* Photo */}
                <div className="about-photo-wrap" style={{
                    width: 160, height: 160, flexShrink: 0, position: 'relative',
                }}>
                    <div style={{
                        position: 'absolute', inset: -2,
                        border: '1px solid rgba(0,229,160,0.3)',
                        borderRadius: 12,
                    }} />
                    <img
                        src={PHOTO_URL}
                        alt="Nitin Rai"
                        style={{
                            width: '100%', height: '100%',
                            objectFit: 'cover',
                            borderRadius: 10,
                            display: 'block',
                            filter: 'grayscale(15%)',
                        }}
                    />
                    {/* Green dot badge */}
                    <div style={{
                        position: 'absolute', bottom: -8, right: -8,
                        background: 'var(--bg)',
                        border: '1px solid rgba(0,229,160,0.3)',
                        borderRadius: 100,
                        padding: '4px 10px',
                        display: 'flex', alignItems: 'center', gap: 6,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9, color: 'var(--green)', letterSpacing: '0.1em',
                        whiteSpace: 'nowrap',
                    }}>
                        <div style={{ width: 5, height: 5, background: 'var(--green)', borderRadius: '50%', animation: 'blink 1.5s infinite' }} />
                        OPEN TO WORK
                    </div>
                </div>

                {/* Content */}
                <div className="about-grid" style={{ display: 'grid', gap: '2rem' }}>
                    <div>
                        <div style={{
                            fontFamily: "'Space Mono', monospace", fontSize: 11,
                            color: 'var(--green)', letterSpacing: '0.25em',
                            marginBottom: '0.75rem',
                            display: 'flex', alignItems: 'center', gap: 8,
                            justifyContent: 'inherit',
                        }}>
                            <span style={{ display: 'none', width: 15, height: 1, background: 'var(--green)' }} className="desktop-line" />
                            WHO I AM
                        </div>
                        <style>{`
                            @media (min-width: 801px) { .desktop-line { display: block !important; } }
                        `}</style>

                        <h2 style={{
                            fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800,
                            letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.25rem',
                        }}>
                            I'm Nitin.<br />
                            <span style={{ color: 'var(--green)' }}>I build systems that save you money.</span>
                        </h2>

                        <p style={{
                            color: 'var(--muted)', fontSize: '0.95rem',
                            lineHeight: 1.85, maxWidth: 515,
                        }}>
                            I'm a 21-year-old full-stack developer from India who helps US small businesses automate operations, recover lost revenue, and scale without adding headcount.
                        </p>

                        <p style={{
                            color: 'var(--muted)', fontSize: '0.95rem',
                            lineHeight: 1.85, maxWidth: 515, marginTop: '0.75rem',
                        }}>
                            I built{' '}
                            <a href="https://atyant.in" target="_blank" rel="noreferrer"
                                style={{ color: 'var(--green)', textDecoration: 'none', borderBottom: '1px solid rgba(0,229,160,0.3)' }}>
                                Atyant.in
                            </a>{' '}
                            — a live AI mentorship platform with 1500+ students and 500+ mentors. I've worked with IIM professors, D2C brands, and SaaS founders to build Shopify automations, AI chatbots, WhatsApp integrations, and custom dashboards. No templates. No fluff. Just tools that work.
                        </p>
                        {/* Links */}
                        <div className="about-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                            {[
                                { label: 'LinkedIn →', href: 'https://www.linkedin.com/in/nitin-rai-479ab7288/' },
                                { label: 'GitHub →', href: 'https://github.com/bt23mme076-gif' }, // ✅ update if different
                                { label: 'Atyant.in →', href: 'https://atyant.in' },
                            ].map(({ label, href }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer"
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted2)'}
                                    style={{
                                        fontFamily: "'Space Mono', monospace", fontSize: 11,
                                        color: 'var(--muted2)', letterSpacing: '0.1em',
                                        transition: 'color .2s',
                                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                                        paddingBottom: 2, textDecoration: 'none',
                                    }}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="stats-row" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 1, background: 'var(--border)',
                        border: '1px solid var(--border)',
                        borderRadius: 8, overflow: 'hidden',
                        width: '100%',
                    }}>
                        {stats.map(({ num, label }) => (
                            <div key={label}
                                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
                                style={{
                                    background: 'var(--bg2)',
                                    padding: '1.25rem 1rem',
                                    textAlign: 'center',
                                    transition: 'background 0.2s',
                                }}>
                                <div style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '1.3rem', fontWeight: 700,
                                    color: 'var(--green)', marginBottom: 4,
                                }}>{num}</div>
                                <div style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: 9, color: 'var(--muted2)',
                                    letterSpacing: '0.12em',
                                }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}