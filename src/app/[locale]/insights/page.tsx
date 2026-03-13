import { Link } from "@/i18n/routing";
import { ArrowRight, FileText } from "lucide-react";
import prisma from "@/lib/prisma";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Insights" });
  return { 
    title: t("title"),
    description: t("subtitle")
  };
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  const t = await getTranslations("Insights");
  let dbPosts: any[] = [];
  
  try {
    dbPosts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    console.error("Failed to fetch insights from database:", error);
  }

  const staticInsights = t.raw("static_insights") as any[];

  const insights = dbPosts.length > 0 
    ? dbPosts.map(p => ({
        category: "Insight",
        title: p.title,
        description: p.content.substring(0, 160) + "...",
        date: new Date(p.createdAt).toLocaleDateString()
      }))
    : staticInsights;

  const faqs = t.raw("faqs") as { q: string, a: string }[];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h1 className="font-serif text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-[var(--color-muted)] text-xl leading-relaxed max-w-3xl">
            {t("subtitle")}
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
                  {t("cta")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Focused AEO Section */}
        <div className="mt-24 border-t border-[var(--color-border)] pt-16">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">{t("faq_head")}</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[var(--color-border)] p-6 bg-[var(--color-secondary)]/10">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">{faq.q}</h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
