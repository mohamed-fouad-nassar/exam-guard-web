import { cn } from "@/lib/utils";

type StatItem = {
  label: string;
  value: string;
  color: "primary" | "amber" | "on-surface";
};

type StatusSummaryProps = {
  stats: StatItem[];
  className?: string;
};

const statColorMap = {
  primary: "text-primary-container",
  amber: "text-amber-400",
  "on-surface": "text-on-surface",
};

function StatCard({ label, value, color }: StatItem) {
  return (
    <div className="bg-surface-container rounded-lg p-3 border border-outline-variant">
      <span className="block font-mono text-[12px] text-on-surface-variant mb-1 uppercase">
        {label}
      </span>
      <span className={cn("font-heading text-h3", statColorMap[color])}>
        {value}
      </span>
    </div>
  );
}

export default function StatusSummary({
  stats,
  className,
}: StatusSummaryProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
