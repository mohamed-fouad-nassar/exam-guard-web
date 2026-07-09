import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type QuestionOptionProps = {
  value: string;
  checked?: boolean;
  onSelect?: (value: string) => void;
  children: string;
  name: string;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onSelect" | "children">;

export default function QuestionOption({
  value,
  checked,
  onSelect,
  children,
  name,
  className,
  ...inputProps
}: QuestionOptionProps) {
  return (
    <label
      className={cn(
        "group flex items-center p-4 rounded-xl border cursor-pointer transition-all",
        checked
          ? "border-primary bg-primary-container/10"
          : "border-outline-variant bg-surface-container hover:border-primary active:bg-secondary-container/10",
        className,
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onSelect?.(value)}
        className="w-5 h-5 text-primary-container bg-surface-dim border-outline focus:ring-primary-container focus:ring-offset-surface-dim"
        {...inputProps}
      />
      <span
        className={cn(
          "ml-4 font-body-md transition-colors",
          checked ? "text-primary" : "text-on-surface group-hover:text-primary",
        )}
      >
        {children}
      </span>
    </label>
  );
}
