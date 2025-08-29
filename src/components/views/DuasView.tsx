'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { duasData } from '@/data/duas-data';

interface DuasViewProps {
  goBack: () => void;
}

export default function DuasView({ goBack }: DuasViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ບົດຂໍພອນ (ດຸອາ)" onBack={goBack} />
      <main className="p-4 space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {duasData.map((dua) => (
            <AccordionItem key={dua.title} value={dua.title}>
              <AccordionTrigger className="text-md font-semibold text-primary text-left">{dua.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                    <p className="font-arabic text-2xl leading-relaxed text-right text-foreground">{dua.arabic}</p>
                    <p className="text-lg font-bold text-card-foreground leading-relaxed">{dua.lao}</p>
                    <p className="text-md text-muted-foreground leading-relaxed italic">"{dua.translation}"</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
