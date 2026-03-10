import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Pricing & Partnerships | AI Governance for Boards",
  description: "Transparent engagement models and program bundles for corporate board AI advisory.",
};

const programs = [
  {
    title: "AI Board Briefing",
    price: "$20,000",
    description: "Executive session for boards to understand the strategic implications of AI.",
    features: [
      "3-hour executive session",
      "AI Board Memo (~10 pages)",
      "AI Risk & Opportunity Snapshot",
      "Board AI Questions Framework"
    ],
    options: "Extended Briefing (with executive team): $25,000"
  },
  {
    title: "AI Governance Blueprint",
    price: "$45,000",
    description: "Strategic consulting to design the AI governance model.",
    features: [
      "6-8 weeks duration",
      "Executive interviews & maturity assessment",
      "Strategic opportunity & risk mapping",
      "Governance model & framework design",
      "AI Strategic Roadmap (12-24 months)"
    ],
    options: "Extended Blueprint (includes existing initiatives analysis): $60,000"
  },
  {
    title: "AI Board Advisor",
    price: "$8,000 / mo",
    description: "Continuous strategic advisory for boards supervising AI adoption.",
    features: [
      "Annual retainer model",
      "Quarterly board sessions",
      "Strategic AI & investment reviews",
      "AI risk monitoring & updates",
      "AI Governance Dashboard & Risk Register"
    ],
    options: "Enhanced Advisor (with technology committee sessions): $12,000 / mo"
  }
];

const bundles = [
  {
    title: "Governance Launch Package",
    price: "$55,000",
    features: ["AI Board Briefing", "AI Governance Blueprint"],
    highlight: false,
  },
  {
    title: "Full Governance Program",
    price: "$140,000",
    features: ["AI Board Briefing", "AI Governance Blueprint", "AI Board Advisor (12 months)"],
    highlight: true,
  }
];

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl font-bold mb-6">Engagement Models</h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed max-w-3xl mx-auto">
            Our pricing philosophy reflects the strategic value of equipping the Board of Directors to supervise one of the most critical technological shifts of the next decade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {programs.map((program, idx) => (
            <div key={idx} className="border border-[var(--color-border)] bg-[var(--color-primary)] p-8 flex flex-col">
              <h3 className="font-serif text-2xl font-bold mb-2">{program.title}</h3>
              <p className="text-sm text-[var(--color-muted)] mb-8 min-h-[40px]">{program.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">{program.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm text-[var(--color-muted)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[var(--color-border)] flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold block mb-2">Options</span>
                <p className="text-xs text-[var(--color-muted)]">{program.options}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-secondary)]/30 p-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Program Bundles</h2>
            <p className="text-[var(--color-muted)]">For organizations that wish to implement the complete strategic sequence.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bundles.map((bundle, idx) => (
              <div key={idx} className={`p-8 border ${bundle.highlight ? 'border-[var(--color-accent)] bg-[var(--color-primary)] relative' : 'border-[var(--color-border)] bg-[var(--color-primary)]'}`}>
                {bundle.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-1">
                    Comprehensive
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold mb-4 text-center">{bundle.title}</h3>
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-[var(--color-accent)]">{bundle.price}</span>
                </div>
                <ul className="space-y-4">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 justify-center">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center border-t border-[var(--color-border)] pt-8">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">
                    Request Proposal <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
