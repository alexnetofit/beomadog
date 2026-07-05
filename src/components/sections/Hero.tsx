import Image from "next/image";
import { buildWhatsAppLink } from "@/config/site";
import { digesticao } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const trustPoints = [
  "Complexo probiótico",
  "Ômega-3",
  "Enzimas digestivas",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-gold-50 via-gold-50 to-background pt-12 pb-16 sm:pt-16 sm:pb-24"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-leaf-400/20 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-center gap-6 text-center lg:order-1 lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-cocoa-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-300">
            Qualidade Premium
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-tight text-cocoa-900 sm:text-5xl">
            Cuidado digestivo e de pele que o seu cão sente{" "}
            <span className="text-gold-600">todos os dias</span>
          </h1>

          <p className="max-w-lg text-lg text-cocoa-600">
            DigestiCão é o petisco funcional com complexo probiótico, ômega-3
            e enzimas digestivas para apoiar a saúde digestiva e a saúde da
            pele e do pelo do seu melhor amigo — na medida certa, todo dia.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={buildWhatsAppLink(
                "Olá! Quero comprar o DigestiCão. Pode me ajudar?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              Comprar pelo WhatsApp
            </Button>
            <Button href="#beneficios" variant="outline">
              Ver benefícios
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 lg:justify-start">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="flex items-center gap-2 text-sm font-medium text-cocoa-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 relative mx-auto w-full max-w-md lg:order-2">
          <div className="absolute inset-6 rounded-full bg-gold-300/40 blur-2xl" />
          <Image
            src={digesticao.heroImage}
            alt={digesticao.heroImageAlt}
            width={600}
            height={900}
            priority
            className="relative mx-auto h-auto w-full max-w-xs drop-shadow-2xl sm:max-w-sm"
          />
        </div>
      </Container>
    </section>
  );
}
