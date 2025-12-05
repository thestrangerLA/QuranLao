'use client';
import { useState } from 'react';
import ViewHeader from '@/components/shared/ViewHeader';
import { type Surah, type Verse } from '@/data/quran-data';
import { alFatiha } from '@/data/quran/al-fatiha';
import { anNaba } from '@/data/quran/an-naba';
import VerseCard from '@/components/shared/VerseCard';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface SurahDetailViewProps {
  goBack: () => void;
  surah: Surah | null;
}

const surahDataMap: { [key: number]: Verse[] } = {
  1: alFatiha,
  78: anNaba,
};

const surahDescriptionMap: { [key: number]: React.ReactNode } = {
  1: (
    <>
      <p>
        Al-Fatiha (ອັນ-ຟາຕິຮະ) ແມ່ນບົດທີໜຶ່ງຂອງຄຳພີກຸຣອານ. ຊື່ຂອງມັນແປວ່າ "ຜູ້ເປີດເຜີຍ", ເນື່ອງຈາກມັນເປັນການເລີ່ມຕົ້ນຂອງຄຳພີ ແລະ ເປັນບົດທຳອິດທີ່ຖືກອ່ານຄົບຖ້ວນໃນທຸກໆຄັ້ງຂອງການລະໝາດ.
      </p>
      <p>
        ມັນຖືກເອີ້ນອີກຊື່ໜຶ່ງວ່າ "Umm al-Kitab" (ແມ່ຂອງຄຳພີ) ເພາະມັນເປັນການສະຫຼຸບເນື້ອໃນສຳຄັນທັງໝົດຂອງກຸຣອານ, ລວມທັງຫຼັກການກ່ຽວກັບຄວາມເປັນເອກະພາບຂອງອັລລໍຮ໌ (ເຕົ່າຮີດ), ຄວາມເມດຕາ, ແລະ ການຂໍທາງນຳ.
      </p>
    </>
  ),
  78: (
     <>
      <p>
        Surah An-Naba (ຊູຣະອັນ-ນະບະ) ແປວ່າ "ຂ່າວຄາວອັນຍິ່ງໃຫຍ່". ຊູຣະນີ້ໄດ້ຖືກເປີດເຜີຍໃນຊ່ວງຕົ້ນໆຂອງພາລະກິດຂອງສາດສະດາມູຮຳມັດທີ່ນະຄອນມັກກະ.
      </p>
      <p>
        ຫົວໃຈຫຼັກຂອງຊູຣະນີ້ແມ່ນການຢືນຢັນເຖິງການຟື້ນຄືນຊີບ ແລະ ວັນແຫ່ງການພິພາກສາ, ເຊິ່ງເປັນຫົວຂໍ້ທີ່ພວກປະຕິເສດສັດທາໃນມັກກະມັກຈະຖົກຖຽງ ແລະ ບໍ່ເຊື່ອ. ມັນເລີ່ມຕົ້ນດ້ວຍຄຳຖາມທີ່ກະຕຸ້ນຄວາມຄິດກ່ຽວກັບ "ຂ່າວຄາວອັນຍິ່ງໃຫຍ່" ທີ່ພວກເຂົາໂຕ້ຖຽງກັນ, ກ່ອນທີ່ຈະນຳສະເໜີຫຼັກຖານຈາກການສ້າງໂລກ ເພື່ອພິສູດເຖິງອຳນາດຂອງອັລລໍຮ໌ໃນການເຮັດໃຫ້ຄົນຕາຍຟື້ນຄືນມາໄດ້.
      </p>
    </>
  )
};


export default function SurahDetailView({ goBack, surah }: SurahDetailViewProps) {
  const [showEnglish, setShowEnglish] = useState(false);

  if (!surah) {
    return (
      <div className="flex flex-col">
        <ViewHeader title="ບໍ່ພົບຂໍ້ມູນ" onBack={goBack} />
        <main className="p-4">
          <p>ບໍ່ສາມາດໂຫຼດຂໍ້ມູນ Surah ໄດ້. ກະລຸນາກັບຄືນແລະລອງໃໝ່.</p>
        </main>
      </div>
    );
  }

  const verses = surahDataMap[surah.number] || [];
  const description = surahDescriptionMap[surah.number];

  return (
    <div className="flex flex-col">
      <ViewHeader title={surah.name} onBack={goBack} />

      <div className="p-4 bg-secondary flex justify-between items-center sticky top-0 z-10 border-b">
         <div>
            <h2 className="text-xl font-bold text-primary">{surah.name}</h2>
            <p className="text-sm text-muted-foreground">{surah.translation}</p>
         </div>
         <div className="flex items-center space-x-2">
          <Switch
            id="english-toggle"
            checked={showEnglish}
            onCheckedChange={setShowEnglish}
          />
          <Label htmlFor="english-toggle" className="text-sm">ສະແດງພາສາອັງກິດ</Label>
        </div>
      </div>

      <main className="p-4 space-y-4">
        {description && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-primary">
                <BookOpen />
                ກ່ຽວກັບຊູຣະນີ້
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-card-foreground space-y-2">
              {description}
            </CardContent>
          </Card>
        )}

        {verses.map((verse) => (
          <VerseCard
            key={verse.number}
            number={verse.number}
            arabic={verse.arabic}
            lao={verse.lao}
            english={verse.english}
            showEnglish={showEnglish}
          />
        ))}
      </main>
    </div>
  );
}
