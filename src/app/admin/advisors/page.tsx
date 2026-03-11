import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";
import AdvisorManager from "./AdvisorManager";

export const metadata = { title: "Manage Advisory Team" };

export default async function AdminAdvisorsPage() {
  const advisors = await prisma.advisor.findMany({ orderBy: { createdAt: 'desc' } });

  return <AdvisorManager initialAdvisors={advisors} />;
}
