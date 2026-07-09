import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

type AutoSaveInfoProps = {
  lastSynced: string;
  className?: string;
};

export default function AutoSaveInfo({
  lastSynced,
  className,
}: AutoSaveInfoProps) {
  return (
    <div
      className={cn(
        "bg-surface-container-highest p-4 rounded-xl border border-outline-variant/30 flex items-start gap-3",
        className,
      )}
    >
      <Info size={20} className="text-primary shrink-0" />
      <div>
        <p className="font-body-sm text-body-sm text-on-surface">
          Auto-save active.
        </p>
        <p className="text-[11px] text-on-surface-variant font-mono mt-1">
          Last synced: {lastSynced}
        </p>
      </div>
    </div>
  );
}
