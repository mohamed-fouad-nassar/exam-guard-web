import { cn } from "@/lib/utils";

type IdentityCheckCardProps = {
  studentName?: string;
  courseName?: string;
  verified?: boolean;
  className?: string;
};

export default function IdentityCheckCard({
  studentName = "Marcus Thorne",
  courseName = "CS402: Quantum Algorithms",
  verified = true,
  className,
}: IdentityCheckCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-4 md:p-6 flex flex-col items-center text-center border border-primary/20",
        "bg-surface-container backdrop-blur-[8px]",
        className,
      )}
    >
      <div className="w-16 md:w-20 h-16 md:h-20 rounded-full border-2 border-primary-container p-1 mb-4">
        <div className="w-full h-full rounded-full bg-surface-container-highest flex items-center justify-center">
          <svg className="w-8 md:w-10 h-8 md:h-10 text-on-surface-variant/50" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" fill="currentColor" />
          </svg>
        </div>
      </div>
      <h2 className="font-heading text-lg md:text-h3 text-on-surface mb-1">{studentName}</h2>
      <p className="text-body-sm text-on-surface-variant">{courseName}</p>
      {verified && (
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[12px] text-primary">Identity Verified</span>
        </div>
      )}
    </div>
  );
}