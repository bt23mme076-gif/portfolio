import { useScrollReveal } from '../hooks/useScrollReveal'

// ✅ REPLACE with your actual photo URL (Cloudinary, GitHub, or any CDN link)
const PHOTO_URL = 'https://media.licdn.com/dms/image/v2/D4D03AQGE4M-lrs0hOA/profile-displayphoto-shrink_400_400/B4DZQ1YAbwGgAg-/0/1736062273958?e=1778112000&v=beta&t=9gSX7Q6W46qjY3es_HtjseTvmdxDn85sRTSaxsLaVsg' // placeholder – replace this!

const stats = [
    { num: '7+', label: 'TOOLS SHIPPED' },
    { num: '5+', label: 'REAL CLIENTS' },
    { num: '24hr', label: 'REPLY TIME' },
    { num: '₹0', label: 'TEMPLATES USED' },
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
                            filter: 'grayscale(20%)',
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
                            <span style={{ display: 'none', width: 20, height: 1, background: 'var(--green)' }} className="desktop-line" />
                            WHO I AM
                        </div>
                        <style>{`
                            @media (min-width: 801px) { .desktop-line { display: block !important; } }
                        `}</style>

                        <h2 style={{
                            fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800,
                            letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.25rem',
                        }}>
                            Engineer.<br />
                            <span style={{ color: 'var(--green)' }}>Full-time builder.</span>
                        </h2>

                        <p style={{
                            color: 'var(--muted)', fontSize: '0.95rem',
                            lineHeight: 1.85, maxWidth: 520,
                        }}>
                            I'm Nitin Rai — an AI automation builder and engineer who creates custom tools,
                            Shopify systems, internal workflows, and data pipelines for businesses that need operations to run smarter.
                        </p>

                        <p style={{
                            color: 'var(--muted)', fontSize: '0.95rem',
                            lineHeight: 1.85, maxWidth: 520, marginTop: '0.75rem',
                        }}>
                            Founder of{' '}
                            <a href="https://atyant.in" target="_blank" rel="noreferrer"
                                style={{ color: 'var(--green)', textDecoration: 'none', borderBottom: '1px solid rgba(0,229,160,0.3)' }}>
                                Atyant.Tech
                            </a>{' '}
                            - AI automation agency that builds custom tools, workflows, and internal systems for businesses.
                            I build practical systems for founders, professors, and brands —
                            not demo projects, not theory, just tools that solve real operational problems.
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