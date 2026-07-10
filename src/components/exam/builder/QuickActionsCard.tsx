import { Sparkles, ChevronRight } from "lucide-react";

export type QuickAction = {
  label: string;
  icon: typeof Sparkles;
  onClick?: () => void;
};

type QuickActionsCardProps = {
  actions: QuickAction[];
};

export default function QuickActionsCard({ actions }: QuickActionsCardProps) {
  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 space-y-4">
      <h5 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
        Quick Actions
      </h5>
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.label}
            onClick={action.onClick}
            className="w-full flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-outline-variant hover:border-primary-container transition-all text-on-surface group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Icon size={18} className="text-primary" />
              <span className="text-sm font-semibold">{action.label}</span>
            </div>
            <ChevronRight
              size={18}
              className="text-on-surface-variant group-hover:translate-x-1 transition-transform"
            />
          </button>
        );
      })}
    </div>
  );
}
