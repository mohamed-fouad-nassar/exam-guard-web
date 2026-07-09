import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

type BackButtonProps = {
  title?: string;
};

export default function BackButton({ title = "Back" }: BackButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="pb-4 inline-flex items-center gap-1.5 text-body-sm text-on-surface-variant hover:text-primary transition-colors"
    >
      <ArrowLeft size={16} />
      {title}
    </button>
  );
}
