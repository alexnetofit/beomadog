// Catálogo de produtos. Hoje só temos o DigestiCão na loja, mas a
// modelagem já suporta múltiplos produtos para quando novas páginas
// (ex.: /produtos/[slug]) forem criadas.

export interface PriceTier {
  id: string;
  quantityLabel: string;
  units: number;
  price: number;
  pricePerUnit: number;
  badge?: string;
  highlighted?: boolean;
  whatsappMessage: string;
  image: string;
  imageAlt: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  weightLabel: string;
  heroImage: string;
  heroImageAlt: string;
  showcaseImage: string;
  showcaseImageAlt: string;
  keyIngredients: string[];
  priceTiers: PriceTier[];
}

export const digesticao: Product = {
  slug: "digesticao",
  name: "DigestiCão",
  shortName: "DigestiCão",
  tagline: "Suporte digestivo e dermatológico",
  weightLabel: "120g",
  heroImage: "/images/products/digesticao-hero.png",
  heroImageAlt: "Pastor alemão sentado ao lado do pote de DigestiCão, petisco funcional para suporte digestivo e dermatológico",
  showcaseImage: "/images/products/digesticao-composicao.png",
  showcaseImageAlt: "Pote de DigestiCão rodeado por folhas, gota de ômega-3 e moléculas, ilustrando os ingredientes do petisco funcional",
  keyIngredients: ["Complexo Probiótico", "Ômega-3", "Enzimas Digestivas"],
  priceTiers: [
    {
      id: "1-pote",
      quantityLabel: "1 pote",
      units: 1,
      price: 227,
      pricePerUnit: 227,
      whatsappMessage:
        "Olá! Quero comprar 1 pote de DigestiCão (R$227). Pode me ajudar?",
      image: "/images/products/digesticao-kit-1.png",
      imageAlt: "1 pote de DigestiCão",
    },
    {
      id: "3-potes",
      quantityLabel: "3 potes",
      units: 3,
      price: 347,
      pricePerUnit: 115.67,
      badge: "Mais escolhido",
      highlighted: true,
      whatsappMessage:
        "Olá! Quero comprar o kit com 3 potes de DigestiCão (R$347). Pode me ajudar?",
      image: "/images/products/digesticao-kit-3.png",
      imageAlt: "Kit com 3 potes de DigestiCão",
    },
    {
      id: "5-potes",
      quantityLabel: "5 potes",
      units: 5,
      price: 467,
      pricePerUnit: 93.4,
      badge: "Melhor custo-benefício",
      whatsappMessage:
        "Olá! Quero comprar o kit com 5 potes de DigestiCão (R$467). Pode me ajudar?",
      image: "/images/products/digesticao-kit-5.png",
      imageAlt: "Kit com 5 potes de DigestiCão",
    },
  ],
};

export const products: Product[] = [digesticao];
