'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahAtTawbahViewProps {
  goBack: () => void;
}

const verses = [
    { number: "9:1", arabic: "Placeholder", lao: "Placeholder", english: "[This is a declaration of] disassociation, from Allah and His Messenger, to those with whom you had made a treaty among the polytheists." },
    // ... all 129 verses
    { number: "9:129", arabic: "Placeholder", lao: "Placeholder", english: "But if they turn away, [O Muhammad], say, 'Sufficient for me is Allah ; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.'" }
];


export default function SurahAtTawbahView({ goBack }: SurahAtTawbahViewProps) {
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
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອັດເຕົາບະ..."
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
          This Surah is unique as it does not begin with the 'Bismillah'. It deals with the disassociation from polytheists who repeatedly broke their treaties, the conduct of warfare, hypocrisy, the importance of sincere repentance, and the characteristics of true believers.
        </SummaryCard>
      </main>
    </div>
  );
}
