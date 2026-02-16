export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-[#0d3458]">
            Barreto Consultoria Energética
          </p>
          <p className="text-sm text-zinc-600">CNPJ: 55.540.069/0001-08</p>
        </div>

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
