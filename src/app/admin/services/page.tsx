import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";
import { Plus } from "lucide-react";

export const metadata = { title: "Manage Services" };

export default async function AdminServicesPage() {
  const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2">Service Catalog</h1>
          <p className="text-[var(--color-muted)] text-sm">Manage the strategic advisory offerings.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="grid gap-4">
        {services.length === 0 ? (
          <div className="p-8 border border-[var(--color-border)] text-center text-[var(--color-muted)]">
            No services configured in database. Utilizing static defaults on frontend.
          </div>
        ) : services.map(service => (
          <div key={service.id} className="p-6 border border-[var(--color-border)] bg-[var(--color-background)] flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{service.slug}</p>
            </div>
            <div className="flex gap-4">
              <button className="text-sm text-[var(--color-accent)] hover:underline">Edit</button>
              <button className="text-sm text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
