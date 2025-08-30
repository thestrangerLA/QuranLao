'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { namesOfAllahData } from '@/data/names-of-allah-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NamesOfAllahViewProps {
  goBack: () => void;
}

export default function NamesOfAllahView({ goBack }: NamesOfAllahViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="99 ພະນາມຂອງອັລລໍຮ໌" onBack={goBack} />
      <main className="p-4 space-y-3">
        {namesOfAllahData.map((name) => (
          <Card key={name.number} className="shadow-sm">
            <CardHeader className="p-4">
              <div className="flex justify-between items-start">
                <div className='flex items-center gap-3'>
                    <span className="text-sm font-bold text-primary">{name.number}.</span>
                    <CardTitle className="text-xl font-bold text-primary">{name.transliteration}</CardTitle>
                </div>
                <p className="font-arabic text-3xl text-foreground">{name.arabic}</p>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-md text-muted-foreground">{name.translation}</p>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
