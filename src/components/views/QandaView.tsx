'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { HelpCircle } from 'lucide-react';

interface QandaViewProps {
  goBack: () => void;
}

export default function QandaView({ goBack }: QandaViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຖາມ-ຕອບ" onBack={goBack} />
      <main className="p-4 text-center">
        <div className="flex flex-col items-center justify-center h-full mt-16">
            <HelpCircle className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">ລາຍລະອຽດກຳລັງຈະມາໃນໄວໆນີ້</h2>
            <p className="text-muted-foreground">ພວກເຮົາກຳລັງດຳເນີນການເພີ່ມເນື້ອຫາສຳລັບໜ້ານີ້.</p>
        </div>
      </main>
    </div>
  );
}
