"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-12">{t("title")}</h1>
        
        <div className="space-y-12 text-lg text-[var(--color-muted)] leading-relaxed">
          <section className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)]">{t("philosophy.title")}</h2>
            <p>
              {t("philosophy.content")}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)]">{t("authority.title")}</h2>
            <p>
              {t("authority.content")}
            </p>
          </section>

          <div className="pt-12">
            <Link href="/contact" className="inline-block bg-[var(--color-accent)] text-[var(--color-primary)] px-10 py-4 font-bold text-xs uppercase tracking-widest">
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
