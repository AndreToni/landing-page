/* ── CardItem ─────────────────────────────────────────────────────────────
   Item de lista com ícone ArrowUpRight.
   Usado nas seções editoriais das páginas de case.

   Props:
     children   → texto do item
     bg         → cor de fundo (listBg)
     border     → cor da borda (borderClr)
     color      → cor do texto (bodyClr)
─────────────────────────────────────────────────────────────────────── */

import { ArrowUpRight } from 'lucide-react'

interface CardItemProps {
  children: React.ReactNode
  bg:       string
  border:   string
  color:    string
}

export function CardItem({ children, bg, border, color }: CardItemProps) {
  return (
    <li style={{
      display:      'flex',
      gap:          'var(--spacing-s)',
      alignItems:   'flex-start',
      padding:      'var(--spacing-s)',
      background:   bg,
      borderRadius: 'var(--radius)',
      border:       `1px solid ${border}`,
    }}>
      <ArrowUpRight size={20} style={{
        color:     'var(--primary)',
        flexShrink: 0,
        marginTop: '2px',
      }} />
      <span className="t-body" style={{ color }}>
        {children}
      </span>
    </li>
  )
}
