import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import prisma from "@/lib/prisma";
import { Linkedin, Twitter } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdvisorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  
  let advisors: any[] = [];
  try {
    advisors = await prisma.advisor.findMany({ orderBy: { createdAt: 'desc' } });
  } catch (error) {
    console.error("Failed to fetch advisors:", error);
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mb-24 space-y-8">
          <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.4em] uppercase">Executive Record</span>
          <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter">Track Record</h1>
          <p className="text-[var(--color-muted)] text-2xl font-serif italic leading-relaxed">
            Independent advisory built on two decades of multinational strategic transformation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {advisors.length === 0 ? (
            <div className="p-12 border border-[var(--color-border)] bg-[var(--color-secondary)]/5 space-y-10">
               <div className="space-y-4">
                  <h3 className="font-serif text-4xl font-bold text-[var(--color-accent)]">20+</h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted)]">Years in Strategic Transformation</p>
               </div>
               <p className="text-[var(--color-muted)] leading-relaxed text-lg">
                 Working across multiple economic cycles and technological shifts, Tuyo has consistently helped organizations navigate complexity through strategic clarity.
               </p>
            </div>
          ) : advisors.map(advisor => (
            <div key={advisor.id} className="p-12 border border-[var(--color-border)] space-y-8 flex flex-col">
               <div className="space-y-4">
                  <h3 className="font-serif text-4xl font-bold text-[var(--color-accent)]">{advisor.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted)]">{advisor.title}</p>
               </div>
               <p className="text-[var(--color-muted)] leading-relaxed text-lg flex-1">
                 {advisor.bio}
               </p>
               <div className="flex gap-6 pt-6 border-t border-[var(--color-border)]">
                 {advisor.linkedinUrl && (
                   <a href={advisor.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                     <Linkedin className="w-5 h-5" />
                   </a>
                 )}
                 {advisor.twitterUrl && (
                   <a href={advisor.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                     <Twitter className="w-5 h-5" />
                   </a>
                 )}
               </div>
            </div>
          ))}
        </div>

        <div className="mt-24 space-y-12">
           <h2 className="font-serif text-4xl font-bold text-center">Selected Organizations & Partnerships</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-[var(--color-border)]">
              {["Microsoft", "McDonald's", "Nokia", "Citibank", "Kellogg's", "Innovation Hubs", "Board Federations", "Private Equity", "Government", "Advisory Councils"].map((name) => (
                <div key={name} className="p-10 border border-[var(--color-border)] flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  {name}
                </div>
              ))}
           </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[var(--color-border)] flex flex-col items-center gap-8">
           <Link href="/contact" className="bg-[var(--color-foreground)] text-[var(--color-primary)] px-12 py-5 text-center font-bold uppercase tracking-[0.2em] text-xs hover:bg-[var(--color-accent)] transition-all">
             Request Formal Credentials
           </Link>
        </div>
      </div>
    </div>
  );
}
