type TopicCardProps = {
  unit: string;
  title: string;
  description: string;
};

export default function TopicCard({ unit, title, description }: TopicCardProps) {
  return (
    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
      <span className="font-mono text-xs text-primary mb-1 block tracking-wide uppercase">
        {unit}
      </span>
      <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-body-sm text-on-surface-variant mt-2">{description}</p>
    </div>
  );
}
