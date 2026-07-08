import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import UpcomingExamCard from "@/components/student/UpcomingExamCard";

export type UpcomingExam = {
  icon: LucideIcon;
  title: string;
  date: string;
  time: string;
  variant: "urgent" | "future";
};

type UpcomingExamsSectionProps = {
  exams: UpcomingExam[];
};

export default function UpcomingExamsSection({ exams }: UpcomingExamsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-semibold text-on-surface">
          Upcoming Exams
        </h2>
        <Button variant="link" className="text-sm font-semibold">
          View Schedule
        </Button>
      </div>
      <div className="space-y-4">
        {exams.map((exam) => (
          <UpcomingExamCard key={exam.title} {...exam} />
        ))}
      </div>
    </section>
  );
}
