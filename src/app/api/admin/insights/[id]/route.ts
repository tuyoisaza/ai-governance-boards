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

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await checkAuth()) return new NextResponse("Unauthorized", { status: 401 });
  const { id } = await params;

  try {
    const body = await req.json();
    const { title, slug, content, author, published } = body;

    const post = await prisma.blogPost.update({
      where: { id },
      data: { title, slug, content, author, published }
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update insight" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await checkAuth()) return new NextResponse("Unauthorized", { status: 401 });
  const { id } = await params;

  try {
    await prisma.blogPost.delete({
      where: { id }
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete insight" }, { status: 500 });
  }
}
