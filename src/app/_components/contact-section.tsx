import { Mail, MapPin, Phone } from "lucide-react"
import { contact } from "@/data/site"

export function ContactSection() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700">
              Contato
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-5xl">
              Fale com a equipe do CAAF Barretos.
            </h2>
          </div>

          <div className="border-t border-slate-200">
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="group flex gap-5 border-b border-slate-200 py-7"
            >
              <Phone
                className="mt-1 h-5 w-5 shrink-0 text-orange-700"
                strokeWidth={1.8}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Telefone
                </p>
                <p className="mt-2 text-lg font-medium text-slate-900 group-hover:text-orange-700">
                  {contact.phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="group flex gap-5 border-b border-slate-200 py-7"
            >
              <Mail
                className="mt-1 h-5 w-5 shrink-0 text-orange-700"
                strokeWidth={1.8}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  E-mail
                </p>
                <p className="mt-2 text-lg font-medium text-slate-900 group-hover:text-orange-700">
                  {contact.email}
                </p>
              </div>
            </a>

            <div className="flex gap-5 py-7">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-orange-700"
                strokeWidth={1.8}
              />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Sede CAAF
                </p>
                <p className="mt-2 max-w-xl text-lg leading-7 text-slate-900">
                  {contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
