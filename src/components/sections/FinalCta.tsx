import { buildWhatsAppLink } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-gold-400 to-gold-500 p-10 text-center shadow-xl sm:p-14">
          <h2 className="font-heading text-3xl font-extrabold text-cocoa-900 sm:text-4xl">
            Dê ao seu cão um cuidado que ele sente todos os dias
          </h2>
          <p className="max-w-xl text-cocoa-800">
            Fale com a nossa equipe agora pelo WhatsApp e escolha o kit ideal
            de DigestiCão para o seu melhor amigo.
          </p>
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
        </div>
      </Container>
    </section>
  );
}
