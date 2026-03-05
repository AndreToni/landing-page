/* ── VLibras — Declaração de atributos customizados ───────────────────────
   O plugin VLibras (gov.br) usa atributos HTML não-padrão em <div>.
   Esta declaração estende HTMLAttributes do React para que o TypeScript
   não gere erro de compilação ao usar esses atributos no layout.

   IMPORTANTE: o `export {}` no final é obrigatório — transforma o arquivo
   em módulo, o que é exigido pelo TypeScript para que `declare module`
   funcione como augmentação (e não como declaração global).
─────────────────────────────────────────────────────────────────────── */

declare module 'react' {
  interface HTMLAttributes<T> {
    vw?:                  string
    'vw-access-button'?:  string
    'vw-plugin-wrapper'?: string
  }
}

export {}
