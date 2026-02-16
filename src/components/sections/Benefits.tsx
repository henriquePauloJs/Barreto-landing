import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Redução de custos",
    desc: "Ajustes técnicos e estratégicos para reduzir gastos e corrigir cobranças indevidas.",
  },
  {
    title: "Processo mais rápido",
    desc: "Você evita retrabalho e acelera homologações e regularizações com suporte correto.",
  },
  {
    title: "Segurança e conformidade",
    desc: "Tudo feito dentro das normas, com documentação e orientação técnica.",
  },
  {
    title: "Atendimento especializado",
    desc: "Você fala direto com engenheiro responsável, sem enrolação e sem repasse.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-zinc-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mt-2 text-3xl font-bold text-[#0d3458] md:text-4xl">
              Por que contratar a Barreto Consultoria?
            </h2>

            <p className="mt-3 text-zinc-700">
              O foco é simples: resolver sua demanda com clareza, rapidez e
              resultado. Você evita erros, atrasos e custos desnecessários.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {benefits.map((b) => (
              <Card
                key={b.title}
                className="rounded-3xl border-black/10 bg-white shadow-sm"
              >
                <CardContent className="flex gap-3 p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0d3458]" />
                  <div>
                    <p className="font-semibold text-zinc-900">{b.title}</p>
                    <p className="mt-1 text-sm text-zinc-600">{b.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
