'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Languages } from 'lucide-react';

interface SurahFussilatViewProps {
  goBack: () => void;
}

const verses = [
  { number: "41:1", arabic: "حم", lao: "ຮາ ມີມ.", english: "Ha, Meem." },
  { number: "41:2", arabic: "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ", lao: "(ອັລກຸຣອານນີ້)ເປັນການປະທານລົງມາຈາກພຣະຜູ້ຊົງເມດຕາ ຜູ້ຊົງປານີສະເໝີ.", english: "[This is] a revelation from the Entirely Merciful, the Especially Merciful -" },
  { number: "41:3", arabic: "كِتَابٌ فُصِّلَتْ آيَاتُهُ قُرْآنًا عَرَبِيًّا لِّقَوْمٍ يَعْلَمُونَ", lao: "ຄຳພີທີ່ອາຍະຕ່າງໆໄດ້ຖືກອະທິບາຍຢ່າງລະອຽດ, ເປັນກຸຣອານພາສາອາຣັບສຳລັບກຸ່ມຊົນທີ່ຮູ້.", english: "A Book whose verses have been detailed, an Arabic Qur'an for a people who know," },
  { number: "41:4", arabic: "بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ", lao: "ເປັນການແຈ້ງຂ່າວດີ ແລະ ເປັນການຕັກເຕືອນ, ແຕ່ສ່ວນຫຼາຍຂອງພວກເຂົາພາກັນຜິນຫຼັງໃຫ້, ດັ່ງນັ້ນພວກເຂົາຈຶ່ງບໍ່ໄດ້ຍິນ.", english: "As a giver of good tidings and a warner; but most of them turn away, so they do not hear." },
  { number: "41:5", arabic: "وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ مِّمَّا تَدْعُونَا إِلَيْهِ وَفِي آذَانِنَا وَقْرٌ وَمِن بَيْنِنَا وَبَيْنِكَ حِجَابٌ فَاعْمَلْ إِنَّنَا عَامِلُونَ", lao: "ແລະ ພວກເຂົາເວົ້າວ່າ: 'ໃຈຂອງພວກເຮົາຖືກປົກປິດຈາກສິ່ງທີ່ທ່ານເຊື້ອເຊີນພວກເຮົາ, ແລະ ໃນຫູຂອງພວກເຮົາມີຄວາມໜວກ, ແລະ ລະຫວ່າງພວກເຮົາກັບທ່ານມີກຳແພງກັ້ນ. ດັ່ງນັ້ນ, ທ່ານຈົ່ງເຮັດວຽກຂອງທ່ານ, ແທ້ຈິງແລ້ວ ພວກເຮົາກໍກຳລັງເຮັດວຽກຂອງພວກເຮົາ.'", english: "And they say, 'Our hearts are within coverings from that to which you invite us, and in our ears is deafness, and between us and you is a partition, so work; indeed, we are working.'"},
  { number: "41:6", arabic: "قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ فَاسْتَقِيمُوا إِلَيْهِ وَاسْتَغْفِرُوهُ ۗ وَوَيْلٌ لِّلْمُشْرِكِينَ", lao: "ໂອ້ ມູຮຳມັດ ເຈົ້າຈົ່ງກ່າວວ່າຂ້ອຍເປັນພຽງມະນຸດຄົນໜຶ່ງຄືກັບພວກທ່ານ, ເຊິ່ງໄດ້ຮັບການເປີດເຜີຍວ່າ ພຣະເຈົ້າຂອງພວກທ່ານນັ້ນຄືພຣະເຈົ້າອົງດຽວ. ດັ່ງນັ້ນ, ພວກທ່ານຈົ່ງມຸ່ງໜ້າໄປຫາພຣະອົງຢ່າງຖືກຕ້ອງ ແລະ ຈົ່ງຂໍການໃຫ້ອະໄພໂທດຈາກພຣະອົງ ແລະ ຄວາມວິບັດຈະເກີດຂຶ້ນແກ່ຜູ້ທີ່ຕັ້ງພາກີ (ສິ່ງອື່ນໆ) ຂຶ້ນມາທຽບເທົ່າກັບພຣະເຈົ້າ.", english: "Say, O [Muhammad], 'I am only a man like you to whom it has been revealed that your god is but one God; so take a straight course to Him and ask His forgiveness.' And woe to those who associate others with Allah -" },
  { number: "41:7", arabic: "الَّذِينَ لَا يُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ كَافِرُونَ", lao: "ບັນດາຜູ້ທີ່ບໍ່ຈ່າຍຊະກາດ, ແລະ ໃນວັນອາຄີຣັດ (ວັນສິ້ນໂລກ), ພວກເຂົາແມ່ນຜູ້ທີ່ບໍ່ສັດທາ.", english: "Those who do not give zakah, and in the Hereafter they are disbelievers." },
  { number: "41:8", arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ", lao: "ແທ້ຈິງແລ້ວ, ບັນດາຜູ້ທີ່ສັດທາ ແລະ ໄດ້ກະທຳສິ່ງທີ່ດີງາມນັ້ນ, ພວກເຂົາຈະໄດ້ຮັບຜົນຕອບແທນຢ່າງຕໍ່ເນື່ອງໂດຍບໍ່ມີການຂາດສາຍ.", english: "Indeed, those who believe and do righteous deeds - for them is a reward uninterrupted." },
  { number: "41:9", arabic: "قُلْ أَئِنَّكُمْ لَتَكْفُرُونَ بِالَّذِي خَلَقَ الْأَرْضَ فِي يَوْمَيْنِ وَتَجْعَلُونَ لَهُ أَندَادًا ۚ ذَٰلِكَ رَبُّ الْعَالَمِينَ", lao: "ຈົ່ງກ່າວເຖີດ: 'ແທ້ຈິງພວກທ່ານປະຕິເສດຕໍ່ພຣະຜູ້ທີ່ສ້າງແຜ່ນດິນໃນສອງວັນ ແລະ ຕັ້ງພາກີກັບພຣະອົງບໍ? ນັ້ນຄືພຣະຜູ້ເປັນເຈົ້າແຫ່ງສາກົນໂລກ.'", english: "Say, 'Do you indeed disbelieve in He who created the earth in two days and attribute to Him equals? That is the Lord of the worlds.'" },
  { number: "41:10", arabic: "وَجَعَلَ فِيهَا رَوَاسِيَ مِن فَوْقِهَا وَبَارَكَ فِيهَا وَقَدَّرَ فِيهَا أَقْوَاتَهَا فِي أَرْبَعَةِ أَيَّامٍ سَوَاءً لِّلسَّائِلِينَ", lao: "ພຣະອົງໄດ້ວາງພູຜາທີ່ໝັ້ນຄົງຢູ່ເທິງໜ້າໂລກ, ແລະ ໄດ້ປະທານຄວາມດີໃຫ້ແກ່ໂລກ, ແລະ ກຳນົດປັດໄຈຊີວິດຂອງສິ່ງທີ່ມີຊີວິດຢູ່ໃນນັ້ນໃຫ້ສຳເລັດພາຍໃນສີ່ວັນຢ່າງເທົ່າທຽມກັນ — ເພື່ອເປັນຄຳຕອບໃຫ້ແກ່ບັນດາຜູ້ທີ່ຖາມ.", english: "And He placed on it stabilizers from above it and blessed it and determined therein its [creatures'] sustenance in four days without distinction - for [the information] of those who ask." },
  { number: "41:11", arabic: "ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ فَقَالَ لَهَا وَلِلْأَرْضِ ائْتِيَا طَوْعًا أَوْ كَرْهًا قَالَتَا أَتَيْنَا طَائِعِينَ", lao: "ຫຼັງຈາກນັ້ນ, ພຣະອົງໄດ້ຊົງມຸ່ງໄປຍັງຟ້າ, ໃນຂະນະທີ່ມັນຍັງເປັນກຸ່ມຄວັນ ແລະ ໄດ້ຊົງກ່າວແກ່ຊັ້ນຟ້າ ແລະ ແຜ່ນດິນວ່າ: ຈົ່ງມາ (ເປັນ) ໂດຍສະໝັກໃຈ ຫຼືໂດຍຖືກບັງຄັບ, ທັງສອງໄດ້ກ່າວວ່າ: 'ພວກເຮົາໄດ້ມາຢ່າງສະໝັກໃຈ..'", english: "Then He directed Himself to the heaven while it was smoke and said to it and to the earth, 'Come [into being], willingly or by compulsion.' They said, 'We have come willingly.'"},
  { number: "41:12", arabic: "فَقَضَاهُنَّ سَبْعَ سَمَاوَاتٍ فِي يَوْمَيْنِ وَأَوْحَىٰ فِي كُلِّ سَمَاءٍ أَمْرَهَا ۚ وَزَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَحِفْظًا ۚ ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ", lao: "ແລະ ພຣະອົງໄດ້ເຮັດໃຫ້ມັນສຳເລັດເປັນຊັ້ນຟ້າທັງເຈັດພາຍໃນສອງວັນ, ແລະ ໄດ້ມອບໝາຍຄຳສັ່ງຂອງແຕ່ລະຊັ້ນຟ້າ. ແລະ ເຮົາໄດ້ປະດັບປະດາຟ້າຊັ້ນທີ່ໃກ້ທີ່ສຸດດ້ວຍໂຄມໄຟ (ດວງດາວ) ແລະ ເປັນເຄື່ອງປ້ອງກັນ. ນັ້ນຄືການກຳນົດຂອງພຣະອົງຜູ້ຊົງມີອຳນາດຍິ່ງໃຫຍ່, ຜູ້ຊົງຮອບຮູ້.", english: "And He completed them as seven heavens in two days and inspired in each heaven its command. And We adorned the nearest heaven with lamps and as protection. That is the determination of the Exalted in Might, the Knowing." },
  { number: "41:13", arabic: "فَإِنْ أَعْرَضُوا فَقُلْ أَنذَرْتُكُمْ صَاعِقَةً مِّثْلَ صَاعِقَةِ عَادٍ وَثَمُودَ", lao: "ແຕ່ຖ້າພວກເຂົາຫັນໃຫ້, ຈົ່ງກ່າວເຖີດ: 'ຂ້ອຍຂໍເຕືອນພວກເຈົ້າເຖິງຟ້າຜ່າທີ່ຄ້າຍຄືກັບຟ້າຜ່າທີ່ໄດ້ຟາດໃສ່ຊົນຊາດອາດ ແລະ ພວກຊາມູດ.'", english: "But if they turn away, then say, 'I have warned you of a thunderbolt like the thunderbolt [that struck] 'Aad and Thamud.'" },
  { number: "41:14", arabic: "إِذْ جَاءَتْهُمُ الرُّسُلُ مِن بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ أَلَّا تَعْبُدُوا إِلَّا اللَّهَ ۖ قَالُوا لَوْ شَاءَ رَبُّنَا لَأَنزَلَ مَلَائِكَةً فَإِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", lao: "ເມື່ອບັນດາສາດສະດາໄດ້ມາຫາພວກເຂົາ, ທັງກ່ອນໜ້າ ແລະ ຫຼັງຈາກພວກເຂົາ, ໂດຍເວົ້າວ່າ: 'ພວກທ່ານຢ່າໄດ້ເຄົາລົບສິ່ງໃດນອກຈາກພຣະເຈົ້າອົງດຽວເທົ່ານັ້ນ.' ພວກເຂົາກ່າວວ່າ: 'ຖ້າຫາກພຣະຜູ້ເປັນເຈົ້າຂອງພວກເຮົາຊົງປະສົງ, ພຣະອົງກໍຄົງຈະສົ່ງເທວະທູດລົງມາແລ້ວ, ດັ່ງນັ້ນ, ແທ້ຈິງແລ້ວພວກເຮົາບໍ່ເຊື່ອໃນສິ່ງທີ່ທ່ານໄດ້ຖືກສົ່ງມາ.'", english: "When the messengers came to them from before them and from behind them, [saying], 'Worship none but Allah ,' they said, 'If our Lord had willed, He would have sent down angels. So indeed we, in that with which you have been sent, are disbelievers.'"},
  { number: "41:15", arabic: "فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ بِغَيْرِ الْحَقِّ وَقَالُوا مَنْ أَشَدُّ مِنَّا قُوَّةً ۖ أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً ۖ وَكَانُوا بِآيَاتِنَا يَجْحَدُونَ", lao: "ສໍາລັບຊົນຊາດອາດ, ພວກເຂົາໄດ້ວາງໂຕເອງວ່າເປັນຜູ້ຍິ່ງໃຫຍ່ຢູ່ເທິງໜ້າໂລກຢ່າງບໍ່ຖືກຕ້ອງ ແລະ ກ່າວວ່າ: ໃຜຈະຍິ່ງໃຫຍ່ກວ່າພວກເຮົາໃນດ້ານຄວາມເຂັ້ມແຂງ? ພວກເຂົາບໍ່ໄດ້ພິຈາລະນາເບິ່ງບໍວ່າພຣະເຈົ້າຜູ້ທີ່ສ້າງພວກເຂົານັ້ນຍິ່ງໃຫຍ່ກວ່າພວກເຂົາໃນຄວາມເຂັ້ມແຂງ? ແຕ່ພວກເຂົາກໍຍັງປະຕິເສດສັນຍານຂອງເຮົາ.", english: "As for 'Aad, they were arrogant upon the earth without right and said, 'Who is greater than us in strength?' Did they not consider that Allah who created them was greater than them in strength? But they were rejecting Our signs." },
  { number: "41:16", arabic: "فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا فِي أَيَّامٍ نَّحِسَاتٍ لِّنُذِيقَهُمْ عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا ۖ وَلَعَذَابُ الْآخِرَةِ أَخْزَىٰ ۖ وَهُمْ لَا يُنصَرُونَ", lao: "ດັ່ງນັ້ນ, ເຮົາໄດ້ສົ່ງລົມພະຍຸທີ່ຮຸນແຮງມາໃສ່ພວກເຂົາໃນໄລຍະຫຼາຍວັນແຫ່ງຄວາມໂຊກຮ້າຍ, ເພື່ອໃຫ້ພວກເຂົາໄດ້ຊີມລົດຊາດຂອງການລົງໂທດທີ່ໜ້າອັບອາຍໃນໂລກນີ້ ແຕ່ການລົງໂທດໃນວັນອາຄີຣັດນັ້ນໜ້າອັບອາຍກວ່າ ແລະ ພວກເຂົາຈະບໍ່ມີໃຜຊ່ວຍເຫຼືອໄດ້.", english: "So We sent upon them a screaming wind during days of misfortune to make them taste the punishment of disgrace in the worldly life; but the punishment of the Hereafter is more disgracing, and they will not be helped." },
  { number: "41:17", arabic: "وَأَمَّا ثَمُودُ فَهَدَيْنَاهُمْ فَاسْتَحَبُّوا الْعَمَىٰ عَلَى الْهُدَىٰ فَأَخَذَتْهُمْ صَاعِقَةُ الْعَذَابِ الْهُونِ بِمَا كَانُوا يَكْسِبُونَ", lao: "ແລະ ສຳລັບຊົນຊາດຊາມູດ, ເຮົາໄດ້ຊີ້ທາງທີ່ຖືກຕ້ອງໃຫ້ແກ່ພວກເຂົາ, ແຕ່ພວກເຂົາກັບເລືອກຄວາມມືດບອດຫຼາຍກວ່າແສງສະຫວ່າງ. ດັ່ງນັ້ນ, ຟ້າຜ່າແຫ່ງການລົງໂທດທີ່ໜ້າອັບອາຍຈຶ່ງໄດ້ລົງໂທດພວກເຂົາຍ້ອນສິ່ງທີ່ພວກເຂົາໄດ້ກະທຳ.", english: "And as for Thamud, We guided them, but they preferred blindness over guidance, so the thunderbolt of humiliating punishment seized them for what they used to earn." },
  { number: "41:18", arabic: "وَنَجَّيْنَا الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ", lao: "ແລະ ເຮົາໄດ້ຊ່ວຍເຫຼືອບັນດາຜູ້ທີ່ສັດທາ ແລະ ຜູ້ທີ່ເຄີຍຢຳເກງ (ຕໍ່ອັນລໍຫ໌)ໃຫ້ປອດໄພຈາກການລົງໂທດນັ້ນ.", english: "And We saved those who believed and used to fear Allah." },
  { number: "41:19", arabic: "وَيَوْمَ يُحْشَرُ أَعْدَاءُ اللَّهِ إِلَى النَّارِ فَهُمْ يُوزَعُونَ", lao: "ແລະ (ຈົ່ງບອກ, ໂອ້ ມູຮຳມັດ) ເຖິງວັນທີ່ບັນດາສັດຕູຂອງພຣະເຈົ້າຈະຖືກເຕົ້າໂຮມກັນໄປສູ່ນະລົກໃນຂະນະທີ່ພວກເຂົາຖືກຂັບໄລ່, ລຽງແຖວຢ່າງເປັນລະບຽບ.", english: "And [mention, O Muhammad], the Day when the enemies of Allah will be gathered to the Fire while they are driven." },
  { number: "41:20", arabic: "حَتَّىٰ إِذَا مَا جَاءُوهَا شَهِدَ عَلَيْهِمْ سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُم بِمَا كَانُوا يَعْمَلُونَ", lao: "ຈົນກະທັ້ງເມື່ອພວກເຂົາໄປເຖິງນະລົກ, ຫູ, ຕາ ແລະ ໜັງຂອງພວກເຂົາຈະເປັນພະຍານຕໍ່ຕ້ານພວກເຂົາໃນສິ່ງທີ່ພວກເຂົາເຄີຍໄດ້ກະທຳ..", english: "Until, when they reach it, their hearing and their eyes and their skins will testify against them of what they used to do."}
];

export default function SurahFussilatView({ goBack }: SurahFussilatViewProps) {
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
            placeholder="ຄົ້ນຫາອາຍັດໃນ ສູຣໍ ຟຸສຊີລັດ..."
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
          ສິບອາຍັດທຳອິດຂອງສູຣໍ ຟຸສຊີລັດ ໄດ້ກ່າວເຖິງການປະທານລົງມາຂອງຄຳພີກຸຣອານ, ການຜິນຫຼັງຂອງຜູ້ປະຕິເສດ, ແລະການຢືນຢັນເຖິງຄວາມເປັນເອກະພາບຂອງອັນລໍຫ໌ ແລະການສ້າງຊັ້ນຟ້າແລະແຜ່ນດິນຂອງພຣະອົງ.
        </SummaryCard>
      </main>
    </div>
  );
}
