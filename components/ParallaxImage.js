'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

/*
  Parallaxe très léger pour les grandes images de section.

  L'image est légèrement surdimensionnée (± strength × hauteur) puis translatée
  en px via transform pendant que le bloc traverse le viewport : aucun layout
  shift possible, tout se joue sur le compositeur GPU.

  - strength : intensité du décalage (0.05 = très discret, 0.1 = marqué).
  - Ne calcule que lorsque le bloc est visible (IntersectionObserver + rAF).
  - Statique si prefers-reduced-motion.

  Usage :
    <ParallaxImage src="/photo.webp" alt="…" strength={0.07}
      sizes="(max-width: 900px) 100vw, 50vw"
      style={{ position: 'absolute', inset: 0 }} />
*/
export default function ParallaxImage({
  src,
  alt,
  strength = 0.07,
  sizes = '100vw',
  priority = false,
  quality,
  className,
  style,
  imgStyle,
}) {
  const wrapRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return

    let visible = false
    let rafId = null

    const update = () => {
      rafId = null
      const rect = wrap.getBoundingClientRect()
      const vh = window.innerHeight
      // -1 → le bloc arrive par le bas, 0 → centré, 1 → il sort par le haut
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / ((vh + rect.height) / 2)
      const clamped = Math.max(-1, Math.min(1, progress))
      inner.style.transform = `translate3d(0, ${(clamped * strength * rect.height).toFixed(1)}px, 0)`
    }

    const schedule = () => {
      if (visible && rafId === null) rafId = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      schedule()
    }, { rootMargin: '15% 0px' })

    io.observe(wrap)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    update()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [strength])

  const overflow = `${(strength * 100).toFixed(1)}%`

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <div
        ref={innerRef}
        style={{
          position: 'absolute',
          top: `-${overflow}`,
          bottom: `-${overflow}`,
          left: 0,
          right: 0,
          willChange: 'transform',
        }}
      >
        <Image
          fill
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          quality={quality}
          style={{ objectFit: 'cover', ...imgStyle }}
        />
      </div>
    </div>
  )
}
