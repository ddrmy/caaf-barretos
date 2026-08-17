import { ArrowUpRight } from "lucide-react"
import { links } from "@/data/site"

export function TransparencySection() {
  return (
    <section className="bg-orange-700 py-8 text-white">
      <a
        href={links.transparency}
        target="_blank"
        rel="noreferrer"
        className="group mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8"
      >
        <div className="flex items-center gap-5">
          <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-white/60 sm:block">
            Transparência
          </span>
          <span className="text-lg font-medium sm:text-xl">
            Prestação de contas do CAAF Barretos
          </span>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-orange-700">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </a>
    </section>
  )
}
