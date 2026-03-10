"use client";

import { signIn } from "next-auth/react";
import { ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
      <div className="max-w-md w-full p-8 border border-[var(--color-border)] bg-[var(--color-primary)] text-center">
        <ShieldCheck className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
        <h1 className="font-serif text-2xl font-bold mb-2">Secure Gateway</h1>
        <p className="text-sm text-[var(--color-muted)] mb-8">
          Authentication is restricted to authorized administrative personnel only.
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/admin" })}
          className="w-full flex items-center justify-center gap-3 bg-white text-black px-4 py-3 font-semibold hover:bg-gray-100 transition-colors"
        >
          {/* Simple Google G SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 24c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 21.53 7.7 24 12 24z" />
            <path fill="#FBBC05" d="M5.84 15.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V8.07H2.16C1.43 9.55 1 11.22 1 13s.43 3.45 1.16 4.93l3.68-2.84z" />
            <path fill="#EA4335" d="M12 4.64c1.61 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.19 14.97 0 12 0 7.7 0 3.99 2.47 2.16 6.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google Workspace
        </button>
      </div>
    </div>
  );
}
