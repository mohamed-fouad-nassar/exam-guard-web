import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/types/exam.types";

type ExamFaqSectionProps = {
  faqs: FaqItem[];
};

export default function ExamFaqSection({ faqs }: ExamFaqSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-semibold text-on-surface">
        Frequently Asked Questions
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-outline-variant rounded-xl bg-surface-container overflow-hidden px-0"
          >
            <AccordionTrigger className="px-6 py-5 font-bold text-body-md hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-on-surface-variant text-body-md">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
