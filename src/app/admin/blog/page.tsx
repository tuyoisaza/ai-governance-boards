import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";
import InsightManager from "./InsightManager";

export const metadata = { title: "Manage Intelligence & Blog" };

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });

  return <InsightManager initialPosts={posts} />;
}
