'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahAnNabaViewProps {
  goBack: () => void;
}

const verses = [
  { number: "78:1", arabic: "عَمَّ يَتَسَاءَلُونَ", lao: "ພວກເຂົາຖາມຫຍັງກັນແລະກັນ?", english: "About what are they asking one another?" },
  { number: "78:2", arabic: "عَنِ النَّبَإِ الْعَظِيمِ", lao: "ກ່ຽວກັບຂ່າວອັນຍິ່ງໃຫຍ່.", english: "About the great news—" },
  { number: "78:3", arabic: "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ", lao: "ເຊິ່ງພວກເຂົາຂັດແຍ້ງກັນ.", english: "That over which they are in disagreement." },
  { number: "78:4", arabic: "كَلَّا سَيَعْلَمُونَ", lao: "ບໍ່ເລີຍ! ພວກເຂົາຈະໄດ້ຮູ້.", english: "No! They are going to know." },
  { number: "78:5", arabic: "ثُمَّ كَلَّا سَيَعْلَمُونَ", lao: "ຕໍ່ໄປ, ບໍ່ເລີຍ! ພວກເຂົາຈະໄດ້ຮູ້.", english: "Then, no! They are going to know." },
  { number: "78:6", arabic: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا", lao: "ເຮົາບໍ່ໄດ້ເຮັດໃຫ້ແຜ່ນດິນເປັນບ່ອນພັກຜ່ອນດອກຫຼື?", english: "Have We not made the earth a resting place?" },
  { number: "78:7", arabic: "وَالْجِبَالَ أَوْتَادًا", lao: "ແລະພູຜາເປັນຫຼັກໝັ້ນ?", english: "And the mountains as stakes?" },
  { number: "78:8", arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا", lao: "ແລະເຮົາໄດ້ສ້າງພວກເຈົ້າເປັນຄູ່ຄອງ.", english: "And We created you in pairs" },
  { number: "78:9", arabic: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا", lao: "ແລະເຮັດໃຫ້ນອນຫຼັບຂອງພວກເຈົ້າເປັນການພັກຜ່ອນ.", english: "And made your sleep [a means for] rest?" },
  { number: "78:10", arabic: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا", lao: "ແລະເຮັດໃຫ້ກາງຄືນເປັນເຄື່ອງປົກຄຸມ.", english: "And made the night as a covering?" },
  { number: "78:11", arabic: "وَجَعَلْنَا النَّهَارَ مَعَاشًا", lao: "ແລະເຮັດໃຫ້ກາງເວັນເປັນການຫາລ້ຽງຊີບ.", english: "And made the day for livelihood?" },
  { number: "78:12", arabic: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا", lao: "ແລະໄດ້ສ້າງຂ້າງເທິງພວກເຈົ້າຊັ້ນຟ້າທີ່ເຂັ້ມແຂງເຈັດຊັ້ນ?", english: "And built above you seven strong [heavens]?" },
  { number: "78:13", arabic: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا", lao: "ແລະໄດ້ເຮັດໃຫ້ (ຢູ່ໃນນັ້ນ) ໂຄມໄຟທີ່ເຜົາໄໝ້ (ດວງອາທິດ)?", english: "And made [therein] a burning lamp?" },
  { number: "78:14", arabic: "وَأَنZَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا", lao: "ແລະໄດ້ສົ່ງນໍ້າທີ່ຕົກລົງມາຢ່າງຫຼວງຫຼາຍຈາກເມກຝົນ.", english: "And sent down from the rainclouds a pouring water" },
  { number: "78:15", arabic: "لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا", lao: "ເພື່ອເຮົາຈະນໍາເອົາເມັດພືດ ແລະພືດພັນຕ່າງໆອອກມາ.", english: "That We may bring forth thereby grain and herbs" },
  { number: "78:16", arabic: "وَجَنَّاتٍ أَلْفَافًا", lao: "ແລະສວນຕ່າງໆທີ່ເຕັມໄປດ້ວຍຕົ້ນໄມ້ໜາແໜ້ນ.", english: "And gardens of dense shrubbery?" },
  { number: "78:17", arabic: "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا", lao: "ແທ້ຈິງແລ້ວ, ວັນແຫ່ງການພິພາກສານັ້ນເປັນວັນທີ່ໄດ້ກຳນົດໄວ້ແລ້ວ.", english: "Indeed, the Day of Judgment is a fixed appointment—" },
  { number: "78:18", arabic: "يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا", lao: "ເປັນວັນທີ່ຈະມີການເປົ່າສຽງແກ ແລະພວກເຈົ້າຈະອອກມາເປັນຝູງ.", english: "The Day the Horn will be blown and you will come forth in multitudes" },
  { number: "78:19", arabic: "وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا", lao: "ແລະຟ້າຈະຖືກເປີດອອກ ແລະຈະກາຍເປັນປະຕູຕ່າງໆ.", english: "And the heaven will be opened and will become gates" },
  { number: "78:20", arabic: "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا", lao: "ແລະພູຜາຈະຖືກຍ້າຍອອກໄປເໝືອນກັບວ່າມັນເປັນພາບລວງຕາ.", english: "And the mountains will be removed as if they were a mirage." }
];

export default function SurahAnNabaView({ goBack }: SurahAnNabaViewProps) {
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
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອັນນະບາ..."
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
          ສູຣະນີ້ເລີ່ມຕົ້ນດ້ວຍຄຳຖາມກ່ຽວກັບຂ່າວສານອັນຍິ່ງໃຫຍ່ (ວັນຟື້ນຄືນຊີບ) ແລະ ໄດ້ກ່າວເຖິງຫຼັກຖານຕ່າງໆໃນທຳມະຊາດທີ່ຢືນຢັນເຖິງອຳນາດຂອງອັນລໍ, ກ່ອນທີ່ຈະອະທິບາຍເຖິງເຫດການໃນວັນພິພາກສາ.
        </SummaryCard>
      </main>
    </div>
  );
}
