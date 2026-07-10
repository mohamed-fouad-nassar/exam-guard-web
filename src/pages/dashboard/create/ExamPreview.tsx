import ExamStatusCard from "@/components/exam/builder/ExamStatusCard";
import PreviewHeroCard from "@/components/exam/builder/PreviewHeroCard";
import QuestionPayloadCard from "@/components/exam/builder/QuestionPayloadCard";
import IntegrityShieldCard from "@/components/exam/builder/IntegrityShieldCard";
import AuditLogCard from "@/components/exam/builder/AuditLogCard";

export default function ExamPreview() {
  return (
    <div className="pt-8 space-y-6">
      <ExamStatusCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PreviewHeroCard />
        <QuestionPayloadCard />
        <IntegrityShieldCard />
        <AuditLogCard />
      </div>
    </div>
  );
}
