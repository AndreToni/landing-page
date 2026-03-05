'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface NavItemProps {
  href:          string
  children:      ReactNode
  target?:       string
  rel?:          string
  style?:        CSSProperties
  defaultColor?: string   /* cor padrão — default: var(--dt2) */
  hoverColor?:   string   /* cor no hover  — default: var(--dt1) */
  onClick?:      () => void
}

/**
 * NavItem — item de navegação compartilhado entre Navbar, menu hamburguer e Footer.
 * Aceita `defaultColor` e `hoverColor` para adaptar ao contexto (fundo claro/escuro).
 */
export function NavItem({
  href, children, target, rel, style,
  defaultColor = 'var(--dt2)',
  hoverColor   = 'var(--dt1)',
  onClick,
}: NavItemProps) {
  const [hovered, setHovered] = useState(false)

  const base: CSSProperties = {
    display:        'inline-flex',
    alignItems:     'center',
    gap:            'var(--spacing-vs)',
    fontFamily:     'var(--font-body)',
    fontSize:       'var(--fs-nav)',
    fontWeight:     400,
    color:          hovered ? hoverColor : defaultColor,
    textDecoration: 'none',
    transition:     'color 0.2s ease',
    cursor:         'pointer',
    ...style,
  }

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  const isExternal = href.startsWith('http') || target === '_blank'

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} style={base} onClick={onClick} {...handlers}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} style={base} onClick={onClick} {...handlers}>
      {children}
    </Link>
  )
}
