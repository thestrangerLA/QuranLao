'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Users, Heart, BookOpen, Shield } from 'lucide-react';

interface FamilyViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function FamilyView({ goBack }: FamilyViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄຸນຄ່າຂອງຄອບຄົວ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມສຳຄັນຂອງຄອບຄົວໃນອິດສະລາມ" icon={<Heart />}>
            <p>ໃນສາສະໜາອິດສະລາມ, ຄອບຄົວຖືເປັນໜ່ວຍງານພື້ນຖານທີ່ສຳຄັນທີ່ສຸດຂອງສັງຄົມ. ມັນບໍ່ພຽງແຕ່ເປັນບ່ອນໃຫ້ຄວາມຮັກແລະຄວາມອົບອຸ່ນ, ແຕ່ຍັງເປັນສະຖາບັນທີ່ສ້າງຄົນລຸ້ນໃໝ່ໃຫ້ມີສິນລະທຳແລະຄວາມເຊື່ອທີ່ຖືກຕ້ອງ. ຄຳພີກຸຣອານແລະຄຳສອນຂອງສາດສະດາມູຮຳມັດໄດ້ເນັ້ນໜັກເຖິງຄວາມສຳຄັນຂອງການຮັກສາສາຍສຳພັນໃນຄອບຄົວ.</p>
        </ContentSection>

        <ContentSection title="ບົດບາດ ແລະ ໜ້າທີ່ໃນຄອບຄົວ" icon={<Users />}>
            <h3 className="font-bold text-md text-primary mt-4">ບົດບາດຂອງພໍ່ແມ່:</h3>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການລ້ຽງດູແລະການສຶກສາ:</strong> ພໍ່ແມ່ມີໜ້າທີ່ຮັບຜິດຊອບໃນການລ້ຽງດູລູກໃຫ້ເຕີບໃຫຍ່ທັງທາງຮ່າງກາຍແລະຈິດວິນຍານ. ໜ້າທີ່ທີ່ສຳຄັນທີ່ສຸດຄືການສອນໃຫ້ລູກຮູ້ຈັກອັນລໍ (Allah) ແລະຫຼັກການຂອງອິດສະລາມ.</BulletPoint>
                <BulletPoint><strong>ການໃຫ້ຄວາມຮັກແລະຄວາມເມດຕາ:</strong> ການສ້າງສະພາບແວດລ້ອມທີ່ເຕັມໄປດ້ວຍຄວາມຮັກແລະຄວາມອົບອຸ່ນເປັນສິ່ງຈຳເປັນສຳລັບການພັດທະນາຂອງເດັກ.</BulletPoint>
                <BulletPoint><strong>ການເປັນແບບຢ່າງທີ່ດີ:</strong> ພໍ່ແມ່ຕ້ອງເປັນແບບຢ່າງທີ່ດີໃນການປະຕິບັດຕົນຕາມຫຼັກການສາສະໜາ.</BulletPoint>
            </ul>
             <h3 className="font-bold text-md text-primary mt-4">ບົດບາດຂອງລູກ:</h3>
             <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການເຊື່ອຟັງແລະການເຄົາລົບ:</strong> ລູກຕ້ອງເຊື່ອຟັງແລະໃຫ້ກຽດພໍ່ແມ່, ຕາບໃດທີ່ຄຳສັ່ງຂອງພວກເພິ່ນບໍ່ຂັດກັບຫຼັກການຂອງອິດສະລາມ.</BulletPoint>
                <BulletPoint><strong>ການດູແລໃນຍາມເຖົ້າແກ່:</strong> ເມື່ອພໍ່ແມ່ເຖົ້າແກ່, ລູກມີໜ້າທີ່ໃນການດູແລແລະຊ່ວຍເຫຼືອພວກເພິ່ນ.</BulletPoint>
             </ul>
        </ContentSection>
        
        <ContentSection title="ການຮັກສາສາຍສຳພັນກັບຍາດພີ່ນ້ອງ" icon={<BookOpen />}>
            <p>ອິດສະລາມບໍ່ພຽງແຕ່ເນັ້ນໜັກເຖິງຄອບຄົວຫຼັກ (ພໍ່, ແມ່, ລູກ), ແຕ່ຍັງໃຫ້ຄວາມສຳຄັນກັບການຮັກສາສາຍສຳພັນກັບຍາດພີ່ນ້ອງ (Silat al-Rahim). ການຢ້ຽມຢາມ, ການຊ່ວຍເຫຼືອ, ແລະ ການຮັກສາຄວາມສຳພັນທີ່ດີກັບຍາດພີ່ນ້ອງຖືເປັນການກະທຳທີ່ໄດ້ຮັບຜົນບຸນຢ່າງຫຼວງຫຼາຍ.</p>
        </ContentSection>

        <ContentSection title="ການສ້າງຄອບຄົວທີ່ເຂັ້ມແຂງ" icon={<Shield />}>
            <p>ການສ້າງຄອບຄົວທີ່ເຂັ້ມແຂງຕາມຫຼັກການອິດສະລາມປະກອບດ້ວຍ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ພື້ນຖານທາງສາສະໜາ:</strong> ການເຮັດໃຫ້ອິດສະລາມເປັນຈຸດສູນກາງຂອງຄອບຄົວ.</BulletPoint>
                <BulletPoint><strong>ການສື່ສານທີ່ດີ:</strong> ການເປີດใจເວົ້າລົມແລະຮັບຟັງກັນ.</BulletPoint>
                <BulletPoint><strong>ການໃຫ້ອະໄພ:</strong> ການໃຫ້ອະໄພເຊິ່ງກັນແລະກັນເມື່ອມີຄວາມຜິດພາດ.</BulletPoint>
                <BulletPoint><strong>ການໃຊ້ເວລาร่วมกัน:</strong> การสร้างความทรงจำที่ดีและเสริมสร้างความผูกพัน.</BulletPoint>
            </ul>
            <p className="mt-4">ຄອບຄົວທີ່ເຂັ້ມແຂງບໍ່ພຽງແຕ່ເປັນແຫຼ່ງຄວາມສຸກສ່ວນຕົວ, ແຕ່ຍັງເປັນພື້ນຖານທີ່ສຳຄັນຂອງສັງຄົມມຸດສະລິມທີ່ແຂງແຮງ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
