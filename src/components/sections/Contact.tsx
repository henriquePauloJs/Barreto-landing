import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { email, instagramLink, phoneDisplay, whatsappLink } from "@/lib/links";
import { Instagram, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="bg-zinc-50 px-4 py-16">
      <div className="mx-auto max-w-7xl border-t border-black/10 pt-16">
        <div className="mb-10">
          <h2 className="mt-2 text-3xl font-bold text-[#0d3458] md:text-4xl">
            Fale com a gente
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700">
            Atendimento direto no WhatsApp. Se preferir, também respondemos por
            e-mail e Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="rounded-3xl border-black/10 bg-white shadow-sm">
            <CardContent className="p-7">
              <p className="text-lg font-semibold text-zinc-900">
                Atendimento rápido no WhatsApp
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Clique no botão e fale direto com um especialista.
              </p>

              <Button
                asChild
                className="mt-5 h-12 w-full rounded-2xl bg-[#0d3458] text-white hover:bg-[#0d3458]/90"
              >
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>

              <Separator className="my-6" />

              <div className="space-y-3 text-sm text-zinc-700">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#0d3458]" />
                  <span>{phoneDisplay}</span>
                </div>

                <div className="mr-4 flex items-center">
                  <Mail className="h-4 w-4 text-[#0d3458]" />
                  <span>{email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-[#0d3458]" />
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-[#0d3458]"
                  >
                    Instagram oficial
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-black/10 bg-white shadow-sm">
            <CardContent className="p-7">
              <p className="text-lg font-semibold text-zinc-900">
                Áreas de atuação
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Atendimento técnico para processos com concessionárias e energia
                solar.
              </p>

              <div className="mt-6 space-y-4 text-sm text-zinc-700">
                <div>
                  <p className="font-semibold text-zinc-900">Estados</p>
                  <p className="text-zinc-600">BA • MG • ES</p>
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">Concessionárias</p>
                  <p className="text-zinc-600">
                    COELBA, CEMIG, EDP e Santa Maria
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">
                    Principais demandas
                  </p>
                  <p className="text-zinc-600">
                    Homologação, regularização, otimização de custos, suporte
                    técnico e adequações.
                  </p>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-7 h-12 w-full rounded-2xl"
              >
                <a href="#servicos">Ver serviços</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
