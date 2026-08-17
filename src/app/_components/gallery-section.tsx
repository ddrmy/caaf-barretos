import { gallery } from "@/data/site"

export function GallerySection() {
  return (
    <section id="espaco" className="bg-[#efede7] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
              Nosso espaço hoje
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-5xl">
              Estrutura pensada para conforto e dignidade.
            </h2>
          </div>
          <p className="max-w-2xl leading-8 text-slate-600 lg:justify-self-end">
            O projeto da Casa de Apoio reúne ambientes de acolhimento e
            convivência, como cozinha, refeitório, lavanderia, biblioteca,
            brinquedoteca, sala de informática e auditório.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[230px] gap-3 sm:grid-cols-2 md:grid-cols-4">
          {gallery.map((image) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden bg-slate-300 ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />
              <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-medium text-white">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
