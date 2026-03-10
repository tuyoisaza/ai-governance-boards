import { PrismaClient } from "@prisma/client";
import { Users, FileText, Settings, AreaChart } from "lucide-react";

export const metadata = { title: "Dashboard Overview" };

export default async function AdminDashboard() {
  const prisma = new PrismaClient();
  const leadsCount = await prisma.lead.count();
  const blogsCount = await prisma.blogPost.count();
  await prisma.$disconnect();

  const stats = [
    { label: "Total Leads", value: leadsCount, icon: <Users className="w-5 h-5" /> },
    { label: "Published Insights", value: blogsCount, icon: <FileText className="w-5 h-5" /> },
    { label: "Active Services", value: "3", icon: <Settings className="w-5 h-5" /> },
    { label: "Platform Uptime", value: "99.9%", icon: <AreaChart className="w-5 h-5" /> },
  ];

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold mb-8">System Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="border border-[var(--color-border)] bg-[var(--color-background)] p-6">
            <div className="flex items-start justify-between mb-4">
              <span className="text-[var(--color-muted)] text-xs font-bold uppercase tracking-widest">{stat.label}</span>
              <span className="text-[var(--color-accent)]">{stat.icon}</span>
            </div>
            <div className="text-3xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
