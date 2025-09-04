'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { glossaryData } from '@/data/glossary-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface GlossaryViewProps {
  goBack: () => void;
}

export default function GlossaryView({ goBack }: GlossaryViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມໝາຍຄຳສັບ" onBack={goBack} />
      <main className="p-4 space-y-6">
        {glossaryData.map((category) => (
          <div key={category.category}>
            <h2 className="text-xl font-bold text-primary mb-3">{category.category}</h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {category.terms.map((term) => (
                <AccordionItem key={term.term} value={term.term} className="bg-card border-none rounded-lg shadow-sm px-4">
                  <AccordionTrigger className="text-md font-semibold text-card-foreground no-underline hover:no-underline">
                    {term.term}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {term.definition}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </main>
    </div>
  );
}
