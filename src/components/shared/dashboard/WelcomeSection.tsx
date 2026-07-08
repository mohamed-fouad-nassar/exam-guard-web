const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function WelcomeSection() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
      <div>
        <p className="lg:hidden font-mono text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
          {formattedDate.toUpperCase()}
        </p>
        <h1 className="font-heading text-3xl font-bold lg:font-semibold text-on-surface lg:text-inherit mb-1">
          Welcome back, Sara 👋
        </h1>
        <p className="hidden lg:block text-on-surface-variant">
          {formattedDate}
        </p>
      </div>
    </section>
  );
}
