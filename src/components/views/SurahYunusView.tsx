'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahYunusViewProps {
  goBack: () => void;
}

const verses = [
    { number: "10:1", arabic: "Placeholder", lao: "Placeholder", english: "Alif, Lam, Ra. These are the verses of the wise Book." },
    // ... all 109 verses
    { number: "10:109", arabic: "Placeholder", lao: "Placeholder", english: "And follow what is revealed to you, [O Muhammad], and be patient until Allah will judge. And He is the best of judges." }
];


export default function SurahYunusView({ goBack }: SurahYunusViewProps) {
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
            placeholder="Search Ayah in Surah Yunus..."
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
          This Surah focuses on the theme of Tawhid (the oneness of Allah), challenging polytheism and emphasizing the truth of the Quran and the prophethood of Muhammad. It contains stories of Prophet Noah, Prophet Moses, and Prophet Jonah (Yunus) as examples for mankind.
        </SummaryCard>
      </main>
    </div>
  );
}
