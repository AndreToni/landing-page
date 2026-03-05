import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

/* Server component — sem hover state, sem 'use client' */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Navegação estrutural" style={{
      display: 'flex', alignItems: 'center', flexWrap: 'nowrap',
      gap: 'var(--spacing-vs)', overflow: 'hidden',
    }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--spacing-vs)',
            /* último item ocupa o espaço restante e trunca; os anteriores não encolhem */
            flexShrink: isLast ? 1 : 0,
            overflow: isLast ? 'hidden' : 'visible',
            minWidth: isLast ? 0 : 'auto',
          }}>

            {/* Separador */}
            {i > 0 && (
              <span aria-hidden style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--fs-span)',
                color: 'var(--dt3)', userSelect: 'none', flexShrink: 0,
              }}>/</span>
            )}

            {/* Link ou texto */}
            {item.href ? (
              <Link href={item.href} style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--fs-span)',
                fontWeight: 500, color: 'var(--dt3)', textDecoration: 'none',
                letterSpacing: '0.04em', whiteSpace: 'nowrap',
              }}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--fs-span)',
                fontWeight: 600, color: 'var(--dt1)',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                display: 'block',
              }}>
                {item.label}
              </span>
            )}

          </span>
        )
      })}
    </nav>
  )
}
