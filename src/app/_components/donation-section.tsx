import { ArrowRight } from "lucide-react"

export function DonationSection() {
  return (
    <section className="relative overflow-hidden bg-[#23372f] text-white">
      <div className="grid lg:min-h-[620px] lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-full">
          <img
            src="https://caaf.org.br/images/6b.jpg"
            alt="Apoio às famílias no CAAF Barretos"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Como eu posso ajudar?
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Sua contribuição vira acolhimento no dia a dia.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72">
              Ao se tornar parceiro do CAAF, você ajuda a manter ações de
              cuidado, bem-estar e apoio às pessoas com câncer e aos familiares
              que as acompanham em Barretos.
            </p>

            <a
              href="/doacoes"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-orange-100"
            >
              Veja como doar
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
