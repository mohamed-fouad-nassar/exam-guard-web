import { cn } from "@/lib/utils";

export type CheckItem = {
  icon: string;
  label: string;
  status: "pass" | "pending" | "fail";
  meta?: string;
};

type SystemChecksCardProps = {
  checks?: CheckItem[];
  className?: string;
};

const statusStyles = {
  pass: {
    icon: "text-green-400 fill-green-400",
    badge: "text-green-400",
    dot: "bg-green-400",
  },
  pending: {
    icon: "text-primary animate-spin",
    badge: "text-primary",
    dot: "bg-primary",
  },
  fail: {
    icon: "text-red-400 fill-red-400",
    badge: "text-red-400",
    dot: "bg-red-400",
  },
};

function CheckIcon({ status }: { status: "pass" | "pending" | "fail" }) {
  if (status === "pending") {
    return (
      <svg
        className={cn("size-[18px] animate-spin shrink-0", statusStyles[status].icon)}
        viewBox="0 0 24 24"
      >
        <path d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" />
      </svg>
    );
  }
  return (
    <svg
      className={cn("size-[18px] shrink-0", statusStyles[status].icon)}
      viewBox="0 0 24 24"
    >
      {status === "pass" ? (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
      ) : (
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z" />
      )}
    </svg>
  );
}

const iconPaths: Record<string, string> = {
  videocam: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z",
  mic: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z",
  speed: "M19.07 4.93A9.97 9.97 0 0 0 12 2c-2.5 0-4.78.96-6.5 2.54L7.16 6.3A7.07 7.07 0 0 1 12 4c3.87 0 7.02 3.13 7.02 7s-3.15 7-7.02 7c-2.47 0-4.64-1.27-5.89-3.2L4.84 15.3A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.58-1.01-4.92-2.6-6.7zM13 6h-2v5h2zm-4 9h2V8H9z",
  lock: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z",
};

const defaultChecks: CheckItem[] = [
  { icon: "videocam", label: "Camera Calibration", status: "pass" },
  { icon: "mic", label: "Audio Feed", status: "pass" },
  { icon: "speed", label: "Connection Stability", status: "pass" },
  { icon: "lock", label: "Safe Browser Active", status: "pass" },
];

export default function SystemChecksCard({
  checks = defaultChecks,
  className,
}: SystemChecksCardProps) {
  return (
    <div
      className={cn(
        "bg-surface-container border border-outline-variant p-4 md:p-6 rounded-lg",
        className,
      )}
    >
      <h3 className="font-heading text-base md:text-lg text-on-surface mb-4 md:mb-6 flex items-center gap-2">
        <svg className="size-5 text-primary" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z" fill="currentColor" />
        </svg>
        System Integrity
      </h3>
      <div className="space-y-4">
        {checks.map((check) => (
          <div
            key={check.label}
            className="flex items-center justify-between p-3 bg-surface-dim rounded border border-outline-variant"
          >
            <div className="flex items-center gap-3">
              <svg
                className={cn("size-[18px] shrink-0", statusStyles[check.status].icon)}
                viewBox="0 0 24 24"
              >
                <path d={iconPaths[check.icon] || iconPaths.videocam} fill="currentColor" />
              </svg>
              <span className="text-body-sm text-on-surface">{check.label}</span>
            </div>
            <div className="flex items-center gap-1">
              {check.meta && (
                <span className="font-mono text-[12px] text-primary mr-1">
                  {check.meta}
                </span>
              )}
              <CheckIcon status={check.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}