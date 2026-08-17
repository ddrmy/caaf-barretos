import { services } from "@/data/site"

export function ImpactSection() {
  return (
    <section id="atuacao" className="bg-[#f4f0e8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
              CAAF Barretos
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-7xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-8xl">
                200
              </span>
              <span className="pb-3 text-3xl font-light text-orange-700">
                +
              </span>
            </div>
            <p className="mt-3 max-w-xs text-lg leading-7 text-slate-700">
              famílias beneficiadas por mês.
            </p>
          </div>

          <div className="border-t border-slate-900/15">
            {services.map(({ title, description, icon: Icon }, index) => (
              <div
                key={title}
                className="grid gap-5 border-b border-slate-900/15 py-7 sm:grid-cols-[48px_180px_1fr] sm:items-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-700/30 text-orange-700">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-slate-400">0{index + 1}</span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
                <p className="leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
