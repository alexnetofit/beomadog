import Image from "next/image";
import { testimonialVideos } from "@/data/testimonials";
import { beforeAfterResults } from "@/data/results";
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

        <div className="-mx-5 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {testimonialVideos.map((video) => (
            <div
              key={video.id}
              className="w-[78%] shrink-0 snap-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-gold-500/15 sm:w-[45%] lg:w-auto"
            >
              <video
                src={video.src}
                poster={video.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={video.label}
                className="block w-full bg-black"
              />
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <SectionHeading
            eyebrow="Resultados reais"
            title={
              <span className="text-gold-50">
                Antes e depois de quem já usa
              </span>
            }
          />

          <div className="-mx-5 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
            {beforeAfterResults.map((result) => (
              <div
                key={result.id}
                className="relative w-[68%] shrink-0 snap-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-gold-500/15 sm:w-[38%] lg:w-auto"
              >
                <Image
                  src={result.src}
                  alt={result.alt}
                  width={result.width}
                  height={result.height}
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 38vw, 68vw"
                  className="block h-auto w-full"
                />
                {result.badgeLabel && (
                  <span
                    className="absolute left-1/2 top-[10%] -translate-x-1/2 rounded-2xl px-5 py-2 text-xl font-extrabold text-black shadow-lg"
                    style={{ backgroundColor: "#fedc02" }}
                  >
                    {result.badgeLabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
