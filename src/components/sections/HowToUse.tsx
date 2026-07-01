import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "1",
    title: "Abra o pote",
    text: "Guarde em local fresco e seco, bem fechado após o uso.",
  },
  {
    number: "2",
    title: "Ofereça na quantidade indicada",
    text: "Siga a orientação do rótulo de acordo com o porte do seu cão.",
  },
  {
    number: "3",
    title: "Inclua na rotina diária",
    text: "O uso contínuo é o que ajuda a manter o suporte ao longo do tempo.",
  },
  {
    number: "4",
    title: "Acompanhe com o veterinário",
    text: "Use como complemento à orientação profissional para o seu pet.",
  },
];

export function HowToUse() {
  return (
    <section id="como-funciona" className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Como funciona"
          title="Simples de incluir na rotina do seu cão"
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cocoa-900 font-heading text-xl font-bold text-gold-300">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-semibold text-cocoa-900">
                {step.title}
              </h3>
              <p className="text-sm text-cocoa-600">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
