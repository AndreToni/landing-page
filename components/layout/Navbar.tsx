'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NavItem } from '@/components/ui/NavItem'

const links = [
  { label: 'Cases',    href: '#cases'    },
  { label: 'Contexto', href: '#contexto' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre',    href: '#sobre'    },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  /* Na home: âncoras diretas. Em outras páginas: retorna à home + âncora */
  const hrefOf = (hash: string) => pathname === '/' ? hash : `/${hash}`

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: `${scrolled ? '13px' : '22px'} var(--px)`,
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--d-border)' : '1px solid transparent',
        transition: 'padding 0.35s, background 0.35s, border-color 0.35s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Wordmark */}
          <Link href="/" style={{
            fontFamily: 'var(--font-title)', fontSize: 'var(--fs-wordmark)', fontWeight: 600,
            color: 'var(--dt1)', textDecoration: 'none', letterSpacing: '-0.01em',
          }}>
            ToniFoguel<span style={{ color: 'var(--primary)' }}>.</span>
          </Link>

          {/* ── Desktop ≥ 860px ── */}
          <div className="nav-desktop" style={{ alignItems: 'center', gap: 'var(--spacing-l)' }}>
            <nav style={{ display: 'flex', gap: 'var(--spacing-l)' }}>
              {links.map(l => (
                <NavItem key={l.label} href={hrefOf(l.href)}>{l.label}</NavItem>
              ))}
            </nav>

            <a href="https://wa.me/5515998365749" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-vs)',
                padding: 'var(--spacing-ms) var(--spacing-m)', borderRadius: 'var(--radius)',
                background: 'var(--primary)', color: '#fff',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--fs-btn)',
                textDecoration: 'none', transition: 'background 0.2s, box-shadow 0.25s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--primary-dark)'; el.style.boxShadow = '0 0 24px -4px rgba(240,116,7,0.45)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--primary)'; el.style.boxShadow = 'none' }}
            >
              Entrar em contato <ArrowUpRight size={20} />
            </a>
          </div>

          {/* ── Mobile < 860px: só hamburguer ── */}
          <button
            className="nav-mobile"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            style={{
              width: '40px', height: '40px', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius)', border: '1px solid var(--d-border)',
              background: 'transparent', color: 'var(--dt1)', cursor: 'pointer',
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40,
        background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(24px)',
        padding: 'var(--spacing-ml) var(--px-mob) var(--spacing-m)',
        display: 'flex', flexDirection: 'column',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {links.map(l => (
            <Link key={l.label} href={hrefOf(l.href)} onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-title)', fontSize: 'var(--fs-mobile-menu)', fontWeight: 600,
                color: 'var(--dt1)', padding: 'var(--spacing-ms) 0',
                borderBottom: '1px solid var(--d-border)',
                textDecoration: 'none', transition: 'color 0.2s', lineHeight: 'var(--lh-h1)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dt1)')}
            >{l.label}</Link>
          ))}
        </nav>
        <a href="https://wa.me/5515998365749" target="_blank" rel="noopener noreferrer"
          style={{
            marginTop: 'var(--spacing-m)', padding: 'var(--spacing-s)', borderRadius: 'var(--radius)',
            background: 'var(--primary)', color: '#fff',
            fontFamily: 'var(--font-body)', fontWeight: 600,
            textAlign: 'center', textDecoration: 'none', fontSize: 'var(--fs-btn)',
          }}
        >Entrar em contato</a>
      </div>
    </>
  )
}
