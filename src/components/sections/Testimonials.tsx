import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cocoa-900 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Depoimentos"
          title={<span className="text-gold-50">O que os tutores dizem</span>}
        />

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-gold-500/15"
            >
              <p className="text-sm leading-relaxed text-gold-50/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-sm font-semibold text-gold-300">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gold-50">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gold-50/60">{testimonial.dog}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
