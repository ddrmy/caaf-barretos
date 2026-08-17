import { ArrowUp } from "lucide-react"
import { navigation } from "@/data/site"

export function Footer() {
  return (
    <footer className="bg-[#17221e] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <p className="text-3xl font-semibold tracking-tight">
              CAAF Barretos
            </p>
            <p className="mt-3 max-w-md leading-7 text-white/55">
              Centro Adventista de Apoio à Família • ADRA Brasil
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navegação
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              {navigation.slice(1).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Institucional
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="/doacoes" className="hover:text-white">
                Doações
              </a>
              <a href="/politica-de-privacidade" className="hover:text-white">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>ADRA Brasil — Unidade Barretos | CAAF</p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white"
          >
            Voltar ao topo <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
