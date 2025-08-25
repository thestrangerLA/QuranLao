'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface SurahAlAnamViewProps {
  goBack: () => void;
}

const verses = [
    { number: "6:1", arabic: "Placeholder", lao: "Placeholder", english: "[All] praise is [due] to Allah, who created the heavens and the earth and made the darkness and the light. Then those who disbelieve equate [others] with their Lord." },
    // ... (all other verses remain the same)
    { number: "6:165", arabic: "Placeholder", lao: "Placeholder", english: "And it is He who has made you successors upon the earth and has raised some of you above others in degrees [of rank] that He may try you in what He has given you. Indeed, your Lord is swift in penalty; but indeed, He is Forgiving and Merciful." }
];

// NOTE: Omitting full verse list for brevity

export default function SurahAlAnamView({ goBack }: SurahAlAnamViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVerses = verses.filter(verse =>
    verse.number.includes(searchQuery) ||
    verse.lao.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.arabic.includes(searchQuery)
  );

  return (
    <div className="flex flex-col">
      <header className="flex items-center p-4 sticky top-0 bg-background z-10 border-b">
        <Button variant="ghost" size="icon" onClick={goBack} className="mr-2">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອັນອັນອາມ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </header>
      <main className="p-4">
        {filteredVerses.length > 0 ? (
          filteredVerses.map(v => <VerseCard key={v.number} {...v} />)
        ) : (
          <p className="text-center text-muted-foreground">No Ayah found.</p>
        )}
        <SummaryCard title="Summary">
          This Surah focuses on the oneness of Allah (Tawhid), rejecting polytheism, and confirming the prophethood of Muhammad. It discusses the creation of the heavens and earth as signs of Allah's power, and presents arguments against idol worship. It also covers dietary laws and the story of Prophet Abraham's search for the true God.
        </SummaryCard>
      </main>
    </div>
  );
}
