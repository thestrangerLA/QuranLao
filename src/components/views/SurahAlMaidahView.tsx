'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { BookOpen } from 'lucide-react';

interface SurahAlMaidahViewProps {
  goBack: () => void;
}

export default function SurahAlMaidahView({ goBack }: SurahAlMaidahViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="Al-Ma'idah" onBack={goBack} />
      <main className="p-4 text-center">
        <div className="flex flex-col items-center justify-center h-full mt-16">
            <BookOpen className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">ລາຍລະອຽດກຳລັງຈະມາໃນໄວໆນີ້</h2>
            <p className="text-muted-foreground">ພວກເຮົາກຳລັງດຳເນີນການເພີ່ມເນື້ອຫາສຳລັບຊູຣະນີ້.</p>
        </div>
      </main>
    </div>
  );
}
