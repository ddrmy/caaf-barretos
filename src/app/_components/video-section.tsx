import { links } from "@/data/site"

export function VideoSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
              Compartilhe esperança
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-5xl">
              Um pouco do que acontece por aqui.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Histórias, campanhas e ações que aproximam pessoas do trabalho
            realizado em Barretos.
          </p>
        </div>

        <div className="aspect-video overflow-hidden bg-slate-900">
          <iframe
            className="h-full w-full"
            src={links.video}
            title="Vídeo do CAAF Barretos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
