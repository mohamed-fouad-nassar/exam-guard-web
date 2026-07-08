import { cn } from "@/lib/utils"

type MobileExamCardProps = {
  badge: string
  badgeVariant?: "accent" | "default" | "warning"
  title: string
  subtitle: string
  footerText?: string
}

const badgeStyles: Record<string, string> = {
  accent:
    "bg-secondary-container/60 border-secondary-container text-on-secondary-container",
  default:
    "bg-outline-variant/60 border-outline-variant text-on-surface-variant",
  warning:
    "bg-error-container/40 border-error text-on-error-container",
}

export default function MobileExamCard({
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  footerText,
}: MobileExamCardProps) {
  return (
    <div className="p-5 bg-surface-container border border-outline-variant rounded-xl group transition-all active:bg-surface-container-high">
      <div className="flex justify-between items-start mb-3">
        <div
          className={cn(
            "px-2 py-1 border rounded text-[10px] font-mono font-medium",
            badgeStyles[badgeVariant]
          )}
        >
          {badge}
        </div>
        <span className="text-on-surface-variant text-sm font-bold">...</span>
      </div>
      <h4 className="text-base font-bold text-on-surface mb-1">{title}</h4>
      <p className="text-sm text-on-surface-variant mb-4">{subtitle}</p>
      {footerText && (
        <div className="pt-4 border-t border-outline-variant">
          <p className="text-xs text-on-surface-variant">{footerText}</p>
        </div>
      )}
    </div>
  )
}
