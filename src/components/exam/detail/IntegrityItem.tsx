import type { LucideIcon } from "lucide-react";

type IntegrityItemProps = {
  icon: LucideIcon;
  label: string;
};

export default function IntegrityItem({ icon: Icon, label }: IntegrityItemProps) {
  return (
    <li className="flex items-center gap-3">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <Icon className="size-5" />
      </div>
      <span className="text-body-md text-on-surface-variant">{label}</span>
    </li>
  );
}
