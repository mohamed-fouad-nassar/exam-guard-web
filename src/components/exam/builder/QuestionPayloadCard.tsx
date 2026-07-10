type QuestionPayload = {
  type: string;
  count: number;
};

type QuestionPayloadCardProps = {
  total?: number;
  items?: QuestionPayload[];
};

export default function QuestionPayloadCard({
  total = 24,
  items = [
    { type: "Multiple Choice", count: 18 },
    { type: "True/False", count: 6 },
  ],
}: QuestionPayloadCardProps) {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 space-y-4 border-l-4 border-l-primary">
      <div className="flex items-center justify-between">
        <h5 className="font-heading text-base font-semibold text-on-surface">
          Question Payload
        </h5>
        <span className="font-mono text-[12px] font-medium tracking-[0.05em] text-primary">
          {total} Total
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.type}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-on-surface-variant">{item.type}</span>
            <span className="text-on-surface font-bold">{item.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
