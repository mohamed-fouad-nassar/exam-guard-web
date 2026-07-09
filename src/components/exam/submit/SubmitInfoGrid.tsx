import { ShieldCheck } from "lucide-react";
import SubmitInfoCard from "./SubmitInfoCard";

type SubmitInfoGridProps = {
  submissionTime?: string;
  questionsLogged?: string;
};

export default function SubmitInfoGrid({
  submissionTime = "14:02:45",
  questionsLogged = "60/60",
}: SubmitInfoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8 md:mb-12">
      <SubmitInfoCard label="Submission Time">
        <span className="font-heading text-2xl font-semibold text-on-surface">
          {submissionTime}
        </span>
      </SubmitInfoCard>

      <SubmitInfoCard label="Integrity Status">
        <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 rounded-full">
          <ShieldCheck className="size-[14px]" />
          <span className="font-mono text-xs">Verified Secure</span>
        </div>
      </SubmitInfoCard>

      <SubmitInfoCard label="Questions Logged">
        <span className="font-heading text-2xl font-semibold text-on-surface">
          {questionsLogged}
        </span>
      </SubmitInfoCard>
    </div>
  );
}
