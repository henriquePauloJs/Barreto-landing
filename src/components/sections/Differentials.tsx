import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Clock, Headset, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Engenheiro responsável",
    desc: "Você recebe orientação técnica real, com base em norma e experiência prática.",
    icon: BadgeCheck,
  },
  {
    title: "Agilidade no processo",
    desc: "Você evita atrasos por documentação errada e ganha tempo na homologação.",
    icon: Clock,
  },
  {
    title: "Suporte direto no WhatsApp",
    desc: "Atendimento humanizado e rápido para tirar dúvidas e acompanhar o processo.",
    icon: Headset,
  },
  {
    title: "Segurança e conformidade",
    desc: "Trabalho feito com responsabilidade, clareza e foco em evitar dores de cabeça.",
    icon: ShieldCheck,
  },
];

export function Differentials() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="mt-2 text-3xl font-bold text-[#0d3458] md:text-4xl">
            O que faz você ganhar tempo e economizar
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700">
            A consultoria existe pra facilitar sua vida: menos burocracia, menos
            custo, mais previsibilidade e um processo bem feito do início ao
            fim.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="rounded-3xl border-black/10 bg-white shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3458]/10">
                    <Icon className="h-6 w-6 text-[#0d3458]" />
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
