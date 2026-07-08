import type { LucideIcon } from "lucide-react";
import StatCard from "@/components/student/StatCard";

export type StatCardData = {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle?: string;
  subtitleClassName?: string;
  mobileLabel?: string;
  mobileValue?: string;
  mobileIcon?: LucideIcon;
};

type StatsSectionProps = {
  cards: StatCardData[];
};

export default function StatsSection({ cards }: StatsSectionProps) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
      {cards.map((card) => (
        <StatCard key={card.label} {...card} />
      ))}
    </section>
  );
}
