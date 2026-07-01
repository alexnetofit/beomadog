import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="bg-gold-50/60 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas sobre o DigestiCão" />

        <div className="flex w-full max-w-2xl flex-col gap-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-cocoa-200/50 open:ring-gold-400"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-cocoa-900">
                {item.question}
                <span className="shrink-0 text-gold-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-cocoa-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
