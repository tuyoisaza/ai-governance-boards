"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function MentorsPage() {
  const t = useTranslations("About");

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mb-24 space-y-8">
          <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">Executive Record</span>
          <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter">Track Record</h1>
          <p className="text-[var(--color-muted)] text-2xl font-serif italic leading-relaxed">
            Independent advisory built on two decades of multinational strategic transformation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="p-12 border border-[var(--color-border)] bg-[var(--color-secondary)]/5 space-y-10">
             <div className="space-y-4">
                <h3 className="font-serif text-4xl font-bold text-[var(--color-accent)]">20+</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted)]">Years in Strategic Transformation</p>
             </div>
             <p className="text-[var(--color-muted)] leading-relaxed text-lg">
               Working across multiple economic cycles and technological shifts, Tuyo has consistently helped organizations navigate complexity through strategic clarity.
             </p>
          </div>

          <div className="p-12 border border-[var(--color-border)] space-y-10">
             <div className="space-y-4">
                <h3 className="font-serif text-4xl font-bold text-[var(--color-accent)]">Global</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted)]">Operations Experience</p>
             </div>
             <p className="text-[var(--color-muted)] leading-relaxed text-lg">
               Experience managing and advising digital strategies for brands in more than 15 countries across Latin America and North America.
             </p>
          </div>
        </div>

        <div className="mt-24 space-y-12">
           <h2 className="font-serif text-4xl font-bold text-center">Selected Organizations & Partnerships</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-[var(--color-border)]">
              {["Microsoft", "McDonald's", "Nokia", "Citibank", "Kellogg's", "Innovation Hubs", "Board Federations", "Private Equity", "Government", "Advisory Councils"].map((name) => (
                <div key={name} className="p-10 border border-[var(--color-border)] flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  {name}
                </div>
              ))}
           </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[var(--color-border)] flex flex-col items-center gap-8">
           <Link href="/contact" className="bg-[var(--color-foreground)] text-[var(--color-primary)] px-12 py-5 text-center font-bold uppercase tracking-[0.2em] text-xs hover:bg-[var(--color-accent)] transition-all">
             Request Formal Credentials
           </Link>
        </div>
      </div>
    </div>
  );
}
