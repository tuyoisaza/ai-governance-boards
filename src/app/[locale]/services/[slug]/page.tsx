import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const t = useTranslations("Services");
  const id = slug.replace("ai-", "").replace("-", "") as any; // Simple mapping for the demo keys

  // Map slugs to translation keys
  const keyMap: Record<string, string> = {
    "ai-board-briefing": "briefing",
    "ai-governance-blueprint": "blueprint",
    "ai-board-advisor": "advisor"
  };

  const key = keyMap[slug];
  if (!key) {
    notFound();
  }

  // We'll use the translations from messages/[locale].json
  const title = t(`${key}.title`);
  const subtitle = t(`${key}.objective`); // Or use a separate subtitle if added
  const description = t(`${key}.description`);
  const deliverables = t.raw(`${key}.deliverables`) as string[];

  // Price fallback
  const prices: Record<string, string> = {
    "briefing": "$20,000",
    "blueprint": "$45,000",
    "advisor": "$8,000 / month"
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
        
        <div className="pb-12 border-b border-[var(--color-border)] mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-2xl font-serif text-[var(--color-accent)] italic mb-8">{subtitle}</p>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed">{description}</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6">Service Pillars</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-[var(--color-accent)] pl-6">
                  <h3 className="font-bold text-lg mb-2">Strategic Alignment</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Ensuring AI initiatives align with the long-term strategic vision of the Board.</p>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-6">
                  <h3 className="font-bold text-lg mb-2">Risk Oversight</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Defining and monitoring the boundaries of acceptable risk in ethical and operational AI usage.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="md:col-span-5 space-y-8">
            <div className="bg-[var(--color-secondary)]/10 border border-[var(--color-border)] p-8">
              <h3 className="font-serif text-xl font-bold mb-6 border-b border-[var(--color-border)] pb-4">Executive Deliverables</h3>
              <ul className="space-y-4">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-primary)] border border-[var(--color-border)] p-8 text-center">
              <span className="block text-xs uppercase tracking-widest text-[var(--color-muted)] font-bold mb-2">Base Investment</span>
              <div className="text-3xl font-bold text-[var(--color-foreground)] mb-6">{prices[key]}</div>
              <Link href="/contact" className="block w-full py-3 bg-[var(--color-foreground)] text-[var(--color-primary)] font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-accent)] transition-colors">
                Request Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
