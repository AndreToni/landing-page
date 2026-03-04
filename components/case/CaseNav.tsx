import { CardSecondary } from '@/components/ui/CardSecondary'
import { TagDot }        from '@/components/ui/TagDot'
import type { Case }     from '@/lib/cases'

interface CaseNavProps {
  others: Case[]
}

export function CaseNav({ others }: CaseNavProps) {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 'var(--spacing-l)' }}>
        <TagDot label="Outros cases" variant="light" style={{ marginBottom: 'var(--spacing-ms)' }} />
        <h2 className="t-h2" style={{ color: 'var(--lt1)' }}>
          Continue{' '}
          <em className="accent-dark" style={{ fontStyle: 'italic' }}>explorando.</em>
        </h2>
      </div>

      {/* Grid de cards */}
      <div className="case-nav-grid">
        {others.map(c => (
          <CardSecondary key={c.slug} c={c} />
        ))}
      </div>
    </div>
  )
}
