
'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import ContentSection from '@/components/shared/ContentSection';
import QuoteCard from '@/components/shared/QuoteCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { BookOpen, Crosshair, History, ListChecks, Target, Star, Shield, BookHeart, Users, CheckCircle, HandHeart, HelpCircle } from 'lucide-react';

interface WhatIsIslamViewProps {
  goBack: () => void;
}

const BulletPoint = ({ children, isBold }: { children: React.ReactNode, isBold?: boolean }) => (
    <li className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">▶</span>
        <span className={isBold ? 'font-semibold' : ''}>{children}</span>
    </li>
);

const NumberedBullet = ({ number, title, text }: { number: string, title: React.ReactNode, text?: string }) => (
    <div className="flex items-start gap-3">
        <span className="text-primary font-bold mt-1">{number}.</span>
        <div>
            <p className="font-semibold">{title}</p>
            {text && <p className="text-sm text-muted-foreground">{text}</p>}
        </div>
    </div>
);

export default function WhatIsIslamView({ goBack }: WhatIsIslamViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ອິສລາມແມ່ນຫຍັງ?" onBack={goBack} />
      <main className="p-4 space-y-4">
        <ContentSection title='ຄວາມໝາຍ' icon={<BookOpen />}>
            <p>ສາສະໜາອິດສະລາມ ເປັນຫຼາຍກວ່າພຽງແຕ່ສາສະໜາ —ແຕ່ຄືວິທີດຳເນີນຊີວິດຢ່າງສົມບູນ.</p>
            <p>ຄໍາວ່າ <strong>ອິດສະລາມ</strong> ໝາຍເຖິງ <strong>ການຍອມຈຳນົນ</strong> ຫຼື ຍອມຮັບໃນເຈດຈໍານົງຂອງ ອັລລໍຣ໌ (ພຣະເຈົ້າ).</p>
            <p>ບຸກຄົນທີ່ນັບຖືສາສະໜາອິດສະລາມ ເອີ້ນວ່າ <strong>ຊາວມຸສລິມ</strong>, ຊຶ່ງໝາຍເຖິງ “ຜູ້ທີ່ຍອມຈຳນົນຕໍ່ພຣະເຈົ້າ.”</p>
        </ContentSection>

        <ContentSection title='ຄຳສອນຂອງອິດສະລາມ' icon={<History />}>
            <p>ສາສະໜາອິດສະລາມສອນວ່າ ມີພຣະເຈົ້າພຽງອົງດຽວ (ອັລລໍຣ໌) ແລະ ວ່າບັນດາສາດສະດາທັງໝົດ ເຊັ່ນ: ສາດສະດາອາດຳ, ໂນອາ, ອັບບຣາຮຳ, ໂມເຊສ, ເຍຊູ ແລະ ມູຮຳມັດ (ຂໍຄວາມສັນຕິຈົ່ງມີແກ່ພວກເພິ່ນທັງໝົດ) ລ້ວນແລ້ວແຕ່ຖືກສົ່ງມາຈາກພຣະເຈົ້າ ເພື່ອຊີ້ແນະນຳມະນຸດຊາດ.</p>
            <p>ສາດສະດາຜູ້ສຸດທ້າຍຄື ສາດສະດາມູຮຳມັດ ﷺ ແລະ ຄຳພີສຸດທ້າຍທີ່ຖືກປະທານລົງມາຈາກພຣະເຈົ້າຄື ຄໍາພີອັນກຸຣອ່ານ.</p>
        </ContentSection>

        <ContentSection title='ຫຼັກການຄວາມເຊື່ອຂອງຊາວມຸສລິມ' icon={<Star />}>
            <div className="space-y-2">
                <NumberedBullet number="1" title="ເຊື່ອໃນອັລລໍຣ໌" />
                <NumberedBullet number="2" title="ເຊື່ອໃນທູດສະຫວັນ" />
                <NumberedBullet number="3" title="ເຊື່ອໃນຄໍາພີ" />
                <NumberedBullet number="4" title="ເຊື່ອໃນສາດສະດາ" />
                <NumberedBullet number="5" title="ເຊື່ອໃນວັນແຫ່ງການພິພາກສາ" />
                <NumberedBullet number="6" title="ເຊື່ອໃນການກຳນົດ" />
            </div>
        </ContentSection>
        
        <ContentSection title='ຫຼັກປະຕິບັດຂອງຊາວມຸສລິມ' icon={<ListChecks />}>
            <div className="space-y-2">
                <NumberedBullet number="1" title="ການປະກາດຕົນ" />
                <NumberedBullet number="2" title="ການລະໝາດ" />
                <NumberedBullet number="3" title="ການຈ່າຍຊະກາດ" />
                <NumberedBullet number="4" title="ການຖືສິນອົດ" />
                <NumberedBullet number="5" title="ການເຮັດຮັດຈ" />
            </div>
        </ContentSection>

        <ContentSection title='ຄໍາພີອັນກຸຣອ່ານ ແລະ ສຸນນະ' icon={<BookHeart />}>
            <p><strong>ຄໍາພີອັນກຸຣອ່ານ</strong> ແມ່ນຄຳເວົ້າຂອງອັລລໍີຮ໌, ທີ່ບໍ່ມີການປ່ຽນແປງມາຫຼາຍກວ່າ 1,400 ປີ.</p>
            <p><strong>ສຸນນະ</strong> ແມ່ນແນວທາງ ແລະ ຄໍາສອນຂອງສາດສະດາມູຮຳມັດ ﷺ.</p>
            <p>ທັງສອງຢ່າງນີ້ຮ່ວມກັນເປັນການຊີ້ນຳຊາວມຸດສະລິມໃນດ້ານສັດທາ, ການບູຊາ, ຈັນຍາບັນ, ຊີວິດຄອບຄົວ ແລະ ສັງຄົມ.</p>
        </ContentSection>

        <ContentSection title='ຈຸດປະສົງຂອງຊີວິດໃນສາສະໜາອິດສະລາມ' icon={<Target />}>
            <p>ສາສະໜາອິດສະລາມສອນວ່າ ຊີວິດນີ້ຄືບົດທົດສອບ. ພວກເຮົາຢູ່ທີ່ນີ້ເພື່ອກາບໄຫວ້ອັລລໍຮ໌, ດຳເນີນຊີວິດຢ່າງຊອບທຳ ແລະ ກຽມຕົວສໍາລັບຊີວິດໂລກໜ້ານິລັນດອນຫຼັງຈາກຄວາມຕາຍ.</p>
            <QuoteCard source="ຄໍາພີອັນກຸລະອ່ານ 51:56">“ແລະ ເຮົາບໍ່ໄດ້ສ້າງຍິນ ແລະ ມະນຸດ ຂຶ້ນມາ ນອກຈາກເພື່ອໃຫ້ພວກເຂົາໄດ້ບູຊາເຮົາເທົ່ານັ້ນ.”</QuoteCard>
            <p>ການບູຊາໃນສາສະໜາອິດສະລາມບໍ່ແມ່ນພຽງແຕ່ການອະທິຖານ, ແຕ່ຍັງລວມເຖິງຄວາມເມດຕາ, ຄວາມຊື່ສັດ, ການຊ່ວຍເຫຼືອຄົນອື່ນ ແລະ ການດໍາລົງຊີວິດດ້ວຍຄວາມຍຸດຕິທຳ.</p>
        </ContentSection>

        <ContentSection title='ສາສະໜາອິດສະລາມ ແລະ ສັນຕິພາບ' icon={<HandHeart />}>
            <p>ຄໍາວ່າ <strong>ອິດສະລາມ</strong> ມາຈາກຮາກຄໍາວ່າ <strong>ສະລາມ</strong>, ຊຶ່ງໝາຍເຖິງສັນຕິພາບ.</p>
            <p>ສັນຕິພາບທີ່ແທ້ຈິງແມ່ນມາຈາກການຍອມຈຳນົນຕໍ່ອັລລໍຣ໌ ແລະ ດຳເນີນຊີວິດຕາມການຊີ້ນຳຂອງພຣະອົງ.</p>
        </ContentSection>

        <ContentSection title='ເປັນຫຍັງຕ້ອງແມ່ນສາສະໜາອິດສະລາມ?' icon={<HelpCircle />}>
            <ul className="space-y-2">
                <BulletPoint>ສາສະໜາອິດສະລາມໃຫ້ຄວາມຊັດເຈນກ່ຽວກັບພຣະເຈົ້າ: ພຣະອົງຄືຜູ້ດຽວ, ບໍ່ມີຄູ່ຮ່ວມ, ລູກ ຫຼື ຜູ້ທຽບເທົ່າ.</BulletPoint>
                <BulletPoint>ສາສະໜາອິດສະລາມໃຫ້ການຊີ້ນຳສໍາລັບທຸກພາກສ່ວນຂອງຊີວິດ: ຄອບຄົວ, ຊຸມຊົນ, ທຸລະກິດ ແລະ ການພັດທະນາສ່ວນບຸກຄົນ.</BulletPoint>
                <BulletPoint>ສາສະໜາອິດສະລາມໃຫ້ຄວາມຫວັງ ແລະ ການໃຫ້ອະໄພ: ບໍ່ວ່າຄວາມຜິດພາດໃນອະດີດຈະເປັນແນວໃດ, ທຸກຄົນສາມາດຫັນໄປຫາອັນລາໄດ້.</BulletPoint>
            </ul>
        </ContentSection>
        
        <ContentSection title='ການເຂົ້າເປັນຊາວມຸດສະລິມ' icon={<CheckCircle />}>
             <p>ເພື່ອຈະກາຍເປັນຊາວມຸດສະລິມ, ບຸກຄົນພຽງຈະຕ້ອງມີຫຼັກຄວາມເຊື່ອ ແລະ ປະກາດ ຊາຮາດາ ດ້ວຍຄວາມຈິງໃຈ:</p>
             <QuoteCard source="">“ຂ້າພະເຈົ້າປະຕິຍານວ່າ ບໍ່ມີພຣະເຈົ້າອື່ນໃດນອກຈາກອັລລໍຣ໌ ແລະ ຂ້າພະເຈົ້າຂໍປະຕິຍານວ່າ ມູຮຳມັດ ຄືສາດສະດາຂອງອັລລໍຣ໌.”</QuoteCard>
        </ContentSection>

        <SummaryCard title="✨ ສະຫຼຸບສັ້ນໆ">
            ສາສະໜາອິດສະລາມຄືສັດທາແຫ່ງສັນຕິພາບ, ຄວາມເມດຕາ ແລະ ການຊີ້ນຳສໍາລັບມະນຸດຊາດທັງມວນ. ເຊິງຮຽກຮ້ອງໃຫ້ທຸກຄົນບູຊາພຣະເຈົ້າອົງດຽວ, ດຳເນີນຊີວິດດ້ວຍຄວາມດີ ແລະ ກຽມຕົວສໍາລັບຊີວິດນິລັນດອນທີ່ຈະມາເຖິງ.
        </SummaryCard>
      </main>
    </div>
  );
}
