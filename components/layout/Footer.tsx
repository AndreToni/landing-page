import { ArrowUpRight } from 'lucide-react'
import { HoverLink } from '@/components/ui/HoverLink'
import { NavItem } from '@/components/ui/NavItem'

const navLinks = [
  { label: 'Cases', href: '#cases' },
  { label: 'Contexto', href: '#contexto' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--d0)', borderTop: '1px solid var(--d-border)' }}>
      <div style={{ padding: `var(--spacing-ml) var(--px) 0` }}>
        <div style={{ maxWidth: 'var(--max-w)', marginInline: 'auto' }}>

          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,200px),1fr))', gap: 'var(--spacing-l)', paddingBottom: 'var(--spacing-l)' }}>

            {/* Brand */}
            <div className="footer-brand" style={{ gridColumn: 'span 2' }}>
              <p style={{ fontFamily: 'var(--font-title)', fontSize: 'var(--fs-wordmark)', fontWeight: 600, color: 'var(--dt1)', marginBottom: 'var(--spacing-ms)' }}>
                ToniFoguel<span style={{ color: 'var(--primary)' }}>.</span>
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-p)', lineHeight: 'var(--lh-p)', color: 'var(--dt3)', maxWidth: '260px', marginBottom: 'var(--spacing-m)' }}>
                Product Designer focado em produtos digitais e decisões orientadas a negócio.
              </p>
              {/* LinkedIn icon button */}
              <HoverLink
                href="https://www.linkedin.com/in/andretonifoguel/"
                target="_blank" rel="noopener noreferrer"
                className="t-label"
                base={{ width: '36px', height: '36px', borderRadius: 'var(--radius)', border: '1px solid var(--d-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--dt3)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                hovered={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
              >in</HoverLink>
            </div>

            {/* Nav */}
            <div>
              <p className="t-label" style={{ color: 'var(--dt3)', marginBottom: 'var(--spacing-ms)' }}>Navegação</p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-ms)' }}>
                {navLinks.map(l => (
                  <NavItem key={l.label} href={l.href}>{l.label}</NavItem>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="t-label" style={{ color: 'var(--dt3)', marginBottom: 'var(--spacing-ms)' }}>Contato</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-ms)' }}>
                <NavItem href="https://www.linkedin.com/in/andretonifoguel/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={20} />
                </NavItem>
                <NavItem href="https://wa.me/5515998365749" target="_blank" rel="noopener noreferrer">
                  WhatsApp <ArrowUpRight size={20} />
                </NavItem>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--spacing-ms)', paddingTop: 'var(--spacing-m)', paddingBottom: 'var(--spacing-m)', borderTop: '1px solid var(--d-border)' }}>
            <p className="t-sm" style={{ color: 'var(--dt3)' }}>© {year} André Toni Foguel. Todos os direitos reservados.</p>
            <p className="t-sm" style={{ color: 'var(--dt3)' }}>São Paulo, Brasil 🇧🇷</p>
          </div>

        </div>
      </div>
    </footer>
  )
}
