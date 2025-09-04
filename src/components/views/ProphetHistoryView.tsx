'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { History, ChevronRight } from 'lucide-react';
import { prophetsData } from '@/data/prophet-history-data';
import { Card, CardContent } from '@/components/ui/card';
import type { View } from '@/app/page';
import { Badge } from '@/components/ui/badge';

interface ProphetHistoryViewProps {
  goBack: () => void;
  navigateTo: (view: View) => void;
}

const availableProphets = ['adam', 'idris', 'nuh'];

export default function ProphetHistoryView({ goBack, navigateTo }: ProphetHistoryViewProps) {
  const handleClick = (id: string) => {
    if (id === 'adam') {
      navigateTo('prophet-adam');
    } else if (id === 'idris') {
      navigateTo('prophet-idris');
    } else if (id === 'nuh') {
      navigateTo('prophet-nuh');
    }
    // Future prophets can be handled here
  };

  return (
    <div className="flex flex-col">
      <ViewHeader title="ປະຫວັດສາດສະດາ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="25 ສາດສະດາໃນຄຳພີກຸຣອານ" icon={<History />}>
          <p>
            ໃນສາສະໜາອິດສະລາມ, ມີສາດສະດາ (ນະບີ) 25 ທ່ານທີ່ຖືກກ່າວຊື່ໃນຄຳພີກຸຣອານ.
            ພວກທ່ານຖືກສົ່ງມາເພື່ອນຳພາຜູ້ຄົນໃນຍຸກຕ່າງໆ.
          </p>
        </ContentSection>
        <div className="space-y-3">
          {prophetsData.map((prophet, index) => {
            const isAvailable = availableProphets.includes(prophet.id);
            return (
              <Card 
                key={prophet.id} 
                className={`shadow-sm ${isAvailable ? 'cursor-pointer hover:bg-secondary' : 'opacity-60'}`}
                onClick={() => isAvailable && handleClick(prophet.id)}
              >
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{index + 1}.</span>
                      <span className="font-medium text-card-foreground">{prophet.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!isAvailable && (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                    {isAvailable && <ChevronRight className="text-muted-foreground" />}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
