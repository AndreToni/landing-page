import { HoverCard } from '@/components/ui/HoverCard'
import { TagDot } from '@/components/ui/TagDot'

/*
  ESCURO — contraste com Cases claro
  Grid 12 col: cada card = span 4 desktop / span 6 tablet / span 12 mobile
  (mesma lógica dos cards de portfólio)
*/

const areas = [
  {
    icon: '▣',
    title: 'Produtos B2B e SaaS',
    desc: 'Atuação em produtos digitais voltados a operações, gestão e automação, lidando com fluxos complexos, regras de negócio e usuários especializados.',
    link: { label: 'Ver case →', href: '/case/balq' },
  },
  {
    icon: '◎',
    title: 'Sistemas regulados',
    desc: 'Experiência em produtos com restrições jurídicas, variação de regras por região e necessidade de alta confiabilidade na informação.',
    link: { label: 'Ver case →', href: '/case/angeplus-prever' },
  },
  {
    icon: '◈',
    title: 'Contextos industriais',
    desc: 'Atuação em produtos para o setor industrial, lidando com ambientes operacionais, usuários em campo e limitações reais de uso.',
    link: { label: 'Ver case →', href: '/case/balq' },
  },
  {
    icon: '◉',
    title: 'Ambientes institucionais',
    desc: 'Estruturação de sistemas de coleta e gestão de dados em contextos com múltiplos stakeholders e infraestrutura limitada.',
    link: { label: 'Ver case →', href: '/case/ipam' },
  },
  {
    icon: '◆',
    title: 'Produtos de IA e automação',
    desc: 'Experiência em produtos de IA e automação, com foco em reduzir complexidade percebida e facilitar adoção por usuários.',
    link: null,
  },
  {
    icon: '⬡',
    title: 'Design Systems e escala',
    desc: 'Criação e evolução de Design Systems para múltiplos produtos, com foco em padronização, governança e eficiência entre design e desenvolvimento.',
    link: { label: 'Ver case →', href: '/case/design-system' },
  },
]

export function Areas() {
  return (
    /* SEÇÃO ESCURA */
    <section id="contexto" className="surf-dark2 wrap">
      <div className="inner">

        {/* Header */}
        <div style={{ marginBottom: 'var(--spacing-m)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <TagDot label="Contexto onde já trabalhei" variant="dark" style={{ marginBottom: 'var(--spacing-ms)' }} />
            <h2 className="t-h2" style={{ color: 'var(--dt1)' }}>
              Onde eu já{' '}
              <em className="accent" style={{ fontStyle: 'italic' }}>atuei.</em>
            </h2>
          </div>
          <p className="t-lead" style={{ color: 'var(--dt2)', maxWidth: '340px' }}>
            Cada contexto tem suas complexidades únicas e me interessa exatamente o que é difícil de resolver.
          </p>
        </div>

        {/* Grid 12 col — mesma lógica dos cases */}
        <div className="grid-12" style={{ rowGap: '20px' }}>
          {areas.map(a => (
            <HoverCard
              key={a.title}
              href={a.link?.href}
              base={{
                gridColumn: 'span 4',
                display: 'flex', flexDirection: 'column', gap: 'var(--spacing-ms)',
                padding: 'var(--spacing-m)', borderRadius: 'var(--radius)',
                background: 'var(--d2)',
                transition: 'background 0.25s, box-shadow 0.25s',
              }}
              hovered={{ background: 'var(--d3)', boxShadow: 'inset 0 0 0 1px rgba(240,116,7,0.3)' }}
              className="area-card"
            >
              {/* Icon */}
              <span style={{
                fontSize: 'var(--fs-h3)', color: 'var(--dt3)',
                display: 'block', lineHeight: 1,
              }}>{a.icon}</span>

              {/* Title */}
              <h3 className="t-h4" style={{ color: 'var(--dt1)' }}>{a.title}</h3>

              {/* Desc */}
              <p className="t-body" style={{ color: 'var(--dt2)', flex: 1 }}>{a.desc}</p>

              {/* Link label */}
              {a.link && (
                <span className="t-body" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-vs)',
                  fontWeight: 600, color: 'var(--primary)',
                  marginTop: 'auto', paddingTop: '0.5rem',
                }}>{a.link.label}</span>
              )}
            </HoverCard>
          ))}
        </div>

      </div>
    </section>
  )
}
