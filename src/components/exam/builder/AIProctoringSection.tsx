import { useState } from "react";
import { BrainCircuit, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type ProctoringToggle = {
  id: string;
  label: string;
  defaultEnabled: boolean;
};

const toggles: ProctoringToggle[] = [
  { id: "camera", label: "Camera Required", defaultEnabled: true },
  { id: "fullscreen", label: "Full-screen Enforcement", defaultEnabled: true },
  { id: "audio", label: "Continuous Audio Stream", defaultEnabled: false },
  { id: "object-detection", label: "Object Detection (Phone)", defaultEnabled: true },
];

export default function AIProctoringSection() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(toggles.map((t) => [t.id, t.defaultEnabled]))
  );

  return (
    <section className="bg-surface-container border border-outline-variant rounded-xl p-6 shadow-sm overflow-hidden relative">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
      <h2 className="font-heading text-2xl md:text-3xl font-semibold text-on-surface mb-2 flex items-center gap-2">
        <BrainCircuit size={24} className="text-primary" />
        AI Proctoring
      </h2>
      <p className="text-on-surface-variant text-sm mb-6">
        Automated integrity verification using computer vision.
      </p>
      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg flex items-start gap-3 mb-6">
        <Info size={18} className="text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-primary">
          Monitoring is enabled. AI will flag suspicious head movements, multiple people, and
          unauthorized objects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {toggles.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between py-2 border-b border-outline-variant/30"
          >
            <Label htmlFor={t.id} className="text-on-surface font-medium cursor-pointer">
              {t.label}
            </Label>
            <Switch
              id={t.id}
              checked={enabled[t.id]}
              onCheckedChange={(checked) =>
                setEnabled((prev) => ({ ...prev, [t.id]: checked }))
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
