'use client';

import ListCard from '@/components/shared/ListCard';
import HomeCard from '@/components/shared/HomeCard';
import { fundamentalsCardData, otherHomeCards } from '@/data/islamic-data';
import type { View } from '@/app/page';

interface HomeViewProps {
  navigateTo: (view: View) => void;
}

export default function HomeView({ navigateTo }: HomeViewProps) {
  const handleCardClick = (id: string) => {
    // Check for fundamental cards
    if (id === 'islam-what-is-it' || id === 'belief-in-allah' || id === 'prophet-who-is-he' || id === 'who-is-a-muslim') {
      navigateTo(id as View);
    }
    // Check for other main category cards
    if (id === 'faith' || id === 'practice' || id === 'articles') {
      navigateTo(id as View);
    }
  };

  return (
    <div className="flex flex-col">
      <header className="bg-primary text-primary-foreground p-6 rounded-b-2xl shadow-md text-center">
        <h1 className="text-2xl font-semibold">ແອັບຂໍ້ມູນກ່ຽວກັບອິສລາມ</h1>
        <p className="text-sm mt-2 opacity-90">"ແທ້ຈິງ ການລະນຶກເຖິງອັລລໍຮ໌ເຮັດໃຫ້ຫົວໃຈສະຫງົບ." (ກຸຣອານ 13:28)</p>
      </header>
      <main className="p-4 space-y-4">
        <div className='grid grid-cols-2 gap-4'>
            {fundamentalsCardData.map((card) => (
                <HomeCard
                    key={card.id}
                    emoji={card.emoji}
                    title={card.title}
                    onClick={() => handleCardClick(card.id)}
                />
            ))}
        </div>
        <div className="space-y-4 pt-4">
            {otherHomeCards.map((card) => (
            <ListCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                onClick={() => handleCardClick(card.id)}
            />
            ))}
        </div>
      </main>
    </div>
  );
}
