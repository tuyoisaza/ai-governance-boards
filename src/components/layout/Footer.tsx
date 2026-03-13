"use client";

import { Link } from "@/i18n/routing";
import { Diamond, Mail, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-border)] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Diamond className="w-5 h-5 text-[var(--color-accent)]" />
              <span className="font-serif text-lg font-bold tracking-tighter uppercase">TUYO ISAZA</span>
            </Link>
            <p className="text-[var(--color-muted)] text-sm max-w-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="mailto:contact@aigovernance.com" className="p-2 border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.2em] mb-6">{t("services_head")}</h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest text-[var(--color-muted)]">
              <li><Link href="/services/ai-board-briefing" className="hover:text-white transition-colors">AI BOARD BRIEFING</Link></li>
              <li><Link href="/services/ai-governance-blueprint" className="hover:text-white transition-colors">GOVERNANCE BLUEPRINT</Link></li>
              <li><Link href="/services/ai-board-advisor" className="hover:text-white transition-colors">BOARD ADVISOR</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.2em] mb-6">{t("firm_head")}</h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest text-[var(--color-muted)]">
              <li><Link href="/about" className="hover:text-white transition-colors">{t("philosophy")}</Link></li>
              <li><Link href="/advisors" className="hover:text-white transition-colors">{t("advisory_team")}</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">{t("resources")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--color-muted)] text-[10px] font-bold uppercase tracking-widest">
            © 2024 TUYO ISAZA. {t("copyright")}
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">
            <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
