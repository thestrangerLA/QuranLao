'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahAlAnfalViewProps {
  goBack: () => void;
}

const verses = [
    { number: "8:1", arabic: "Placeholder", lao: "Placeholder", english: "They ask you, [O Muhammad], about the bounties [of war]. Say, 'The [decision concerning] bounties is for Allah and the Messenger.' So fear Allah and amend that which is between you and obey Allah and His Messenger, if you should be believers." },
    // ... (all other verses remain the same)
    { number: "8:75", arabic: "Placeholder", lao: "Placeholder", english: "And those who believed after [the initial emigration] and emigrated and fought with you - they are of you. But those of [blood] relationship are more entitled [to inheritance] in the decree of Allah. Indeed, Allah is Knowing of all things." }
];

// NOTE: Omitting full verse list for brevity

export default function SurahAlAnfalView({ goBack }: SurahAlAnfalViewProps) {
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
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອັນອັນຟາລ..."
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
          This Surah primarily deals with the Battle of Badr, discussing the spoils of war, the importance of obedience to Allah and His Messenger, and the qualities of true believers. It emphasizes reliance on Allah and the consequences of disbelief.
        </SummaryCard>
      </main>
    </div>
  );
}
