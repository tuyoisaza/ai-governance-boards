"use client";

import { useTranslations } from "next-intl";

export default function MentorsPage() {
  const mentors = [
    { name: "Julian Tuyoisaza", title: "Strategic Partner", bio: "Expert in Corporate Governance and AI Strategy for Juntas Directivas." },
    { name: "Dr. Elena Vance", title: "Regulatory Advisor", bio: "Specializing in Global AI Regulation and Ethical Frameworks." }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl font-bold mb-16 text-center">Executive Partners</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {mentors.map((mentor, i) => (
            <div key={i} className="group p-10 border border-[var(--color-border)] bg-[var(--color-secondary)]/10 hover:border-[var(--color-accent)] transition-all">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">{mentor.name}</h2>
                <div className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.2em]">{mentor.title}</div>
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed italic">
                "{mentor.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
