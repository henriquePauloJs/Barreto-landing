import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { whatsappLink } from "@/lib/links";
import {
  CheckCircle2,
  Zap,
  Shield,
  BadgeCheck,
  LineChart,
  Gauge,
  ArrowRight,
} from "lucide-react";

const bullets = [
  "Identificação de energia reativa excedente e fator de potência fora do padrão",
  "Medições técnicas com analisador de qualidade de energia",
  "Diagnóstico completo com relatório e recomendações práticas",
  "Dimensionamento e projeto do banco de capacitores ideal para sua demanda",
  "Redução de multas e economia direta na fatura de energia",
];

const highlights = [
  {
    icon: Gauge,
    title: "Fator de potência",
    desc: "Diagnóstico preciso do FP e da energia reativa excedente.",
  },
  {
    icon: LineChart,
    title: "Economia real",
    desc: "Redução de custos com eliminação de penalidades na conta.",
  },
  {
    icon: Shield,
    title: "Mais segurança",
    desc: "Menos sobrecarga, mais estabilidade e proteção do sistema.",
  },
];

export function QualityEnergy() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 px-4 py-16 md:py-24">
      {/* detalhe premium no fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0d3458]/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* topo */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight text-[#0d3458] md:text-5xl">
            Análise de Qualidade de Energia
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-700 md:text-lg">
            Diagnóstico técnico completo para identificar{" "}
            <span className="font-semibold text-zinc-900">
              energia reativa excedente
            </span>{" "}
            e dimensionar a correção ideal com{" "}
            <span className="font-semibold text-zinc-900">
              banco de capacitores
            </span>
            , eliminando multas e reduzindo custos na fatura.
          </p>
        </div>

        {/* GRID PRINCIPAL (4 blocos) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* 1) CARD GRANDE ESQUERDA */}
          <Card className="h-full rounded-[2rem] border border-black/10 bg-white shadow-sm">
            <CardContent className="flex h-full flex-col p-6 md:p-7">
              <p className="text-2xl font-semibold text-zinc-900">
                O que está incluso no serviço
              </p>

              <div className="mt-5 space-y-3">
                {bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0d3458]" />
                    <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* empurra o botão pro final e iguala a altura */}
              <div className="mt-auto pt-7">
                <Button
                  asChild
                  className="h-12 w-full rounded-2xl bg-[#0d3458] text-base text-white hover:bg-[#0d3458]/90"
                >
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Solicitar diagnóstico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 2) CARD GRANDE DIREITA */}
          <Card className="group relative h-full overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* ring */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#0d3458]/10 group-hover:ring-[#0d3458]/20" />

            {/* glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#0d3458]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#0d3458] md:text-2xl">
                O que é energia reativa?
              </CardTitle>
            </CardHeader>

            <CardContent className="flex h-full flex-col space-y-4">
              <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                Grandes consumidores podem ser cobrados por{" "}
                <span className="font-semibold text-zinc-900">
                  energia reativa excedente
                </span>
                , que é a energia “puxada” da rede e não convertida em trabalho
                útil — causando sobrecarga e penalidades na fatura.
              </p>

              <Separator />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-zinc-50 p-4 ring-1 ring-black/5">
                  <p className="text-sm font-semibold text-zinc-900">
                    Problema comum
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Multas por baixo fator de potência e reativa excedente.
                  </p>
                </div>

                <div className="rounded-3xl bg-zinc-50 p-4 ring-1 ring-black/5">
                  <p className="text-sm font-semibold text-zinc-900">Solução</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Correção com banco de capacitores dimensionado.
                  </p>
                </div>
              </div>

              {/* empurra esse bloco pro final */}
              <div className="mt-auto rounded-3xl bg-[#0d3458] p-5 text-white">
                <p className="text-sm font-semibold text-yellow-300">
                  Resultado direto
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/90">
                  Você para de pagar penalidades por energia reativa e ganha
                  estabilidade no sistema elétrico.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 3) CARDS PEQUENOS ESQUERDA */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:items-stretch">
            <Card className="h-full rounded-3xl border border-black/10 bg-white shadow-sm">
              <CardContent className="flex h-full items-center gap-3 p-6">
                <BadgeCheck className="h-10 w-10 text-[#0d3458]" />
                <p className="text-lg font-medium text-zinc-700">
                  Elimina penalidades
                </p>
              </CardContent>
            </Card>

            <Card className="h-full rounded-3xl border border-black/10 bg-white shadow-sm">
              <CardContent className="flex h-full items-center gap-3 p-6">
                <Zap className="h-10 w-10 text-[#0d3458]" />
                <p className="text-lg font-medium text-zinc-700">
                  Estabilidade elétrica
                </p>
              </CardContent>
            </Card>

            <Card className="h-full rounded-3xl border border-black/10 bg-white shadow-sm">
              <CardContent className="flex h-full items-center gap-3 p-6">
                <Shield className="h-10 w-10 text-[#0d3458]" />
                <p className="text-lg font-medium text-zinc-700">
                  Protege equipamentos
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 4) CARDS PEQUENOS DIREITA */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:items-stretch">
            {highlights.map((h) => (
              <Card
                key={h.title}
                className="h-full rounded-3xl border border-black/10 bg-white shadow-sm"
              >
                <CardContent className="flex h-full items-center gap-3 p-6">
                  <div className="flex h-11 w-11 items-center justify-center">
                    <h.icon className="h-5 w-5 text-[#0d3458]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {h.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      {h.desc}
                    </p>
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
