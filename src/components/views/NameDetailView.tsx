'use client';
import { useState, useEffect, useRef } from 'react';
import ViewHeader from '@/components/shared/ViewHeader';
import { type NameOfAllah, type DescriptionSection } from '@/data/names-of-allah-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, MessagesSquare, CheckCircle, Gift, Heart, Info, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NameDetailViewProps {
  goBack: () => void;
  name: NameOfAllah | null;
}

const iconMap: { [key: string]: React.ElementType } = {
  "ຄວາມໝາຍ": Info,
  "ຕົວຢ່າງຂອງຄວາມເມດຕາຂອງ Ar-Rahmān": Gift,
  "ໃນ Quran": BookOpen,
  "ສຳລັບຊາວມຸດສະລິມໃໝ່": Heart,
  "✨ ຂໍ້ຄິດທີ່ເຂົ້າໃຈງ່າຍ": Star,
  "ບົດຮຽນຈາກ ອາດຳ": CheckCircle,
};


const renderContent = (content: string) => {
  const parts = content.split(/(\*\*.*?\*\*|- .*?\n)/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith('**')) {
      return <strong key={index}>{part.replace(/\*\*/g, '')}</strong>;
    }
    if (part.startsWith('- ')) {
      return (
        <li key={index} className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>{part.substring(2)}</span>
        </li>
      );
    }
    return <p key={index} className="mb-2">{part.trim()}</p>;
  });
};


export default function NameDetailView({ goBack, name }: NameDetailViewProps) {
  if (!name) {
    return (
      <div className="flex flex-col">
        <ViewHeader title="ບໍ່ພົບຂໍ້ມູນ" onBack={goBack} />
        <main className="p-4">
          <p>ບໍ່ສາມາດໂຫຼດຂໍ້ມູນຊື່ຂອງອັລລໍຮ໌ໄດ້. ກະລຸນາກັບຄືນແລະລອງໃໝ່.</p>
        </main>
      </div>
    );
  }
  
  const descriptionSections = Array.isArray(name.description) ? name.description : [];

  return (
    <div className="flex flex-col">
       <ViewHeader title="ລາຍລະອຽດ" onBack={goBack} />
      <main className="p-4 space-y-4">
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
        </Card>
        
        {descriptionSections.map((section, index) => {
            const IconComponent = iconMap[section.title] || Info;
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
                    <IconComponent />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-card-foreground space-y-2">
                  {renderContent(section.content)}
                </CardContent>
              </Card>
            )
        })}


        {name.quran_mention && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
                <BookOpen />
                ການກ່າວເຖິງໃນຄຳພີກຸຣອານ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-card-foreground">"{name.quran_mention.quote}"</blockquote>
              <div className='flex justify-between items-center mt-2 text-xs text-muted-foreground'>
                  <span>{name.quran_mention.source}</span>
                  <span>{name.quran_mention.translator}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {name.hadith_mention && (
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
                <MessagesSquare />
                ຄວາມເຂົ້າໃຈຈາກຫະດີດ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-card-foreground">{name.hadith_mention.quote}</blockquote>
              <div className='flex justify-between items-center mt-2 text-xs text-muted-foreground'>
                  <span>{name.hadith_mention.source}</span>
                  <span>{name.hadith_mention.narrator}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
