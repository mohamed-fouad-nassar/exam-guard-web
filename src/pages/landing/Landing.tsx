import { Link } from "react-router";
import { PATHS } from "@/router/paths";
import { Shield } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary text-on-primary">
        <Shield className="size-8 fill-current" />
      </div>
      <h1 className="mb-2 font-heading text-5xl font-bold text-primary">
        ExamGuard AI
      </h1>
      <p className="mb-8 max-w-md text-lg text-on-surface-variant">
        AI-powered proctoring platform for secure, fair online examinations.
      </p>
      <div className="flex gap-4">
        <Link
          to={PATHS.LOGIN}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary transition-colors hover:bg-primary/90"
        >
          Sign In
        </Link>
        <Link
          to={PATHS.REGISTER}
          className="rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
