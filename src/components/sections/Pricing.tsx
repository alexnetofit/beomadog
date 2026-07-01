import { buildWhatsAppLink } from "@/config/site";
import { digesticao } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function Pricing() {
  return (
    <section id="planos" className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o kit ideal para o seu cão"
          subtitle="Quanto maior o kit, menor o valor por pote. Pedido e pagamento combinados diretamente pelo WhatsApp."
        />

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {digesticao.priceTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col gap-5 rounded-3xl p-8 ${
                tier.highlighted
                  ? "bg-cocoa-900 text-gold-50 shadow-xl ring-2 ring-gold-400"
                  : "bg-white text-cocoa-900 shadow-sm ring-1 ring-cocoa-200/60"
              }`}
            >
              {tier.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide ${
                    tier.highlighted
                      ? "bg-gold-400 text-cocoa-900"
                      : "bg-leaf-500 text-white"
                  }`}
                >
                  {tier.badge}
                </span>
              )}

              <div className="flex flex-col items-center gap-1 pt-2 text-center">
                <span
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    tier.highlighted ? "text-gold-300" : "text-cocoa-500"
                  }`}
                >
                  {tier.quantityLabel}
                </span>
                <span className="font-heading text-4xl font-extrabold">
                  {currency.format(tier.price)}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? "text-gold-50/70" : "text-cocoa-500"
                  }`}
                >
                  {currency.format(tier.pricePerUnit)} por pote
                </span>
              </div>

              <ul
                className={`flex flex-col gap-2 text-sm ${
                  tier.highlighted ? "text-gold-50/80" : "text-cocoa-600"
                }`}
              >
                <li>✓ DigestiCão {digesticao.weightLabel}</li>
                <li>✓ Complexo probiótico + ômega-3 + enzimas</li>
                <li>✓ Atendimento direto pelo WhatsApp</li>
              </ul>

              <Button
                href={buildWhatsAppLink(tier.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variant={tier.highlighted ? "primary" : "outline"}
                className="mt-auto w-full"
              >
                Quero este kit
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
