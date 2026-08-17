import { links } from "@/data/site"

export function VideoSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Conheça nosso trabalho
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Compartilhe esperança
          </h2>
        </div>

        <div className="aspect-video overflow-hidden rounded-3xl bg-slate-200">
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
