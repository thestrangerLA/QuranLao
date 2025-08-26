'use client';

import HomeCard from '@/components/shared/HomeCard';
import { homeCardData } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface HomeViewProps {
  navigateTo: (view: View) => void;
}

export default function HomeView({ navigateTo }: HomeViewProps) {
  const handleCardClick = (id: string) => {
    // This will handle all navigations since all cards are now uniform
    navigateTo(id as View);
  };

  return (
    <div className="flex flex-col">
      <header className="bg-primary text-primary-foreground p-6 rounded-b-2xl shadow-md text-center">
        <h1 className="text-2xl font-semibold">ແອັບຂໍ້ມູນກ່ຽວກັບອິສລາມ</h1>
        <p className="text-sm mt-2 opacity-90">"ແທ້ຈິງ ການລະນຶກເຖິງອັລລໍຮ໌ເຮັດໃຫ້ຫົວໃຈສະຫງົບ." (ກຸຣອານ 13:28)</p>
      </header>
      <main className="p-4">
        <div className='grid grid-cols-2 gap-4'>
            {homeCardData.map((card) => (
                <HomeCard
                    key={card.id}
                    emoji={card.emoji}
                    title={card.title}
                    onClick={() => handleCardClick(card.id)}
                />
            ))}
        </div>
      </main>
    </div>
  );
}
