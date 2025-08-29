'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { glossaryData } from '@/data/glossary-data';

interface GlossaryViewProps {
  goBack: () => void;
}

export default function GlossaryView({ goBack }: GlossaryViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມໝາຍຄຳສັບ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {glossaryData.map((category) => (
            <AccordionItem key={category.category} value={category.category}>
              <AccordionTrigger className="text-lg font-bold text-primary">{category.category}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                  {category.terms.map((term) => (
                    <div key={term.term} className="border-b pb-2">
                      <p className="font-semibold text-card-foreground">{term.term}</p>
                      <p className="text-muted-foreground">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
