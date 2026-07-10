import AIProctoringSection from "@/components/exam/builder/AIProctoringSection";
import SecuritySection from "@/components/exam/builder/SecuritySection";
import InstructionsSection from "@/components/exam/builder/InstructionsSection";

export default function ExamSettings() {
  return (
    <div className="pt-8">
      <div className="flex flex-col gap-6">
        <AIProctoringSection />
        <SecuritySection />
        <InstructionsSection />
      </div>
    </div>
  );
}
