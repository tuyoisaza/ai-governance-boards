import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <ShieldAlert className="w-8 h-8 text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)] transition-colors" />
          <span className="font-serif text-xl font-bold tracking-wider text-[var(--color-foreground)]">
            AI GOVERNANCE
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/services" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            SERVICES
          </Link>
          <Link href="/pricing" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            PRICING
          </Link>
          <Link href="/mentors" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            ADVISORS
          </Link>
          <Link href="/insights" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            INSIGHTS
          </Link>
          <Link href="/about" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            ABOUT
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            href="/contact"
            className="px-6 py-2 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] transition-all font-medium tracking-widest text-xs uppercase"
          >
            Request Briefing
          </Link>
        </div>
      </div>
    </header>
  );
}
