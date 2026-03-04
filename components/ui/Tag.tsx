/* ── Tag ─────────────────────────────────────────────────────────────────
   Componente reutilizável de tag/badge.
   Sempre hug (inline-flex) com padding fixo conforme design system.

   Variantes:
     default  → borda e texto no tom claro (fundo claro)
     primary  → borda e texto laranja (fundo claro)
     dark     → borda e texto semi-transparente branco (fundo escuro)
─────────────────────────────────────────────────────────────────────── */

interface TagProps {
  label:    string
  variant?: 'default' | 'primary' | 'dark'
}

const variantStyles = {
  default: {
    border:     '1px solid var(--l-border)',
    color:      'var(--lt3)',
    background: 'rgba(0,0,0,0.03)',
  },
  primary: {
    border:     '1px solid rgba(240,116,7,0.35)',
    color:      'var(--primary)',
    background: 'rgba(240,116,7,0.08)',
  },
  dark: {
    border:     '1px solid rgba(255,255,255,0.15)',
    color:      'rgba(255,255,255,0.5)',
    background: 'rgba(255,255,255,0.06)',
  },
}

export function Tag({ label, variant = 'default' }: TagProps) {
  return (
    <span
      className="t-label"
      style={{
        display:      'inline-flex',
        alignSelf:    'flex-start',   /* garante hug mesmo dentro de flex-column */
        padding:      'var(--spacing-es) var(--spacing-vs)',
        borderRadius: 'var(--radius)',
        whiteSpace:   'nowrap',
        ...variantStyles[variant],
      }}
    >
      {label}
    </span>
  )
}
