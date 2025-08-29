'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { History, ChevronRight } from 'lucide-react';
import { prophetsData } from '@/data/prophet-history-data';
import { Card, CardContent } from '@/components/ui/card';

interface ProphetHistoryViewProps {
  goBack: () => void;
}

export default function ProphetHistoryView({ goBack }: ProphetHistoryViewProps) {
  const handleClick = (prophetName: string) => {
    // This function is ready for when you want to add detail views.
    console.log(`Clicked on ${prophetName}`);
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
          {prophetsData.map((prophet, index) => (
            <Card key={index} className="shadow-sm cursor-pointer hover:bg-secondary" onClick={() => handleClick(prophet)}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{index + 1}.</span>
                    <span className="font-medium text-card-foreground">{prophet}</span>
                </div>
                <ChevronRight className="text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
