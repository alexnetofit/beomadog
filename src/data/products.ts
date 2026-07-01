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
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  weightLabel: string;
  image: string;
  imageAlt: string;
  keyIngredients: string[];
  priceTiers: PriceTier[];
}

export const digesticao: Product = {
  slug: "digesticao",
  name: "DigestiCão",
  shortName: "DigestiCão",
  tagline: "Suporte digestivo e dermatológico",
  weightLabel: "120g",
  image: "/images/products/digesticao-pote.png",
  imageAlt: "Pote de DigestiCão, petisco funcional para cães com complexo probiótico, ômega-3 e enzimas digestivas",
  keyIngredients: ["Complexo Probiótico", "Ômega-3", "Enzimas Digestivas"],
  priceTiers: [
    {
      id: "1-pote",
      quantityLabel: "1 pote",
      units: 1,
      price: 147,
      pricePerUnit: 147,
      whatsappMessage:
        "Olá! Quero comprar 1 pote de DigestiCão (R$147). Pode me ajudar?",
    },
    {
      id: "2-potes",
      quantityLabel: "2 potes",
      units: 2,
      price: 267,
      pricePerUnit: 133.5,
      badge: "Mais escolhido",
      highlighted: true,
      whatsappMessage:
        "Olá! Quero comprar o kit com 2 potes de DigestiCão (R$267). Pode me ajudar?",
    },
    {
      id: "3-potes",
      quantityLabel: "3 potes",
      units: 3,
      price: 347,
      pricePerUnit: 115.67,
      badge: "Melhor custo-benefício",
      whatsappMessage:
        "Olá! Quero comprar o kit com 3 potes de DigestiCão (R$347). Pode me ajudar?",
    },
  ],
};

export const products: Product[] = [digesticao];
