const logos = [
  { slug: 'react', name: 'React' },
  { slug: 'nodedotjs', name: 'Node.js' },
  { slug: 'python', name: 'Python' },
  { slug: 'firebase', name: 'Firebase' },
  { slug: 'mongodb', name: 'MongoDB' },
  { slug: 'shopify', name: 'Shopify' },
  { slug: 'meta', name: 'Meta' },
  { slug: 'microsoftazure', name: 'Azure' },
  { slug: 'openai', name: 'OpenAI' },
  { slug: 'nextdotjs', name: 'Next.js' },
  { slug: 'figma', name: 'Figma' },
  { slug: 'googlesheets', name: 'Sheets' },
  { slug: 'whatsapp', name: 'WhatsApp' },
]

export default function Marquee() {
  const doubled = [...logos, ...logos, ...logos] // Triple for smoother loop on ultra-wide
  return (
    <div style={{
      borderTop: '1px solid var(--border)', 
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden', padding: '2.5rem 0', 
      background: 'var(--bg)',
      position: 'relative',
      maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
    }}>
      <style>{`
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
      `}</style>
      <div style={{
        display: 'flex', gap: '6rem', whiteSpace: 'nowrap',
        animation: 'marquee 40s linear infinite',
        width: 'max-content'
      }}>
        {doubled.map((logo, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            opacity: 0.4, filter: 'grayscale(1) brightness(1.5)',
            transition: 'opacity 0.3s, filter 0.3s',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.filter = 'grayscale(0) brightness(1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.4';
            e.currentTarget.style.filter = 'grayscale(1) brightness(1.5)';
          }}
          >
            <img 
              src={`https://cdn.simpleicons.org/${logo.slug}/ffffff`} 
              alt={logo.name}
              style={{ height: 24, width: 'auto' }}
            />
            <span style={{ 
              fontFamily: "'Space Mono', monospace", 
              fontSize: 12, 
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
