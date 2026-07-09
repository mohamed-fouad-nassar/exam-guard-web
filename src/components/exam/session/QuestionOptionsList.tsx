import { cn } from "@/lib/utils";
import QuestionOption from "./QuestionOption";

type Option = {
  value: string;
  label: string;
};

type QuestionOptionsListProps = {
  name: string;
  options: Option[];
  selected?: string;
  onSelect: (value: string) => void;
  className?: string;
};

export default function QuestionOptionsList({
  name,
  options,
  selected,
  onSelect,
  className,
}: QuestionOptionsListProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {options.map((opt) => (
        <QuestionOption
          key={opt.value}
          name={name}
          value={opt.value}
          checked={selected === opt.value}
          onSelect={onSelect}
        >
          {opt.label}
        </QuestionOption>
      ))}
    </div>
  );
}
