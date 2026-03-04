/* Ticker UX — faixa neutra entre Hero (escuro) e Cases (claro) */
const terms = [
  'Discovery','UX Research','Design System','Prototipação',
  'Jobs to Be Done','Wireframes','Testes de Usabilidade',
  'Handoff','Arquitetura da Informação','Personas',
  'Design Sprint','Acessibilidade','Information Architecture',
]

export function Ticker() {
  const items = [...terms, ...terms]
  return (
    <div style={{
      background: 'var(--d1)',
      borderTop: '1px solid var(--d-border)',
      borderBottom: '1px solid var(--d-border)',
      overflow: 'hidden', padding: 'var(--spacing-ms) 0',
    }}>
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i} className="t-label" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-s)',
            padding: '0 var(--spacing-s)', whiteSpace: 'nowrap',
            color: 'var(--dt3)',
          }}>
            {t}
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.45 }} />
          </span>
        ))}
      </div>
    </div>
  )
}
