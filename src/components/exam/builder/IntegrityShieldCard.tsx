import { ShieldCheck } from "lucide-react";

type IntegrityParam = {
  label: string;
  enabled: boolean;
};

type IntegrityShieldCardProps = {
  params?: IntegrityParam[];
};

const defaultParams: IntegrityParam[] = [
  { label: "Gaze Tracking", enabled: true },
  { label: "Keylogging", enabled: true },
  { label: "Tab Lockout", enabled: true },
  { label: "Object Detection", enabled: true },
];

export default function IntegrityShieldCard({
  params = defaultParams,
}: IntegrityShieldCardProps) {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 space-y-4 border-l-4 border-l-secondary">
      <div className="flex items-center justify-between">
        <h5 className="font-heading text-base font-semibold text-on-surface">
          Integrity Shield
        </h5>
        <ShieldCheck size={20} className="text-primary" fill="currentColor" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {params.map((param) => (
          <div
            key={param.label}
            className="bg-surface-container-low p-2 rounded text-center"
          >
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">
              {param.label}
            </p>
            <p className="text-xs font-bold text-green-700 dark:text-green-400">
              {param.enabled ? "ENABLED" : "DISABLED"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
