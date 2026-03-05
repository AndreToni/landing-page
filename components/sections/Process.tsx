import { TagDot }      from '@/components/ui/TagDot'
import { CardProcess } from '@/components/ui/CardProcess'

const steps = [
  {
    n:       '01',
    phase:   'Discovery',
    icon:    '◎',
    desc:    'Entender antes de desenhar. Começo investigando o problema real: negócio, usuários e contexto. Sem isso, qualquer solução é chute.',
    outputs: ['Stakeholder interviews', 'User interviews', 'Benchmark & competitive analysis'],
  },
  {
    n:       '02',
    phase:   'Definição',
    icon:    '▣',
    desc:    'Transformo descobertas em direção estratégica. Organizo insights em problemas claros para que todo o time saiba o que precisa ser resolvido.',
    outputs: ['Personas', 'Jobs To Be Done', 'How Might We'],
  },
  {
    n:       '03',
    phase:   'Exploração',
    icon:    '◈',
    desc:    'Exploro múltiplas soluções antes de decidir. Testo ideias rapidamente com sketches, fluxos e conceitos antes de investir em interface.',
    outputs: ['Sketches', 'User flows', 'Concept exploration'],
  },
  {
    n:       '04',
    phase:   'Design & Prototyping',
    icon:    '◆',
    desc:    'Transformo ideias em interfaces testáveis. Crio wireframes, UI de alta fidelidade e protótipos interativos prontos para validação.',
    outputs: ['Wireframes', 'High-fidelity UI', 'Interactive prototype'],
  },
  {
    n:       '05',
    phase:   'Validation & Delivery',
    icon:    '◉',
    desc:    'Valido com usuários reais e acompanho até produção. Itero rápido, documento decisões e garanto um handoff claro para engenharia.',
    outputs: ['Usability testing', 'Handoff', 'Documentation'],
  },
]

export function Process() {
  return (
    <section id="processo" className="surf-light wrap">
      <div className="inner">

        {/* Header */}
        <div style={{
          marginBottom: 'var(--spacing-m)', display: 'flex',
          flexWrap: 'wrap', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: '1.5rem',
        }}>
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

        {/* Grid unificado — responsivo via CSS */}
        <div className="proc-grid">
          {steps.map(s => (
            <CardProcess key={s.n} {...s} />
          ))}
        </div>

      </div>
    </section>
  )
}
