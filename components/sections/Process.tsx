import React from 'react'
import { TagDot } from '@/components/ui/TagDot'

const steps = [
  { n:'01', phase:'Discovery',            icon:'◎', desc:'Ouvir antes de fazer. Entendo o negócio, o usuário e o problema real — não o sintoma. Entrevistas, análise de concorrentes e benchmarks.',          outputs:['Briefing','Mapa de empatia','Benchmarking'] },
  { n:'02', phase:'Definição',            icon:'▣', desc:'Transformo dados em insight e insights em direção clara. Personas, Jobs to Be Done e OKRs de design que toda equipe entende.',                      outputs:['Personas','JTBD','HMW statements'] },
  { n:'03', phase:'Exploração',           icon:'◈', desc:'Divergência deliberada. Sketches rápidos, fluxos alternativos e testes de conceito antes de qualquer pixel no Figma.',                              outputs:['Sketches','Fluxos de usuário','IA'] },
  { n:'04', phase:'Design & Prototipação',icon:'◆', desc:'Convergência: wireframes, UI de alta fidelidade, Design System e protótipos interativos prontos para teste.',                                       outputs:['UI Kit','Protótipo Figma','Design System'] },
  { n:'05', phase:'Validação & Entrega',  icon:'◉', desc:'Testo com usuários reais, itero rápido e entrego com handoff impecável. O designer fica até o produto estar no ar.',                                outputs:['Testes de usabilidade','Handoff','Documentação'] },
]

export function Process() {
  const stepStyle = (bg: string): React.CSSProperties => ({
    background: bg, padding: '2rem',
    display: 'flex', flexDirection: 'column', gap: 'var(--spacing-ms)',
  })

  return (
    <section id="processo" className="surf-light wrap">
      <div className="inner">

        {/* Header */}
        <div style={{ marginBottom: 'var(--spacing-m)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <TagDot label="Como trabalho" variant="light" style={{ marginBottom: 'var(--spacing-ms)' }} />
            <h2 className="t-h2" style={{ color: 'var(--lt1)' }}>
              Processo <em className="accent-dark" style={{ fontStyle: 'italic' }}>claro,</em><br />resultado previsível.
            </h2>
          </div>
          <p className="t-lead" style={{ color: 'var(--lt2)', maxWidth: '340px' }}>
            Design não é magia — é método. Cada etapa tem um propósito e entregáveis que sua equipe consegue usar.
          </p>
        </div>

        {/* Desktop: grid 6 cols — 3+2 */}
        <div className="proc-desktop" style={{
          display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1px', background: 'var(--l-border)',
          border: '1px solid var(--l-border)', borderRadius: 'var(--radius)', overflow: 'hidden',
        }}>
          {steps.map((s, i) => (
            <div key={s.n} className="proc-cell" style={{
              ...stepStyle('var(--l1)'),
              gridColumn: i < 3 ? 'span 2' : 'span 3',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="t-label" style={{ color: 'var(--lt3)' }}>{s.n}</span>
                <span style={{ fontSize: 'var(--fs-span)', color: 'var(--lt3)' }}>{s.icon}</span>
              </div>
              <div style={{ height: '2px', background: 'var(--l2)', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '100%', background: 'var(--primary)', borderRadius: '99px', opacity: 0.4 }} />
              </div>
              <h3 className="t-h4" style={{ color: 'var(--lt1)' }}>{s.phase}</h3>
              <p className="t-body" style={{ color: 'var(--lt2)', flex: 1 }}>{s.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-vs)' }}>
                {s.outputs.map(o => (
                  <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-ms)' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.55, flexShrink: 0 }} />
                    <span className="t-sm" style={{ color: 'var(--lt3)' }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="proc-mobile" style={{
          display: 'none', flexDirection: 'column',
          gap: '1px', background: 'var(--l-border)',
          border: '1px solid var(--l-border)', borderRadius: 'var(--radius)', overflow: 'hidden',
        }}>
          {steps.map(s => (
            <div key={s.n} className="proc-cell" style={stepStyle('var(--l1)')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-s)' }}>
                <span className="t-label" style={{ color: 'var(--lt3)' }}>{s.n}</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--l-border)' }} />
                <span style={{ color: 'var(--primary)' }}>{s.icon}</span>
              </div>
              <h3 className="t-h4" style={{ color: 'var(--lt1)' }}>{s.phase}</h3>
              <p className="t-body" style={{ color: 'var(--lt2)' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-vs)' }}>
                {s.outputs.map(o => (
                  <span key={o} className="t-label" style={{
                    padding: 'var(--spacing-es) var(--spacing-ms)', borderRadius: 'var(--radius)',
                    border: '1px solid var(--l-border)', color: 'var(--lt3)',
                  }}>{o}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
