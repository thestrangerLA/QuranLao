'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { namesOfAllahData, type NameOfAllah } from '@/data/names-of-allah-data';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import type { View } from '@/app/page';
import { Badge } from '@/components/ui/badge';

interface NamesOfAllahViewProps {
  goBack: () => void;
  navigateTo: (view: View, data: NameOfAllah) => void;
}

export default function NamesOfAllahView({ goBack, navigateTo }: NamesOfAllahViewProps) {
  const handleClick = (name: NameOfAllah) => {
    if (name.description) {
      navigateTo('name-detail', name);
    }
  };

  return (
    <div className="flex flex-col">
      <ViewHeader title="99 ພະນາມຂອງອັລລໍຮ໌" onBack={goBack} />
      <main className="p-4 space-y-3">
        {namesOfAllahData.map((name) => {
          const isAvailable = !!name.description;
          return (
            <Card 
              key={name.number} 
              className={`shadow-sm ${isAvailable ? 'cursor-pointer hover:bg-secondary' : 'opacity-70'}`}
              onClick={() => isAvailable && handleClick(name)}
            >
              <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">{name.number}.</span>
                      <div className='flex flex-col'>
                        <p className="text-xl font-bold text-primary">{name.transliteration}</p>
                        <p className="text-md text-muted-foreground">{name.translation}</p>
                      </div>
                  </div>
                   <div className="flex items-center gap-4">
                      <p className="font-arabic text-3xl text-foreground text-right">{name.arabic}</p>
                      <div className="w-24 flex justify-end">
                        {isAvailable ? (
                          <ChevronRight className="text-muted-foreground" />
                        ) : (
                          <Badge variant="secondary">Coming Soon</Badge>
                        )}
                      </div>
                  </div>
              </CardContent>
            </Card>
          );
        })}
      </main>
    </div>
  );
}
