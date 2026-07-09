import { CheckCircle } from "lucide-react";

export default function SubmitSuccessIcon() {
  return (
    <div className="relative mb-8 md:mb-12">
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150" />
      <div className="relative h-32 w-32 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-primary/5 rounded-full"
          style={{
            animation: "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        <CheckCircle className="size-16 text-primary" fill="currentColor" />
      </div>
    </div>
  );
}
