import { ShieldCheck, Target, Award } from "lucide-react";

export const metadata = {
  title: "About Us | Firm Overview | AI Governance",
  description: "About our AI Governance advisory firm and our mission to equip corporate boards.",
};

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <h1 className="font-serif text-5xl font-bold mb-6">Firm Overview</h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed">
            We are a premier strategic advisory firm dedicated exclusively to Artificial Intelligence Governance for Corporate Boards, CEOs, and Executive Committees.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-[var(--color-muted)] leading-relaxed space-y-6">
          <p>
            Artificial Intelligence is driving one of the most profound technological shifts in history. However, in the majority of organizations, decisions regarding AI are heavily concentrated within technical or operational silos. 
          </p>
          <p>
            This dynamic leaves the Board of Directors without the necessary frameworks, language, and independent criteria to exert effective strategic oversight. This gap generates critical risks:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[var(--color-foreground)] marker:text-[var(--color-accent)]">
            <li>Lack of visibility into AI investments and actual capabilities.</li>
            <li>Exposure to unprecedented operational, regulatory, and reputational risks.</li>
            <li>Loss of strategic opportunities and competitive advantage.</li>
          </ul>
          
          <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)] mt-12 mb-6">Our Philosophy</h2>
          <p>
            We do not sell AI software, nor do we implement technical solutions. Our independence is our core asset. We operate as a strategic partner to the Board, ensuring that the technology serves the corporate strategy rather than dictating it.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="border border-[var(--color-border)] p-6 bg-[var(--color-primary)] text-center">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-4 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[var(--color-foreground)] mb-2">Independence</h3>
              <p className="text-sm">Vendor-agnostic advisory focusing solely on maximizing organizational value and minimizing risk.</p>
            </div>
            <div className="border border-[var(--color-border)] p-6 bg-[var(--color-primary)] text-center">
              <Target className="w-8 h-8 text-[var(--color-accent)] mb-4 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[var(--color-foreground)] mb-2">Strategic Focus</h3>
              <p className="text-sm">Bridging the gap between deeply technical capabilities and executive strategic objectives.</p>
            </div>
            <div className="border border-[var(--color-border)] p-6 bg-[var(--color-primary)] text-center">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-4 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[var(--color-foreground)] mb-2">Authority</h3>
              <p className="text-sm">Driven by rigorous frameworks and proprietary governance models specifically built for boards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
