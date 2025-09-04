'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Gift, Calendar, Users, Sun, Moon } from 'lucide-react';

interface EidViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function EidView({ goBack }: EidViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ວັນພັກທີ່ສຳຄັນ (ອີດ)" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມໝາຍຂອງ 'ອີດ'" icon={<Gift />}>
            <p>ໃນສາສະໜາອິດສະລາມ, ຄຳວ່າ "ອີດ" (Eid) ແປວ່າ "ບຸນ" ຫຼື "ງານສະຫຼອງ". ອິດສະລາມມີວັນພັກສຳຄັນສອງວັນຄື: ອີດິລຟິຕຣິ (Eid al-Fitr) ແລະ ອີດິລອັດຮາ (Eid al-Adha). ວັນພັກທັງສອງນີ້ເປັນຊ່ວງເວລາແຫ່ງຄວາມສຸກ, ການຂອບໃຈ, ການອະທິຖານ, ແລະ ການເຕົ້າໂຮມຂອງຊຸມຊົນ.</p>
        </ContentSection>

        <ContentSection title="1. ອີດິລຟິຕຣິ (Eid al-Fitr) - ບຸນແຫ່ງການສິ້ນສຸດການຖືສິນອົດ" icon={<Moon />}>
            <p>ອີດິລຟິຕຣິ ຈັດຂຶ້ນໃນມື້ທຳອິດຂອງເດືອນ ຊະວາລ (Shawwal), ເຊິ່ງເປັນເດືອນທີ່ຕາມຫຼັງເດືອນ ຣໍມະດອນ (Ramadan). ມັນເປັນການສະເຫຼີມສະຫຼອງການສິ້ນສຸດຂອງການຖືສິນອົດເປັນເວລາໜຶ່ງເດືອນ.</p>
            <h3 className="font-bold text-md text-primary mt-4">ການປະຕິບັດທີ່ສຳຄັນ:</h3>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການຈ່າຍຊະກາຕຸລຟິຕຣ໌ (Zakat al-Fitr):</strong> ກ່ອນການລະໝາດອີດ, ມຸດສະລິມທຸກຄົນທີ່ມີຄວາມສາມາດຕ້ອງບໍລິຈາກອາຫານຫຼັກໃຫ້ແກ່ຄົນຍາກຈົນ ເພື່ອຮັບປະກັນວ່າທຸກຄົນສາມາດສະເຫຼີມສະຫຼອງໄດ້.</BulletPoint>
                <BulletPoint><strong>ການລະໝາດອີດ (Eid Prayer):</strong> ໃນຕອນເຊົ້າຂອງວັນອີດ, ຊາວມຸດສະລິມຈະເຕົ້າໂຮມກັນຢູ່ມັດສະຍິດ ຫຼື ສະຖານທີ່ກາງແຈ້ງເພື່ອລະໝາດພິເສດຮ່ວມກັນ.</BulletPoint>
                <BulletPoint><strong>ການສະເຫຼີມສະຫຼອງ:</strong> ຫຼັງຈາກການລະໝາດ, ผู้คนจะไปเยี่ยมครอบครัวและเพื่อน, แลกเปลี่ยนของขวัญ, และเพลิดเพลินกับอาหารมื้อพิเศษ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="2. ອີດິລອັດຮາ (Eid al-Adha) - ບຸນແຫ່ງການເສຍສະຫຼະ" icon={<Sun />}>
            <p>ອີດິລອັດຮາ ຈັດຂຶ້ນໃນວັນທີ 10 ຂອງເດືອນ ສຸລຮິຈຈະ (Dhul Hijjah), ເຊິ່ງເປັນຊ່ວງເວລາຂອງການສະແຫວງບຸນຮັຈ (Hajj). ວັນພັກນີ້ເປັນການລະນຶກເຖິງຄວາມພ້ອມຂອງສາດສະດາ ອິບຣໍຮີມ (ອັບຣາຮາມ) ທີ່ຈະເສຍສະຫຼະລູກຊາຍຂອງຕົນຕາມຄຳສັ່ງຂອງພະເຈົ້າ.</p>
            <h3 className="font-bold text-md text-primary mt-4">ການປະຕິບັດທີ່ສຳຄັນ:</h3>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການລະໝາດອີດ (Eid Prayer):</strong> ຄ້າຍຄືກັບ ອີດິລຟິຕຣິ, ມີການລະໝາດພິເສດໃນຕອນເຊົ້າ.</BulletPoint>
                <BulletPoint><strong>ການເຊือดສັດ (Qurbani/Udhiyah):</strong> ຜູ້ທີ່ມີຄວາມສາມາດຈະເຊືອດສັດ (ເຊັ່ນ: ແບ້, ແກະ, ຫຼື ງົວ) ເພື່ອລະນຶກເຖິງການເສຍສະຫຼະຂອງສາດສະດາ ອິບຣໍຮີມ. ຊີ້ນຂອງສັດຈະຖືກແບ່ງອອກເປັນສາມສ່ວນ: ສ່ວນໜຶ່ງສຳລັບຄອບຄົວ, ສ່ວນໜຶ່ງສຳລັບໝູ່ເພື່ອນແລະຍາດພີ່ນ້ອງ, ແລະ ສ່ວນໜຶ່ງສຳລັບຄົນຍາກຈົນ.</BulletPoint>
                <BulletPoint><strong>ການເຕົ້າໂຮມຊຸມຊົນ:</strong> ເປັນຊ່ວງເວລາແຫ່ງການແບ່ງປັນ ແລະ ການເຕົ້າໂຮມກັນໃນຊຸມຊົນ.</BulletPoint>
            </ul>
        </ContentSection>

        <ContentSection title="ຄວາມສຳຄັນຂອງວັນອີດ" icon={<Users />}>
            <p>ວັນອີດທັງສອງເປັນຫຼາຍກວ່າພຽງແຕ່ວັນພັກ. ມັນເປັນໂອກາດໃນການ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຂອບໃຈພະເຈົ້າ:</strong> ສະແດງຄວາມຂອບໃຈຕໍ່ອັນລໍ (Allah) ສໍາລັບພອນຕ່າງໆ.</BulletPoint>
                <BulletPoint><strong>ສ້າງຄວາມສາມັກຄີ:</strong> ເສີມສ້າງສາຍສຳພັນໃນຄອບຄົວ ແລະ ຊຸມຊົນ.</BulletPoint>
                <BulletPoint><strong>ການໃຫ້ອະໄພ ແລະ ການຄືນດີ:</strong> ເປັນຊ່ວງເວລາທີ່ເໝາະສົມໃນການໃຫ້ອະໄພເຊິ່ງກັນແລະກັນ.</BulletPoint>
                <BulletPoint><strong>ການແບ່ງປັນ:</strong> ການດູແລຄົນຍາກຈົນແລະຜູ້ດ້ອຍໂອກາດ.</BulletPoint>
            </ul>
        </ContentSection>
      </main>
    </div>
  );
}
