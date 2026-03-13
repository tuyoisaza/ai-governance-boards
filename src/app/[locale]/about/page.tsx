import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Award, BookOpen, Globe, Mic2, Shield } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("About");

  const highlightIcons = [<Award className="w-5 h-5" />, <Globe className="w-5 h-5" />, <BookOpen className="w-5 h-5" />];
  const highlights = (t.raw("highlights") as { title: string, desc: string }[]).map((h, i) => ({
    ...h,
    icon: highlightIcons[i]
  }));

  const partners = t.raw("experience.partners") as string[];
  const focusAreas = t.raw("experience.focus") as string[];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-start border-b border-[var(--color-border)] pb-20 mb-20">
          <div className="lg:col-span-8 space-y-8">
            <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">{t("subtitle")}</span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter">{t("title")}</h1>
            <p className="text-2xl font-serif text-[var(--color-muted)] leading-relaxed italic max-w-2xl">
              {t("philosophy.content")}
            </p>
          </div>
          <div className="lg:col-span-4">
             <div className="aspect-[3/4] bg-[var(--color-secondary)]/20 border border-[var(--color-border)] flex items-center justify-center">
                <span className="font-serif text-8xl font-bold text-[var(--color-accent)] opacity-20">TI</span>
             </div>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            <section className="space-y-8">
              <h2 className="font-serif text-4xl font-bold border-l-4 border-[var(--color-accent)] pl-8">{t("bio.title")}</h2>
              <p className="text-xl text-[var(--color-muted)] leading-[1.8]">
                {t("bio.content")}
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="font-serif text-4xl font-bold border-l-4 border-[var(--color-accent)] pl-8">{t("experience.title")}</h2>
              <p className="text-xl text-[var(--color-muted)] leading-[1.8]">
                {t("experience.content")}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                <div className="p-6 border border-[var(--color-border)] bg-[var(--color-secondary)]/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">{t("experience.partners_head")}</h4>
                  <ul className="text-sm font-bold tracking-widest text-[var(--color-muted)] space-y-2 uppercase">
                    {partners.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div className="p-6 border border-[var(--color-border)] bg-[var(--color-secondary)]/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">{t("experience.focus_head")}</h4>
                  <ul className="text-sm font-bold tracking-widest text-[var(--color-muted)] space-y-2 uppercase">
                    {focusAreas.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[var(--color-secondary)]/10 p-12 space-y-8 border border-[var(--color-border)]">
              <h2 className="font-serif text-3xl font-bold">{t("philosophy.title")}</h2>
              <p className="text-[var(--color-muted)] leading-relaxed font-medium">
                {t("philosophy.long")}
              </p>
              <Link href="/contact" className="inline-block bg-[var(--color-foreground)] text-[var(--color-primary)] px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors">
                {t("cta")}
              </Link>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">{t("highlights_head")}</h3>
                <div className="space-y-10">
                  {highlights.map((item, id) => (
                    <div key={id} className="flex gap-6">
                      <div className="text-[var(--color-accent)] shrink-0">{item.icon}</div>
                      <div className="space-y-2">
                        <h4 className="font-serif text-xl font-bold">{item.title}</h4>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border-2 border-[var(--color-accent)] space-y-6">
                 <Mic2 className="w-8 h-8 text-[var(--color-accent)]" />
                 <h3 className="font-serif text-2xl font-bold">{t("speaker.title")}</h3>
                 <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                   {t("speaker.content")}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
