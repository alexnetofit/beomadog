## DigestiCão — site de vendas

Site institucional/de vendas do DigestiCão, construído em Next.js (App
Router) + TypeScript + Tailwind CSS. A estrutura já foi pensada para virar
uma loja com mais produtos no futuro, mas hoje só existe a landing page
principal (`/`).

### Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Onde editar o quê

- `src/config/site.ts` — nome da marca, WhatsApp, Instagram, itens de menu.
- `src/data/products.ts` — catálogo de produtos (hoje só o DigestiCão),
  incluindo os planos/preços exibidos na seção de Planos. Modelado como
  lista para facilitar adicionar novos produtos depois.
- `src/data/testimonials.ts` — depoimentos exibidos na seção "O que os
  tutores dizem". **Estão com conteúdo de exemplo (placeholder)** — troque
  por depoimentos reais de clientes antes de publicar o site, para não
  veicular prova social falsa.
- `src/data/faq.ts` — perguntas frequentes.
- `src/components/sections/*` — cada seção da página (Hero, Benefícios,
  Planos, FAQ, etc.), usadas em `src/app/page.tsx`.
- `public/images/products/` — imagens dos produtos.

### Fluxo de compra atual

Ainda não há checkout/gateway de pagamento integrado. Todos os botões de
"Comprar" abrem uma conversa no WhatsApp (número configurado em
`src/config/site.ts`) com uma mensagem pré-preenchida indicando o plano
escolhido.

### Pensando no futuro (multi-produto)

A modelagem de dados (`src/data/products.ts`) já suporta múltiplos
produtos. Quando for a hora de vender mais itens além do DigestiCão, o
caminho natural é:

1. Adicionar novos produtos ao array `products`.
2. Criar páginas de produto em `src/app/produtos/[slug]/page.tsx`
   reaproveitando os componentes de seção já existentes.
3. Trocar os CTAs de WhatsApp por um checkout de verdade quando o gateway
   de pagamento for definido.
