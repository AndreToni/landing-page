'use client'

import { useEffect, useRef } from 'react'

/**
 * StickyPhoto
 * Acompanha o scroll da seção pai usando JS transform.
 * Funciona mesmo com overflow-x: hidden no body (que quebra position: sticky).
 *
 * Como usar:
 *   <section ref={sectionRef} style={{ position: 'relative' }}>
 *     <StickyPhoto sectionRef={sectionRef} offsetTop={100} />
 *   </section>
 *
 * Passa a ref da seção como prop para calcular os limites corretos.
 */

interface StickyPhotoProps {
  sectionRef: React.RefObject<HTMLElement | null>
  offsetTop?: number   /* distância do topo da viewport (altura da navbar) */
  children: React.ReactNode
}

export function StickyPhoto({ sectionRef, offsetTop = 100, children }: StickyPhotoProps) {
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const photo   = photoRef.current
    const section = sectionRef.current
    if (!photo || !section) return

    let rafId: number

    const update = () => {
      const secRect   = section.getBoundingClientRect()
      const photoRect = photo.getBoundingClientRect()

      // Quando a seção ainda não chegou na tela — fica no lugar (translateY 0)
      const sectionTop    = secRect.top
      const sectionBottom = secRect.bottom
      const photoH        = photoRect.height

      // Scroll dentro da seção: quanto a seção passou do offsetTop
      const scrolled = Math.max(0, offsetTop - sectionTop)

      // Limite: não pode ultrapassar o fundo da seção
      const maxScroll = Math.max(0, secRect.height - photoH - offsetTop)
      const clamped   = Math.min(scrolled, maxScroll)

      // Para de mover quando a seção sai da viewport pelo topo
      if (sectionBottom < 0 || sectionTop > window.innerHeight) return

      photo.style.transform = `translateY(${clamped}px)`
    }

    const onScroll = () => {
      // Desativa o efeito em mobile (≤ 480px)
      if (window.innerWidth <= 480) {
        photo.style.transform = 'translateY(0)'
        return
      }
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // run once on mount

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [sectionRef, offsetTop])

  return (
    <div
      ref={photoRef}
      style={{ willChange: 'transform', transition: 'transform 0.12s ease-out' }}
    >
      {children}
    </div>
  )
}
