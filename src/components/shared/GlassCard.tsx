import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
} & React.ComponentPropsWithoutRef<"div">;

export default function GlassCard({
  children,
  className,
  as: Tag = "div",
  ...props
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface-container/60 backdrop-blur-xl border border-outline-variant rounded-xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
