import Image from "next/image";
import { digesticao } from "@/data/products";
import { Container } from "@/components/ui/Container";

export function ProductShowcase() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-xs lg:order-2">
          <Image
            src={digesticao.image}
            alt={digesticao.imageAlt}
            width={500}
            height={750}
            className="mx-auto h-auto w-full drop-shadow-xl"
          />
        </div>

        <div className="flex flex-col gap-5 lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-leaf-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-leaf-600">
            Conheça o produto
          </span>
          <h2 className="font-heading text-3xl font-bold text-cocoa-900 sm:text-4xl">
            DigestiCão {digesticao.weightLabel}
          </h2>
          <p className="text-lg text-cocoa-600">
            Petisco funcional premium para cães, formulado para suporte
            digestivo e dermatológico. Fácil de oferecer no dia a dia, direto
            do pote.
          </p>

          <ul className="flex flex-col gap-3">
            {digesticao.keyIngredients.map((ingredient) => (
              <li
                key={ingredient}
                className="flex items-center gap-3 text-cocoa-800"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-600">
                  ✓
                </span>
                <span className="font-medium">{ingredient}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full bg-gold-100 px-4 py-2 text-sm font-semibold text-gold-700">
              Qualidade Premium
            </span>
            <span className="rounded-full bg-cocoa-50 px-4 py-2 text-sm font-semibold text-cocoa-700">
              Peso líq. {digesticao.weightLabel}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
