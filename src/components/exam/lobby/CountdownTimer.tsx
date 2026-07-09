import { cn } from "@/lib/utils";

type CountdownTimerProps = {
  label?: string;
  hours?: number;
  minutes?: number;
  seconds?: number;
  progress?: number;
  className?: string;
};

export default function CountdownTimer({
  label = "COUNTDOWN TO START",
  hours = 0,
  minutes = 0,
  seconds = 0,
  progress = 0,
  className,
}: CountdownTimerProps) {
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "bg-surface-container-high border border-outline-variant p-4 md:p-6 flex flex-col items-center rounded-lg",
        className,
      )}
    >
      <span className="font-mono text-[10px] md:text-[12px] text-on-surface-variant mb-2 tracking-wider uppercase">
        {label}
      </span>
      <div className="font-heading text-2xl md:text-[30px] font-bold tracking-tighter text-primary tabular-nums">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </div>

      {progress > 0 && (
        <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-primary-container animate-pulse"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="mt-2 flex items-center gap-2 text-green-400">
        <svg
          className="size-[18px] fill-green-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-wider">
          Session Ready
        </span>
      </div>
    </div>
  );
}