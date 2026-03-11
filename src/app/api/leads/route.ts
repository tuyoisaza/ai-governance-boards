import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, interest } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        company,
        interest,
        status: "new",
      },
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Lead creation failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
