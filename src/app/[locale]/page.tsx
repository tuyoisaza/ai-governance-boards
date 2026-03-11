import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare, Quote } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col w-full bg-[var(--color-primary)]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brain/8f4f5e1f-6772-45c2-becb-05dcb3af0f54/premium_boardroom_strategy_1773203779433.png"
            alt="Strategic Boardroom"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter max-w-4xl">
              {t("hero.headline")}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-muted)] font-medium max-w-2xl border-l-2 border-[var(--color-accent)] pl-6">
              {t("hero.subheadline")}
            </p>
            
            <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4">
              {t.raw("hero.outcomes").map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href="/contact" className="inline-flex items-center gap-4 bg-[var(--color-foreground)] text-[var(--color-primary)] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-all group">
                {t("hero.cta")} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-32 border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t("problem.headline")}</h2>
               <p className="text-[var(--color-muted)] font-medium text-lg max-w-2xl">{t("problem.supporting")}</p>
            </div>
            {t.raw("problem.points").map((point: string, i: number) => (
              <div key={i} className="lg:col-span-3 space-y-4 group">
                <div className="w-12 h-px bg-[var(--color-accent)] transform transition-all group-hover:w-24"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-foreground)] leading-relaxed">
                  {point}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-32 bg-[var(--color-secondary)]/5 border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tighter">{t("solution.headline")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {t.raw("solution.steps").map((step: any, i: number) => (
              <div key={i} className="p-10 border border-[var(--color-border)] bg-[var(--color-primary)] space-y-6 flex flex-col justify-between group hover:border-[var(--color-accent)] transition-colors">
                <span className="font-serif text-4xl font-bold text-[var(--color-accent)] opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                <div>
                  <h4 className="font-serif text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESULTS SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
               <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tighter mb-12">{t("results.headline")}</h2>
               <div className="grid gap-6">
                 {t.raw("results.points").map((point: string, i: number) => (
                   <div key={i} className="flex items-center gap-4 p-6 border border-[var(--color-border)] group hover:bg-[var(--color-secondary)]/5 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors">{point}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:col-span-6 lg:pl-16">
               <div className="p-12 border-2 border-[var(--color-accent)] bg-[var(--color-primary)] relative">
                  <Quote className="absolute -top-6 -left-6 w-12 h-12 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                  <p className="text-2xl font-serif text-[var(--color-muted)] italic leading-relaxed mb-8">
                    "{t("trust.testimonial.text")}"
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-px bg-[var(--color-accent)]"></div>
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest">{t("trust.testimonial.author")}</div>
                        <div className="text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">{t("trust.testimonial.role")}</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST SIGNALS (Logos) */}
      <section className="py-24 border-y border-[var(--color-border)] bg-[var(--color-secondary)]/5">
        <div className="container mx-auto px-6 text-center">
           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-muted)] mb-12 block">{t("trust.results_title")}</span>
           <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale">
              {["Microsoft", "McDonald's", "Nokia", "Citibank", "Kellogg's"].map(logo => (
                <span key={logo} className="font-serif text-2xl font-bold tracking-tighter">{logo}</span>
              ))}
           </div>
        </div>
      </section>

      {/* 6. METHOD / FRAMEWORK */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold mb-20">{t("method.headline")}</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative">
            <div className="hidden md:block absolute top-[40%] left-0 right-0 h-px bg-[var(--color-border)] z-0"></div>
            {t.raw("method.steps").map((step: string, i: number) => (
              <div key={i} className="relative z-10 bg-[var(--color-primary)] px-8 py-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-accent)] flex items-center justify-center text-xs font-bold group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all">
                    {i + 1}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]">
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-40 bg-[var(--color-foreground)] text-[var(--color-primary)]">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto">
            {t("cta_final.headline")}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8">
            <Link href="/contact" className="bg-[var(--color-accent)] text-[var(--color-primary)] px-16 py-5 font-bold text-xs uppercase tracking-[0.3em] hover:scale-105 transition-transform">
              {t("cta_final.primary")}
            </Link>
            <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
              {t("cta_final.secondary")} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
