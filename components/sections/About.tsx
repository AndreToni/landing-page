import { ArrowUpRight } from 'lucide-react'
import { HoverLink } from '@/components/ui/HoverLink'
import { TagDot } from '@/components/ui/TagDot'

export function About() {
  return (
    <section
      id="sobre"
      className="surf-dark wrap"
      style={{ position: 'relative' }}
    >
      <div className="inner">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
        >

          {/* ── Copy (left) ── */}
          <div>
            <TagDot label="Quem sou eu" variant="dark" style={{ marginBottom: 'var(--spacing-ms)' }} />

            <h2 className="t-h2" style={{ color: 'var(--dt1)', marginBottom: 'var(--spacing-m)' }}>
              Designer de{' '}
              <em className="accent" style={{ fontStyle: 'italic' }}>produto</em>,
              <br />não só de tela.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-m)', marginBottom: 'var(--spacing-m)' }}>
              {[
                'Sou Product Designer com mais de 4 anos de experiência em UX/UI e Product Design, atuando em produtos digitais e sistemas complexos. Tenho formação em Ciência da Computação, o que me permite trabalhar com proximidade técnica, entender restrições reais e colaborar de forma eficiente com times de produto e engenharia.',
                'Ao longo da minha trajetória, atuei em contextos B2B, produtos regulados e ambientes institucionais, lidando com desafios como arquitetura da informação, regras de negócio complexas, design systems e validação de soluções sob restrições de tempo, tecnologia e operação.',
                'Trabalho com foco em clareza, decisão e impacto, utilizando pesquisa, prototipação e validação para reduzir riscos e orientar escolhas de produto. Meu interesse é atuar em times que valorizem design como ferramenta estratégica, e não apenas como camada visual.',
              ].map((p, i) => (
                <p key={i} className="t-lead" style={{ color: 'var(--dt2)' }}>{p}</p>
              ))}
            </div>

            {/* Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-ms)', marginBottom: 'var(--spacing-m)' }}>
              {['Figma', 'UX Research', 'Design System', 'Prototipação', 'Ciência da Computação', 'B2B SaaS', 'Discovery', 'Handoff técnico'].map(s => (
                <span key={s} className="t-sm" style={{
                  padding: 'var(--spacing-es) var(--spacing-ms)', borderRadius: 'var(--radius)',
                  border: '1px solid var(--d-border)',
                  color: 'var(--dt3)', background: 'var(--d1)',
                }}>{s}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="about-cta-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-ms)' }}>
              <HoverLink
                href="https://www.linkedin.com/in/andretonifoguel/"
                target="_blank" rel="noopener noreferrer"
                className="btn-mobile-full"
                base={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-vs)',
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
          </div>

          {/* ── Photo (right) — estática ── */}
          <div className="about-photo-col">
            <div style={{ position: 'relative' }}>

              {/* Accent border decorativa */}
              <div aria-hidden style={{
                position: 'absolute', top: '20px', right: '-16px',
                width: '70%', height: '50%',
                borderRadius: 'var(--radius)',
                border: '1.5px solid rgba(240,116,7,0.18)',
                zIndex: 0, pointerEvents: 'none',
              }} />

              {/* Frame da foto — cresce para preencher a viewport */}
              <div className="about-photo-frame" style={{
                position: 'relative', zIndex: 1,
                width: '100%',
                borderRadius: 'var(--radius)', overflow: 'hidden',
                background: 'var(--d2)',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="./assets/Image.jpg"
                  alt="André Toni Foguel"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Badge flutuante */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px', zIndex: 2,
                background: 'var(--d1)', border: '1px solid var(--d-border)',
                borderRadius: 'var(--radius)', padding: 'var(--spacing-ms) var(--spacing-ms)',
                display: 'flex', alignItems: 'center', gap: 'var(--spacing-ms)',
                boxShadow: '0 8px 32px -8px rgba(0,0,0,0.4)',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: 'var(--radius)',
                  background: 'rgba(240,116,7,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'var(--fs-span)', flexShrink: 0,
                }}>🎯</div>
                <div>
                  <p className="t-h2" style={{ color: 'var(--dt1)', lineHeight: 'var(--lh-h2)' }}>4+</p>
                  <p className="t-sm" style={{ color: 'var(--dt3)', marginTop: '2px' }}>anos em produto</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
