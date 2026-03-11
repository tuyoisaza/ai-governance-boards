import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2, ShieldAlert, Target, FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params;
  const t = await getTranslations("Services");
  
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

  const title = t(`${key}.title`);
  const objective = t(`${key}.objective`);
  const description = t(`${key}.description`);
  const deliverables = t.raw(`${key}.deliverables`) as string[];

  const prices: Record<string, string> = {
    "briefing": "$20,000",
    "blueprint": "$45,000",
    "advisor": "$8,000 / mo"
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link href="/services" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-20 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" /> Back to Advisory Programs
        </Link>
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-end border-b border-[var(--color-border)] pb-12 mb-20">
          <div className="lg:col-span-9 space-y-8">
            <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.3em] uppercase">Executive Engagement</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter">{title}</h1>
            <p className="text-2xl font-serif text-[var(--color-accent)] italic max-w-3xl">{objective}</p>
          </div>
          <div className="lg:col-span-3 text-right">
             <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-2">Investment</span>
             <div className="font-serif text-4xl font-bold">{prices[key]}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            <section className="space-y-10">
              <h2 className="font-serif text-4xl font-bold">Engagement Scope</h2>
              <p className="text-xl text-[var(--color-muted)] leading-[1.8] font-medium">
                {description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-[var(--color-accent)]">
                      <Target className="w-5 h-5" />
                      <h4 className="font-serif text-xl font-bold">Strategic Alignment</h4>
                   </div>
                   <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                     Aligning machine intelligence initiatives with long-term fiduciary responsibilities.
                   </p>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-[var(--color-accent)]">
                      <ShieldAlert className="w-5 h-5" />
                      <h4 className="font-serif text-xl font-bold">Risk Boundaries</h4>
                   </div>
                   <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                     Defining the limits of ethical and operational exposure in AI deployment.
                   </p>
                </div>
              </div>
            </section>

            <section className="bg-[var(--color-secondary)]/5 p-12 border border-[var(--color-border)] space-y-12">
               <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-6">
                 <h3 className="font-serif text-2xl font-bold">Executive Deliverables</h3>
                 <FileText className="w-6 h-6 text-[var(--color-accent)] opacity-30" />
               </div>
               <div className="grid sm:grid-cols-1 gap-6">
                 {deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 border border-[var(--color-border)] bg-[var(--color-primary)]">
                       <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-1" />
                       <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted)]">{item}</span>
                    </div>
                 ))}
               </div>
            </section>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-4 sticky top-32">
             <div className="border border-[var(--color-border)] p-10 space-y-10 bg-[var(--color-primary)] shadow-2xl">
                <div>
                   <h4 className="text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Advisor</h4>
                   <h3 className="font-serif text-2xl font-bold mb-2">Tuyo Isaza</h3>
                   <p className="text-sm text-[var(--color-muted)] italic leading-relaxed">
                     Independent Strategic Advisory
                   </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--color-border)]">
                   <p className="text-xs text-[var(--color-muted)] leading-relaxed font-medium capitalize">
                     All engagements are governed by strict NDAs to ensure board-level confidentiality and open strategic dialogue.
                   </p>
                </div>

                <Link 
                  href={{
                    pathname: "/contact",
                    query: { interest: `Case Study: ${title}` }
                  }} 
                  className="block w-full text-center bg-[var(--color-foreground)] text-[var(--color-primary)] py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[var(--color-accent)] transition-all"
                >
                  Request Case Study
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
