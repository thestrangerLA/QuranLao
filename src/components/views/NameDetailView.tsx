'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { type NameOfAllah } from '@/data/names-of-allah-data';
import ContentSection from '../shared/ContentSection';
import { BookOpen, MessagesSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NameDetailViewProps {
  goBack: () => void;
  name: NameOfAllah | null;
}

export default function NameDetailView({ goBack, name }: NameDetailViewProps) {
  if (!name) {
    return (
      <div className="flex flex-col h-screen">
        <ViewHeader title="ບໍ່ພົບຂໍ້ມູນ" onBack={goBack} />
        <main className="flex-grow overflow-y-auto p-4">
          <p>ບໍ່ສາມາດໂຫຼດຂໍ້ມູນຊື່ຂອງອັລລໍຮ໌ໄດ້. ກະລຸນາກັບຄືນແລະລອງໃໝ່.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ViewHeader title="ລາຍລະອຽດ" onBack={goBack} />
      <main className="flex-grow overflow-y-auto p-4 space-y-4">
        <Card className="bg-primary/90 text-primary-foreground shadow-lg border-none">
            <CardHeader>
                <div className='flex justify-between items-start'>
                    <div>
                        <CardTitle className="text-2xl font-bold">{name.transliteration}</CardTitle>
                        <p className="text-md opacity-90">{name.translation}</p>
                    </div>
                    <p className="font-arabic text-4xl">{name.arabic}</p>
                </div>
            </CardHeader>
            <CardContent>
                <p className='text-sm leading-relaxed'>{name.description}</p>
            </CardContent>
        </Card>

        {name.quran_mention && (
            <ContentSection title={`ການກ່າວເຖິງໃນຄຳພີກຸຣອານ`} icon={<BookOpen />}>
                <blockquote className="italic text-card-foreground">"{name.quran_mention.quote}"</blockquote>
                <div className='flex justify-between items-center mt-2 text-xs text-muted-foreground'>
                    <span>{name.quran_mention.source}</span>
                    <span>{name.quran_mention.translator}</span>
                </div>
            </ContentSection>
        )}

        {name.hadith_mention && (
            <ContentSection title={`ຄວາມເຂົ້າໃຈຈາກຫະດີດ`} icon={<MessagesSquare />}>
                <blockquote className="italic text-card-foreground">{name.hadith_mention.quote}</blockquote>
                <div className='flex justify-between items-center mt-2 text-xs text-muted-foreground'>
                    <span>{name.hadith_mention.source}</span>
                    <span>{name.hadith_mention.narrator}</span>
                </div>
            </ContentSection>
        )}
      </main>
    </div>
  );
}
