import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cocoa-200/50 bg-gold-50/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="#top" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-extrabold tracking-tight text-cocoa-900">
            Digesti<span className="text-gold-600">Cão</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cocoa-700 transition-colors hover:text-gold-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          href={buildWhatsAppLink(
            "Olá! Vim pelo site e quero saber mais sobre o DigestiCão."
          )}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="!px-5 !py-2.5 text-sm"
        >
          Comprar agora
        </Button>
      </Container>
    </header>
  );
}
