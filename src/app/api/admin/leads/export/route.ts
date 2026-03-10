import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getServerSession(authOptions);
  const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
  
  if (!session?.user?.email || !adminEmails.includes(session.user.email)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const prisma = new PrismaClient();
  
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    // Create CSV header
    let csv = "ID,Name,Email,Organization,Status,Date\n";
    
    // Add rows
    leads.forEach(lead => {
      // Escape commas and quotes for CSV stability
      const row = [
        lead.id,
        `"${lead.name.replace(/"/g, '""')}"`,
        `"${lead.email.replace(/"/g, '""')}"`,
        `"${lead.company.replace(/"/g, '""')}"`,
        lead.status,
        lead.createdAt.toISOString()
      ];
      csv += row.join(",") + "\n";
    });

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="leads_export.csv"'
      }
    });
  } catch (error) {
    console.error("Export failed", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
