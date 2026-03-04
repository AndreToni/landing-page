import { ArrowUpRight } from 'lucide-react'
import { HoverLink }   from '@/components/ui/HoverLink'
import { TagDot }      from '@/components/ui/TagDot'

/* CLARO — contraste com About escuro */
export function Banner() {
  return (
    <section id="contato" className="surf-light2 wrap">
      <div className="inner">
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)',
          border: '1px solid rgba(180,80,0,0.15)',
          background: 'linear-gradient(135deg, rgba(240,116,7,0.08) 0%, rgba(240,116,7,0.02) 60%, var(--l0) 100%)',
          padding: 'clamp(3rem,6vw,5.5rem) clamp(2rem,5vw,5rem)',
        }}>

          {/* Grid decor */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(180,80,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(180,80,0,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at right, black 0%, transparent 65%)',
          }} />
          {/* Glow */}
          <div aria-hidden style={{
            position: 'absolute', top: '-30%', right: '-8%',
            width: '360px', height: '360px', borderRadius: '50%',
            background: 'rgba(240,116,7,0.08)', filter: 'blur(80px)', pointerEvents: 'none',
          }} />

          <div
            className="banner-inner"
            style={{
              position: 'relative', zIndex: 2,
              display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-l)',
            }}
          >
            {/* Left */}
            <div style={{ maxWidth: '560px' }}>
              <TagDot label="Disponível para novas oportunidades" variant="light" style={{ marginBottom: 'var(--spacing-ms)' }} />
              <h2 className="t-h2" style={{ color: 'var(--lt1)', marginBottom: 'var(--spacing-m)' }}>
                Vamos conversar{' '}
                <em className="accent-dark" style={{ fontStyle: 'italic' }}>sobre produto?</em>
              </h2>
              <p className="t-lead" style={{ color: 'var(--lt2)' }}>
                Se você busca um <strong style={{ color: 'var(--lt1)', fontWeight: 600 }}>Product Designer</strong> para
                atuar em produtos digitais complexos, sistemas ou contextos regulados, fico à
                disposição para trocar ideias e entender o desafio.
              </p>
            </div>

            {/* Right */}
            <div className="banner-cta" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-ms)', minWidth: '240px' }}>
              <HoverLink
                href="https://www.linkedin.com/in/andretonifoguel/"
                target="_blank" rel="noopener noreferrer"
                base={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-vs)',
                  padding: 'var(--spacing-ms) var(--spacing-m)', borderRadius: 'var(--radius)',
                  border: '1px solid rgba(240,116,7,0.9)',
                  color: 'rgba(240,116,7,0.9)',
                  background: 'transparent', fontFamily: 'var(--font-body)',
                  fontWeight: 600, fontSize: 'var(--fs-btn)', textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                }}
                hovered={{
                  borderColor: 'rgba(240,116,7,0.5)',
                  color: 'rgba(240,116,7,0.5)',
                  background: 'rgba(240,116,7,0.05)',
                }}
                className="btn-mobile-full"
              >
                Ver LinkedIn <ArrowUpRight size={20} />
              </HoverLink>

              <HoverLink
                href="https://wa.me/5515998365749"
                target="_blank" rel="noopener noreferrer"
                base={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-vs)',
                  padding: 'var(--spacing-ms) var(--spacing-m)', borderRadius: 'var(--radius)',
                  background: 'var(--primary)', color: '#fff',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--fs-btn)',
                  textDecoration: 'none', transition: 'background 0.2s, box-shadow 0.3s',
                }}
                hovered={{ background: 'var(--primary-dark)', boxShadow: '0 0 40px -8px rgba(240,116,7,0.5)' }}
                className="btn-mobile-full"
              >
                Entrar em contato <ArrowUpRight size={20} />
              </HoverLink>

              <div style={{ paddingTop: 'var(--spacing-ms)', borderTop: '1px solid var(--l-border)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-vs)' }}>
                {['✓  Resposta rápida','✓  Aberto a full-time ou freelance','✓  Disponível para projetos complexos'].map(t => (
                  <p key={t} className="t-sm" style={{ color: 'var(--lt3)' }}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
