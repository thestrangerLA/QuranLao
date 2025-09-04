'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Calendar, Users, Mic, Star } from 'lucide-react';

interface JumuahViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function JumuahView({ goBack }: JumuahViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມສຳຄັນຂອງວັນສຸກ" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ວັນທີ່ປະເສີດທີ່ສຸດ" icon={<Calendar />}>
            <p>ໃນສາສະໜາອິດສະລາມ, ວັນສຸກ (Yaum al-Jumu'ah) ຖືເປັນວັນທີ່ປະເສີດທີ່ສຸດຂອງອາທິດ. ມັນບໍ່ແມ່ນວັນພັກຜ່ອນໃນຄວາມໝາຍຂອງການບໍ່ເຮັດວຽກ, ແຕ່ເປັນວັນແຫ່ງການເຕົ້າໂຮມ, ການອະທິຖານ, ແລະ ການລະນຶກເຖິງອັນລໍ (Allah) ເປັນພິເສດ. ມັນເປັນວັນທີ່ອັນລໍ (Allah) ໄດ້ໃຫ້ກຽດແກ່ຊຸມຊົນມຸດສະລິມ.</p>
        </ContentSection>

        <ContentSection title="ການລະໝາດວັນສຸກ (Salat al-Jumu'ah)" icon={<Users />}>
            <p>ການປະຕິບັດທີ່ສຳຄັນທີ່ສຸດໃນວັນສຸກຄື ການລະໝາດວັນສຸກ (Salat al-Jumu'ah). ມັນເປັນການລະໝາດພິເສດທີ່ຈັດຂຶ້ນໃນເວລາກາງເວັນ (ເວລາຂອງການລະໝາດ Zuhr) ແລະ ເປັນພັນທະບັງຄັບສໍາລັບຜູ້ຊາຍມຸດສະລິມທີ່ບັນລຸນິຕິພາວະແລະບໍ່ມີຂໍ້ອ້າງທີ່ສົມເຫດສົມຜົນ.</p>
            <h3 className="font-bold text-md text-primary mt-4">ອົງປະກອບຂອງການລະໝາດວັນສຸກ:</h3>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຄຸດບະ (Khutbah):</strong> ກ່ອນການລະໝາດ, ອີໝ່າ່ມ (ຜູ້ນຳລະໝາດ) ຈະໃຫ້ຄຳເທດສະໜາສອງພາກສ່ວນທີ່ເອີ້ນວ່າ ຄຸດບະ. ຄຸດບະຈະເນັ້ນໜັກເຖິງການຢຳເກງພະເຈົ້າ, ຄຳສອນທາງສິນລະທຳ, ແລະ ປະເດັນທີ່ກ່ຽວຂ້ອງກັບຊຸມຊົນ.</BulletPoint>
                <BulletPoint><strong>ການລະໝາດສອງຣະກະອັດ:</strong> ຫຼັງຈາກຄຸດບະ, ຈະມີການລະໝາດຮ່ວມກັນສອງຣະກະອັດ (ໜ່ວຍການລະໝາດ) ແທນທີ່ຈະເປັນສີ່ຣະກະອັດຂອງການລະໝາດ Zuhr ປົກກະຕິ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="ການກະທຳທີ່ຄວນປະຕິບັດໃນວັນສຸກ" icon={<Star />}>
            <p>ມີການກະທຳຫຼາຍຢ່າງທີ່ສາດສະດາມູຮຳມັດໄດ້ຊຸກຍູ້ໃຫ້ປະຕິບັດໃນວັນສຸກ ເພື່ອເພີ່ມພູນຄວາມດີ:</p>
            <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ການອາບນໍ້າ (Ghusl):</strong> ການອາບນໍ້າຊຳລະຮ່າງກາຍກ່ອນໄປລະໝາດວັນສຸກ.</BulletPoint>
                <BulletPoint><strong>ການນຸ່ງເຄື່ອງທີ່ສະອາດທີ່ສຸດ:</strong> ນຸ່ງເຄື່ອງທີ່ດີແລະສະອາດທີ່ສຸດທີ່ຕົນມີ.</BulletPoint>
                <BulletPoint><strong>ການໃຊ້ນໍ້າຫອມ (ສຳລັບຜູ້ຊາຍ).</BulletPoint>
                <BulletPoint><strong>ການໄປມັດສະຍິດກ່ອນເວລາ:</strong> ການໄປຮອດມັດສະຍິດກ່ອນເວລາເພື່ອລໍຖ້າການລະໝາດ.</BulletPoint>
                <BulletPoint><strong>ການອ່ານຊູຣະອັລ-ກັຮຟ໌ (Surah Al-Kahf):</strong> ການອ່ານບົດທີ 18 ຂອງຄຳພີກຸຣອານ.</BulletPoint>
                <BulletPoint><strong>ການຂໍພອນ (Dua):</strong> ວັນສຸກມີຊ່ວງເວລາໜຶ່ງທີ່ການຂໍພອນຈະຖືກຕອບຮັບ. ມຸດສະລິມຖືກຊຸກຍູ້ໃຫ້ຂໍພອນຫຼາຍໆໃນວັນນີ້.</BulletPoint>
                <BulletPoint><strong>ການກ່າວສັນລະເສີນສາດສະດາ (Salawat):</strong> ການກ່າວຄຳສັນລະເສີນແລະຂໍພອນໃຫ້ແກ່ສາດສະດາມູຮຳມັດຫຼາຍໆຄັ້ງ.</BulletPoint>
            </ul>
        </ContentSection>
      </main>
    </div>
  );
}
