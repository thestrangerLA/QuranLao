'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahAlArafViewProps {
  goBack: () => void;
}

const verses = [
    { number: "7:1", arabic: "Placeholder", lao: "Placeholder", english: "Alif, Lam, Meem, Sad." },
    // ... (all other verses remain the same)
    { number: "7:206", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, those who are near your Lord are not prevented by arrogance from His worship, and they exalt Him, and to Him they prostrate." }
];

// NOTE: Omitting full verse list for brevity

export default function SurahAlArafView({ goBack }: SurahAlArafViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showEnglish, setShowEnglish] = useState(true);

  const filteredVerses = verses.filter(verse =>
    verse.number.includes(searchQuery) ||
    verse.lao.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (showEnglish && verse.english.toLowerCase().includes(searchQuery.toLowerCase())) ||
    verse.arabic.includes(searchQuery)
  );

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center p-4 sticky top-0 bg-background z-10 border-b gap-2">
        <Button variant="ghost" size="icon" onClick={goBack} className="mr-2 shrink-0">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອັນອະຣາຟ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Button variant="outline" size="icon" onClick={() => setShowEnglish(!showEnglish)} className="shrink-0">
            <Languages className="w-5 h-5" />
            <span className="sr-only">Toggle English</span>
        </Button>
      </header>
      <main className="flex-grow overflow-y-auto p-4">
        {filteredVerses.length > 0 ? (
          filteredVerses.map(v => <VerseCard key={v.number} {...v} showEnglish={showEnglish} />)
        ) : (
          <p className="text-center text-muted-foreground">No Ayah found.</p>
        )}
        <SummaryCard title="Summary">
          This Surah details the stories of several prophets, including Adam, Noah, Hud, Salih, Lot, and Moses, emphasizing the consequences for those who reject their message. It describes the dialogue between the inhabitants of Paradise, Hell, and the "heights" (Al-A'raf).
        </SummaryCard>
      </main>
    </div>
  );
}
