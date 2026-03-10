"use client";

import { useTranslations } from "next-intl";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 items-start">
        <div className="space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            {t("title")}
          </h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed">
            {t("subtitle")}
          </p>
          
          <div className="pt-12 space-y-6">
            <div>
              <h4 className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-2">Global Headquarters</h4>
              <p className="text-sm font-medium">Strategic Advisory Hub<br />Executive District, Digital Era</p>
            </div>
            <div>
              <h4 className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-2">Direct Inquiry</h4>
              <p className="text-sm font-medium">briefings@aigovernance.com</p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-secondary)]/10 border border-[var(--color-border)] p-12 lg:p-16">
          <LeadCaptureForm />
        </div>
      </div>
    </div>
  );
}
