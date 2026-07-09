import { Shield } from "lucide-react";

export default function ExamSecureBadge() {
  return (
    <div className="flex items-center gap-2 text-primary">
      <Shield className="size-4 fill-primary/20" />
      <span className="font-mono text-xs uppercase tracking-[0.2em]">
        Active Session • Secure Environment
      </span>
    </div>
  );
}
