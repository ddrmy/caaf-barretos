import { ArrowUpRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="caaf" className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-7">
            <img
              src="https://caaf.org.br/images/about.jpg"
              alt="Trabalho de acolhimento do CAAF"
              className="h-[520px] w-full object-cover sm:h-[620px]"
            />
            <div className="absolute -bottom-8 right-0 hidden w-56 bg-orange-700 p-7 text-white sm:block lg:-right-8">
              <p className="text-3xl font-semibold leading-tight">
                Cuidado que continua além do hospital.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
              Quem somos
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-5xl">
              Uma casa de apoio para quem precisa permanecer em Barretos.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              A ADRA Brasil mantém em Barretos uma unidade de apoio às famílias
              que vêm à cidade para o tratamento do câncer. O trabalho reúne
              acolhimento, convivência, orientação e suporte durante um período
              que costuma mudar toda a rotina familiar.
            </p>

            <a
              href="/caaf"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-orange-700"
            >
              Conheça nossa história
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-700/30 transition group-hover:bg-orange-700 group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
