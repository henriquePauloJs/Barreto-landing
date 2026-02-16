import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { whatsappLink } from "@/lib/links";
import { CheckCircle2, MapPin } from "lucide-react";
import { Briefcase, SolarPanel } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0d3458]/10 to-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* HERO TOP */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div>
            <Badge className="mb-4 rounded-xl bg-yellow-400 text-[#0d3458] text-md hover:bg-yellow-400">
              Especialista em energia e concessionárias
            </Badge>

            <h1 className="text-4xl font-bold leading-tight text-[#0d3458] md:text-5xl lg:text-6xl">
              Soluções inteligentes para reduzir custos e resolver pendências
              com concessionárias.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg">
              Atendimento técnico com foco em otimização de custos, estabilidade
              elétrica e regularização de processos com COELBA, CEMIG, EDP e
              Santa Maria.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-2xl bg-[#0d3458] px-7 text-base text-white hover:bg-[#0d3458]/90"
              >
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Fale conosco
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-2xl px-7 text-base"
              >
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <Card className="rounded-[2rem] border-black/10 bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#0d3458]">
                Atendimento com engenheiro responsável
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-zinc-700">
                <span className="font-semibold">Caio Barreto</span> — Engenheiro
                eletricista com ênfase em automação e controle (IFBA).
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0d3458]" />
                  <p className="text-sm text-zinc-700">
                    Gestão e homologação de usinas fotovoltaicas
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0d3458]" />
                  <p className="text-sm text-zinc-700">
                    Otimização de custos e regularização com concessionárias
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0d3458]" />
                  <p className="text-sm text-zinc-700">
                    Processos com COELBA, CEMIG, EDP e Santa Maria
                  </p>
                </div>
              </div>

              <Separator />

              <Button
                asChild
                className="h-12 w-full rounded-2xl bg-yellow-400 text-black hover:bg-yellow-400/90"
              >
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Solicitar atendimento
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* METRICS SECTION (fica abaixo no desktop) */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Experiência */}
          <Card className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#0d3458]/10 group-hover:ring-[#0d3458]/20" />

            <CardContent className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    Experiência
                  </p>

                  <p className="mt-2 text-4xl font-bold tracking-tight text-[#0d3458]">
                    6 anos
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    Atuação como engenheiro eletricista, homologações e gestão
                    técnica de usinas fotovoltaicas
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3458]/10 shadow-sm">
                  <Briefcase className="h-6 w-8 text-[#0d3458]" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usinas homologadas */}
          <Card className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-yellow-500/10 group-hover:ring-yellow-500/25" />

            <CardContent className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    Usinas homologadas
                  </p>

                  <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
                    +1800
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    Usinas fotovoltaicas com processos de homologação e
                    regularização
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/25 shadow-sm">
                  <SolarPanel className="h-6 w-6 text-[#0d3458]" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Atuação */}
          <Card className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#0d3458]/10 group-hover:ring-[#0d3458]/20" />

            <CardContent className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Atuação</p>

                  <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
                    BA • MG • ES
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    Processos com COELBA, CEMIG, EDP e Santa Maria
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3458]/10 shadow-sm">
                  <MapPin className="h-6 w-6 text-[#0d3458]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
