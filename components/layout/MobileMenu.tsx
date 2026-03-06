'use client'

import { ArrowUpRight } from 'lucide-react'
import { NavItem }      from '@/components/ui/NavItem'
import { HoverLink }    from '@/components/ui/HoverLink'

interface MobileMenuProps {
  open:    boolean
  links:   { label: string; href: string }[]
  onClose: () => void
}

export function MobileMenu({ open, links, onClose }: MobileMenuProps) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 40,
      background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(24px)',
      padding: 'var(--spacing-ml) var(--spacing-m) var(--spacing-m)',
      display: 'flex', flexDirection: 'column',
      opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity 0.3s ease',
    }}>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-s)', paddingTop: 'var(--spacing-s)' }}>
        {links.map(l => (
          <NavItem
            key={l.label}
            href={l.href}
            onClick={onClose}
            defaultColor="var(--dt1)"
            hoverColor="var(--primary)"
            style={{
              padding: 'var(--spacing-s) 0',
            }}
          >
            {l.label}
          </NavItem>
        ))}
      </nav>

      <HoverLink
        href="https://wa.me/5515998365749"
        target="_blank" rel="noopener noreferrer"
        base={{
          marginTop:      'var(--spacing-m)',
          display:        'inline-flex',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            'var(--spacing-vs)',
          padding:        'var(--spacing-ms) var(--spacing-m)',
          borderRadius:   'var(--radius)',
          background:     'var(--primary)',
          color:          '#fff',
          fontFamily:     'var(--font-body)',
          fontWeight:     600,
          fontSize:       'var(--fs-btn)',
          textDecoration: 'none',
          transition:     'background 0.2s, box-shadow 0.3s',
        }}
        hovered={{ background: 'var(--primary-dark)', boxShadow: '0 0 36px -8px rgba(240,116,7,0.55)' }}
      >
        Entrar em contato <ArrowUpRight size={20} />
      </HoverLink>

    </div>
  )
}
