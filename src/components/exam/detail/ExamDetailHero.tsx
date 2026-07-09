import ExamSecureBadge from "./ExamSecureBadge";

type ExamDetailHeroProps = {
  title: string;
  description: string;
};

export default function ExamDetailHero({ title, description }: ExamDetailHeroProps) {
  return (
    <section className="space-y-4">
      <ExamSecureBadge />
      <h1 className="font-heading text-3xl md:text-[30px] font-semibold text-on-surface leading-[1.3]">
        {title}
      </h1>
      <p className="text-on-surface-variant max-w-2xl text-body-md">
        {description}
      </p>
    </section>
  );
}
