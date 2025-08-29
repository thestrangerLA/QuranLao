'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { History } from 'lucide-react';
import { prophetsData } from '@/data/prophet-history-data';
import { Card, CardContent } from '@/components/ui/card';

interface ProphetHistoryViewProps {
  goBack: () => void;
}

export default function ProphetHistoryView({ goBack }: ProphetHistoryViewProps) {
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
        <Card>
          <CardContent className="p-4">
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-decimal list-inside text-card-foreground">
              {prophetsData.map((prophet, index) => (
                <li key={index} className="font-medium">{prophet}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
