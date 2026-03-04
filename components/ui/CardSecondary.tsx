import { HoverCard } from '@/components/ui/HoverCard'
import { Tag }       from '@/components/ui/Tag'
import type { Case } from '@/lib/cases'

interface CardSecondaryProps {
  c:          Case
  className?: string   /* ex: "case-secondary" na home para grid-column responsivo */
}

export function CardSecondary({ c, className }: CardSecondaryProps) {
  return (
    <HoverCard
      href={`/case/${c.slug}`}
      className={className}
      base={{
        display: 'flex', flexDirection: 'column',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--l-border)',
        background: '#fff', overflow: 'hidden',
        height: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.25s',
        textDecoration: 'none',
      }}
      hovered={{
        transform: 'translateY(-4px)',
        boxShadow: '0 16px 48px -8px rgba(0,0,0,0.1)',
        borderColor: 'rgba(240,116,7,0.35)',
      }}
    >
      {/* Imagem */}
      <div style={{ height: '260px', overflow: 'hidden', background: 'var(--l2)', flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={c.imgCard || c.img}
          alt={c.company}
          className="case-card-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Conteúdo */}
      <div style={{
        padding: 'var(--spacing-m)',
        display: 'flex', flexDirection: 'column',
        gap: 'var(--spacing-ms)', flex: 1,
      }}>
        <Tag label={c.tag} />

        <h4 className="t-h4" style={{ color: 'var(--lt1)', marginTop: '2px' }}>{c.headline}</h4>

        <p className="t-body" style={{ color: 'var(--lt2)', flex: 1 }}>{c.desc}</p>

        <span className="t-body" style={{
          display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-ms)',
          fontWeight: 600, color: 'var(--primary)', marginTop: '6px',
        }}>
          Ver case →
        </span>
      </div>
    </HoverCard>
  )
}
