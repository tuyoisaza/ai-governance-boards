import { Link } from "@/i18n/routing";
import { ArrowRight, ShieldCheck, BarChart3, Shield, Zap, Globe, MessageSquare } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const ts = useTranslations("Services");

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION - Editorial Style */}
      <section className="relative w-full border-b border-[var(--color-border)] overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-secondary)] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container relative mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 space-y-10 group">
            <div className="inline-flex items-center gap-3 px-0 text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">
              <span className="w-8 h-px bg-[var(--color-accent)]"></span>
              <span>Independent Board Advisory</span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tighter">
              {t("hero.title")}
            </h1>
            
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed font-medium">
                {t("hero.subtitle")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link href="/services" className="px-12 py-5 bg-[var(--color-foreground)] text-[var(--color-primary)] font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-3 hover:bg-[var(--color-accent)] transition-all duration-500 scale-100 hover:scale-105">
                <span>{t("hero.cta")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block">
            <div className="border border-[var(--color-border)] p-10 space-y-8 bg-[var(--color-secondary)]/5 backdrop-blur-sm">
               <div className="space-y-4">
                 <span className="text-[var(--color-accent)] text-[10px] font-bold tracking-widest uppercase">The Shift</span>
                 <p className="text-sm text-[var(--color-muted)] leading-relaxed italic">
                   "AI is no longer a technical choice; it is a governance imperative. Boards must bridge the gap between technical dependency and strategic oversight."
                 </p>
               </div>
               <div className="h-px bg-[var(--color-border)]"></div>
               <div className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-muted)]">
                 20+ Years Strategic Experience
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE SECTION */}
      <section className="py-32 border-b border-[var(--color-border)] bg-[var(--color-primary)]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                {t("challenge.title")}
              </h2>
              <p className="text-2xl font-serif text-[var(--color-accent)] italic">
                {t("challenge.subtitle")}
              </p>
              <div className="h-1 w-20 bg-[var(--color-accent)]"></div>
            </div>
            <div>
              <p className="text-xl text-[var(--color-muted)] leading-relaxed">
                {t("challenge.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY MODEL SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[var(--color-border)] pb-12">
            <div className="max-w-2xl">
              <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Model</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">Progressive Board Advisory</h2>
            </div>
            <p className="text-[var(--color-muted)] text-sm font-bold uppercase tracking-widest max-w-xs text-right">
              Strategic clarity through three phases of education and governance design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-[var(--color-border)]">
            {[
              { id: 'briefing', icon: <Globe className="w-6 h-6" />, href: '/services/ai-board-briefing' },
              { id: 'blueprint', icon: <Zap className="w-6 h-6" />, href: '/services/ai-governance-blueprint' },
              { id: 'advisor', icon: <ShieldCheck className="w-6 h-6" />, href: '/services/ai-board-advisor' }
            ].map((service, idx) => (
              <div key={service.id} className={`p-12 space-y-8 transition-all duration-700 hover:bg-[var(--color-secondary)]/10 ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-[var(--color-border)]' : ''}`}>
                <div className="text-[var(--color-accent)]">{service.icon}</div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{ts(`${service.id}.title`)}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-10 min-h-[60px]">
                    {ts(`${service.id}.objective`)}
                  </p>
                </div>
                <Link href={service.href as any} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] group">
                  Explore Program <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-32 bg-[var(--color-secondary)]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto border border-[var(--color-border)] bg-[var(--color-primary)] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8 space-y-8">
                <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.3em] uppercase">Independent Advisor</span>
                <h2 className="font-serif text-4xl md:text-6xl font-bold">Tuyo Isaza</h2>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed italic">
                  "I work at the intersection of leadership, organizational culture, and artificial intelligence. My goal is to ensure boards remain in control of the strategic narrative, not just the technical implementation."
                </p>
                <div className="pt-6">
                  <Link href="/about" className="text-xs font-bold uppercase tracking-widest border-b-2 border-[var(--color-accent)] pb-2 hover:text-[var(--color-accent)] transition-colors">
                    Executive Profile & Track Record
                  </Link>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                 <div className="w-48 h-48 border-2 border-[var(--color-border)] p-2 rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="w-full h-full bg-[var(--color-secondary)] rounded-full flex items-center justify-center">
                      <span className="font-serif text-5xl font-bold text-[var(--color-accent)]">TI</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-32 border-t border-[var(--color-border)]">
        <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Institutionalize AI Governance at the <br /> 
            <span className="text-[var(--color-accent)] italic">Highest Level</span>
          </h2>
          <p className="text-[var(--color-muted)] text-xl max-w-2xl leading-relaxed">
            Direct advisory requests are handled with strict confidentiality. Reach out to schedule a preliminary synchronization session.
          </p>
          <Link 
            href={{
              pathname: "/contact",
              query: { interest: "General Board Advisory" }
            }} 
            className="bg-[var(--color-foreground)] text-[var(--color-primary)] px-16 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-all"
          >
            Initiate Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
