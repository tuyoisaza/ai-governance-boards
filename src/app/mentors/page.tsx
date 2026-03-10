export const metadata = {
  title: "Advisors | AI Governance for Boards",
  description: "Meet our executive team of AI governance advisors and strategic partners.",
};

const advisors = [
  {
    name: "Dr. Sarah Jenkins",
    title: "Managing Partner, Strategy",
    bio: "Former Chief Data Officer at a Fortune 500 financial institution. Sarah specializes in risk mapping and executive alignment for AI adoption.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    title: "Senior Partner, AI Risk",
    bio: "20 years of experience in enterprise risk management. Michael has authored extensively on the intersection of cybersecurity and generative AI.",
    initials: "MC"
  },
  {
    name: "Elena Rodriguez",
    title: "Partner, Technology Governance",
    bio: "Expert in ethical AI and regulatory compliance. Elena leads the development of our AI Governance Frameworks.",
    initials: "ER"
  }
];

export default function MentorsPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Our Executive Advisors</h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed max-w-3xl mx-auto">
            A specialized collective of former C-level executives, risk experts, and technology strategists dedicated to Corporate Board advisory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, idx) => (
            <div key={idx} className="border border-[var(--color-border)] bg-[var(--color-secondary)]/10 p-8 group hover:border-[var(--color-accent)] transition-colors text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-[var(--color-primary)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)] transition-colors">
                <span className="font-serif text-2xl font-bold text-[var(--color-accent)]">{advisor.initials}</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-1">{advisor.name}</h3>
              <p className="text-xs tracking-widest uppercase font-bold text-[var(--color-muted)] mb-4">{advisor.title}</p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{advisor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
