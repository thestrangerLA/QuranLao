'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '../ui/separator';

interface VerseCardProps {
  number: string;
  arabic: string;
  lao: string;
  english: string;
  showEnglish: boolean;
}

export default function VerseCard({ number, arabic, lao, english, showEnglish }: VerseCardProps) {
  return (
    <Card className="shadow-sm mb-4">
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-start text-right">
          <span className="text-sm font-bold text-primary mr-2 leading-loose">{`(${number})`}</span>
          <p className="font-arabic text-2xl leading-relaxed text-foreground text-right flex-grow">{arabic}</p>
        </div>
        <div className="text-left">
          <p className="text-lg font-bold text-card-foreground leading-relaxed">
            {lao}
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
    </Card>
  );
}
