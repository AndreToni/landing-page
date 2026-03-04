'use client'

import { CSSProperties, ReactNode, useState } from 'react'

interface HoverLinkProps {
  href: string
  target?: '_blank' | '_self'
  rel?: string
  base: CSSProperties
  hovered: CSSProperties
  children: ReactNode
  className?: string
}

/**
 * Thin client wrapper around <a> that toggles inline styles on hover.
 * Keeps parent Server Components event-free.
 */
export function HoverLink({
  href,
  target,
  rel,
  base,
  hovered,
  children,
  className,
}: HoverLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={{ ...base, ...(isHovered ? hovered : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  )
}
