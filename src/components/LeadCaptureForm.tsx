"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LeadCaptureForm({ variant = "default" }: { variant?: "default" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-[var(--color-secondary)]/50 border border-[var(--color-border)] h-full">
        <CheckCircle2 className="w-12 h-12 text-[var(--color-accent)] mb-4" />
        <h3 className="font-serif text-xl font-bold mb-2">Request Received</h3>
        <p className="text-[var(--color-muted)] text-sm">Our executive advisory team will contact you shortly to schedule your confidential briefing.</p>
      </div>
    );
  }

  const bgColor = variant === "dark" ? "bg-[var(--color-background)]" : "bg-[var(--color-secondary)]/30";

  return (
    <form onSubmit={handleSubmit} className={`${bgColor} p-8 border border-[var(--color-border)] flex flex-col gap-6`}>
      <div>
        <h3 className="font-serif text-2xl font-bold mb-2">Request Confidential Briefing</h3>
        <p className="text-[var(--color-muted)] text-sm">Schedule a consultation with our strategic advisory partners.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium tracking-widest uppercase text-[var(--color-muted)] mb-2">Full Name</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="w-full bg-[var(--color-primary)] border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            placeholder="Executive Director"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-medium tracking-widest uppercase text-[var(--color-muted)] mb-2">Organization / Board</label>
          <input
            required
            id="company"
            name="company"
            type="text"
            className="w-full bg-[var(--color-primary)] border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            placeholder="Global Enterprises Inc."
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium tracking-widest uppercase text-[var(--color-muted)] mb-2">Corporate Email</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="w-full bg-[var(--color-primary)] border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            placeholder="director@company.com"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 w-full group flex items-center justify-between bg-[var(--color-foreground)] text-[var(--color-primary)] px-6 py-4 font-medium hover:bg-[var(--color-accent)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="tracking-widest uppercase text-xs font-bold">{status === "loading" ? "Processing..." : "Submit Request"}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {status === "error" && (
        <p className="text-red-400 text-xs mt-2 text-center">There was an issue processing your request. Please try again.</p>
      )}
    </form>
  );
}
