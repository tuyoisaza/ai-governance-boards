import { Link } from "@/i18n/routing";
import { ArrowRight, ShieldCheck, TrendingUp, BarChart3, Users, Zap, Shield } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const ts = useTranslations("Services");

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full border-b border-[var(--color-border)] overflow-hidden min-h-[80vh] flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-secondary)] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4"></div>

        <div className="container relative mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>For Corporate Boards</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              {t("hero.title")}
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services" className="px-8 py-4 bg-[var(--color-foreground)] text-[var(--color-primary)] font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 hover:bg-[var(--color-accent)] transition-colors group">
                <span>{t("hero.cta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-background)] to-transparent z-10" />
            <div className="grid grid-cols-2 gap-4 opacity-70">
              <div className="aspect-square border border-[var(--color-border)] bg-[var(--color-secondary)]/30 p-8 flex flex-col justify-end">
                <BarChart3 className="w-12 h-12 text-[var(--color-accent)] mb-4" />
                <h3 className="font-serif text-xl font-bold">Risk Matrix</h3>
              </div>
              <div className="aspect-square border border-[var(--color-border)] bg-[var(--color-primary)] p-8 flex flex-col justify-end translate-y-8">
                <TrendingUp className="w-12 h-12 text-[var(--color-muted)] mb-4" />
                <h3 className="font-serif text-xl font-bold">Value Creation</h3>
              </div>
              <div className="aspect-square border border-[var(--color-border)] bg-[var(--color-primary)] p-8 flex flex-col justify-end">
                <ShieldCheck className="w-12 h-12 text-[var(--color-muted)] mb-4" />
                <h3 className="font-serif text-xl font-bold">Policy Design</h3>
              </div>
              <div className="aspect-square border border-[var(--color-border)] bg-[var(--color-secondary)]/30 p-8 flex flex-col justify-end translate-y-8">
                <Users className="w-12 h-12 text-[var(--color-accent)] mb-4" />
                <h3 className="font-serif text-xl font-bold">Board Alignment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP & PROGRESSIVE MODEL */}
      <section className="bg-[var(--color-primary)] border-b border-[var(--color-border)] py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">The Progressive Advisory Model</h2>
            <p className="text-[var(--color-muted)] text-lg">A structured approach to institutionalizing AI governance at the highest level of your organization.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'briefing', icon: <Shield className="w-5 h-5" />, href: '/services/ai-board-briefing' },
              { id: 'blueprint', icon: <Zap className="w-5 h-5" />, href: '/services/ai-governance-blueprint' },
              { id: 'advisor', icon: <ShieldCheck className="w-5 h-5" />, href: '/services/ai-board-advisor' }
            ].map((service) => (
              <div key={service.id} className="p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all bg-[var(--color-secondary)]/10 hover:bg-[var(--color-secondary)]/20 group">
                <div className="text-[var(--color-accent)] mb-6">{service.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-4">{ts(`${service.id}.title`)}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-8 leading-relaxed">
                  {ts(`${service.id}.objective`)}
                </p>
                <Link href={service.href as any} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] group-hover:gap-3 transition-all">
                  Detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION & FORM */}
      <section id="advisory" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              Begin your <br />
              <span className="text-[var(--color-accent)] italic">Governance Transformation</span>
            </h2>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              Our briefings are strictly confidential and tailored to the specific industry context of your board. Engage with our partners to discuss your organization's AI maturity and oversight capabilities.
            </p>
          </div>
          <div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  );
}
