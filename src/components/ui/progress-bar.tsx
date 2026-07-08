import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "h-full rounded-full transition-all",
  {
    variants: {
      variant: {
        success: "bg-green-400",
        warning: "bg-amber-400",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
)

interface ProgressBarProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof progressVariants> {
  value: number
}

function ProgressBar({
  className,
  variant = "success",
  value,
  ...props
}: ProgressBarProps) {
  return (
    <div
      data-slot="progress-bar"
      className={cn(
        "w-full h-1.5 bg-surface-container rounded-full overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className={cn(progressVariants({ variant }))}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}

export { ProgressBar, progressVariants }
