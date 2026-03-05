import { ArrowRight } from 'lucide-react'
import { HoverLink } from './HoverLink'
import { Tag } from './Tag'

export interface CardDestaqueProps {
  tag: string
  company: string
  headline: string
  desc: string
  img: string
  href: string
}

/**
 * CardDestaque — card de case principal
 * Layout: imagem 6 colunas | copy 6 colunas
 * Ocupa grid-column 1/-1 (full 12 colunas) do pai
 */
export function CardDestaque({ tag, company, headline, desc, img, href }: CardDestaqueProps) {
  return (
    <HoverLink
      href={href}
      base={{
        gridColumn: '1 / -1',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--l-border)',
        overflow: 'hidden',
        background: '#111',
        textDecoration: 'none',
        minHeight: '460px',
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s',
      }}
      hovered={{
        transform: 'translateY(-4px)',
        boxShadow: '0 24px 72px -12px rgba(0,0,0,0.3)',
      }}
      className="card-destaque-grid"
    >
      {/* ── Coluna esquerda: imagem (6 col) ── */}
      <div className="card-destaque-img" style={{ position: 'relative', overflow: 'hidden', minHeight: '460px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={company}
          className="card-destaque-photo"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
        {/* Overlay suave lateral para unir com o copy */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 60%, rgba(17,17,17,0.6) 100%)',
        }} />
        {/* Overlay inferior para legibilidade se necessário */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)',
        }} />
      </div>

      {/* ── Coluna direita: copy (6 col) ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'var(--spacing-m)',
        background: '#111',
        gap: 'var(--spacing-m)',
      }}>

        {/* Top row: tag + ícone */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Tag label={tag} variant="dark" />


        </div>

        {/* Middle: company + headline + desc */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 'var(--spacing-ms)' }}>


          <h3 className="t-h4" style={{ color: '#F0EDE8' }}>{headline}</h3>

          <p className="t-body" style={{ color: 'rgba(255,255,255,0.45)' }}>{desc}</p>
        </div>

        {/* Bottom: CTA */}
        <div style={{
          paddingTop: 'var(--spacing-m)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          <span className="t-body" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-ms)',
            fontWeight: 600, color: 'var(--primary)',
          }}>
            Ver case <ArrowRight size={20} />
          </span>
        </div>

      </div>
    </HoverLink>
  )
}
