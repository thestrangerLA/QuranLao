'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahAalImranViewProps {
  goBack: () => void;
}

const verses = [
  { number: "3:1", arabic: "الم", lao: "ອາລີຟ ລາມ ມີມ.", english: "Alif, Lam, Meem." },
  // ... (all other verses remain the same)
  { number: "3:200", arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَrَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُfْلِحُونَ", lao: "ໂອ້ ຜູ້ທີ່ເຊື່ອ, ຈົ່ງอดทนและอดทนยิ่งขึ้นและเตรียมพร้อมและຢຳເກງອັລລໍຮ໌, ເພື່ອพวกเจ้าจะได้ประสบความสำเร็จ.", english: "O you who have believed, persevere and endure and remain stationed and fear Allah that you may be successful." }
];

// NOTE: I'm omitting the full list of verses for brevity.

export default function SurahAalImranView({ goBack }: SurahAalImranViewProps) {
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
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອາລ ອິມຣອນ..."
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
          <p className="text-center text-muted-foreground">ບໍ່ພົບອາຍັດທີ່ທ່ານຄົ້ນຫາ.</p>
        )}
        <SummaryCard title="ສະຫຼຸບ">
          ສູຣະນີ້ຢືນຢັນເຖິງຄວາມເປັນເອກະພາບຂອງອັນລໍ, ການປະທານຄຳພີຕ່າງໆ, ແລະ ໄດ້ກ່າວເຖິງການໂຕ້ຖຽງຂອງຜູ້ປະຕິເສດ. ມັນຍັງເລົ່າເລື່ອງການເກີດທີ່ມະຫັດສະຈັນຂອງນາງມາຣີຍຳ, ພາລະກິດຂອງສາດສະດາອີຊາ, ບົດຮຽນຈາກສົງຄາມອຸຮຸດ, ແລະ ສະຫຼຸບດ້ວຍການຂໍດຸອາຈາກຜູ້ທີ່ມີປັນຍາ.
        </SummaryCard>
      </main>
    </div>
  );
}
