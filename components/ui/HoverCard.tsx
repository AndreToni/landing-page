'use client'

import { CSSProperties, ReactNode, useState } from 'react'

interface HoverCardProps {
  base: CSSProperties
  hovered: CSSProperties
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
  href?: string          /* torna o card inteiro clicável */
  target?: string
  rel?: string
}

export function HoverCard({
  base,
  hovered,
  children,
  className,
  as: Tag = 'div',
  href,
  target,
  rel,
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const style: CSSProperties = {
    ...base,
    ...(isHovered ? hovered : {}),
    cursor: href ? 'pointer' : base.cursor ?? 'default',
    textDecoration: 'none',
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <Tag
      className={className}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Tag>
  )
}
