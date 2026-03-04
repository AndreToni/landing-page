import { CardDestaque }   from '@/components/ui/CardDestaque'
import { CardSecondary }  from '@/components/ui/CardSecondary'
import { TagDot }         from '@/components/ui/TagDot'
import { cases }          from '@/lib/cases'

/*
  CLARO — contraste com Hero escuro
  Grid 12 colunas:
    Balq (featured):  col-span-12 (full width)
    Secundários:      col-span-4 desktop | col-span-6 tablet | col-span-12 mobile
                      → via .case-secondary no globals.css
*/

const featured  = cases.find(c => c.slug === 'balq')!
const secondary = cases.filter(c => c.slug !== 'balq')

export function Cases() {
  return (
    /* SEÇÃO CLARA */
    <section id="cases" className="surf-light wrap">
      <div className="inner">

        {/* Header */}
        <div style={{ marginBottom: 'var(--spacing-m)' }}>
          <TagDot label="Cases selecionados" variant="light" style={{ marginBottom: 'var(--spacing-ms)' }} />
          <h2 className="t-h2" style={{ color: 'var(--lt1)' }}>
            Trabalhos que{' '}
            <em className="accent-dark" style={{ fontStyle: 'italic' }}>geram impacto.</em>
          </h2>
        </div>

        {/* Grid 12 col */}
        <div className="grid-12" style={{ rowGap: '20px' }}>

          {/* ── Balq: CardDestaque — imagem 6col | copy 6col ── */}
          <CardDestaque
            tag={featured.tag}
            company={featured.company}
            headline={featured.headline}
            desc={featured.desc}
            img={featured.imgCard}
            href={`/case/${featured.slug}`}
          />

          {/* ── Secundários: 4 col desktop / 6 col tablet / 12 col mobile ── */}
          {secondary.map(c => (
            <CardSecondary key={c.slug} c={c} className="case-secondary" />
          ))}

        </div>
      </div>
    </section>
  )
}
