import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const pos = useRef({ mx: 0, my: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top  = e.clientY + 'px'
      }
    }
    const loop = () => {
      const p = pos.current
      p.tx += (p.mx - p.tx) * 0.1
      p.ty += (p.my - p.ty) * 0.1
      if (ring.current) {
        ring.current.style.left = p.tx + 'px'
        ring.current.style.top  = p.ty + 'px'
      }
      requestAnimationFrame(loop)
    }
    document.addEventListener('mousemove', move)
    const raf = requestAnimationFrame(loop)

    const big = () => {
      if (ring.current) { ring.current.style.width = '50px'; ring.current.style.height = '50px'; ring.current.style.opacity = '0.15' }
    }
    const small = () => {
      if (ring.current) { ring.current.style.width = '32px'; ring.current.style.height = '32px'; ring.current.style.opacity = '0.4' }
    }
    const timer = setTimeout(() => {
      document.querySelectorAll('button,a,[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', big)
        el.addEventListener('mouseleave', small)
      })
    }, 600)

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [])

  const base = {
    position: 'fixed', pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%,-50%)', top: 0, left: 0,
  }
  return (
    <>
      <div ref={dot} style={{ ...base, width: 8, height: 8, background: 'var(--green)', borderRadius: '50%', mixBlendMode: 'screen' }} />
      <div ref={ring} style={{ ...base, zIndex: 9998, width: 32, height: 32, border: '1px solid var(--green)', borderRadius: '50%', opacity: 0.4, transition: 'width .2s, height .2s, opacity .2s' }} />
    </>
  )
}
