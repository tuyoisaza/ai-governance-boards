import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";
import { Plus } from "lucide-react";

export const metadata = { title: "Manage Advisory Team" };

export default async function AdminAdvisorsPage() {
  const advisors = await prisma.advisor.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2">Advisory Team</h1>
          <p className="text-[var(--color-muted)] text-sm">Manage the executive advisors profile catalog.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors">
          <Plus className="w-4 h-4" /> Add Advisor
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {advisors.length === 0 ? (
          <div className="col-span-2 p-8 border border-[var(--color-border)] text-center text-[var(--color-muted)]">
            No active advisors recorded.
          </div>
        ) : advisors.map(advisor => (
          <div key={advisor.id} className="p-6 border border-[var(--color-border)] bg-[var(--color-background)] flex flex-col gap-4 group transition-colors hover:border-[var(--color-accent)]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{advisor.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">{advisor.title}</p>
                <div className="flex gap-4 mt-3">
                  {advisor.linkedinUrl && <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest">LinkedIn</span>}
                  {advisor.twitterUrl && <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest">Twitter</span>}
                </div>
              </div>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] hover:underline">Edit</button>
                <button className="text-xs font-bold uppercase tracking-widest text-red-500 hover:underline">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
