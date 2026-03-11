import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

async function checkAuth() {
  const session = await getServerSession(authOptions);
  const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
  if (!session?.user?.email || !adminEmails.includes(session.user.email)) {
    return false;
  }
  return true;
}

export async function GET() {
  if (!await checkAuth()) return new NextResponse("Unauthorized", { status: 401 });
  
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch insights" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!await checkAuth()) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const body = await req.json();
    const { title, slug, content, author, published } = body;

    const post = await prisma.blogPost.create({
      data: { title, slug, content, author, published: published ?? false }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create insight" }, { status: 500 });
  }
}
