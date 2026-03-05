/* ── CardProcess ───────────────────────────────────────────────────────────
   Card reutilizável para cada etapa da seção de Processo.
   Layout responsivo via CSS:
     > 860px  → header com number/icon em space-between, outputs como lista com bullet
     ≤ 860px  → header com linha separadora, outputs como tag chips
─────────────────────────────────────────────────────────────────────── */

interface CardProcessProps {
  n:       string
  phase:   string
  icon:    string
  desc:    string
  outputs: string[]
}

export function CardProcess({ n, phase, icon, desc, outputs }: CardProcessProps) {
  return (
    <div className="card-process">

      {/* Header: número + ícone */}
      <div className="card-process__header">
        <span className="t-label card-process__num">{n}</span>
        <span className="card-process__icon" aria-hidden>{icon}</span>
      </div>

      {/* Barra de progresso decorativa */}
      <div className="card-process__bar">
        <div className="card-process__bar-fill" />
      </div>

      {/* Título da fase */}
      <h3 className="t-h4 card-process__phase">{phase}</h3>

      {/* Descrição */}
      <p className="t-body card-process__desc">{desc}</p>

      {/* Outputs — lista com bullet (desktop) */}
      <ul className="card-process__outputs-list" aria-label="Entregáveis">
        {outputs.map(o => (
          <li key={o} className="card-process__output-row">
            <span className="card-process__dot" aria-hidden />
            <span className="t-sm card-process__output-text">{o}</span>
          </li>
        ))}
      </ul>


    </div>
  )
}
