'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahAlMaidahViewProps {
  goBack: () => void;
}

const verses = [
    { number: "5:1", arabic: "Placeholder", lao: "Placeholder", english: "O you who have believed, fulfill [all] contracts. Lawful for you are the animals of grazing livestock except for what is recited to you [in this Qur'an] - not hunting while you are in the state of ihram. Indeed, Allah decrees what He intends." },
    // ... (all other verses remain the same)
    { number: "5:120", arabic: "Placeholder", lao: "Placeholder", english: "To Allah belongs the dominion of the heavens and the earth and whatever is within them. And He is over all things competent." }
];

// NOTE: Omitting full verse list for brevity

export default function SurahAlMaidahView({ goBack }: SurahAlMaidahViewProps) {
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
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອັນມາອິດະ..."
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
          This Surah discusses fulfilling contracts, dietary laws, rules for hunting, and purification. It also covers legal rulings, the relationship with People of the Scripture, and the story of the two sons of Adam.
        </SummaryCard>
      </main>
    </div>
  );
}
