/* ── TagDot ───────────────────────────────────────────────────────────────
   Label com ponto de destaque (● LABEL).
   Segue os mesmos tokens de espaçamento do componente Tag:
     padding: --spacing-es (top/bottom) × --spacing-vs (left/right)

   Variantes:
     dark   → laranja sobre fundo escuro   (ex: Hero, About, Areas)
     light  → laranja mais escuro sobre fundo claro (ex: Cases, Process, Banner, CaseNav)

   Props extras:
     className → suporta classes utilitárias adicionais (ex: "fade-up")
     style     → suporta estilos inline adicionais (ex: animationDelay)
─────────────────────────────────────────────────────────────────────── */

import type { CSSProperties } from 'react'

interface TagDotProps {
  label: string
  variant?: 'dark' | 'light'
  className?: string
  style?: CSSProperties
}

const variantStyles: Record<'dark' | 'light', CSSProperties> = {
  dark: {
    border: '1px solid rgba(240,116,7,0.25)',
    background: 'rgba(240,116,7,0.08)',
    color: '#F07407',
  },
  light: {
    border: '1px solid rgba(180,80,0,0.2)',
    background: 'rgba(240,116,7,0.08)',
    color: '#b85500',
  },
}

export function TagDot({ label, variant = 'dark', className, style }: TagDotProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        verticalAlign: 'middle',     /* centraliza verticalmente em contextos inline */
        alignItems: 'center',     /* centraliza dot e texto internamente */
        gap: 'var(--spacing-vs)',
        padding: 'var(--spacing-es) var(--spacing-vs)',
        borderRadius: 'var(--radius)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-span)',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        ...variantStyles[variant],
        ...style,
      }}
    >
      {/* Dot */}
      <span style={{
        width: '5px', height: '5px', borderRadius: '50%',
        background: 'currentColor', display: 'inline-block', flexShrink: 0,
      }} />
      {label}
    </div>
  )
}
