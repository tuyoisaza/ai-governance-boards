import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, BarChart3, Users } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full border-b border-[var(--color-border)] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-secondary)] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4"></div>

        <div className="container relative mx-auto px-6 py-24 md:py-32 lg:py-40 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>For Corporate Boards</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Strategic <span className="text-[var(--color-accent)] italic pr-2">Oversight</span> for the AI Era.
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed max-w-xl">
              Equipping Corporate Directors and Executive Committees with the governance frameworks required to safely navigate and capitalize on Artificial Intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services" className="px-8 py-4 bg-[var(--color-foreground)] text-[var(--color-primary)] font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 hover:bg-[var(--color-accent)] transition-colors group">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#advisory" className="px-8 py-4 border border-[var(--color-border)] text-[var(--color-foreground)] font-bold tracking-widest text-xs uppercase flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                Request Briefing
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            {/* Minimalist Data/Governance Visual Representation */}
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
            <div className="p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group">
              <div className="text-[var(--color-accent)] font-serif text-5xl font-bold opacity-30 mb-6 group-hover:opacity-100 transition-opacity">01</div>
              <h3 className="font-serif text-2xl font-bold mb-4">AI Board Briefing</h3>
              <p className="text-[var(--color-muted)] text-sm mb-6 leading-relaxed">Executive sessions designed to provide directors with the strategic language and frameworks required to supervise AI decisions.</p>
              <Link href="/services/ai-board-briefing" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)]">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-8 border border-[var(--color-border)] bg-[var(--color-secondary)]/20 hover:border-[var(--color-accent)] transition-colors group">
              <div className="text-[var(--color-accent)] font-serif text-5xl font-bold opacity-30 mb-6 group-hover:opacity-100 transition-opacity">02</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Governance Blueprint</h3>
              <p className="text-[var(--color-muted)] text-sm mb-6 leading-relaxed">A 6-8 week strategic consulting process mapping risks and opportunities to design a bespoke AI governance framework.</p>
              <Link href="/services/ai-governance-blueprint" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)]">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group">
              <div className="text-[var(--color-accent)] font-serif text-5xl font-bold opacity-30 mb-6 group-hover:opacity-100 transition-opacity">03</div>
              <h3 className="font-serif text-2xl font-bold mb-4">AI Board Advisor</h3>
              <p className="text-[var(--color-muted)] text-sm mb-6 leading-relaxed">Continuous strategic advisory through quarterly sessions, risk monitoring, and independent AI investment evaluation.</p>
              <Link href="/services/ai-board-advisor" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)]">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" /> <span>Independent Strategic Perspective</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" /> <span>Vendor-Agnostic Advisory</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" /> <span>Executive-Level Communication</span>
              </li>
            </ul>
          </div>
          <div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  );
}
