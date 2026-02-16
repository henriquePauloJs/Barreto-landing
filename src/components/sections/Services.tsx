import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck2,
  Zap,
  Sun,
  Wrench,
  Building2,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Homologação de usinas solares",
    desc: "Acompanhamento completo do processo de homologação junto à concessionária.",
    icon: Sun,
  },
  {
    title: "Regularização com concessionárias",
    desc: "Resolução de pendências e correções técnicas com COELBA, CEMIG, EDP e Santa Maria.",
    icon: FileCheck2,
  },
  {
    title: "Otimização de custos",
    desc: "Análise técnica para redução de custos na fatura e adequação de demanda.",
    icon: Zap,
  },

  {
    title: "Adequações elétricas",
    desc: "Recomendações e projetos para adequação e melhoria do padrão elétrico.",
    icon: Wrench,
  },
  {
    title: "Atendimento a integradores",
    desc: "Suporte especializado para empresas integradoras e projetos de grande porte.",
    icon: Building2,
  },
  {
    title: "Acompanhamento técnico",
    desc: "Suporte em campo e remoto para garantir segurança, eficiência e conformidade.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="mt-2 text-3xl font-bold text-[#0d3458] md:text-4xl">
            O que fazemos na prática
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700">
            Serviços técnicos voltados para regularização, homologação e redução
            de custos. Tudo com acompanhamento profissional e foco em resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
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
