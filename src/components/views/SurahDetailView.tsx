'use client';
import { useState } from 'react';
import ViewHeader from '@/components/shared/ViewHeader';
import { type Surah, type Verse } from '@/data/quran-data';
import { alFatiha } from '@/data/quran/al-fatiha';
import VerseCard from '@/components/shared/VerseCard';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface SurahDetailViewProps {
  goBack: () => void;
  surah: Surah | null;
}

const surahDataMap: { [key: number]: Verse[] } = {
  1: alFatiha,
};

export default function SurahDetailView({ goBack, surah }: SurahDetailViewProps) {
  const [showEnglish, setShowEnglish] = useState(false);

  if (!surah) {
    return (
      <div className="flex flex-col">
        <ViewHeader title="ບໍ່ພົບຂໍ້ມູນ" onBack={goBack} />
        <main className="p-4">
          <p>ບໍ່ສາມາດໂຫຼດຂໍ້ມູນ Surah ໄດ້. ກະລຸນາກັບຄືນແລະລອງໃໝ່.</p>
        </main>
      </div>
    );
  }

  const verses = surahDataMap[surah.number] || [];

  return (
    <div className="flex flex-col">
      <ViewHeader title={surah.name} onBack={goBack} />

      <div className="p-4 bg-secondary flex justify-between items-center sticky top-0 z-10 border-b">
         <div>
            <h2 className="text-xl font-bold text-primary">{surah.name}</h2>
            <p className="text-sm text-muted-foreground">{surah.translation}</p>
         </div>
         <div className="flex items-center space-x-2">
          <Switch
            id="english-toggle"
            checked={showEnglish}
            onCheckedChange={setShowEnglish}
          />
          <Label htmlFor="english-toggle" className="text-sm">ສະແດງພາສາອັງກິດ</Label>
        </div>
      </div>

      <main className="p-4">
        {verses.map((verse) => (
          <VerseCard
            key={verse.number}
            number={verse.number}
            arabic={verse.arabic}
            lao={verse.lao}
            english={verse.english}
            showEnglish={showEnglish}
          />
        ))}
      </main>
    </div>
  );
}
