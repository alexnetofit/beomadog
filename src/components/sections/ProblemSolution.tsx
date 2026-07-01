import { Container } from "@/components/ui/Container";

export function ProblemSolution() {
  return (
    <section className="bg-cocoa-900 py-16 text-gold-50 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-300">
            Entenda a conexão
          </span>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Intestino equilibrado, pele mais saudável
          </h2>
          <p className="text-lg text-gold-50/80">
            O intestino do cão abriga grande parte do sistema imunológico e
            influencia diretamente a saúde da pele e do pelo. Quando a flora
            intestinal está desequilibrada, é comum notar reflexos na
            digestão, na pelagem e no bem-estar geral do animal.
          </p>
          <p className="text-lg text-gold-50/80">
            Por isso o DigestiCão foi formulado com probióticos, ômega-3 e
            enzimas digestivas trabalhando juntos: um suporte nutricional
            diário para ajudar o organismo do seu cão a manter esse
            equilíbrio — sempre como complemento, nunca como substituto do
            acompanhamento veterinário.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            {
              title: "Complexo Probiótico",
              text: "Ajuda a apoiar o equilíbrio da flora intestinal.",
            },
            {
              title: "Ômega-3",
              text: "Contribui para a saúde da pele e o brilho do pelo.",
            },
            {
              title: "Enzimas Digestivas",
              text: "Auxiliam no processo natural de digestão dos alimentos.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gold-500/20 bg-white/5 p-5"
            >
              <h3 className="font-heading text-lg font-semibold text-gold-300">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gold-50/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
