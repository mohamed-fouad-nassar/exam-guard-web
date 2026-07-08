import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { PATHS } from "@/router/paths";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ShieldCheck } from "lucide-react";
import Filter from "@/components/shared/Filter";
import type { FilterTab } from "@/components/shared/Filter";
import SearchModal from "@/components/shared/SearchModal";
import type { SearchItem } from "@/components/shared/SearchModal";
import SortSelect from "@/components/shared/SortSelect";
import {
  DataTable,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from "@/components/ui/data-table";
import MobileResultCard from "@/components/student/MobileResultCard";
import EmptySearch from "@/components/shared/EmptySearch";
import ScoreDisplay from "@/components/shared/ScoreDisplay";
import IntegrityBar from "@/components/shared/IntegrityBar";
import DataPagination from "@/components/shared/DataPagination";
import { Button } from "@/components/ui/button";

const desktopTabs: FilterTab[] = [
  { label: "All" },
  { label: "Passed" },
  { label: "Failed" },
  { label: "Flagged" },
];

const allResultItems: SearchItem[] = [
  {
    id: "1",
    title: "Data Structures Midterm",
    subtitle: "CS301 • Jan 10, 2025 • Passed",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "2",
    title: "Operating Systems Final",
    subtitle: "CS402 • Jan 02, 2025 • Passed",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "3",
    title: "Computer Networks Quiz",
    subtitle: "CS305 • Dec 22, 2024 • Flagged",
    icon: <BookOpen size={16} className="text-primary" />,
  },
  {
    id: "4",
    title: "Database Assignment",
    subtitle: "CS220 • Dec 15, 2024 • Failed",
    icon: <BookOpen size={16} className="text-primary" />,
  },
];

type ResultRow = {
  id: string;
  exam: string;
  course: string;
  completedDate: string;
  score: number;
  integrity: number;
  status: "passed" | "flagged" | "failed";
};

const desktopResults: ResultRow[] = [
  {
    id: "r-1",
    exam: "Data Structures Midterm",
    course: "CS301",
    completedDate: "Jan 10, 2025",
    score: 92,
    integrity: 97,
    status: "passed",
  },
  {
    id: "r-2",
    exam: "Operating Systems Final",
    course: "CS402",
    completedDate: "Jan 02, 2025",
    score: 88,
    integrity: 91,
    status: "passed",
  },
  {
    id: "r-3",
    exam: "Computer Networks Quiz",
    course: "CS305",
    completedDate: "Dec 22, 2024",
    score: 74,
    integrity: 63,
    status: "flagged",
  },
  {
    id: "r-4",
    exam: "Database Assignment",
    course: "CS220",
    completedDate: "Dec 15, 2024",
    score: 45,
    integrity: 95,
    status: "failed",
  },
];

const mobileResults = desktopResults.map((r) => ({
  ...r,
  examDate: r.completedDate.toUpperCase(),
}));

const badgeVariant: Record<string, "success" | "warning" | "destructive"> = {
  passed: "success",
  flagged: "warning",
  failed: "destructive",
};

const badgeLabel: Record<string, string> = {
  passed: "Passed",
  flagged: "Flagged",
  failed: "Failed",
};

function filterItems(items: SearchItem[], q: string) {
  if (!q) return items;
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(q.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(q.toLowerCase()),
  );
}

function filterResults<T extends { exam: string; course: string }>(
  items: T[],
  q: string,
) {
  if (!q) return items;
  return items.filter(
    (item) =>
      item.exam.toLowerCase().includes(q.toLowerCase()) ||
      item.course.toLowerCase().includes(q.toLowerCase()),
  );
}

export default function Results() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const searchItems = useMemo(
    () => filterItems(allResultItems, searchQuery),
    [searchQuery],
  );

  const filteredDesktop = useMemo(
    () => filterResults(desktopResults, searchQuery),
    [searchQuery],
  );
  const filteredMobile = useMemo(
    () => filterResults(mobileResults, searchQuery),
    [searchQuery],
  );

  const hasResults = searchQuery ? filteredDesktop.length > 0 : true;

  function handleSearch(q: string) {
    setSearchQuery(q);
    if (q) {
      setSearchParams({ q });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h1 className="lg:hidden font-heading text-2xl font-semibold text-on-surface">
          Results
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Filter tabs={desktopTabs} />
          <div className="flex items-center gap-3">
            <SortSelect
              fields={[
                { value: "date_asc", label: "Date: Oldest" },
                { value: "date_desc", label: "Date: Newest" },
                { value: "score_asc", label: "Score: Low to High" },
                { value: "score_desc", label: "Score: High to Low" },
              ]}
            />
            <SearchModal
              title="Search Results"
              items={searchItems}
              onSearch={handleSearch}
              onSelect={(item) => navigate(PATHS.RESULT_DETAIL(item.id))}
              placeholder="Search results..."
              notFoundText="No results match your search."
            />
          </div>
        </div>
      </section>

      {!hasResults ? (
        <EmptySearch>
          <button
            onClick={() => handleSearch("")}
            className="px-4 py-2 bg-primary text-on-primary rounded-lg font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          >
            Clear search
          </button>
        </EmptySearch>
      ) : (
        <>
          {/* ── Desktop View ──────────────────────────────── */}
          <div className="hidden lg:block">
            <DataTable
              columns={[
                "Exam",
                "Course",
                "Completed Date",
                "Score",
                "Integrity",
                "Status",
                "Actions",
              ]}
            >
              <DataTableBody>
                {filteredDesktop.map((row) => {
                  return (
                    <DataTableRow key={row.id}>
                      <DataTableCell className="font-semibold text-on-surface">
                        <div className="flex items-center gap-3">
                          <ShieldCheck
                            size={16}
                            className="text-primary shrink-0"
                          />
                          <span>{row.exam}</span>
                        </div>
                      </DataTableCell>
                      <DataTableCell className="text-on-surface-variant font-mono">
                        {row.course}
                      </DataTableCell>
                      <DataTableCell className="text-center text-on-surface-variant font-mono">
                        {row.completedDate}
                      </DataTableCell>
                      <DataTableCell className="text-right">
                        <ScoreDisplay score={row.score} total={100} />
                      </DataTableCell>
                      <DataTableCell className="text-center">
                        <IntegrityBar score={row.integrity} />
                      </DataTableCell>
                      <DataTableCell className="text-center">
                        <Badge variant={badgeVariant[row.status]}>
                          {badgeLabel[row.status]}
                        </Badge>
                      </DataTableCell>
                      <DataTableCell className="text-right">
                        <Button
                          onClick={() => navigate(PATHS.RESULT_DETAIL(row.id))}
                        >
                          View Details
                        </Button>
                      </DataTableCell>
                    </DataTableRow>
                  );
                })}
              </DataTableBody>
            </DataTable>
          </div>

          {/* ── Mobile View ──────────────────────────────── */}
          <div className="lg:hidden flex flex-col gap-4">
            {filteredMobile.map((card) => (
          <MobileResultCard
            key={card.id}
            title={card.exam}
            subtitle={card.course}
            status={card.status}
            examDate={card.examDate}
            score={card.score}
            integrityScore={card.integrity}
          />
            ))}
          </div>

          <DataPagination total={24} perPage={4} />
        </>
      )}
    </div>
  );
}
