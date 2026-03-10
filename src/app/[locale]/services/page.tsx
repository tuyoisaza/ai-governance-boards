"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, Globe, Zap, ShieldCheck, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Services");

  const services = [
    { id: 'briefing', icon: <Globe className="w-6 h-6" />, href: '/services/ai-board-briefing' },
    { id: 'blueprint', icon: <Zap className="w-6 h-6" />, href: '/services/ai-governance-blueprint' },
    { id: 'advisor', icon: <ShieldCheck className="w-6 h-6" />, href: '/services/ai-board-advisor' }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mb-24 space-y-8">
          <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">Advisory Programs</span>
          <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter">Strategic Board Supervision</h1>
          <p className="text-[var(--color-muted)] text-2xl font-serif italic leading-relaxed">
            A progressive engagement model designed to institutionalize AI governance at the Board level through independent expertise.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service) => (
            <div key={service.id} className="group grid md:grid-cols-12 border border-[var(--color-border)] bg-[var(--color-secondary)]/5 hover:border-[var(--color-accent)] transition-all duration-700 overflow-hidden">
              <div className="md:col-span-1 flex items-center justify-center bg-[var(--color-secondary)]/10 p-8">
                <div className="text-[var(--color-accent)] transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              </div>
              <div className="md:col-span-8 p-12 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] opacity-60">
                   <span>{t(`${service.id}.duration`)}</span>
                </div>
                <h2 className="font-serif text-4xl font-bold group-hover:text-[var(--color-accent)] transition-colors">{t(`${service.id}.title`)}</h2>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed max-w-2xl">{t(`${service.id}.objective`)}</p>
              </div>
              <div className="md:col-span-3 p-12 flex items-center justify-center border-t md:border-t-0 md:border-l border-[var(--color-border)] bg-[var(--color-primary)]">
                <Link href={service.href as any} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-all group-hover:gap-5">
                  Program Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 border-2 border-[var(--color-border)] bg-[var(--color-primary)] text-center space-y-6">
           <MessageSquare className="w-10 h-10 text-[var(--color-accent)] mx-auto" />
           <h3 className="font-serif text-3xl font-bold">Need a custom synchronization?</h3>
           <p className="text-[var(--color-muted)] max-w-xl mx-auto">
             For boards with specific jurisdictional or industry complexities, Tuyo provides customized advisory frameworks tailored to institutional requirements.
           </p>
           <Link href="/contact" className="inline-block bg-[var(--color-accent)] text-[var(--color-primary)] px-10 py-4 font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
             Initiate Discussion
           </Link>
        </div>
      </div>
    </div>
  );
}
