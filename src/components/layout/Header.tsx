import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/lib/links";
import LogoPreta from "@/assets/preto.png";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header
      className="
        sticky top-0 z-50 border-b border-black/10
        bg-white/95
        md:bg-white/80 md:backdrop-blur-md
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={LogoPreta}
            alt="Logo Barreto Consultoria"
            className="h-16 w-auto md:h-20"
          />
        </div>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-md font-medium text-zinc-700 transition-colors hover:text-[#0d3458]"
            >
              {item.label}
            </a>
          ))}

          <Button
            asChild
            className="rounded-2xl bg-[#0d3458] px-6 text-white hover:bg-[#0d3458]/90"
          >
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Fale conosco
            </a>
          </Button>
        </nav>

        {/* Mobile */}
      </div>
    </header>
  );
}
