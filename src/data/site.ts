import { Gift, HeartHandshake, LibraryBig, type LucideIcon } from "lucide-react"

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "O CAAF", href: "#caaf" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Nosso espaço", href: "#espaco" },
  { label: "Contato", href: "#contato" },
]

export const services: Service[] = [
  {
    title: "Acompanhamento",
    description: "Acompanhamento social, psicológico e espiritual.",
    icon: HeartHandshake,
  },
  {
    title: "Doações",
    description:
      "Roupas, calçados, equipamentos e outros itens destinados às famílias atendidas.",
    icon: Gift,
  },
  {
    title: "Espaço Dia",
    description:
      "Espaço cultural, biblioteca, salas de TV e laboratório de informática.",
    icon: LibraryBig,
  },
]

export const gallery = [
  {
    src: "https://caaf.org.br/images/1b.jpg",
    alt: "Espaço natural",
    label: "Espaço natural",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://caaf.org.br/images/2b.jpg",
    alt: "Espaço Dia",
    label: "Espaço Dia",
    className: "",
  },
  {
    src: "https://caaf.org.br/images/3b.jpg",
    alt: "Cursos de culinária",
    label: "Cursos de culinária",
    className: "",
  },
  {
    src: "https://caaf.org.br/images/4b.jpg",
    alt: "Cursos de inclusão",
    label: "Cursos de inclusão",
    className: "",
  },
  {
    src: "https://caaf.org.br/images/5b.jpg",
    alt: "Aulas de música",
    label: "Aulas de música",
    className: "",
  },
  {
    src: "https://caaf.org.br/images/6b.jpg",
    alt: "Auxílio às famílias",
    label: "Auxílio às famílias",
    className: "md:col-span-2",
  },
]

export const links = {
  donate: "/doacoes",
  transparency:
    "https://www.lei13019.com.br/prestacao-de-contas.php?orgao_id=54&orgao_nome=Prefeitura+do+Munic%C3%ADpio+de+Barretos&orgao_estado=SP&orgao_logomarca=png&covid=",
  video: "https://www.youtube.com/embed/Db7DcmSnarw?rel=0&showinfo=0",
}

export const contact = {
  email: "contato@caaf.org.br",
  phone: "(17) 3324-5290",
  address:
    "R. Antenor Duarte Viléla, 2002 - Dr. Paulo Prata, Barretos - SP, 14784-400",
}
