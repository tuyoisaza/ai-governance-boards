import Link from "next/link";
import { ArrowRight, BookOpen, Map, Target } from "lucide-react";

export const metadata = {
  title: "Services | AI Governance for Boards",
  description: "Our progressive advisory model including AI Board Briefings, Governance Blueprints, and Continuous Advisory.",
};

const services = [
  {
    id: "ai-board-briefing",
    title: "AI Board Briefing",
    subtitle: "Strategic AI Briefing for Board Members",
    icon: <BookOpen className="w-8 h-8 text-[var(--color-accent)]" />,
    description: "An executive session designed to help the Board of Directors understand the strategic implications of Artificial Intelligence.",
    objective: "Provide directors with the strategic language and frameworks required to supervise AI decisions.",
    deliverables: ["AI Board Memo (~10 pages)", "AI Risk & Opportunity Snapshot", "Board AI Questions Framework"],
    duration: "3 hours",
  },
  {
    id: "ai-governance-blueprint",
    title: "AI Governance Blueprint",
    subtitle: "Designing the Governance Model for AI",
    icon: <Map className="w-8 h-8 text-[var(--color-accent)]" />,
    description: "A structured process to design the AI governance model that will allow the Board to supervise the adoption of AI.",
    objective: "Design the governance model that will allow the Board of Directors to guide and evaluate the adoption of Artificial Intelligence in the organization.",
    deliverables: ["AI Risk Map", "AI Opportunity Map", "AI Governance Framework", "AI Investment Decision Framework", "AI Strategic Roadmap (12-24 months)"],
    duration: "6-8 weeks",
  },
  {
    id: "ai-board-advisor",
    title: "AI Board Advisor",
    subtitle: "Continuous Strategic Oversight",
    icon: <Target className="w-8 h-8 text-[var(--color-accent)]" />,
    description: "Continuous accompaniment to support the Board of Directors in the strategic supervision of AI.",
    objective: "Accompany the Board in the continuous evaluation of decisions, supervision of risks and strategic orientation of AI adoption.",
    deliverables: ["AI Governance Dashboard", "AI Risk Register", "Board AI Review Reports", "Strategic AI Insights"],
    duration: "Annual Retainer",
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h1 className="font-serif text-5xl font-bold mb-6">Strategic Services</h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed max-w-3xl">
            A progressive advisory model designed to build competence, establish clear oversight frameworks, and provide continuous independent evaluation of enterprise AI initiatives.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={service.id} className="grid md:grid-cols-12 gap-8 border border-[var(--color-border)] bg-[var(--color-secondary)]/10 p-8 md:p-12 group hover:border-[var(--color-accent)] transition-colors">
              <div className="md:col-span-4 flex flex-col items-start gap-6 border-b md:border-b-0 md:border-r border-[var(--color-border)] pb-8 md:pb-0 md:pr-8">
                {service.icon}
                <div>
                  <div className="text-[var(--color-muted)] text-xs font-bold tracking-widest uppercase mb-2">Phase 0{index + 1}</div>
                  <h2 className="font-serif text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-[var(--color-accent)] text-sm italic">{service.duration}</p>
                </div>
              </div>
              
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">{service.subtitle}</h3>
                  <p className="text-[var(--color-muted)] mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <strong className="block text-xs uppercase tracking-widest text-[var(--color-foreground)] mb-2">Objective</strong>
                    <p className="text-sm text-[var(--color-muted)]">{service.objective}</p>
                  </div>

                  <div>
                    <strong className="block text-xs uppercase tracking-widest text-[var(--color-foreground)] mb-2">Key Deliverables</strong>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[var(--color-muted)] list-disc list-inside">
                      {service.deliverables.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                  <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)] transition-colors">
                    Explore Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
