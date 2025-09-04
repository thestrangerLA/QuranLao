
export interface DescriptionSection {
  title: string;
  content: string;
}

export interface NameOfAllah {
  number: number;
  arabic: string;
  transliteration: string;
  translation: string;
  description?: DescriptionSection[];
  quran_mention?: {
    quote: string;
    source: string;
    translator: string;
  };
  hadith_mention?: {
    quote: string;
    source: string;
    narrator: string;
  };
}

export const namesOfAllahData: NameOfAllah[] = [
  { 
    number: 1, 
    arabic: "ٱلْرَّحْمَـٰن", 
    transliteration: "Ar-Rahman", 
    translation: "ພຣະຜູ້ຊົງເມດຕາຍິ່ງ", 
    description: [
      {
        title: "ຄວາມໝາຍ",
        content: "ອັລລໍຣ໌ ຄື Ar-Rahmān, ເຊິ່ງໝາຍເຖິງ ພຣະຜູ້ຊົງເມດຕາຍິ່ງ, ພຣະຜູ້ຊົງໂປດປານ. ຊື່ນີ້ສະແດງໃຫ້ເຫັນວ່າຄວາມເມດຕາ ແລະ ຄວາມກະລຸນາຂອງອັລລໍຣ໌ ມີໄວ້ໃຫ້ສຳລັບທຸກຄົນໃນໂລກ—ທັງຊາວມຸສລິມ ແລະ ບໍ່ແມ່ນມຸສລິມ, ຄົນດີ ແລະ ແມ້ແຕ່ຄົນບາບ. ຄວາມເມດຕາຂອງພຣະອົງກວ້າງໃຫຍ່ຈົນກວມເອົາທຸກສິ່ງທີ່ມີຊີວິດ: ມະນຸດ, ສັດ, ພືດ, ທຸກສິ່ງທຸກຢ່າງ."
      },
      {
        title: "ຕົວຢ່າງຂອງຄວາມເມດຕາຂອງ Ar-Rahmān",
        content: "- ພຣະອົງປະທານຊີວິດ, ອາຫານ, ນໍ້າ ແລະ ສຸຂະພາບໃຫ້ແກ່ເຮົາ—ເຖິງແມ່ນວ່າເຮົາຈະລືມພຣະອົງ.\n- ດວງອາທິດຂຶ້ນສຳລັບທຸກຄົນ. ອາກາດມີໄວ້ໃຫ້ທຸກຄົນໂດຍບໍ່ເສຍຄ່າ. ນີ້ຄືຄວາມເມດຕາຂອງ Allah ໃນຖານະ Ar-Rahmān.\n- ແມ້ນແຕ່ເມື່ອຜູ້ຄົນບໍ່ເຊື່ອຟັງພຣະອົງ, ພຣະອົງກໍຍັງໃຫ້ພວກເຂົາມີຊີວິດຢູ່ ແລະ ໃຫ້ໂອກາດແກ່ພວກເຂົາເພື່ອຫວນຄືນສູ່ພຣະອົງ."
      },
      {
        title: "ໃນ Quran",
        content: "ອັລລໍຣ໌ ກ່າວວ່າ: **“ຄວາມເມດຕາຂອງຂ້ອຍກວມເອົາທຸກສິ່ງ.” (Quran 7:156)**\nນີ້ໝາຍຄວາມວ່າບໍ່ມີຫຍັງຢູ່ນອກເໜືອຄວາມເມດຕາຂອງ Allah."
      },
      {
        title: "ສຳລັບຊາວມຸດສະລິມໃໝ່",
        content: "- ຈົ່ງຈື່ໄວ້: ອັລລໍຣ໌ ບໍ່ໄດ້ຮ້າຍກາດຫຼືໂຫດຮ້າຍ. ພຣະອົງຊົງເມດຕາ, ຮັກ ແລະ ຫ່ວງໃຍ.\n- ເມື່ອທ່ານກ່າວ Bismillāh ir-Rahmān ir-Raheem (ໃນນາມຂອງອັລລໍຣ໌, ພຣະຜູ້ຊົງເມດຕາຍິ່ງ, ພຣະຜູ້ຊົງກະລຸນາ), ທ່ານຈະເຕືອນຕົນເອງວ່າຄວາມເມດຕາຂອງອັລລໍຣ໌ ຢູ່ກັບທ່ານສະເໝີ.\n- ບໍ່ວ່າອະດີດຂອງທ່ານຈະເປັນແນວໃດ, ຄວາມເມດຕາຂອງອັລລໍຣ໌ ຍິ່ງໃຫຍ່ກວ່າຄວາມຜິດພາດຂອງທ່ານ. ການກັບຄືນສູ່ພຣະອົງຈະນຳທ່ານມາຢູ່ພາຍໃຕ້ການດູແລຂອງພຣະອົງ."
      },
      {
        title: "✨ ຂໍ້ຄິດທີ່ເຂົ້າໃຈງ່າຍ",
        content: "Ar-Rahmān ໝາຍຄວາມວ່າຄວາມເມດຕາຂອງອັລລໍຮ໌ ບໍ່ມີຂອບເຂດຈຳກັດ ແລະ ມີໄວ້ໃຫ້ສຳລັບທຸກຄົນ. ທຸກສິ່ງທີ່ດີທີ່ທ່ານມີໃນຊີວິດຄືສັນຍານຂອງ Ar-Rahmān."
      }
    ]
  },
  { number: 2, arabic: "ٱلْرَّحِيْم", transliteration: "Ar-Rahim", translation: "ຜູ້ຊົງເມດຕາເປັນນິດ" },
  { number: 3, arabic: "ٱلْمَلِك", transliteration: "Al-Malik", translation: "ຜູ້ຊົງເປັນກະສັດ" },
  { number: 4, arabic: "ٱلْقُدُّوس", transliteration: "Al-Quddus", translation: "ຜູ້ຊົງບໍລິສຸດ" },
  { number: 5, arabic: "ٱلْسَّلَام", transliteration: "As-Salam", translation: "ຜູ້ຊົງເປັນແຫຼ່ງສັນຕິ" },
  { number: 6, arabic: "ٱلْمُؤْمِن", transliteration: "Al-Mu'min", translation: "ຜູ້ຊົງໃຫ້ຄວາມປອດໄພ" },
  { number: 7, arabic: "ٱلْمُهَيْمِن", transliteration: "Al-Muhaymin", translation: "ຜູ້ຊົງປົກປ້ອງ" },
  { number: 8, arabic: "ٱلْعَزِيْز", transliteration: "Al-Aziz", translation: "ຜູ້ຊົງມີອຳນາດຍິ່ງໃຫຍ່" },
  { number: 9, arabic: "ٱلْجَبَّار", transliteration: "Al-Jabbar", translation: "ຜູ້ຊົງອານຸພາບ" },
  { number: 10, arabic: "ٱلْمُتَكَبِّر", transliteration: "Al-Mutakabbir", translation: "ຜູ້ຊົງຍິ່ງໃຫຍ່" },
  { number: 11, arabic: "ٱلْخَالِق", transliteration: "Al-Khaliq", translation: "ຜູ້ຊົງສ້າງ" },
  { number: 12, arabic: "ٱلْبَارِئ", transliteration: "Al-Bari'", translation: "ຜູ້ຊົງໃຫ້ກຳເນີດ" },
  { number: 13, arabic: "ٱلْمُصَوِّر", transliteration: "Al-Musawwir", translation: "ຜູ້ຊົງປັ້ນຮູບຮ່າງ" },
  { number: 14, arabic: "ٱلْغَفَّار", transliteration: "Al-Ghaffar", translation: "ຜູ້ຊົງອະໄພ" },
  { number: 15, arabic: "ٱلْقَهَّار", transliteration: "Al-Qahhar", translation: "ຜູ້ຊົງພິຊິດ" },
  { number: 16, arabic: "ٱلْوَهَّاب", transliteration: "Al-Wahhab", translation: "ຜູ້ຊົງປະທານ" },
  { number: 17, arabic: "ٱلْرَّزَّاق", transliteration: "Ar-Razzaq", translation: "ຜູ້ຊົງໃຫ້ປັດໃຈ" },
  { number: 18, arabic: "ٱلْفَتَّاح", transliteration: "Al-Fattah", translation: "ຜູ້ຊົງເປີດທາງ" },
  { number: 19, arabic: "ٱلْعَلِيْم", transliteration: "Al-'Alim", translation: "ຜູ້ຊົງຮອບຮູ້" },
  { number: 20, arabic: "ٱلْقَابِض", transliteration: "Al-Qabid", translation: "ຜູ້ຊົງຈຳກັດ" },
  { number: 21, arabic: "ٱلْبَاسِط", transliteration: "Al-Basit", translation: "ຜູ້ຊົງຂະຫຍາຍ" },
  { number: 22, arabic: "ٱلْخَافِض", transliteration: "Al-Khafid", translation: "ຜູ້ຊົງເຮັດໃຫ້ຕໍ່າລົງ" },
  { number: 23, arabic: "ٱلْرَّافِع", transliteration: "Ar-Rafi'", translation: "ຜູ້ຊົງຍົກໃຫ້ສູງຂຶ້ນ" },
  { number: 24, arabic: "ٱلْمُعِز", transliteration: "Al-Mu'izz", translation: "ຜູ້ຊົງໃຫ້ກຽດ" },
  { number: 25, arabic: "ٱلْمُذِل", transliteration: "Al-Mudhill", translation: "ຜູ້ຊົງເຮັດໃຫ້ອັບອາຍ" },
  { number: 26, arabic: "ٱلْسَّمِيْع", transliteration: "As-Sami'", translation: "ຜູ້ຊົງໄດ້ຍິນ" },
  { number: 27, arabic: "ٱلْبَصِيْر", transliteration: "Al-Basir", translation: "ຜູ້ຊົງເຫັນ" },
  { number: 28, arabic: "ٱلْحَكَم", transliteration: "Al-Hakam", translation: "ຜູ້ຊົງຕັດສິນ" },
  { number: 29, arabic: "ٱلْعَدْل", transliteration: "Al-'Adl", translation: "ຜູ້ຊົງຍຸດຕິທຳ" },
  { number: 30, arabic: "ٱلْلَّطِيْف", transliteration: "Al-Latif", translation: "ຜູ້ຊົງອ່ອນໂຍນ" },
  { number: 31, arabic: "ٱلْخَبِيْر", transliteration: "Al-Khabir", translation: "ຜູ້ຊົງຮູ້ເຖິງພາຍໃນ" },
  { number: 32, arabic: "ٱلْحَلِيْم", transliteration: "Al-Halim", translation: "ຜູ້ຊົງອົດກັ້ນ" },
  { number: 33, arabic: "ٱلْعَظِيْم", transliteration: "Al-'Azim", translation: "ຜູ້ຊົງຍິ່ງໃຫຍ່" },
  { number: 34, arabic: "ٱلْغَفُوْر", transliteration: "Al-Ghafur", translation: "ຜູ້ຊົງອະໄພຍິ່ງ" },
  { number: 35, arabic: "ٱلْشَّكُوْر", transliteration: "Ash-Shakur", translation: "ຜູ້ຊົງຂອບໃຈ" },
  { number: 36, arabic: "ٱلْعَلِي", transliteration: "Al-'Ali", translation: "ຜູ້ຊົງສູງສົ່ງ" },
  { number: 37, arabic: "ٱلْكَبِيْر", transliteration: "Al-Kabir", translation: "ຜູ້ຊົງໃຫຍ່ຫຼວງ" },
  { number: 38, arabic: "ٱلْحَفِيْظ", transliteration: "Al-Hafiz", translation: "ຜູ້ຊົງປົກປັກຮັກສາ" },
  { number: 39, arabic: "ٱلْمُقِيْت", transliteration: "Al-Muqit", translation: "ຜູ້ຊົງບຳລຸງ" },
  { number: 40, arabic: "ٱلْحَسِيْب", transliteration: "Al-Hasib", translation: "ຜູ້ຊົງຄິດໄລ່" },
  { number: 41, arabic: "ٱلْجَلِيْل", transliteration: "Al-Jalil", translation: "ຜູ້ຊົງມີສະຫງ່າ" },
  { number: 42, arabic: "ٱلْكَرِيْم", transliteration: "Al-Karim", translation: "ຜູ້ຊົງໃຈກວ້າງ" },
  { number: 43, arabic: "ٱلْرَّقِيْب", transliteration: "Ar-Raqib", translation: "ຜູ້ຊົງເຝົ້າລະວັງ" },
  { number: 44, arabic: "ٱلْمُجِيْب", transliteration: "Al-Mujib", translation: "ຜູ້ຊົງຕອບຮັບ" },
  { number: 45, arabic: "ٱلْوَاسِع", transliteration: "Al-Wasi'", translation: "ຜູ້ຊົງກວ້າງຂວາງ" },
  { number: 46, arabic: "ٱلْحَكِيْم", transliteration: "Al-Hakim", translation: "ຜູ້ຊົງມີປັນຍາ" },
  { number: 47, arabic: "ٱلْوَدُوْد", transliteration: "Al-Wadud", translation: "ຜູ້ຊົງຮັກ" },
  { number: 48, arabic: "ٱلْمَجِيْد", transliteration: "Al-Majid", translation: "ຜູ້ຊົງມີລັດສະໝີ" },
  { number: 49, arabic: "ٱلْبَاعِث", transliteration: "Al-Ba'ith", translation: "ຜູ້ຊົງຟື້ນຄືນຊີບ" },
  { number: 50, arabic: "ٱلْشَّهِيْد", transliteration: "Ash-Shahid", translation: "ຜູ້ຊົງເປັນພະຍານ" },
  { number: 51, arabic: "ٱلْحَق", transliteration: "Al-Haqq", translation: "ຜູ້ຊົງເປັນຄວາມຈິງ" },
  { number: 52, arabic: "ٱلْوَكِيْل", transliteration: "Al-Wakil", translation: "ຜູ້ຊົງເປັນຜູ້ຄຸ້ມຄອງ" },
  { number: 53, arabic: "ٱلْقَوِي", transliteration: "Al-Qawi", translation: "ຜູ້ຊົງແຂງແກ່ງ" },
  { number: 54, arabic: "ٱلْمَتِيْن", transliteration: "Al-Matin", translation: "ຜູ້ຊົງໝັ້ນຄົງ" },
  { number: 55, arabic: "ٱلْوَلِي", transliteration: "Al-Wali", translation: "ຜູ້ຊົງເປັນມິດ" },
  { number: 56, arabic: "ٱلْحَمِيْد", transliteration: "Al-Hamid", translation: "ຜູ້ຊົງສົມຄວນແກ່ການສັນລະເສີນ" },
  { number: 57, arabic: "ٱلْمُحْصِي", transliteration: "Al-Muhsi", translation: "ຜູ້ຊົງນັບທຸກສິ່ງ" },
  { number: 58, arabic: "ٱلْمُبْدِئ", transliteration: "Al-Mubdi'", translation: "ຜູ້ຊົງເລີ່ມຕົ້ນ" },
  { number: 59, arabic: "ٱلْمُعِيْد", transliteration: "Al-Mu'id", translation: "ຜູ້ຊົງເຮັດໃຫ້ກັບຄືນ" },
  { number: 60, arabic: "ٱلْمُحْيِي", transliteration: "Al-Muhyi", translation: "ຜູ້ຊົງໃຫ້ຊີວິດ" },
  { number: 61, arabic: "ٱلْمُمِيْت", transliteration: "Al-Mumit", translation: "ຜູ້ຊົງໃຫ້ຕາຍ" },
  { number: 62, arabic: "ٱلْحَي", transliteration: "Al-Hayy", translation: "ຜູ້ຊົງມີຊີວິດ" },
  { number: 63, arabic: "ٱلْقَيُّوْم", transliteration: "Al-Qayyum", translation: "ຜູ້ຊົງດຳລົງຢູ່ດ້ວຍຕົນເອງ" },
  { number: 64, arabic: "ٱلْوَاجِد", transliteration: "Al-Wajid", translation: "ຜູ້ຊົງພົບທຸກສິ່ງ" },
  { number: 65, arabic: "ٱلْمَاجِد", transliteration: "Al-Majid", translation: "ຜູ້ຊົງມີກຽດຕິຍົດ" },
  { number: 66, arabic: "ٱلْوَاحِد", transliteration: "Al-Wahid", translation: "ຜູ້ຊົງເປັນອົງດຽວ" },
  { number: 67, arabic: "ٱلْأَحَد", transliteration: "Al-Ahad", translation: "ຜູ້ຊົງເອກະ" },
  { number: 68, arabic: "ٱلْصَّمَد", transliteration: "As-Samad", translation: "ຜູ້ຊົງເປັນທີ່ເພິ່ງ" },
  { number: 69, arabic: "ٱلْقَادِر", transliteration: "Al-Qadir", translation: "ຜູ້ຊົງມີອຳນາດ" },
  { number: 70, arabic: "ٱلْمُقْتَدِر", transliteration: "Al-Muqtadir", translation: "ຜູ້ຊົງມີອຳນາດເດັດຂາດ" },
  { number: 71, arabic: "ٱلْمُقَدِّم", transliteration: "Al-Muqaddim", translation: "ຜູ້ຊົງນຳໜ້າ" },
  { number: 72, arabic: "ٱلْمُؤَخِّر", transliteration: "Al-Mu'akhkhir", translation: "ຜູ້ຊົງເຮັດໃຫ້ຢູ່ຫຼັງ" },
  { number: 73, arabic: "ٱلْأَوَّل", transliteration: "Al-Awwal", translation: "ຜູ້ຊົງເປັນອົງທຳອິດ" },
  { number: 74, arabic: "ٱلْآخِر", transliteration: "Al-Akhir", translation: "ຜູ້ຊົງເປັນອົງສຸດທ້າຍ" },
  { number: 75, arabic: "ٱلْظَّاهِر", transliteration: "Az-Zahir", translation: "ຜູ້ຊົງປາກົດ" },
  { number: 76, arabic: "ٱلْبَاطِن", transliteration: "Al-Batin", translation: "ຜູ້ຊົງซ่อนเร้น" },
  { number: 77, arabic: "ٱلْوَالِي", transliteration: "Al-Wali", translation: "ຜູ້ຊົງປົກຄອງ" },
  { number: 78, arabic: "ٱلْمُتَعَالِي", transliteration: "Al-Muta'ali", translation: "ຜູ້ຊົງສູງສົ່ງທີ່ສຸດ" },
  { number: 79, arabic: "ٱلْبَر", transliteration: "Al-Barr", translation: "ຜູ້ຊົງເຮັດຄວາມດີ" },
  { number: 80, arabic: "ٱلْتَّوَّاب", transliteration: "At-Tawwab", translation: "ຜູ້ຊົງຮັບການກັບໃຈ" },
  { number: 81, arabic: "ٱلْمُنْتَقِم", transliteration: "Al-Muntaqim", translation: "ຜູ້ຊົງແກ້ແຄ້ນ" },
  { number: 82, arabic: "ٱلْعَفُو", transliteration: "Al-'Afuww", translation: "ຜູ້ຊົງອະໄພຍິ່ງ" },
  { number: 83, arabic: "ٱلْرَّؤُوْف", transliteration: "Ar-Ra'uf", translation: "ຜູ້ຊົງກະລຸນາ" },
  { number: 84, arabic: "مَالِكُ ٱلْمُلْك", transliteration: "Malik-ul-Mulk", translation: "ຜູ້ຊົງເປັນເຈົ້າຂອງອຳນາດ" },
  { number: 85, arabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام", transliteration: "Dhul-Jalali wal-Ikram", translation: "ຜູ້ຊົງມີຄວາມຍິ່ງໃຫຍ່ ແລະ ກຽດຕິຍົດ" },
  { number: 86, arabic: "ٱلْمُقْسِط", transliteration: "Al-Muqsit", translation: "ຜູ້ຊົງທ່ຽງທຳ" },
  { number: 87, arabic: "ٱلْجَامِع", transliteration: "Al-Jami'", translation: "ຜູ້ຊົງລວບລວມ" },
  { number: 88, arabic: "ٱلْغَنِي", transliteration: "Al-Ghani", translation: "ຜູ້ຊົງຮັ່ງມີ" },
  { number: 89, arabic: "ٱلْمُغْنِي", transliteration: "Al-Mughni", translation: "ຜູ້ຊົງໃຫ້ຄວາມຮັ່ງມີ" },
  { number: 90, arabic: "ٱلْمَانِع", transliteration: "Al-Mani'", translation: "ຜູ້ຊົງຫ້າມ" },
  { number: 91, arabic: "ٱلْضَّار", transliteration: "Ad-Darr", translation: "ຜູ້ຊົງໃຫ້ໂທດ" },
  { number: 92, arabic: "ٱلْنَّافِع", transliteration: "An-Nafi'", translation: "ຜູ້ຊົງໃຫ້ຄຸນ" },
  { number: 93, arabic: "ٱلْنُّوْر", transliteration: "An-Nur", translation: "ຜູ້ຊົງເປັນແສງສະຫວ່າງ" },
  { number: 94, arabic: "ٱلْهَادِي", transliteration: "Al-Hadi", translation: "ຜູ້ຊົງນຳທາງ" },
  { number: 95, arabic: "ٱلْبَدِيْع", transliteration: "Al-Badi'", translation: "ຜູ້ຊົງປະດິດ" },
  { number: 96, arabic: "ٱلْبَاقِي", transliteration: "Al-Baqi", translation: "ຜູ້ຊົງຄົງຢູ່ຕະຫຼອດໄປ" },
  { number: 97, arabic: "ٱلْوَارِث", transliteration: "Al-Warith", translation: "ຜູ້ຊົງເປັນຜູ້ສືບທອດ" },
  { number: 98, arabic: "ٱلْرَّشِيْد", transliteration: "Ar-Rashid", translation: "ຜູ້ຊົງຊີ້ນຳ" },
  { number: 99, arabic: "ٱلْصَّبُوْر", transliteration: "As-Sabur", translation: "ຜູ້ຊົງອົດທົນ" }
];

    
