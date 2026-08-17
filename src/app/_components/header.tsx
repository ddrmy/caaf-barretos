"use client"

import { Heart, Menu } from "lucide-react"
import { useEffect, useState } from "react"

import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { navigation } from "@/data/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    onScroll()

    window.addEventListener("scroll", onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              scrolled
                ? "border-orange-200 bg-orange-50 text-orange-700"
                : "border-white/50 bg-white/10 text-white"
            }`}
          >
            <Heart className="h-5 w-5" strokeWidth={1.8} />
          </div>

          <div className={scrolled ? "text-slate-900" : "text-white"}>
            <p className="text-lg font-bold leading-none tracking-tight">
              CAAF
            </p>

            <p
              className={`mt-1 text-[10px] uppercase tracking-[0.22em] ${
                scrolled ? "text-slate-500" : "text-white/70"
              }`}
            >
              Barretos
            </p>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                scrolled
                  ? "text-slate-700 hover:text-orange-700"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/doacoes"
            className={cn(
              buttonVariants(),
              "rounded-full px-5",
              scrolled
                ? "bg-orange-700 text-white hover:bg-orange-800"
                : "border border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-slate-900",
            )}
          >
            Doe agora
          </a>
        </nav>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger
            aria-label="Abrir menu"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden ${
              scrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="right" className="w-[86%] max-w-sm px-7">
            <div className="mt-14 flex flex-col gap-7">
              <div>
                <p className="text-2xl font-bold">CAAF Barretos</p>

                <p className="mt-1 text-sm text-slate-500">
                  ADRA Brasil • Unidade Barretos
                </p>
              </div>

              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="border-b py-4 text-lg font-medium transition-colors hover:text-orange-700"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="/doacoes"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-orange-700 text-white hover:bg-orange-800",
                )}
              >
                Quero ajudar
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
