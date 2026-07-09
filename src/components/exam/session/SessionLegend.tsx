import { cn } from "@/lib/utils";

type LegendItem = {
  color: string;
  label: string;
};

type SessionLegendProps = {
  items: LegendItem[];
  className?: string;
};

export default function SessionLegend({
  items,
  className,
}: SessionLegendProps) {
  return (
    <div className={cn("flex flex-wrap gap-4 pb-6 border-b border-outline-variant", className)}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <div className={cn("w-3 h-3 rounded-sm", item.color)} />
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
