export interface BeforeAfterResult {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Selo "X Meses" sobreposto via CSS. Usado apenas quando a foto não já
   * tem o selo gravado na própria imagem.
   */
  badgeLabel?: string;
}

export const beforeAfterResults: BeforeAfterResult[] = [
  {
    id: "antes-depois-03",
    src: "/images/results/antes-depois-03.png",
    alt: "Antes e depois de 2 meses usando DigestiCão: pelagem recuperada na região do pescoço",
    width: 1024,
    height: 1536,
  },
  {
    id: "antes-depois-01",
    src: "/images/results/antes-depois-01.png",
    alt: "Antes e depois de 3 meses usando DigestiCão: pelagem recuperada na lateral do corpo",
    width: 1024,
    height: 1536,
  },
  {
    id: "antes-depois-02",
    src: "/images/results/antes-depois-02.png",
    alt: "Antes e depois de 5 meses usando DigestiCão: pele e pelagem recuperadas na pata",
    width: 1024,
    height: 1536,
    badgeLabel: "5 Meses",
  },
  {
    id: "antes-depois-04",
    src: "/images/results/antes-depois-04.png",
    alt: "Antes e depois de 7 meses usando DigestiCão: pelagem recuperada na cauda",
    width: 683,
    height: 1024,
  },
];
