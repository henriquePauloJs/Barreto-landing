import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { whatsappLink } from "@/lib/links";

import { SolarPanel, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

export function CoreServices() {
  return (
    <section id="carros-chefes" className="bg-[#f4f7fb] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-[#0d3458] md:text-4xl">
            Duas frentes estratégicas para reduzir custos e resolver pendências
            com eficiência.
          </h2>

          <p className="max-w-3xl text-base text-zinc-700 md:text-lg">
            Atendimento técnico completo, com foco em economia, regularização e
            estabilidade elétrica — com processos claros e acompanhamento do
            início ao fim.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1 */}
          <Card className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-400/25 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Shine */}
            <div className="pointer-events-none absolute -left-40 top-0 h-full w-40 rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

            <CardContent className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/25 ring-1 ring-inset ring-yellow-500/20">
                      <SolarPanel className="h-6 w-6 text-[#0d3458]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-zinc-500">
                        Serviço principal
                      </p>
                      <p className="text-lg font-bold text-[#0d3458]">
                        Energia Solar
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-zinc-900">
                    Homologação e Gestão de Usinas Fotovoltaicas
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    Para integradores e proprietários de usinas que precisam
                    acelerar homologações, evitar pendências e manter tudo
                    regularizado com segurança técnica.
                  </p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                {[
                  "Homologação de projetos nas concessionárias",
                  "Regularização de usinas e pendências",
                  "Troca de titularidade e rateio de créditos",
                  "Troca de titularidade (Usina grupo B)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0d3458]" />
                    <p className="text-sm text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-2xl bg-[#0d3458] px-6 text-white hover:bg-[#0d3458]/90"
                >
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Falar sobre usinas
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#0d3458]/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Shine */}
            <div className="pointer-events-none absolute -left-40 top-0 h-full w-40 rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

            <CardContent className="relative p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3458]/10 ring-1 ring-inset ring-[#0d3458]/15">
                      <Building2 className="h-6 w-6 text-[#0d3458]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-zinc-500">
                        Serviço principal
                      </p>
                      <p className="text-lg font-bold text-[#0d3458]">
                        Concessionárias
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-zinc-900">
                    Regularização com Concessionárias
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    Para empresas e empreendimentos que precisam resolver
                    pendências, adequar carga, evitar multas e finalizar
                    processos com COELBA, CEMIG, EDP e Santa Maria.
                  </p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                {[
                  "Alterações de carga e adequações",
                  "Adição/remoção de fases",
                  "Solicitação de ligação nova",
                  "Doação de transformador particular",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0d3458]" />
                    <p className="text-sm text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-2xl px-6"
                >
                  <a href="#contato">
                    Falar com especialista{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
