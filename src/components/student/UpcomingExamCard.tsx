import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

type UpcomingExamCardProps = {
  icon: LucideIcon;
  title: string;
  date: string;
  time: string;
  variant: "urgent" | "future";
  onAction?: () => void;
  actionLabel?: string;
};

export default function UpcomingExamCard({
  icon: Icon,
  title,
  date,
  time,
  variant,
  onAction,
  actionLabel,
}: UpcomingExamCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6",
        variant === "urgent"
          ? "bg-surface-container-high border-l-4 border-amber-400"
          : "bg-surface-container-low border border-outline-variant opacity-60",
      )}
    >
      <div className="flex items-center gap-5 w-full">
        <div className="relative shrink-0">
          <div className="size-14 bg-surface-container flex items-center justify-center rounded-lg border border-outline-variant">
            <Icon size={28} className="text-on-surface-variant" />
          </div>
          {variant === "urgent" && (
            <div className="absolute -top-1 -right-1 size-4 bg-amber-400 rounded-full border-4 border-surface-container-high animate-pulse" />
          )}
        </div>
        <div className="min-w-0">
          <h4 className="font-heading text-lg font-bold text-on-surface truncate">
            {title}
          </h4>
          <div className="flex items-center gap-3 mt-1 text-on-surface-variant text-sm flex-wrap">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {time}
            </span>
            {variant === "urgent" && (
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] ml-2">
                Lobby Open
              </span>
            )}
          </div>
        </div>
      </div>
      {variant === "urgent" ? (
        <Button
          onClick={onAction}
          className="shrink-0 shadow-lg shadow-primary/20 w-full md:w-auto"
        >
          {actionLabel ?? "Enter Lobby"}
        </Button>
      ) : (
        <Button
          disabled
          variant="secondary"
          className="shrink-0 cursor-not-allowed w-full md:w-auto"
        >
          {actionLabel ?? "Not Open Yet"}
        </Button>
      )}
    </div>
  );
}
