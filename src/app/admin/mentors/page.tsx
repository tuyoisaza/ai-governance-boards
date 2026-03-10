import { PrismaClient } from "@prisma/client";
import { Plus } from "lucide-react";

export const metadata = { title: "Manage Advisory Team" };

export default async function AdminMentorsPage() {
  const prisma = new PrismaClient();
  const mentors = await prisma.mentor.findMany({ orderBy: { createdAt: 'desc' } });
  await prisma.$disconnect();

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
        {mentors.length === 0 ? (
          <div className="col-span-2 p-8 border border-[var(--color-border)] text-center text-[var(--color-muted)]">
            No active advisors recorded. Utilizing static fallback data.
          </div>
        ) : mentors.map(mentor => (
          <div key={mentor.id} className="p-6 border border-[var(--color-border)] bg-[var(--color-background)] flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{mentor.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">{mentor.title}</p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <button className="text-xs text-[var(--color-muted)] hover:text-white transition-colors">Edit</button>
                <button className="text-xs text-red-500 hover:text-red-400 transition-colors">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
