import { Gavel } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import IntegrityItem from "./IntegrityItem";
import type { IntegrityItem as IntegrityItemType } from "@/types/exam.types";

type IntegrityProtocolCardProps = {
  items: IntegrityItemType[];
};

export default function IntegrityProtocolCard({ items }: IntegrityProtocolCardProps) {
  return (
    <GlassCard className="p-6 space-y-6">
      <h3 className="font-heading text-2xl font-semibold text-on-surface flex items-center gap-2">
        <Gavel className="size-6 text-primary" />
        Integrity Protocol
      </h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <IntegrityItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </ul>
    </GlassCard>
  );
}
