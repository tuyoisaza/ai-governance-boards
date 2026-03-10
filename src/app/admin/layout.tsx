import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, BookOpen, Diamond, FileText, Settings, LogOut } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/admin/login");
  }

  // Assuming role wasn't attached fully or checking emails again for safety
  const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
  if (!session.user.email || !adminEmails.includes(session.user.email)) {
    redirect("/admin/login?error=Unauthorized");
  }

  return (
    <div className="flex min-h-screen bg-[var(--color-primary)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--color-border)] bg-[var(--color-background)] flex flex-col">
        <div className="p-6 border-b border-[var(--color-border)]">
          <Link href="/admin" className="font-serif text-lg font-bold tracking-wider text-[var(--color-foreground)]">
            ADMIN PORTAL
          </Link>
          <p className="text-xs text-[var(--color-muted)] mt-1">{session.user.email}</p>
        </div>
        
        <nav className="flex-1 py-6 space-y-1 px-3">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-secondary)]/30 transition-colors rounded">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-secondary)]/30 transition-colors rounded">
            <Users className="w-4 h-4" /> Leads Management
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-secondary)]/30 transition-colors rounded">
            <Diamond className="w-4 h-4" /> Services Config
          </Link>
          <Link href="/admin/pricing" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-secondary)]/30 transition-colors rounded">
            <Settings className="w-4 h-4" /> Pricing Plans
          </Link>
          <Link href="/admin/mentors" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-secondary)]/30 transition-colors rounded">
            <BookOpen className="w-4 h-4" /> Advisory Team
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-secondary)]/30 transition-colors rounded">
            <FileText className="w-4 h-4" /> Insights & Content
          </Link>
        </nav>

        <div className="p-4 border-t border-[var(--color-border)]">
          <Link href="/api/auth/signout" className="flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-950/30 transition-colors rounded">
            <LogOut className="w-4 h-4" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
