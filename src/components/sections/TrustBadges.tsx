import { Container } from "@/components/ui/Container";

const badges = [
  { icon: "💬", label: "Atendimento humano pelo WhatsApp" },
  { icon: "🏅", label: "Qualidade Premium" },
  { icon: "🐕", label: "Feito pensando no seu cão" },
  { icon: "🔒", label: "Pedido combinado com segurança" },
];

export function TrustBadges() {
  return (
    <section className="py-10">
      <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="text-2xl">{badge.icon}</span>
            <span className="text-xs font-medium text-cocoa-600">
              {badge.label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
