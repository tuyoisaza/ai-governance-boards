import { Link } from "@/i18n/routing";
import { ArrowRight, FileText } from "lucide-react";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Executive Insights & Playbooks | AI Governance",
  description: "Playbooks, frameworks, and critical insights on AI risk and strategy for corporate boards.",
};

const staticInsights = [
  {
    category: "Playbook",
    title: "AI Governance Questions for Boards",
    description: "The 10 critical questions every corporate director must ask the executive team regarding AI strategy, data privacy, and investments.",
    date: "Current Quarter"
  },
  {
    category: "Framework",
    title: "AI Risk Oversight Framework",
    description: "A comprehensive model for segregating technological dependencies, reputational vulnerabilities, and regulatory exposure.",
    date: "Current Quarter"
  },
  {
    category: "Case Study",
    title: "Structuring the AI Technology Committee",
    description: "How a Fortune 500 manufacturer restructured its board to provide adequate supervision for generative AI transformation.",
    date: "Archived"
  },
  {
    category: "Executive Brief",
    title: "The Strategic Opportunity Mapper",
    description: "Identifying enterprise value pools beyond generic productivity enhancements.",
    date: "Current Quarter"
  }
];

export default async function InsightsPage() {
  const dbPosts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  });

  const insights = dbPosts.length > 0 
    ? dbPosts.map(p => ({
        category: "Insight",
        title: p.title,
        description: p.content.substring(0, 160) + "...",
        date: new Date(p.createdAt).toLocaleDateString()
      }))
    : staticInsights;
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h1 className="font-serif text-5xl font-bold mb-6">Executive Insights</h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed max-w-3xl">
            A curated selection of frameworks, playbooks, and strategic perspectives designed exclusively for corporate directors and executive committees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, idx) => (
            <div key={idx} className="border border-[var(--color-border)] bg-[var(--color-primary)] p-8 flex flex-col group hover:border-[var(--color-accent)] transition-colors">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1">
                  {insight.category}
                </span>
                <span className="text-xs text-[var(--color-muted)] font-mono">{insight.date}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">{insight.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8 flex-1">{insight.description}</p>
              
              <div className="mt-auto border-t border-[var(--color-border)] pt-6">
                <Link 
                  href={{
                    pathname: "/contact",
                    query: { interest: `Report: ${insight.title}` }
                  }} 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Request Full Report <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Focused AEO Section */}
        <div className="mt-24 border-t border-[var(--color-border)] pt-16">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">Common Board Inquiries</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-[var(--color-border)] p-6 bg-[var(--color-secondary)]/10">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">What is the difference between AI management and AI governance?</h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">Management focuses on implementing tools and driving operational ROI. Governance focuses on defining ethical guardrails, evaluating systemic risks, setting strategic policy, and ensuring alignment with long-term corporate value.</p>
                </div>
              </div>
            </div>
            <div className="border border-[var(--color-border)] p-6 bg-[var(--color-secondary)]/10">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Do board directors need technical AI expertise?</h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">No. Directors require a strategic, framework-driven understanding of the technology's impacts, risks, and limitations. They need to know what questions to ask, not how the underlying neural network functions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
