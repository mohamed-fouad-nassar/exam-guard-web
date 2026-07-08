import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle?: string;
  subtitleClassName?: string;
  mobileLabel?: string;
  mobileValue?: string;
  mobileIcon?: LucideIcon;
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  subtitle,
  subtitleClassName,
  mobileLabel,
  mobileValue,
  mobileIcon: MobileIcon,
}: StatCardProps) {
  const MobileIconComponent = MobileIcon ?? Icon;

  return (
    <div className="bg-surface-container lg:bg-surface-container-low border border-outline-variant p-4 lg:p-5 rounded-xl flex flex-col justify-between lg:block">
      <div className="lg:hidden">
        <MobileIconComponent size={24} className="text-primary" />
      </div>
      <div className="hidden lg:flex items-center justify-between mb-4">
        <div className="size-10 rounded bg-primary-container/20 flex items-center justify-center text-primary">
          <Icon size={20} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          {label}
        </span>
      </div>
      <div>
        <p className="lg:hidden font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          {mobileLabel ?? label}
        </p>
        <span className="font-heading text-2xl font-bold text-on-surface">
          {mobileValue ?? value}
        </span>
        {subtitle && (
          <span
            className={`hidden lg:block text-sm mt-0.5 ${subtitleClassName ?? "text-on-surface-variant"}`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
