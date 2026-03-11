"use client";

import { useState } from "react";
import { X, Save, Trash2, Plus } from "lucide-react";

interface Advisor {
  id: string;
  name: string;
  title: string;
  bio: string | null;
  imageUrl: string | null;
  linkedinUrl: string | null;
  twitterUrl: string | null;
}

export default function AdvisorManager({ initialAdvisors }: { initialAdvisors: Advisor[] }) {
  const [advisors, setAdvisors] = useState<Advisor[]>(initialAdvisors);
  const [editingAdvisor, setEditingAdvisor] = useState<Partial<Advisor> | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const method = editingAdvisor?.id ? "PUT" : "POST";
    const url = editingAdvisor?.id ? `/api/admin/advisors/${editingAdvisor.id}` : "/api/admin/advisors";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingAdvisor),
      });

      if (res.ok) {
        const saved = await res.json();
        if (method === "POST") {
          setAdvisors([saved, ...advisors]);
        } else {
          setAdvisors(advisors.map(a => a.id === saved.id ? saved : a));
        }
        setEditingAdvisor(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this advisor?")) return;

    try {
      const res = await fetch(`/api/admin/advisors/${id}`, { method: "DELETE" });
      if (res.ok) {
        setAdvisors(advisors.filter(a => a.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2">Advisory Team</h1>
          <p className="text-[var(--color-muted)] text-sm">Manage the executive advisors profile catalog.</p>
        </div>
        <button 
          onClick={() => setEditingAdvisor({})}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Advisor
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {advisors.map(advisor => (
          <div key={advisor.id} className="p-6 border border-[var(--color-border)] bg-[var(--color-background)] flex flex-col gap-4 group transition-colors hover:border-[var(--color-accent)]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{advisor.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">{advisor.title}</p>
                <div className="flex gap-4 mt-3">
                  {advisor.linkedinUrl && <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest">LinkedIn</span>}
                  {advisor.twitterUrl && <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest">Twitter</span>}
                </div>
              </div>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setEditingAdvisor(advisor)}
                  className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] hover:underline"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(advisor.id)}
                  className="text-xs font-bold uppercase tracking-widest text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingAdvisor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[var(--color-primary)] border border-[var(--color-border)] w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-[var(--color-border)] flex justify-between items-center">
              <h2 className="font-serif text-xl font-bold">{editingAdvisor.id ? "Edit Advisor" : "Add New Advisor"}</h2>
              <button onClick={() => setEditingAdvisor(null)}><X className="w-5 h-5 text-[var(--color-muted)]" /></button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Full Name</label>
                  <input 
                    required 
                    value={editingAdvisor.name || ""} 
                    onChange={e => setEditingAdvisor({...editingAdvisor, name: e.target.value})}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Professional Title</label>
                  <input 
                    required 
                    value={editingAdvisor.title || ""} 
                    onChange={e => setEditingAdvisor({...editingAdvisor, title: e.target.value})}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Executive Biography</label>
                <textarea 
                  rows={4} 
                  value={editingAdvisor.bio || ""} 
                  onChange={e => setEditingAdvisor({...editingAdvisor, bio: e.target.value})}
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">LinkedIn URL</label>
                  <input 
                    value={editingAdvisor.linkedinUrl || ""} 
                    onChange={e => setEditingAdvisor({...editingAdvisor, linkedinUrl: e.target.value})}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Twitter URL</label>
                  <input 
                    value={editingAdvisor.twitterUrl || ""} 
                    onChange={e => setEditingAdvisor({...editingAdvisor, twitterUrl: e.target.value})}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex justify-end gap-4">
                <button 
                  type="button" 
                  onClick={() => setEditingAdvisor(null)}
                  className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSaving}
                  className="flex items-center gap-2 px-8 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-[10px] uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
                >
                  <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Save Advisor"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
