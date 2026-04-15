export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.1em' }}>
        © 2025 NITIN RAI — AI AUTOMATION BUILDER
      </span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted2)', letterSpacing: '0.1em' }}>
        BUILT WITH REACT + VITE
      </span>
    </footer>
  )
}
