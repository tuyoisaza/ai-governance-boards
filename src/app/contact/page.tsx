import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata = {
  title: "Contact | Request Briefing | AI Governance for Boards",
  description: "Schedule a confidential briefing regarding AI oversight for your corporate board.",
};

export default function ContactPage() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h1 className="font-serif text-5xl font-bold">Request a Briefing</h1>
        <p className="text-[var(--color-muted)] text-lg">
          Please provide your details below. Our executive team will reach out to coordinate a confidential preliminary discussion.
        </p>
      </div>
      
      <div className="border border-[var(--color-border)] p-4 bg-[var(--color-primary)]">
        <LeadCaptureForm variant="dark" />
      </div>
    </div>
  );
}
