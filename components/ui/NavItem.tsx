'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface NavItemProps {
  href: string
  children: ReactNode
  target?: string
  rel?: string
  style?: CSSProperties      /* overrides adicionais (ex: tamanho de fonte) */
}

/**
 * NavItem — item de navegação compartilhado entre Navbar e Footer.
 * Estado padrão:  var(--dt2)  — cinza médio
 * Hover:          var(--dt1)  — branco
 * Transition:     color 0.2s ease
 */
export function NavItem({ href, children, target, rel, style }: NavItemProps) {
  const [hovered, setHovered] = useState(false)

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-vs)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-nav)',
    fontWeight: 400,
    color: hovered ? 'var(--dt1)' : 'var(--dt2)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    ...style,
  }

  const isExternal = href.startsWith('http') || target === '_blank'

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={base}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      style={base}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  )
}
