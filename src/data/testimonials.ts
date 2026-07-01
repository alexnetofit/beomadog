// ATENÇÃO: depoimentos de exemplo (placeholder) para validar o layout.
// Antes de publicar o site, substituir por depoimentos reais de
// clientes (com autorização) — não usar estes textos em produção.

export interface Testimonial {
  name: string;
  dog: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marina S.",
    dog: "tutora da Nina, Bulldog Francês",
    quote:
      "Depoimento de exemplo — substituir por relato real. Ex.: percepção sobre a rotina digestiva da Nina após incluir o DigestiCão na alimentação.",
    initials: "MS",
  },
  {
    name: "Rafael T.",
    dog: "tutor do Thor, Golden Retriever",
    quote:
      "Depoimento de exemplo — substituir por relato real. Ex.: percepção sobre pelagem e disposição do Thor.",
    initials: "RT",
  },
  {
    name: "Camila A.",
    dog: "tutora da Mel, SRD",
    quote:
      "Depoimento de exemplo — substituir por relato real. Ex.: facilidade de dar o petisco na rotina diária da Mel.",
    initials: "CA",
  },
];
