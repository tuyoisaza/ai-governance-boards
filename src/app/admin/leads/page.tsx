import prisma from "@/lib/prisma";
import { Download } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Leads Management" };

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2">Leads Management</h1>
          <p className="text-[var(--color-muted)] text-sm">Review capability for executive briefing requests.</p>
        </div>
        <Link href="/api/admin/leads/export" className="flex items-center gap-2 px-4 py-2 bg-[var(--color-foreground)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors">
          <Download className="w-4 h-4" /> Export CSV
        </Link>
      </div>

      <div className="border border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[var(--color-secondary)]/30 border-b border-[var(--color-border)] text-xs uppercase tracking-widest text-[var(--color-muted)]">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Organization</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[var(--color-muted)]">No leads recorded yet.</td>
                </tr>
              ) : leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[var(--color-secondary)]/10 transition-colors">
                  <td className="px-6 py-4">{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 font-medium">{lead.name}</td>
                  <td className="px-6 py-4">{lead.company}</td>
                  <td className="px-6 py-4 text-[var(--color-muted)]">{lead.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-bold uppercase tracking-widest ${
                      lead.status === 'new' ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]' :
                      lead.status === 'contacted' ? 'bg-blue-900/40 text-blue-400' :
                      'bg-green-900/40 text-green-400'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
