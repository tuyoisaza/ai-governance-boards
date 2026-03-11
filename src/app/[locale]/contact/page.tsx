import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return { title: t("title") };
}

export default async function ContactPage({ 
  params,
  searchParams 
}: { 
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const t = await getTranslations("Contact");

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-12">
            <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">Confidential Synchrony</span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter">Initiate Dialogue</h1>
            <p className="text-[var(--color-muted)] text-2xl font-serif italic leading-relaxed">
              Board-level advisory requires high-trust, direct communication. Submit your details to request a preliminary alignment session.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-[var(--color-border)]">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Direct Channel</h4>
                <p className="text-sm font-bold tracking-widest text-[var(--color-muted)] uppercase">advisory@tuyoisaza.com</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-4">Institutional Location</h4>
                <p className="text-sm font-bold tracking-widest text-[var(--color-muted)] uppercase">Strategic HQ — Worldwide Readiness</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
             <div className="absolute inset-0 bg-[var(--color-accent)] opacity-5 blur-3xl -z-10"></div>
             <LeadCaptureForm variant="dark" defaultInterest={interest} />
          </div>
        </div>
      </div>
    </div>
  );
}
