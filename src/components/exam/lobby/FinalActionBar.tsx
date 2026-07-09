import { cn } from "@/lib/utils";

type FinalActionBarProps = {
  allChecksPassed?: boolean;
  onStart?: () => void;
  className?: string;
};

export default function FinalActionBar({
  allChecksPassed = true,
  onStart,
  className,
}: FinalActionBarProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between gap-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-green-900/10 border border-green-800 flex items-center justify-center shrink-0">
          <svg
            className="size-6 text-green-400 fill-green-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
          </svg>
        </div>
        <div>
          <p className="text-button text-on-surface">All Checks Passed</p>
          <p className="text-on-surface-variant text-[12px]">
            Ready for authentication handshake
          </p>
        </div>
      </div>

      <button
        onClick={onStart}
        disabled={!allChecksPassed}
        className={cn(
          "w-full sm:w-auto px-12 py-4 rounded-lg text-lg font-heading font-semibold",
          "flex items-center justify-center gap-3 transition-all active:scale-95",
          allChecksPassed
            ? "bg-primary-container text-on-primary-container hover:brightness-110 shadow-lg"
            : "bg-surface-container-high text-on-surface-variant cursor-not-allowed",
        )}
      >
        Start Exam
        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
        </svg>
      </button>
    </div>
  );
}
