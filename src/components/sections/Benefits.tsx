import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: "🦴",
    title: "Suporte digestivo",
    text: "Ajuda a apoiar o equilíbrio da flora intestinal do seu cão no dia a dia.",
  },
  {
    icon: "✨",
    title: "Pele e pelo saudáveis",
    text: "Ômega-3 para contribuir com a hidratação da pele e o brilho da pelagem.",
  },
  {
    icon: "🌿",
    title: "Fórmula natural",
    text: "Ingredientes selecionados, sem complicação para incluir na rotina.",
  },
  {
    icon: "🍖",
    title: "Sabor que os cães aceitam bem",
    text: "Formato de petisco, fácil de oferecer direto do pote, todos os dias.",
  },
  {
    icon: "🛡️",
    title: "Qualidade Premium",
    text: "Produzido com controle de qualidade e cuidado em cada etapa.",
  },
  {
    icon: "💛",
    title: "Tranquilidade para o tutor",
    text: "Um cuidado a mais na rotina de quem quer o melhor para o seu cão.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-gold-50/60 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Benefícios"
          title="O que o DigestiCão faz pelo seu cão"
          subtitle="Um petisco funcional, pensado para apoiar a digestão e a saúde da pele e do pelo com o uso contínuo."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cocoa-200/40"
            >
              <span className="text-3xl">{benefit.icon}</span>
              <h3 className="font-heading text-lg font-semibold text-cocoa-900">
                {benefit.title}
              </h3>
              <p className="text-sm text-cocoa-600">{benefit.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
