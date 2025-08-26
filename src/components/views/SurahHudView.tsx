'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahHudViewProps {
  goBack: () => void;
}

const verses = [
    { number: "11:1", arabic: "Placeholder", lao: "Placeholder", english: "Alif, Lam, Ra. [This is] a Book whose verses are perfected and then presented in detail from [one who is] Wise and Acquainted." },
    // ... all 123 verses
    { number: "11:123", arabic: "Placeholder", lao: "Placeholder", english: "And to Allah belong the unseen [aspects] of the heavens and the earth, and to Him will be returned the matter, all of it, so worship Him and rely upon Him. And your Lord is not unaware of what you do." }
];

export default function SurahHudView({ goBack }: SurahHudViewProps) {
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
            placeholder="Search Ayah in Surah Hud..."
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
          This Surah focuses on the stories of various prophets, including Noah, Hud, Salih, Lot, Shu'ayb, and Moses, to emphasize the consequences of rejecting Allah's message. It stresses the importance of steadfastness and patience in the face of adversity and disbelief.
        </SummaryCard>
      </main>
    </div>
  );
}
