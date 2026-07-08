import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  DataTable,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@/components/ui/data-table";
import ExamResultCard from "@/components/student/ExamResultCard";

export type HistoryRow = {
  title: string;
  subtitle: string;
  date: string;
  score: string;
  integrityBar: number;
  integrityVariant: "success" | "warning";
  integrityLabel: string;
};

export type RecentResult = {
  title: string;
  subtitle: string;
  date: string;
  score: string;
  integrityVariant: "success" | "warning";
  integrityLabel: string;
  integrityIcon?: "verified" | "warning";
};

type ExamHistorySectionProps = {
  rows: HistoryRow[];
  mobileResults: RecentResult[];
};

export default function ExamHistorySection({ rows, mobileResults }: ExamHistorySectionProps) {
  return (
    <>
      <section className="hidden lg:block">
        <h2 className="font-heading text-2xl font-semibold text-on-surface mb-6">
          Exam History
        </h2>
        <DataTable columns={["Exam Details", "Date", "Score", "Integrity Status", "Action"]}>
          <DataTableBody>
            {rows.map((row) => (
              <DataTableRow key={row.title}>
                <DataTableCell>
                  <div className="flex flex-col">
                    <span className="font-semibold text-on-surface">
                      {row.title}
                    </span>
                    <span className="text-on-surface-variant text-xs">
                      {row.subtitle}
                    </span>
                  </div>
                </DataTableCell>
                <DataTableCell className="text-on-surface-variant text-sm">
                  {row.date}
                </DataTableCell>
                <DataTableCell className="font-mono text-xs font-bold text-primary">
                  {row.score}
                </DataTableCell>
                <DataTableCell>
                  <div className="flex items-center gap-3">
                    <ProgressBar
                      variant={row.integrityVariant}
                      value={row.integrityBar}
                      className="w-[120px] shrink-0"
                    />
                    <Badge variant={row.integrityVariant}>
                      {row.integrityLabel}
                    </Badge>
                  </div>
                </DataTableCell>
                <DataTableCell>
                  <Button variant="ghost" size="icon" className="text-on-surface-variant hover:text-primary">
                    <Eye size={18} />
                  </Button>
                </DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTable>
      </section>

      <section className="lg:hidden space-y-4">
        <h2 className="font-heading text-2xl font-semibold text-on-surface">
          Recent Results
        </h2>
        <div className="space-y-3">
          {mobileResults.map((result) => (
            <ExamResultCard key={result.title} {...result} />
          ))}
        </div>
      </section>
    </>
  );
}
