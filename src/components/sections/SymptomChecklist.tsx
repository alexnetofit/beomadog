import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const symptoms = [
  { emoji: "🐾", label: "Coceira frequente" },
  { emoji: "💩", label: "Fezes moles ou irregulares" },
  { emoji: "🌬️", label: "Gases e desconforto abdominal" },
  { emoji: "🦴", label: "Pelagem seca ou opaca" },
  { emoji: "🍽️", label: "Variações de apetite" },
  { emoji: "😴", label: "Menos disposição que o normal" },
];

export function SymptomChecklist() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Você percebe algo disso no seu cão?"
          title="Sinais comuns de que o intestino pode precisar de ajuda"
          subtitle="A saúde digestiva está diretamente ligada à saúde da pele e do pelo. Se você reconhece um ou mais desses sinais, vale a pena conversar com o veterinário e considerar um suporte nutricional."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
          {symptoms.map((symptom) => (
            <div
              key={symptom.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-cocoa-200/60 bg-white p-6 text-center shadow-sm"
            >
              <span className="text-3xl">{symptom.emoji}</span>
              <span className="text-sm font-semibold text-cocoa-700">
                {symptom.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
