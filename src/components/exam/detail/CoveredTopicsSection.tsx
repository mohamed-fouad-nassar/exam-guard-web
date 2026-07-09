import GlassCard from "@/components/shared/GlassCard";
import TopicCard from "./TopicCard";
import type { ExamTopic } from "@/types/exam.types";

type CoveredTopicsSectionProps = {
  topics: ExamTopic[];
};

export default function CoveredTopicsSection({ topics }: CoveredTopicsSectionProps) {
  return (
    <GlassCard className="p-6 md:p-8">
      <h3 className="font-heading text-2xl font-semibold text-on-surface mb-6">
        Covered Topics
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.unit} {...topic} />
        ))}
      </div>
    </GlassCard>
  );
}
