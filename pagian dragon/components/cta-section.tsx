import { FadeIn } from "@/components/fade-in"

export function CtaSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#e6edf3]/[0.06] bg-[#0d1117]/60 px-8 py-8 backdrop-blur-xl sm:flex-row sm:px-12">
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-black text-foreground sm:text-xl">
                {"Ainda tem d\u00favidas?"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {"Fale com nosso time e tire suas d\u00favidas."}
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 rounded-full bg-primary px-7 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
            >
              {"Entrar em contato"}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
