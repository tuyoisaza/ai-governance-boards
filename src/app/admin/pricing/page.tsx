import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";
import { Plus } from "lucide-react";

export const metadata = { title: "Manage Pricing Plans" };

export default async function AdminPricingPage() {
  const plans = await prisma.pricingPlan.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2">Pricing Matrix</h1>
          <p className="text-[var(--color-muted)] text-sm">Adjust base investments and delivery options.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors">
          <Plus className="w-4 h-4" /> Add Plan
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plans.length === 0 ? (
          <div className="col-span-full p-8 border border-[var(--color-border)] text-center text-[var(--color-muted)]">
            No dynamic pricing plans created yet. Utilizing static page configuration.
          </div>
        ) : plans.map(plan => (
          <div key={plan.id} className="p-6 border border-[var(--color-border)] bg-[var(--color-background)]">
            <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
            <p className="text-2xl font-bold text-[var(--color-accent)] mb-4">{plan.price}</p>
            <div className="flex gap-4 pt-4 border-t border-[var(--color-border)]">
              <button className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-white transition-colors">Edit</button>
              <button className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
