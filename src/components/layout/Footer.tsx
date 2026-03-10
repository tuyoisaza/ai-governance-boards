import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-primary)] mt-auto py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-[var(--color-accent)]" />
            <span className="font-serif text-lg font-bold tracking-wider text-[var(--color-foreground)]">
              AI GOVERNANCE FOR BOARDS
            </span>
          </Link>
          <p className="text-[var(--color-muted)] max-w-sm text-sm leading-relaxed">
            Strategic advisory and governance blueprinting for corporate boards supervising the adoption of Artificial Intelligence.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-serif text-[var(--color-accent)] tracking-widest text-xs uppercase font-bold">Services</h4>
          <nav className="flex flex-col gap-2 text-sm text-[var(--color-muted)]">
            <Link href="/services/ai-board-briefing" className="hover:text-[var(--color-foreground)] transition-colors">AI Board Briefing</Link>
            <Link href="/services/ai-governance-blueprint" className="hover:text-[var(--color-foreground)] transition-colors">AI Governance Blueprint</Link>
            <Link href="/services/ai-board-advisor" className="hover:text-[var(--color-foreground)] transition-colors">AI Board Advisor</Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-[var(--color-accent)] tracking-widest text-xs uppercase font-bold">Firm</h4>
          <nav className="flex flex-col gap-2 text-sm text-[var(--color-muted)]">
            <Link href="/about" className="hover:text-[var(--color-foreground)] transition-colors">About Us</Link>
            <Link href="/mentors" className="hover:text-[var(--color-foreground)] transition-colors">Advisors</Link>
            <Link href="/insights" className="hover:text-[var(--color-foreground)] transition-colors">Executive Insights</Link>
            <Link href="/contact" className="hover:text-[var(--color-foreground)] transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-muted)]">
        <p>© {new Date().getFullYear()} AI Governance for Boards. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-[var(--color-accent)]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[var(--color-accent)]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
