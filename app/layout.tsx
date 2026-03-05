import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  /* ── Identidade ──────────────────────────────────────────────────────── */
  title: {
    default:  'ToniFoguel — Product Designer',
    template: '%s | ToniFoguel',
  },
  description:
    'Product Designer com mais de 4 anos de experiência em UX/UI, atuando em produtos B2B, SaaS, ambientes regulados e institucionais.',

  /* ── Favicon / ícones ────────────────────────────────────────────────── */
  icons: {
    icon:     '/assets/FavIcon.png',
    shortcut: '/assets/FavIcon.png',
    apple:    '/assets/FavIcon.png',
  },

  /* ── OpenGraph (LinkedIn, WhatsApp, Slack…) ──────────────────────────── */
  openGraph: {
    title:       'ToniFoguel — Product Designer',
    description:
      'Product Designer com mais de 4 anos de experiência em UX/UI, atuando em produtos B2B, SaaS, ambientes regulados e institucionais.',
    siteName: 'ToniFoguel',
    locale:   'pt_BR',
    type:     'website',
    images: [
      {
        url:    '/assets/Banner.png',
        width:  1200,
        height: 630,
        alt:    'ToniFoguel — Product Designer',
      },
    ],
  },

  /* ── Twitter / X Card ────────────────────────────────────────────────── */
  twitter: {
    card:        'summary_large_image',
    title:       'ToniFoguel — Product Designer',
    description:
      'Product Designer com mais de 4 anos de experiência em UX/UI, atuando em produtos B2B, SaaS, ambientes regulados e institucionais.',
    images:      ['/assets/Banner.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cormorant Garamond — serifa alta-costura, elegante, séria */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* VLibras — acessibilidade LIBRAS */}
        {/* dangerouslySetInnerHTML evita erro TS de atributos não-padrão do plugin */}
        <div dangerouslySetInnerHTML={{ __html:
          '<div vw="true" class="enabled">' +
            '<div vw-access-button="true" class="active"></div>' +
            '<div vw-plugin-wrapper="true">' +
              '<div class="vw-plugin-top-wrapper"></div>' +
            '</div>' +
          '</div>'
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
                script.onload = function() { new window.VLibras.Widget('https://vlibras.gov.br/app'); };
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
