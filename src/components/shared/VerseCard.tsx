'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '../ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, BookText } from 'lucide-react';

interface VerseCardProps {
  number: string;
  arabic: string;
  lao: string;
  english: string;
  showEnglish: boolean;
  explanation?: string;
}

export default function VerseCard({ number, arabic, lao, english, showEnglish, explanation }: VerseCardProps) {
  const content = (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-start text-right">
        <span className="text-sm font-bold text-primary mr-2 leading-loose">{`(${number})`}</span>
        <p className="font-arabic text-2xl leading-relaxed text-foreground">{arabic}</p>
      </div>
      <div>
        <p className="text-lg font-bold text-card-foreground leading-relaxed">{lao}</p>
      </div>
      {showEnglish && (
        <>
          <Separator />
          <div>
            <p className="text-md text-muted-foreground leading-relaxed italic">"{english}"</p>
          </div>
        </>
      )}
    </div>
  );

  if (explanation) {
    return (
      <Card className="shadow-sm mb-4">
        <Accordion type="single" collapsible>
          <AccordionItem value={`item-${number}`} className="border-b-0">
            <AccordionTrigger className="p-0 hover:no-underline focus:no-underline">
               <div className="w-full relative">
                {content}
                <div className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full">
                    <HelpCircle className="w-4 h-4 text-primary" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-0">
              <Separator className="mb-4" />
              <div className="flex items-start gap-3">
                 <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mt-1 shrink-0">
                    <BookText className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                    <h4 className="font-bold text-primary mb-1">ຄຳອະທິບາຍ</h4>
                    <p className="text-sm text-muted-foreground">{explanation}</p>
                 </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm mb-4">
      <CardContent className="p-0">
        {content}
      </CardContent>
    </Card>
  );
}
