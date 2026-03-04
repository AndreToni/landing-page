# Struckt — Landing Page

> LP moderna em Next.js 14 com App Router, TypeScript e Tailwind CSS.

## Stack Técnica

- **Next.js 14** — App Router + Server Components
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling com breakpoints customizados
- **Geist Font** — Tipografia otimizada
- **Syne + DM Sans** — Fontes display e corpo

## Cores

| Token | Hex |
|-------|-----|
| `primary` | `#F07407` |
| `secondary` | `#0A0A0A` |
| `bg` | `#0A0A0A` |
| `bg-card` | `#111111` |

## Breakpoints

| Nome | Largura |
|------|---------|
| `sm` | 320px |
| `md` | 860px |
| `lg` | 1200px |
| `xl` | 1720px |

## Estrutura do Projeto

```
landing-page/
├── app/
│   ├── globals.css          # Estilos globais + CSS custom properties
│   ├── layout.tsx           # Root layout com metadata
│   └── page.tsx             # Página principal (composição de sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Header fixo com scroll effect + mobile menu
│   │   └── Footer.tsx       # Footer com links + social proof
│   │
│   └── sections/
│       ├── Hero.tsx         # Hero principal com parallax + floating card
│       ├── Marquee.tsx      # Ticker infinito de serviços
│       ├── About.tsx        # Sobre a empresa + 4 pilares
│       ├── Services.tsx     # Grid de 4 serviços com hover
│       ├── Stats.tsx        # Métricas com CountUp animado
│       ├── Work.tsx         # Portfolio com imagens
│       ├── Process.tsx      # 5 etapas do processo
│       ├── Testimonials.tsx # Grid de depoimentos (masonry)
│       ├── Blog.tsx         # 3 posts recentes
│       └── CTA.tsx          # Call-to-action final
│
├── lib/
│   └── utils.ts             # cn() helper + formatNumber()
│
├── public/
│   └── images/              # Assets estáticos
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Como Rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build de produção
npm run build
npm start
```

## Arquitetura & Clean Code

### Princípios Aplicados

- **Single Responsibility**: Cada componente tem uma única responsabilidade
- **Component Composition**: `page.tsx` apenas compõe sections independentes
- **CSS Custom Properties**: Tokens de design centralizados em `:root`
- **Utility Classes**: Tailwind + classes utilitárias customizadas em `globals.css`
- **Type Safety**: TypeScript estrito em todos os componentes
- **Performance**: 
  - `'use client'` apenas onde há interatividade (Navbar, Stats)
  - Imagens otimizadas com `next/image`
  - Fontes com `display=swap`

### Boas Práticas de Acessibilidade

- `aria-label` em botões sem texto
- Hierarquia semântica de headings (h1 → h3)
- Alto contraste nas cores (WCAG AA)
- `:focus-visible` styles preservados

### Responsividade

Todos os componentes são mobile-first usando os breakpoints customizados:

```css
sm:  320px  → Layout mobile base
md:  860px  → Tablet / grid 2 colunas
lg: 1200px  → Desktop / grid completo
xl: 1720px  → Wide screen / max-width
```

## Customização

Para trocar a cor primária, edite `tailwind.config.ts`:

```ts
primary: {
  DEFAULT: '#F07407', // ← trocar aqui
}
```

E em `app/globals.css`:

```css
:root {
  --primary: #F07407; /* ← trocar aqui */
}
```
