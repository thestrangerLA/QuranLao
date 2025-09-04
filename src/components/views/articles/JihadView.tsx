
'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import { Shield, Heart, Sword, BrainCircuit } from 'lucide-react';

interface JihadViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">•</span>
        <span>{children}</span>
    </li>
);

export default function JihadView({ goBack }: JihadViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມໝາຍຂອງ 'ຈີຮາດ'" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title="ຄວາມໝາຍທີ່ແທ້ຈິງຂອງ 'ຈີຮາດ'" icon={<BrainCircuit />}>
            <p>ຄຳວ່າ "ຈີຮາດ" (Jihad) ເປັນຄຳສັບພາສາອາຣັບທີ່ມັກຖືກເຂົ້າໃຈຜິດ. ຄວາມໝາຍຕາມຕົວອັກສອນຂອງມັນຄື "ການຕໍ່ສູ້" ຫຼື "ການພະຍາຍາມ". ໃນບໍລິບົດຂອງອິດສະລາມ, ມັນໝາຍເຖິງການອຸທິດຄວາມພະຍາຍາມຢ່າງສຸດກຳລັງໃນແນວທາງຂອງອັນລໍ (Allah). ຈີຮາດບໍ່ໄດ້ໝາຍເຖິງ "ສົງຄາມສັກສິດ" ພຽງຢ່າງດຽວ, ແຕ່ມັນມີຄວາມໝາຍທີ່ກວ້າງຂວາງກວ່ານັ້ນຫຼາຍ.</p>
        </ContentSection>

        <ContentSection title="1. ຈີຮາດທີ່ຍິ່ງໃຫຍ່ (Al-Jihad al-Akbar)" icon={<Heart />}>
            <p>ຈີຮາດປະເພດນີ້ຖືເປັນຮູບແບບທີ່ສຳຄັນທີ່ສຸດ. ມັນຄືການຕໍ່ສູ້ພາຍໃນຈິດໃຈຂອງຕົນເອງ ເພື່ອເອົາຊະນະຄວາມປາຖະໜາທີ່ບໍ່ດີ, ຄວາມໂລບ, ຄວາມອິດສາ, ແລະ ຄວາມທະນົງຕົວ. ມັນຄືການພະຍາຍາມຢ່າງຕໍ່ເນື່ອງເພື່ອຊຳລະຈິດວິນຍານໃຫ້ບໍລິສຸດ ແລະ ເຂົ້າໃກ້ຊິດກັບອັນລໍ (Allah) ຫຼາຍຂຶ້ນ.</p>
            <h3 className="font-bold text-md text-primary mt-4">ຕົວຢ່າງຂອງຈີຮາດທີ່ຍິ່ງໃຫຍ່:</h3>
            <ul className="space-y-2 mt-2">
                <BulletPoint>ການຕື່ນນອນເພື່ອລະໝາດໃນຕອນເຊົ້າ.</BulletPoint>
                <BulletPoint>ການຄວບຄຸມຄວາມໂກດ.</BulletPoint>
                <BulletPoint>ການມີຄວາມຊື່ສັດໃນການເຮັດວຽກ.</BulletPoint>
                <BulletPoint>ການອົດທົນຕໍ່ຄວາມລຳບາກ.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title="2. ຈີຮາດທີ່ນ້ອຍກວ່າ (Al-Jihad al-Asghar)" icon={<Shield />}>
            <p>ຈີຮາດປະເພດນີ້ກ່ຽວຂ້ອງກັບການຕໍ່ສູ້ພາຍນອກ. ມັນລວມເຖິງການປົກປ້ອງຊຸມຊົນມຸດສະລິມ, ສາດສະໜາ, ແລະ ຜູ້ທີ່ຖືກກົດຂີ່ຂົ່ມເຫັງ. ການຕໍ່ສູ້ດ້ວຍອາວຸດເປັນພຽງສ່ວນໜຶ່ງທີ່ນ້ອຍທີ່ສຸດຂອງຈີຮາດປະເພດນີ້ ແລະ ມີເງື່ອນໄຂທີ່ເຂັ້ມງວດຫຼາຍ.</p>
            <h3 className="font-bold text-md text-primary mt-4">ເງື່ອນໄຂຂອງການຕໍ່ສູ້ດ້ວຍອາວຸດ:</h3>
             <ul className="space-y-2 mt-2">
                <BulletPoint><strong>ຕ້ອງເປັນການປ້ອງກັນຕົວ:</strong> ສາມາດເຮັດໄດ້ກໍຕໍ່ເມື່ອຖືກໂຈມຕີກ່ອນ.</BulletPoint>
                <BulletPoint><strong>ຕ້ອງຖືກປະກາດໂດຍຜູ້ນຳທີ່ຊອບທຳ:</strong> ບຸກຄົນທົ່ວໄປບໍ່ສາມາດປະກາດຈີຮາດດ້ວຍຕົນເອງໄດ້.</BulletPoint>
                <BulletPoint><strong>ຫ້າມທຳຮ້າຍຜູ້ບໍລິສຸດ:</strong> ຫ້າມຂ້າແມ່ຍິງ, ເດັກນ້ອຍ, ຄົນຊະລາ, ແລະ ຜູ້ທີ່ບໍ່ໄດ້ມີສ່ວນຮ່ວມໃນການຕໍ່ສູ້.</BulletPoint>
                <BulletPoint><strong>ຫ້າມທຳລາຍສິ່ງແວດລ້ອມ:</strong> ຫ້າມຕັດຕົ້ນໄມ້ ຫຼື ທຳລາຍແຫຼ່ງນ້ຳໂດຍບໍ່ຈຳເປັນ.</BulletPoint>
             </ul>
        </ContentSection>

        <ContentSection title="ຄວາມເຂົ້າໃຈຜິດກ່ຽວກັບຈີຮາດ" icon={<Sword />}>
            <p>ການກະທຳຂອງກຸ່ມຫົວຮຸນແຮງທີ່ອ້າງຊື່ຈີຮາດເພື່ອສ້າງຄວາມຮຸນແຮງນັ້ນ ຂັດກັບຫຼັກການຂອງອິດສະລາມຢ່າງสิ้นเชิง. ການກໍ່ການຮ້າຍແລະການທຳຮ້າຍຜູ້ບໍລິສຸດເປັນບາບທີ່ຮ້າຍແຮງໃນອິດສະລາມ.</p>
            <p className="mt-4">ໂດຍສະຫຼຸບ, ຈີຮາດໃນຄວາມໝາຍທີ່ແທ້ຈິງຂອງອິດສະລາມຄືການພະຍາຍາມເຮັດໃຫ້ຕົນເອງແລະສັງຄົມດີຂຶ້ນ ເພື່ອຄວາມພໍໃຈຂອງອັນລໍ (Allah). ຈຸດສຸມຫຼັກແມ່ນການຕໍ່ສູ້ພາຍໃນເພື່ອເປັນຄົນທີ່ດີກວ່າ, ບໍ່ແມ່ນການສ້າງຄວາມຂັດແຍ່ງ.</p>
        </ContentSection>
      </main>
    </div>
  );
}
