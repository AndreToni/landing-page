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
      display: 'flex', alignItems: 'center', flexWrap: 'wrap',
      gap: 'var(--spacing-vs)',
    }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-vs)' }}>

          {/* Separador */}
          {i > 0 && (
            <span aria-hidden style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--fs-span)',
              color: 'var(--dt3)', userSelect: 'none',
            }}>/</span>
          )}

          {/* Link ou texto */}
          {item.href ? (
            <Link href={item.href} style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--fs-span)',
              fontWeight: 500, color: 'var(--dt3)', textDecoration: 'none',
              letterSpacing: '0.04em',
            }}>
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--fs-span)',
              fontWeight: 600, color: 'var(--dt1)',
              letterSpacing: '0.04em',
            }}>
              {item.label}
            </span>
          )}

        </span>
      ))}
    </nav>
  )
}
