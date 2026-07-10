import ExamStatusCard from "./ExamStatusCard";
import PreviewHeroCard from "./PreviewHeroCard";
import QuestionPayloadCard from "./QuestionPayloadCard";
import IntegrityShieldCard from "./IntegrityShieldCard";
import AuditLogCard from "./AuditLogCard";

export default function ExamPreviewDesktop() {
  return (
    <div className="space-y-6">
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
