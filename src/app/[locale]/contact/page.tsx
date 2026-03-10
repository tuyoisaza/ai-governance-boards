"use client";

import { useTranslations } from "next-intl";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Mail, Globe, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">Private Communication</span>
              <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight tracking-tighter">
                {t("title")}
              </h1>
              <p className="text-[var(--color-muted)] text-2xl font-serif italic leading-relaxed max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
            
            <div className="pt-12 grid sm:grid-cols-2 gap-12 border-t border-[var(--color-border)]">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--color-accent)]">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Confidentiality</h4>
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed font-medium">
                  Preliminary briefings are treated with institutional privacy. 
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--color-accent)]">
                  <Globe className="w-5 h-5" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Global Availability</h4>
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed font-medium">
                  Advisory sessions conducted globally in English, Spanish, or Portuguese.
                </p>
              </div>
            </div>

            <div className="p-8 border border-[var(--color-border)] bg-[var(--color-secondary)]/5 space-y-4">
               <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Inquiry Channel</div>
               <div className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                 <span className="font-serif text-xl font-bold">advisory@tuyoisaza.com</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[var(--color-accent)] opacity-[0.02] -m-10 pointer-events-none"></div>
            <LeadCaptureForm variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
