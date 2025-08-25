'use client';

import React, { useState } from 'react';
import QuranCard from '@/components/shared/QuranCard';
import ViewHeader from '@/components/shared/ViewHeader';
import { Input } from '@/components/ui/input';
import { quranCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface QuranViewProps {
  navigateTo: (view: View) => void;
  goBack: () => void;
}

export default function QuranView({ navigateTo, goBack }: QuranViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (id?: string) => {
    if (id === 'al-fatihah' || id === 'al-baqarah' || id === 'fussilat' || id === 'aal-imran' || id === 'an-naba' || id === 'an-nisa' || id === 'al-maidah' || id === 'al-anam' || id === 'al-araf') {
      navigateTo(id as View);
    }
  };

  const filteredQuranData = quranCardData.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.number.toString().includes(searchQuery) ||
    card.arabicTitle.includes(searchQuery)
  );

  return (
    <div className="flex flex-col">
      <ViewHeader title="ກຸຣອານ" onBack={goBack} />
      <div className="p-4">
        <Input
          type="text"
          placeholder="ຄົ້ນຫາຊູຣະ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>
      <main className="p-4 pt-0 space-y-3">
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
