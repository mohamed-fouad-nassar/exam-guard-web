import { useState } from "react";
import { Shield, Monitor, Copy } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type SecurityToggle = {
  id: string;
  label: string;
  defaultEnabled: boolean;
};

const toggles: SecurityToggle[] = [
  { id: "secure-browser", label: "Secure Browser Required", defaultEnabled: true },
  { id: "prevent-copy", label: "Prevent Copy/Paste", defaultEnabled: true },
];

export default function SecuritySection() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(toggles.map((t) => [t.id, t.defaultEnabled]))
  );

  return (
    <section className="bg-surface-container border border-outline-variant rounded-xl p-6 shadow-sm">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-on-surface mb-6 flex items-center gap-2">
        <Shield size={24} className="text-primary" />
        Security
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container-low border border-outline-variant p-5 rounded-xl flex items-start gap-4">
          <div className="p-3 bg-secondary-container/20 rounded-lg shrink-0">
            <Monitor size={20} className="text-secondary" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-on-surface font-semibold mb-1">
              Secure Browser Required
            </h4>
            <p className="text-on-surface-variant text-sm mb-3">
              Forces students to use the ExamGuard Secure Browser lockdown client.
            </p>
            <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline transition-all cursor-pointer">
              CONFIGURE CLIENT
            </button>
          </div>
          <div className="shrink-0">
            <Switch
              id="secure-browser"
              checked={enabled["secure-browser"]}
              onCheckedChange={(checked) =>
                setEnabled((prev) => ({ ...prev, "secure-browser": checked }))
              }
            />
          </div>
        </div>
        <div className="bg-surface-container-low border border-outline-variant p-5 rounded-xl flex items-start gap-4">
          <div className="p-3 bg-error-container/20 rounded-lg shrink-0">
            <Copy size={20} className="text-error" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-on-surface font-semibold mb-1">
              Prevent Copy/Paste
            </h4>
            <p className="text-on-surface-variant text-sm mb-3">
              Disables clipboard actions within the exam interface.
            </p>
            <span className="font-mono text-[10px] font-semibold bg-error-container text-on-error-container px-2 py-0.5 rounded uppercase tracking-widest">
              HIGH SECURITY
            </span>
          </div>
          <div className="shrink-0">
            <Switch
              id="prevent-copy"
              checked={enabled["prevent-copy"]}
              onCheckedChange={(checked) =>
                setEnabled((prev) => ({ ...prev, "prevent-copy": checked }))
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
