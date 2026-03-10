"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "@/routing";

export default function PricingPage() {
  const t = useTranslations("Pricing");

  const plans = [
    { id: 'briefing', price: "$20,000", features: ["Executive Summary Memo", "Risk Architecture", "Board Q&A Framework", "3-hour Live Session"], icon: <Shield className="w-6 h-6" /> },
    { id: 'blueprint', price: "$45,000", features: ["Custom Governance Framework", "Maturity Audit", "Policy Design Documents", "12-month Roadmap"], icon: <Zap className="w-6 h-6" />, highlight: true },
    { id: 'advisor', price: "$8,000 / mo", features: ["Periodic Oversight Sessions", "Risk Pulse Reports", "Investment Evaluation", "Regulatory Watch"], icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
           <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">{t("title")}</span>
           <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter">Advisory Investment</h1>
           <p className="text-[var(--color-muted)] text-2xl font-serif italic max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div key={plan.id} className={`p-12 flex flex-col transition-all duration-700 hover:z-10 relative bg-[var(--color-primary)] border border-[var(--color-border)] ${plan.highlight ? 'lg:scale-105 shadow-2xl z-10 border-[var(--color-accent)]' : 'lg:opacity-70 hover:opacity-100'}`}>
              
              <div className="text-[var(--color-accent)] mb-8">{plan.icon}</div>
              <h3 className="font-serif text-3xl font-bold mb-4">{t(`plans.${plan.id}`)}</h3>
              <div className="font-serif text-4xl font-bold text-[var(--color-foreground)] mb-12">{plan.price}</div>
              
              <ul className="space-y-6 mb-16 flex-grow border-t border-[var(--color-border)] pt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" /> {feature}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`w-full py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all text-center ${plan.highlight ? 'bg-[var(--color-accent)] text-[var(--color-primary)]' : 'bg-[var(--color-foreground)] text-[var(--color-primary)]'}`}>
                Schedule Synchrony
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-2xl mx-auto">
           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-muted)] leading-relaxed">
             * All investment amounts are in USD. Custom jurisdictional adjustments and travel expenses for on-site board sessions are calculated independently.
           </p>
        </div>
      </div>
    </div>
  );
}
