import { ArrowDown, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-950 md:bg-transparent"
    >
      {/* Imagem somente no tablet/desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/img/bg-hero.jpg"
          fill
          sizes="100vw"
          quality={100}
          priority
          alt="CAAF Barretos"
          className="object-cover"
        />

        {/* Overlays somente quando existe imagem */}
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Conteúdo */}
      <div
        className="
          relative mx-auto flex
          min-h-screen max-w-7xl
          items-center
          px-6 pb-8 pt-8

          md:items-end
          md:px-8 md:pb-24 md:pt-32
          bg-[#23372f] md:bg-transparent
        "
      >
        <div className="max-w-3xl text-white">
          <p
            className="
              mb-4
              text-xs font-semibold uppercase
              tracking-[0.22em]
              text-orange-300

              sm:text-sm
              md:mb-5 md:tracking-[0.28em]
              md:text-orange-200
            "
          >
            ADRA Brasil • Unidade Barretos
          </p>

          <h1
            className="
              max-w-3xl
              text-4xl font-semibold
              leading-[1.02]
              tracking-[-0.035em]

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              lg:leading-[0.98]
              lg:tracking-[-0.045em]
            "
          >
            Acolher também faz parte do tratamento.
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-white/75

              md:mt-7
              md:text-lg
              md:leading-8
              md:text-white/80
            "
          >
            O Centro Adventista de Apoio à Família recebe e acompanha pessoas
            que chegam a Barretos para o tratamento do câncer, oferecendo apoio
            também aos seus familiares.
          </p>

          <div
            className="
              mt-8
              flex flex-col
              gap-4

              sm:flex-row
              sm:items-center
              sm:gap-6

              md:mt-9
            "
          >
            <a
              href="/doacoes"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-orange-600
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition

                hover:bg-orange-500

                sm:w-auto
              "
            >
              Quero ajudar
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#caaf"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                py-2
                text-sm
                font-medium
                text-white/90

                sm:justify-start
              "
            >
              Conheça o CAAF
              <span
                className="
                  h-px
                  w-10
                  bg-white/60
                  transition-all

                  group-hover:w-16
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* Seta somente no desktop */}
      <a
        href="#atuacao"
        aria-label="Ir para a próxima seção"
        className="
          absolute
          bottom-8
          right-10
          hidden
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/40
          text-white
          transition

          hover:bg-white
          hover:text-slate-900

          lg:flex
        "
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
