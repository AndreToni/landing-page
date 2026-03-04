import { Fragment }       from 'react'
import { notFound }      from 'next/navigation'
import type { Metadata }  from 'next'
import { Navbar }         from '@/components/layout/Navbar'
import { Footer }         from '@/components/layout/Footer'
import { Breadcrumb }     from '@/components/case/Breadcrumb'
import { CaseNav }        from '@/components/case/CaseNav'
import { Tag }            from '@/components/ui/Tag'
import { cases, getCaseBySlug, getOtherCases } from '@/lib/cases'

/* ── Static routes ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return cases.map(c => ({ slug: c.slug }))
}

/* ── Metadata dinâmica ──────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) return {}
  return {
    title:       `${c.company} — ${c.headline} | André Toni Foguel`,
    description: c.desc,
  }
}

/* ── Helpers de cor por índice de seção ─────────────────────────────────── */
const surf       = (i: number) => i % 2 === 0 ? 'surf-light' : 'surf-dark'
const titleClr   = (i: number) => i % 2 === 0 ? 'var(--lt1)' : 'var(--dt1)'
const labelClr   = (i: number) => i % 2 === 0 ? 'var(--lt3)' : 'var(--dt3)'
const bodyClr    = (i: number) => i % 2 === 0 ? 'var(--lt2)' : 'var(--dt2)'
const borderClr  = (i: number) => i % 2 === 0 ? 'var(--l-border)' : 'var(--d-border)'
const listBg     = (i: number) => i % 2 === 0 ? 'var(--l1)'  : 'var(--d2)'

/* ── Page ───────────────────────────────────────────────────────────────── */
export default async function CasePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) notFound()

  const others = getOtherCases(slug)

  return (
    <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          HERO — ESCURO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="surf-dark case-hero">
        <div className="inner" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-m)' }}>

          <Breadcrumb items={[
            { label: 'Início', href: '/'       },
            { label: 'Cases',  href: '/#cases' },
            { label: c.company                 },
          ]} />

          {/* Tag */}
          <div>
            <Tag label={c.tag} variant="primary" />
          </div>

          {/* H1 */}
          <h1 className="t-hero" style={{ color: 'var(--dt1)', maxWidth: '820px' }}>
            {c.headline}
          </h1>

          {/* Lead */}
          <p className="t-lead" style={{ color: 'var(--dt2)', maxWidth: '600px' }}>
            {c.desc}
          </p>

          {/* Highlight */}
          <blockquote style={{
            margin: 0,
            paddingLeft: 'var(--spacing-m)',
            borderLeft: '3px solid var(--primary)',
          }}>
            <p className="t-body" style={{
              color: 'var(--dt1)', fontStyle: 'italic', fontWeight: 500,
            }}>
              {c.highlight}
            </p>
          </blockquote>

          {/* Meta row — 1 linha em 861+, grid 2 col em ≤860 */}
          <div className="case-meta-row" style={{
            display: 'flex', gap: 'var(--spacing-s)',
            paddingTop: 'var(--spacing-m)',
            borderTop: '1px solid var(--d-border)',
            marginTop: 'var(--spacing-ms)',
          }}>
            {c.meta.map(m => (
              <div key={m.label} style={{ flex: '1 1 0%', minWidth: 0, textAlign: 'left' }}>
                <p className="t-label" style={{ color: 'var(--dt3)', marginBottom: '4px' }}>
                  {m.label}
                </p>
                <p className="t-body" style={{ color: 'var(--dt1)', fontWeight: 500 }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COVER IMAGE — ESCURO
      ══════════════════════════════════════════════════════════════════ */}
      <div className="surf-dark" style={{ paddingBottom: 'var(--spacing-ml)', paddingInline: 'var(--px)' }}>
        <div className="inner">
          <div style={{
            borderRadius: 'var(--radius)', overflow: 'hidden',
            border: '1px solid var(--d-border)', background: 'var(--d2)',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.img}
              alt={`Cover — ${c.company}`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          SEÇÕES EDITORIAIS — alternância claro / escuro
      ══════════════════════════════════════════════════════════════════ */}
      {c.sections.map((section, i) => (
        <Fragment key={i}>

          {/* Seção editorial */}
          <section className={`${surf(i)} wrap case-editorial-section`}>
            <div className="inner">

              {/* Grid editorial: label+título | conteúdo */}
              <div className="case-section-grid">

                {/* Coluna esquerda */}
                <div style={{ paddingTop: '4px' }}>
                  <p className="t-label" style={{ color: labelClr(i), marginBottom: 'var(--spacing-m)' }}>
                    {section.label}
                  </p>
                  <h2 className="t-h2" style={{ color: titleClr(i) }}>
                    {section.title}
                  </h2>
                </div>

                {/* Coluna direita */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-m)' }}>

                  {/* Parágrafos */}
                  {section.body?.map((p, j) => (
                    <p key={j} className="t-body" style={{ color: bodyClr(i) }}>
                      {p}
                    </p>
                  ))}

                  {/* Lista de bullets */}
                  {section.list && (
                    <ul style={{
                      listStyle: 'none', margin: 0,
                      padding: 0, display: 'flex',
                      flexDirection: 'column', gap: 'var(--spacing-ms)',
                    }}>
                      {section.list.map((item, j) => (
                        <li key={j} style={{
                          display: 'flex', gap: 'var(--spacing-m)',
                          alignItems: 'flex-start',
                          padding: 'var(--spacing-ms) var(--spacing-m)',
                          background: listBg(i),
                          borderRadius: 'var(--radius)',
                          border: `1px solid ${borderClr(i)}`,
                        }}>
                          <span style={{
                            color: 'var(--primary)', fontWeight: 700,
                            flexShrink: 0, marginTop: '2px',
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--fs-span)',
                          }}>
                            ↗
                          </span>
                          <span className="t-body" style={{ color: bodyClr(i) }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </div>

            </div>
          </section>

          {/* Imagem full-bleed — 100% da largura, abaixo da seção, sem padding */}
          {section.img && (
            <div className={surf(i)} style={{ lineHeight: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={section.img}
                alt={section.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

        </Fragment>
      ))}

      {/* ══════════════════════════════════════════════════════════════════
          MÉTRICAS — ESCURO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="surf-dark wrap">
        <div className="inner">
          <p className="t-label" style={{ color: 'var(--dt3)', marginBottom: 'var(--spacing-l)' }}>
            Números do projeto
          </p>
          <div className="case-metrics-grid">
            {c.metrics.map(m => (
              <div key={m.label} style={{
                padding: 'var(--spacing-m)',
                background: 'var(--d2)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--d-border)',
                display: 'flex', flexDirection: 'column', gap: 'var(--spacing-ms)',
              }}>
                <p className="t-hero" style={{ color: 'var(--primary)', lineHeight: 1 }}>
                  {m.value}
                </p>
                <p className="t-body" style={{ color: 'var(--dt2)' }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          NAVEGAÇÃO ENTRE CASES — CLARO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="surf-light wrap">
        <div className="inner">
          <CaseNav others={others} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
