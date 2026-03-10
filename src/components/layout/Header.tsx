"use client";

import { Link } from "@/i18n/routing";
import { Diamond } from "lucide-react";
import LanguageSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  const navLinks = [
    { name: t("services"), href: "/services" },
    { name: t("pricing"), href: "/pricing" },
    { name: t("advisors"), href: "/mentors" },
    { name: t("insights"), href: "/insights" },
    { name: t("about"), href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Diamond className="w-6 h-6 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
          <span className="font-serif text-xl font-bold tracking-tighter uppercase">AI GOVERNANCE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href as any}
              className="text-xs font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-[var(--color-border)] mx-2" />
          
          <LanguageSelector />

          <Link
            href="/contact"
            className="bg-[var(--color-foreground)] text-[var(--color-primary)] px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors"
          >
            {t("contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
