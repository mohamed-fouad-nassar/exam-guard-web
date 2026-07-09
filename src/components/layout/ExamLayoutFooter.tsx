export default function ExamLayoutFooter() {
  return (
    <footer className="bg-surface-dim border-t border-outline-variant px-6 py-6 shrink-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Technical Support
          </a>
        </div>
        <span className="text-body-sm text-secondary text-center opacity-80">
          © 2024 ExamGuard AI. Secure Proctoring Environment.
        </span>
      </div>
    </footer>
  );
}
