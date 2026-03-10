import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Mock data based on the business model. In production, this could be fetched from Prisma.
const servicesDB = {
  "ai-board-briefing": {
    title: "AI Board Briefing",
    subtitle: "AI Strategic Oversight Update for Board Members",
    price: "$20,000",
    description: "An executive session designed specifically for Boards of Directors that allows you to understand how AI is changing competitive dynamics, identify strategic opportunities, and define the correct questions the Board must ask the executive team.",
    structure: [
      { name: "AI Landscape", desc: "Overview of how AI is transforming industries and business models." },
      { name: "Strategic Implications", desc: "Strategic impact of AI on the company, cost structures, and competitive advantage." },
      { name: "AI Risk Landscape", desc: "Principal risks: regulatory, reputational, operational, and technological dependency." },
      { name: "AI Opportunity Map", desc: "Identification of value creation priorities." },
      { name: "Oversight Framework", desc: "What the board should monitor and specific metrics." }
    ],
    deliverables: [
      "AI Board Memo (~10 pages summarizing risks and opportunities)",
      "AI Risk & Opportunity Snapshot (Visual map)",
      "Board AI Questions Framework (Structured list of questions for executives)"
    ]
  },
  "ai-governance-blueprint": {
    title: "AI Governance Blueprint",
    subtitle: "Designing the Governance Model for Strategic Oversight of AI",
    price: "$45,000",
    description: "A structured process to design the governance model that will permit the Board to orient and evaluate the adoption of Intelligence Artificial in the organization. Taking you from isolated initiatives to a clear supervisory framework.",
    structure: [
      { name: "Executive Interviews", desc: "Structured interviews with CEO, CTO/CIO, and CDO to identify priorities." },
      { name: "AI Maturity Assessment", desc: "Evaluation of the organizational maturity across strategy, data, tech, talent, and risk." },
      { name: "Strategic Opportunity & Risk Mapping", desc: "Identifying value generation versus regulatory and reputational risks." },
      { name: "Governance Model Design", desc: "Defining responsibilities, committees, review processes, and metrics." }
    ],
    deliverables: [
      "AI Risk Map",
      "AI Opportunity Map",
      "AI Governance Framework",
      "AI Investment Decision Framework",
      "AI Strategic Roadmap (12 - 24 months)"
    ]
  },
  "ai-board-advisor": {
    title: "AI Board Advisor",
    subtitle: "Continuous Strategic Oversight of Artificial Intelligence",
    price: "$8,000 / month",
    description: "A continuous accompaniment model where a specialized advisor supports the Board of Directors in evaluating AI initiatives, supervising associated risks, and analyzing technological investments over time.",
    structure: [
      { name: "Board Sessions", desc: "Periodic sessions (typically quarterly) to review initiatives and emerging risks." },
      { name: "Strategic AI Review", desc: "Strategic review of relevant AI initiatives within the organization." },
      { name: "AI Investment Review", desc: "Support in evaluating proposals and expected returns of AI investments." },
      { name: "AI Risk Monitoring", desc: "Continuous monitoring of associated risks." },
      { name: "Technology & Regulatory Updates", desc: "Briefings on relevant changes in the AI ecosystem and regulation." }
    ],
    deliverables: [
      "AI Governance Dashboard",
      "AI Risk Register",
      "Board AI Review Reports",
      "Strategic AI Insights"
    ]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesDB[params.slug as keyof typeof servicesDB];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | AI Governance for Boards`,
    description: service.subtitle,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesDB[params.slug as keyof typeof servicesDB];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
        
        <div className="pb-12 border-b border-[var(--color-border)] mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-2xl font-serif text-[var(--color-accent)] italic mb-8">{service.subtitle}</p>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed">{service.description}</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-6">Execution Structure</h2>
              <div className="space-y-6">
                {service.structure.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-[var(--color-accent)] pl-6">
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="md:col-span-5 space-y-8">
            <div className="bg-[var(--color-secondary)]/10 border border-[var(--color-border)] p-8">
              <h3 className="font-serif text-xl font-bold mb-6 border-b border-[var(--color-border)] pb-4">Executive Deliverables</h3>
              <ul className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-primary)] border border-[var(--color-border)] p-8 text-center">
              <span className="block text-xs uppercase tracking-widest text-[var(--color-muted)] font-bold mb-2">Base Investment</span>
              <div className="text-3xl font-bold text-[var(--color-foreground)] mb-6">{service.price}</div>
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
