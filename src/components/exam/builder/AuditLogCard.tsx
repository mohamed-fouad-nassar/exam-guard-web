type AuditEntry = {
  time: string;
  tag: string;
  tagColor: string;
  message: string;
  highlight?: string;
  highlightColor?: string;
};

type AuditLogCardProps = {
  entries?: AuditEntry[];
};

const defaultEntries: AuditEntry[] = [
  {
    time: "14:02:11",
    tag: "[SYSTEM]",
    tagColor: "text-green-700 dark:text-green-400",
    message: "Exam status transitioned to",
    highlight: "PUBLISHED",
    highlightColor: "text-green-700 dark:text-green-400",
  },
  {
    time: "13:58:45",
    tag: "[PREVIEW]",
    tagColor: "text-secondary",
    message: "Preview session generated for Proctor review. No anomalies detected.",
  },
  {
    time: "13:45:22",
    tag: "[BUILDER]",
    tagColor: "text-primary",
    message: "Exam content validated. Readiness score: 100/100.",
  },
];

export default function AuditLogCard({
  entries = defaultEntries,
}: AuditLogCardProps) {
  return (
    <div className="md:col-span-2 bg-surface-container border border-outline-variant rounded-xl p-6 space-y-4">
      <h5 className="font-heading text-base font-semibold text-on-surface">
        Audit Log
      </h5>
      <div className="space-y-4 font-mono text-[13px] font-medium">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="flex items-start gap-4 text-on-surface-variant"
          >
            <span className="text-primary opacity-60 shrink-0">
              {entry.time}
            </span>
            <span className={`${entry.tagColor} shrink-0`}>{entry.tag}</span>
            <span>
              {entry.message}{" "}
              {entry.highlight && (
                <span className={entry.highlightColor}>{entry.highlight}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
