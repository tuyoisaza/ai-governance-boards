"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  const t = useTranslations("Pricing");

  const plans = [
    { id: 'briefing', price: "$20,000", features: ["3-hour Session", "Board AI Handbook", "Risk & Opportunity Map"] },
    { id: 'blueprint', price: "$45,000", features: ["8-week Consulting", "Policy Design", "Audit Framework", "Strategic Roadmap"] },
    { id: 'advisor', price: "$8,000 / mo", features: ["Quarterly Board Support", "Investment Review", "Regulatory Watch"] }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8">{t("title")}</h1>
          <p className="text-[var(--color-muted)] text-xl italic">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="p-10 border border-[var(--color-border)] bg-[var(--color-secondary)]/10 hover:border-[var(--color-accent)] transition-all flex flex-col">
              <h3 className="font-serif text-2xl font-bold mb-2">{t(`plans.${plan.id}`)}</h3>
              <div className="text-3xl font-bold text-[var(--color-accent)] mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-12 flex-grow border-t border-[var(--color-border)] pt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-muted)] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" /> {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[var(--color-foreground)] text-[var(--color-primary)] py-4 text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors">
                Select Program
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
