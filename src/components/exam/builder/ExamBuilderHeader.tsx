import type { ReactNode } from "react";

export type BuilderAction = {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
};

type ExamBuilderHeaderProps = {
  title: string;
  subtitle: string;
  primaryAction?: BuilderAction;
  secondaryAction?: BuilderAction;
};

export default function ExamBuilderHeader({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: ExamBuilderHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="font-heading text-[30px] font-semibold leading-[1.3] text-on-surface">
          {title}
        </h1>
        <p className="text-on-surface-variant text-base leading-[1.6]">
          {subtitle}
        </p>
      </div>
      {(primaryAction || secondaryAction) && (
        <div className="flex items-center gap-3">
          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-sans text-sm font-semibold leading-none rounded-lg border border-outline-variant transition-all cursor-pointer"
            >
              {secondaryAction.icon && (
                <span className="text-[18px]">{secondaryAction.icon}</span>
              )}
              {secondaryAction.label}
            </button>
          )}
          {primaryAction && (
            <button
              onClick={primaryAction.onClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/80 font-sans text-sm font-semibold leading-none rounded-lg border border-transparent transition-all cursor-pointer"
            >
              {primaryAction.icon && (
                <span className="text-[18px]">{primaryAction.icon}</span>
              )}
              {primaryAction.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
