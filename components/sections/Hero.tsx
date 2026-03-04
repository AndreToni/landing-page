import { ArrowUpRight } from 'lucide-react'
import { HoverLink }   from '@/components/ui/HoverLink'
import { TagDot }      from '@/components/ui/TagDot'

/* ESCURO — contraste máximo com Cases (claro) */
export function Hero() {
  return (
    <section className="surf-dark wrap hero-section" style={{
      position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
    }}>

      {/* Glow sutil */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 38%, rgba(240,116,7,0.06) 0%, transparent 70%)',
      }} />

      {/* Grid pontilhado */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--d-border) 1px, transparent 1px), linear-gradient(90deg, var(--d-border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 100%)',
      }} />

      {/* Content */}
      <div className="inner" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>

        {/* Pill */}
        <div className="hero-mb" style={{ display: 'flex', justifyContent: 'center' }}>
          <TagDot label="Disponível para novos projetos" variant="dark" className="fade-up" style={{ animationDelay: '0ms' }} />
        </div>

        {/* Headline */}
        <h1 className="t-hero fade-up hero-mb" style={{
          color: 'var(--dt1)', maxWidth: '820px', marginInline: 'auto',
          animationDelay: '80ms',
        }}>
          Product Designer focado em{' '}
          <em className="accent" style={{ fontStyle: 'italic' }}>produtos digitais</em>{' '}
          e decisões orientadas a negócio
        </h1>

        {/* Sub */}
        <p className="t-lead fade-up hero-mb" style={{
          color: 'var(--dt2)', maxWidth: '520px', marginInline: 'auto',
          animationDelay: '160ms',
        }}>
          Atuação em produtos B2B, SaaS, ambientes regulados e institucionais,
          usando técnicas como discovery, UX research, design systems e testes de usabilidade
        </p>

        {/* CTAs */}
        <div className="fade-up hero-mb-lg hero-cta-wrap" style={{
          display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-ms)',
          justifyContent: 'center', animationDelay: '230ms',
        }}>
          <HoverLink
            href="https://www.linkedin.com/in/andretonifoguel/"
            target="_blank" rel="noopener noreferrer"
            className="btn-mobile-full"
            base={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-vs)',
              padding: 'var(--spacing-ms) var(--spacing-m)', borderRadius: 'var(--radius)',
              border: '1px solid var(--d-border)', color: 'var(--dt1)',
              background: 'transparent', fontFamily: 'var(--font-body)',
              fontWeight: 500, fontSize: 'var(--fs-btn)', textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            hovered={{ borderColor: 'rgba(240,116,7,0.4)', background: 'rgba(240,116,7,0.06)' }}
          >
            Ver LinkedIn <ArrowUpRight size={20} />
          </HoverLink>

          <HoverLink
            href="https://wa.me/5515998365749"
            target="_blank" rel="noopener noreferrer"
            className="btn-mobile-full"
            base={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-vs)',
              padding: 'var(--spacing-ms) var(--spacing-m)', borderRadius: 'var(--radius)',
              background: 'var(--primary)', color: '#fff',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--fs-btn)',
              textDecoration: 'none', transition: 'background 0.2s, box-shadow 0.3s',
            }}
            hovered={{ background: 'var(--primary-dark)', boxShadow: '0 0 36px -8px rgba(240,116,7,0.55)' }}
          >
            Entrar em contato <ArrowUpRight size={20} />
          </HoverLink>
        </div>

        {/* Stats */}
        <div className="fade-up hero-stats" style={{
          animationDelay: '310ms',
          borderTop: '1px solid var(--d-border)',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          paddingTop: 'var(--spacing-m)', paddingBottom: 'var(--spacing-m)',
        }}>
          {[
            { v: '+4 anos',      l: 'de experiência'        },
            { v: '+10 projetos', l: 'entregues'             },
            { v: '6 setores',    l: 'diferentes de atuação' },
          ].map((s, i) => (
            <div key={i} className="hero-stat-item" style={{
              padding: '0 var(--spacing-m)',
              borderRight: i < 2 ? '1px solid var(--d-border)' : 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-vs)',
            }}>
              <span className="t-h3" style={{ color: 'var(--dt1)', fontStyle: 'italic' }}>{s.v}</span>
              <span className="t-sm"  style={{ color: 'var(--dt3)' }}>{s.l}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
