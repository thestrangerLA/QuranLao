'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import QuranCard from '@/components/shared/QuranCard';
import { quranData, type Surah } from '@/data/quran-data';
import type { View } from '@/app/page';

interface QuranViewProps {
  goBack: () => void;
  navigateTo: (view: View, data: Surah) => void;
}

export default function QuranView({ goBack, navigateTo }: QuranViewProps) {
  const handleSurahClick = (surah: Surah) => {
    navigateTo('surah-detail', surah);
  };

  return (
    <div className="flex flex-col">
      <ViewHeader title="ກຸຣອານ" onBack={goBack} />
      <main className="p-4 space-y-3">
        {quranData.map((surah) => (
          <QuranCard
            key={surah.number}
            number={String(surah.number)}
            title={surah.name}
            verses={`${surah.numberOfAyahs} Verses`}
            arabicTitle={surah.arabicName}
            onClick={() => handleSurahClick(surah)}
          />
        ))}
      </main>
    </div>
  );
}
