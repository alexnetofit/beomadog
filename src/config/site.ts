// Configuração central da marca. Pensado para crescer: quando novos
// produtos/canais forem adicionados, este arquivo continua sendo a
// fonte única de verdade para nome, contato e links do site.

export const siteConfig = {
  brand: {
    name: "DigestiCão",
    parentBrand: "Beomadog",
    tagline: "Suporte digestivo e dermatológico para cães",
    description:
      "Petisco funcional para cães com complexo probiótico, ômega-3 e enzimas digestivas. Cuidado de dentro para fora, pensado para a saúde digestiva e a pele e pelo do seu melhor amigo.",
    locale: "pt-BR",
  },
  contact: {
    whatsappNumber: "553591635789",
    whatsappDisplay: "(35) 9163-5789",
    instagramHandle: "@digesticao", // placeholder — atualizar quando o perfil oficial existir
    instagramUrl: "https://instagram.com/digesticao",
  },
  nav: [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#faq" },
  ],
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}
