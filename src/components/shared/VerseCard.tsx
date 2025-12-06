'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from '../ui/separator';

interface VerseCardProps {
  number: string;
  arabic: string;
  lao: string;
  english: string;
  showEnglish: boolean;
  explanation?: string;
}

export default function VerseCard({ number, arabic, lao, english, showEnglish, explanation }: VerseCardProps) {
  const footnoteNumber = explanation ? 1 : 0;
  return (
    <Card className="shadow-sm mb-4">
       <Accordion type="single" collapsible disabled={!explanation}>
        <AccordionItem value="item-1" className="border-b-0">
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-start text-right">
              <span className="text-sm font-bold text-primary mr-2 leading-loose">{`(${number})`}</span>
              <p className="font-arabic text-2xl leading-relaxed text-foreground text-right flex-grow">{arabic}</p>
            </div>
            <div className="text-left">
               <p className="text-lg text-card-foreground leading-relaxed">
                {lao}
                {explanation && (
                    <AccordionTrigger className="inline-flex items-center justify-center p-0 ml-1 text-primary hover:no-underline">
                        <sup className="font-bold text-sm">[{footnoteNumber}]</sup>
                    </AccordionTrigger>
                )}
              </p>
            </div>
            {showEnglish && (
              <>
                <Separator />
                <div className="text-left">
                  <p className="text-md text-muted-foreground leading-relaxed italic">"{english}"</p>
                </div>
              </>
            )}
          </CardContent>
          {explanation && (
            <AccordionContent className="px-4 pb-4">
                <Separator className="mb-4" />
                <div className="space-y-2 text-sm text-muted-foreground">
                   {explanation.split('\n').map((line, index) => <p key={index}>{line}</p>)}
                </div>
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
