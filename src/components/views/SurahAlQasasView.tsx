'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahAlQasasViewProps {
  goBack: () => void;
}

const verses = [
    { number: "28:1", arabic: "Placeholder", lao: "Placeholder", english: "Ta, Seen, Meem." },
    // ... verses 2-75
    { number: "28:75", arabic: "Placeholder", lao: "Placeholder", english: "And We will extract from every nation a witness and say, 'Produce your proof,' and they will know that the truth belongs to Allah , and lost from them is what they used to invent." },
    { number: "28:76", arabic: "إِنَّ قَارُونَ كَانَ مِن قَوْمِ مُوسَىٰ فَبَغَىٰ عَلَيْهِمْ ۖ وَآتَيْنَاهُ مِنَ الْكُنُوزِ مَا إِنَّ مَفَاتِحَهُ لَتَنُوءُ بِالْعُصْبَةِ أُولِي الْقُوَّةِ إِذْ قَالَ لَهُ قَوْمُهُ لَا تَفْرَحْ ۖ إِنَّ اللَّهَ لَا يُحِبُّ الْفَرِحِينَ", lao: "ແທ້ຈິງ, ກໍຣູນ ເປັນຄົນໜຶ່ງໃນປະຊາຊາດຂອງ ມູຊາ, ແຕ່ລາວໄດ້ອະທຳກົດຂີ່ຕຶພວກເຂົາ ແລະ ເຮົາໄດ້ມອບຂຸມຊັບອັນມະຫາສານໃຫ້ແກ່ລາວ ຈົນວ່າບັນດາລູກກະແຈຂອງມັນເປັນພາລະໜັກໜ່ວງສໍາລັບຄົນກຸ່ມໜຶ່ງທີ່ມີກຳລັງແຮງ. ຈາກນັ້ນ, ປະຊາຊົນຂອງລາວກໍໄດ້ກ່າວແກ່ລາວວ່າ: \"ເຈົ້າຢ່າໄດ້ທະນົງຕົວເກີນໄປ, ເພາະແທ້ຈິງ ອັລລໍຮ໌ ຊົງບຶພໍໃຈກັບຜູ້ທີ່ທະນົງຕົວ.\"", english: "Indeed, Qarun was from the people of Moses, but he tyrannized them. And We gave him of treasures whose keys would burden a band of strong men. [Recall] when his people said to him, 'Do not exult. Indeed, Allah does not like the exultant." },
    { number: "28:77", arabic: "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا ۖ وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ ۖ وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ ۖ إِنَّ اللَّهَ لَا يُحِبُّ الْمُفْسِدِينَ", lao: "ແຕ່ຈົ່ງສະແຫວງຫາ ທີ່ພັກໃນໂລກອາກີເຣາະ (ໂລກໜ້າ) ດ້ວຍສິ່ງທີ່ ອັລລໍ ໄດ້ມອບໃຫ້ແກ່ເຈົ້າ ແລະ ຢ່າລືມສ່ວນຂອງເຈົ້າໃນໂລກດຸນຍາ ແລະ ຈົ່ງເຮັດຄວາມດີ ເໝືອນທີ່ ອັລລໍ ໄດ້ເຮັດຄວາມດີໃຫ້ແກ່ເຈົ້າ และ ຢ່າປາດຖະໜາທີ່ຈະສ້າງຄວາມເສຍຫາຍໃນແຜ່ນດິນ. ແທ້ຈິງ, ອັລລໍຮ໌ຊົງບຶພໍໃຈກັບບັນດາຜູ້ສ້າງຄວາມເສຍຫາຍ.\"", english: "But seek, through that which Allah has given you, the home of the Hereafter; and [yet], do not forget your share of the world. And do good as Allah has done good to you. And desire not corruption in the land. Indeed, Allah does not like corrupters." },
    { number: "28:78", arabic: "قَالَ إِنَّمَا أُوتِيتُهُ عَلَىٰ عِلْمٍ عِندِي ۚ أَوَلَمْ يَعْلَمْ أَنَّ اللَّهَ قَدْ أَهْلَكَ مِن قَبْلِهِ مِنَ الْقُرُونِ مَنْ هُوَ أَشَدُّ مِنْهُ قُوَّةً وَأَكْثَرُ جَمْعًا ۚ وَلَا يُسْأَلُ عَن ذُنُوبِهِمُ الْمُجْرِمُونَ", lao: "ລາວເວົ້າວ່າ: \"ຂ້ອຍໄດ້ຮັບມັນກໍຍ້ອນຄວາມຮູ້ທີ່ຂ້ອຍມີ.\" ລາວບໍ່ຮູ້ຫຼືວ່າ ອັລລໍຮ໌ ໄດ້ທຳລາຍຄົນຮຸ່ນກ່ອນໜ້າລາວ ທີ່ແຂງແຮງກວ່າລາວໃນອຳນາດ ແລະ ມີຊັບສົມບັດຫຼາຍກວ່າ? ແຕ່ບັນດາຜູ້ກະທຳຜິດ, ພວກເຂົາຈະບໍ່ຖືກຖາມເຖິງບາບຂອງພວກເຂົາດອກຫຼື?.", english: "He said, 'I was only given it because of knowledge I have.' Did he not know that Allah had destroyed before him of generations those who were greater than him in strength and greater in accumulation [of wealth]? But the criminals will not be asked about their sins." },
    { number: "28:79", arabic: "فَخَرَجَ عَلَىٰ قَوْمِهِ فِي زِينَتِهِ ۖ قَالَ الَّذِينَ يُرِيدُونَ الْحَيَاةَ الدُّنْيَا يَا لَيْتَ لَنَا مِثْلَ مَا أُوتِيَ قَارُونُ إِنَّهُ لَذُو حَظٍّ عَظِيمٍ", lao: "ດັ່ງນັ້ນ ລາວຈຶ່ງອອກມາຕໍ່ໜ້າປະຊາຊົນຂອງລາວດ້ວຍເຄື່ອງນຸ່ງທີ່ສະຫງ່າງາມ. ບັນດາຜູ້ທີ່ປາດຖະໜາຊີວິດໃນໂລກນີ້ໄດ້ເວົ້າວ່າ: \"ໂອ້ຍ! ພວກເຮົາປາດຖະໜາຈະມີສິ່ງທີ່ຄືກັນທີ່ ກໍຣູນ ໄດ້ຮັບ. ແທ້ຈິງແລ້ວ, ລາວເປັນຜູ້ທີ່ມີໂຊກອັນຍິ່ງໃຫຍ່.\"", english: "So he came out before his people in his adornment. Those who desired the worldly life said, 'Oh, would that we had like what was given to Qarun. Indeed, he is one of great fortune.'" },
    { number: "28:80", arabic: "وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَيْلَكُمْ ثَوَابُ اللَّهِ خَيْرٌ لِّمَنْ آمَنَ وَعَمِلَ صَالِحًا وَلَا يُلَقَّاهَا إِلَّا الصَّابِرُونَ", lao: "ແຕ່ບັນດາຜູ້ທີ່ໄດ້ຮັບຄວາມຮູ້ໄດ້ເວົ້າວ່າ: \"ວິບັດແກ່ພວກເຈົ້າ! ຜົນຕອບແທນຂອງ ອັລລໍ ແມ່ນດີກວ່າສໍາລັບผู้ที่ศรัทธา และ ປະຕິບັດຄວາມດີ. ແລະ ຈະບໍ່ມີໃຜໄດ້ຮັບມັນ ນອກຈາກຜູ້ທີ່ມີຄວາມອົດທົນເທົ່ານັ້ນ.\"", english: "But those who had been given knowledge said, 'Woe to you! The reward of Allah is better for he who believes and does righteousness. And none are granted it except the patient.'" },
    { number: "28:81", arabic: "فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ فَمَا كَانَ لَهُ مِن فِئَةٍ يَنصُرُونَهُ مِن دُونِ اللَّهِ وَمَا كَانَ مِنَ الْمُنتَصِرِينَ", lao: "ແລະ ເຮົາໄດ້ເຮັດໃຫ້ແຜ່ນດິນກືນກິນລາວ ແລະ ເຮືອນຂອງລາວ. ແລະ ບໍ່ມີຜູ້ຊ່ວຍເຫຼືອຄົນໃດຊ່ວຍລາວໄດ້ ນອກຈາກ ອັລລໍ, ທັງລາວເອງກໍບໍ່ແມ່ນຜູ້ທີ່ສາມາດປ້ອງກັນຕົນເອງໄດ້.", english: "And We caused the earth to swallow him and his home. And there was for him no company to aid him other than Allah, nor was he of those who could defend themselves." },
    { number: "28:82", arabic: "وَأَصْبَحَ الَّذِينَ تَمَنَّوْا مَكَانَهُ بِالْأَمْسِ يَقُولُونَ وَيْكَأَنَّ اللَّهَ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ ۖ لَوْلَا أَن مَّنَّ اللَّهُ عَلَيْنَا لَخَسَفَ بِنَا ۖ وَيْكَأَنَّهُ لَا يُفْلِحُ الْكَافِرُونَ", lao: "ແລະ ບັນດາຜູ້ທີ່ເຄີຍປາດຖະໜາຕຳແໜ່ງຂອງລາວໃນມື້ກ່ອນໜ້ານັ້ນ ໄດ້ເລີ່ມເວົ້າວ່າ: \"ໂອ້, ເປັນທີ່ແນ່ນອນ ອັລລໍ ຊົງປະທານປັດໄຈການດຳລົງຊີວິດໃຫ້ແກ່ຜູ້ທີ່ພະອົງຊົງປະສົງ ແລະ ຊົງໃຫ້ຄັບແຄບແກ່ຜູ້ທີ່ພະອົງປະສົງ! ຖ້າຫາກບໍ່ແມ່ນຍ້ອນວ່າ ອັລລໍ ໄດ້ຊົງໃຫ້ຄວາມເມດຕາແກ່ພວກເຮົາ, ພະອົງກໍຄົງຈະເຮັດໃຫ້ມັນກືນກິນພວກເຮົາແລ້ວ. ໂອ້, ແທ້ຈິງບັນດາຜູ້ປະຕິເສດສັດທາຈະບໍ່ປະສົບຜົນສຳເລັດ!\"", english: "And those who had wished for his position the day before began to say, 'Oh, it is as though Allah extends provision to whom He wills of His servants and restricts it. If not that Allah had conferred favor upon us, He would have caused it to swallow us. Oh, it is as though the disbelievers do not succeed.'" },
    // ... verses 83-88
    { number: "28:88", arabic: "Placeholder", lao: "Placeholder", english: "And do not invoke with Allah another deity. There is no deity except Him. Everything will be destroyed except His Face. His is the judgment, and to Him you will be returned." }
];

export default function SurahAlQasasView({ goBack }: SurahAlQasasViewProps) {
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
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ອັນກໍສັສ..."
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
          This Surah narrates the detailed story of Prophet Moses, from his birth and upbringing in the Pharaoh's palace to his prophethood and confrontation with Pharaoh. It also tells the story of Qarun, a wealthy man from Moses's people, whose arrogance led to his destruction. The Surah emphasizes the triumph of truth over falsehood and the consequences of arrogance and disbelief.
        </SummaryCard>
      </main>
    </div>
  );
}
