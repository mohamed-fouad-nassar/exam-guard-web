import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SubmitInfoCardProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export default function SubmitInfoCard({
  label,
  children,
  className,
}: SubmitInfoCardProps) {
  return (
    <div
      className={cn(
        "p-6 bg-surface-container border border-outline-variant rounded-xl flex flex-col items-center gap-2",
        className,
      )}
    >
      <span className="font-mono text-xs text-outline uppercase tracking-wider">
        {label}
      </span>
      {children}
    </div>
  );
}
