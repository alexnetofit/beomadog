import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cocoa-900 py-12 text-gold-50/70">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xl font-extrabold text-gold-50">
              Digesti<span className="text-gold-400">Cão</span>
            </span>
            <p className="max-w-xs text-sm">{siteConfig.brand.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-gold-50/10 pt-6 text-xs text-gold-50/50">
          <p>
            As informações deste site têm caráter informativo e não
            substituem orientação, diagnóstico ou tratamento veterinário.
          </p>
          <p>
            © {year} {siteConfig.brand.parentBrand}. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
