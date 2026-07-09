import type { LucideIcon } from "lucide-react";

type SystemCheckCardProps = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

export default function SystemCheckCard({ icon: Icon, label, detail }: SystemCheckCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/40">
      <div className="size-10 rounded-full bg-green-400/20 flex items-center justify-center shrink-0">
        <Icon className="size-5 text-green-400" />
      </div>
      <div className="min-w-0">
        <p className="text-body-sm font-bold text-on-surface">{label}</p>
        <p className="text-xs text-green-400">{detail}</p>
      </div>
    </div>
  );
}
