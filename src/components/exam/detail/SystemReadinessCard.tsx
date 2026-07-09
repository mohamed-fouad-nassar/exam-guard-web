import { CheckCircle, RefreshCw, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import SystemCheckCard from "./SystemCheckCard";
import type { SystemCheckItem } from "@/types/exam.types";

type SystemReadinessCardProps = {
  checks: SystemCheckItem[];
};

export default function SystemReadinessCard({ checks }: SystemReadinessCardProps) {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h3 className="font-heading text-2xl font-semibold text-on-surface">
          System Readiness
        </h3>
        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle className="size-5 fill-green-400/20" />
          <span className="font-bold text-sm">All Systems Ready</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {checks.map((check) => (
          <SystemCheckCard
            key={check.label}
            icon={check.icon}
            label={check.label}
            detail={check.detail}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" className="flex-1 h-14 gap-3 rounded-xl">
          <RefreshCw className="size-5" />
          Run System Check Again
        </Button>
        <Button
          variant="ghost"
          className="flex-1 h-14 gap-3 rounded-xl border border-outline-variant"
        >
          <FileText className="size-5" />
          Download PDF Guide
        </Button>
      </div>
    </div>
  );
}
