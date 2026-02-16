import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { whatsappLink } from "@/lib/links";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#0d3458] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <Card className="rounded-[2rem] border-black/10 bg-white shadow-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mt-2 text-3xl font-bold text-[#0d3458] md:text-4xl">
                  Quer resolver sua demanda com agilidade?
                </h2>

                <p className="mt-3 text-zinc-700">
                  Clique no botão e fale diretamente com um especialista. Vamos
                  entender seu caso e orientar o melhor caminho.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button
                  asChild
                  className="h-12 rounded-2xl bg-yellow-400 px-7 text-base text-black hover:bg-yellow-400/90"
                >
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Solicitar atendimento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-2xl px-7 text-base"
                >
                  <a href="#contato">Ver contato</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
