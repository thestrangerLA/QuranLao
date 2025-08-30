'use client';

import React, { useState } from 'react';
import QuranCard from '@/components/shared/QuranCard';
import { Input } from '@/components/ui/input';
import { quranCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface QuranViewProps {
  navigateTo: (view: View) => void;
  goBack: () => void;
}

export default function QuranView({ navigateTo, goBack }: QuranViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (id?: string) => {
    if (id === 'al-fatihah' || id === 'al-baqarah' || id === 'fussilat' || id === 'aal-imran' || id === 'an-naba' || id === 'an-nisa' || id === 'al-maidah' || id === 'al-anam' || id === 'al-araf' || id === 'al-anfal' || id === 'at-tawbah' || id === 'yunus' || id === 'hud' || id === 'al-qasas') {
      navigateTo(id as View);
    }
  };

  const filteredQuranData = quranCardData.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.number.toString().includes(searchQuery) ||
    card.arabicTitle.includes(searchQuery)
  );

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center p-4 sticky top-0 bg-background z-10 border-b">
        <Button variant="ghost" size="icon" onClick={goBack} className="mr-2 shrink-0">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="ຄົ້ນຫາຊູຣະ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </header>
      <main className="flex-grow overflow-y-auto p-4 space-y-3">
        {filteredQuranData.length > 0 ? (
          filteredQuranData.map((card) => (
            <QuranCard
              key={card.number}
              {...card}
              onClick={() => handleClick(card.id)}
            />
          ))
        ) : (
          <p className="text-center text-muted-foreground">ບໍ່ພົບຊູຣະທີ່ທ່ານຄົ້ນຫາ.</p>
        )}
      </main>
    </div>
  );
}
