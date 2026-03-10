import { PrismaClient } from "@prisma/client";
import { Plus } from "lucide-react";

export const metadata = { title: "Manage Intelligence & Blog" };

export default async function AdminBlogPage() {
  const prisma = new PrismaClient();
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });
  await prisma.$disconnect();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2">Executive Insights</h1>
          <p className="text-[var(--color-muted)] text-sm">Publish and manage frameworks, briefs, and playbooks.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-accent-hover)] transition-colors">
          <Plus className="w-4 h-4" /> New Publication
        </button>
      </div>

      <div className="grid gap-4">
        {posts.length === 0 ? (
          <div className="p-8 border border-[var(--color-border)] text-center text-[var(--color-muted)]">
            No insights published to database yet.
          </div>
        ) : posts.map(post => (
          <div key={post.id} className="p-6 border border-[var(--color-border)] bg-[var(--color-background)] flex justify-between items-center group">
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
              <button className="text-sm font-medium text-[var(--color-accent)] hover:underline">Edit</button>
              <button className="text-sm font-medium text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
