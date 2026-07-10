import { Sparkles, Shield } from "lucide-react";
import BasicInfoForm from "@/components/exam/builder/BasicInfoForm";
import ExamSummaryCard from "@/components/exam/builder/ExamSummaryCard";
import QuickActionsCard from "@/components/exam/builder/QuickActionsCard";
import type { QuickAction } from "@/components/exam/builder/QuickActionsCard";

const summaryStats = [
  { label: "Questions", value: "12" },
  { label: "Duration", value: "90 Min" },
  { label: "Total Points", value: "100 Points" },
];

const quickActions: QuickAction[] = [
  { label: "AI Question Gen", icon: Sparkles },
  { label: "Security Settings", icon: Shield },
];

export default function ExamBasicInfo() {
  return (
    <div className="pt-8 grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
      <div className="lg:col-span-7">
        <BasicInfoForm />
      </div>
      <aside className="lg:col-span-3 space-y-6">
        <ExamSummaryCard
          status="Draft"
          progressPercent={65}
          stats={summaryStats}
          lastSaved="2 mins ago"
        />
        <QuickActionsCard actions={quickActions} />

      </aside>
    </div>
  );
}
