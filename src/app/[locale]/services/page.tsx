"use client";

import { Link } from "@/routing";
import { ArrowRight, Shield, Zap, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Services");

  const services = [
    { id: 'briefing', icon: <Shield className="w-6 h-6" />, href: '/services/ai-board-briefing' },
    { id: 'blueprint', icon: <Zap className="w-6 h-6" />, href: '/services/ai-governance-blueprint' },
    { id: 'advisor', icon: <ShieldCheck className="w-6 h-6" />, href: '/services/ai-board-advisor' }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8">Our Strategic Services</h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed">
            A progressive model designed to institutionalize AI governance at the Board level.
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((service) => (
            <div key={service.id} className="group grid md:grid-cols-12 border border-[var(--color-border)] bg-[var(--color-secondary)]/10 hover:border-[var(--color-accent)] transition-colors overflow-hidden">
              <div className="md:col-span-1 flex items-center justify-center bg-[var(--color-secondary)]/20 p-8">
                <div className="text-[var(--color-accent)]">{service.icon}</div>
              </div>
              <div className="md:col-span-8 p-10 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold mb-4">{t(`${service.id}.title`)}</h2>
                <p className="text-[var(--color-muted)] mb-6 text-lg">{t(`${service.id}.objective`)}</p>
                <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  <span>{t(`${service.id}.duration`)}</span>
                </div>
              </div>
              <div className="md:col-span-3 p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-[var(--color-border)] bg-[var(--color-primary)]">
                <Link href={service.href as any} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors group-hover:gap-3">
                  Detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
