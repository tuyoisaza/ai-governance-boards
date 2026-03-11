"use client";

import { useState } from "react";
import { X, Save, Trash2, Plus, Eye, EyeOff } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string | null;
  published: boolean;
  createdAt: string | Date;
}

export default function InsightManager({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const method = editingPost?.id ? "PUT" : "POST";
    const url = editingPost?.id ? `/api/admin/insights/${editingPost.id}` : "/api/admin/insights";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPost),
      });

      if (res.ok) {
        const saved = await res.json();
        if (method === "POST") {
          setPosts([saved, ...posts]);
        } else {
          setPosts(posts.map(p => p.id === saved.id ? saved : p));
        }
        setEditingPost(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this publication?")) return;

    try {
      const res = await fetch(`/api/admin/insights/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    if (!editingPost?.id) {
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setEditingPost({...editingPost, title, slug});
    } else {
      setEditingPost({...editingPost, title});
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2">Executive Insights</h1>
          <p className="text-[var(--color-muted)] text-sm">Publish and manage frameworks, briefs, and playbooks.</p>
        </div>
        <button 
          onClick={() => setEditingPost({ published: false, author: "Tuyo Isaza" })}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          <Plus className="w-4 h-4" /> New Publication
        </button>
      </div>

      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post.id} className="p-6 border border-[var(--color-border)] bg-[var(--color-background)] flex justify-between items-center group hover:border-[var(--color-accent)] transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className={`w-2 h-2 rounded-full ${post.published ? 'bg-green-500' : 'bg-gray-500'}`} />
                <h3 className="font-bold text-lg">{post.title}</h3>
              </div>
              <p className="text-xs text-[var(--color-muted)] ml-5">
                {post.author} • {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setEditingPost(post)}
                className="text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(post.id)}
                className="text-sm font-medium text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[var(--color-primary)] border border-[var(--color-border)] w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-[var(--color-border)] flex justify-between items-center">
              <h2 className="font-serif text-xl font-bold">{editingPost.id ? "Edit Publication" : "New Publication"}</h2>
              <button onClick={() => setEditingPost(null)}><X className="w-5 h-5 text-[var(--color-muted)]" /></button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Title</label>
                  <input 
                    required 
                    value={editingPost.title || ""} 
                    onChange={e => handleTitleChange(e.target.value)}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Slug</label>
                  <input 
                    required 
                    value={editingPost.slug || ""} 
                    onChange={e => setEditingPost({...editingPost, slug: e.target.value})}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Author</label>
                  <input 
                    value={editingPost.author || ""} 
                    onChange={e => setEditingPost({...editingPost, author: e.target.value})}
                    className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm focus:border-[var(--color-accent)] outline-none transition-colors"
                  />
                </div>
                <div className="flex items-end pb-2">
                  <button 
                    type="button"
                    onClick={() => setEditingPost({...editingPost, published: !editingPost.published})}
                    className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${editingPost.published ? 'text-green-500' : 'text-[var(--color-muted)]'}`}
                  >
                    {editingPost.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    {editingPost.published ? "Published" : "Draft Mode"}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">Content (Markdown)</label>
                <textarea 
                  rows={10} 
                  value={editingPost.content || ""} 
                  onChange={e => setEditingPost({...editingPost, content: e.target.value})}
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-2 text-sm font-mono focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex justify-end gap-4">
                <button 
                  type="button" 
                  onClick={() => setEditingPost(null)}
                  className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSaving}
                  className="flex items-center gap-2 px-8 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-[10px] uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
                >
                  <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Save Publication"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
