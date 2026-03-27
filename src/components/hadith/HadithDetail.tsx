'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookMarked } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { nawawiHadiths } from '@/data/hadiths';

interface HadithDetailProps {
  onBack: () => void;
}

export const HadithDetail: React.FC<HadithDetailProps> = ({ onBack }) => {
  return (
    <div className="space-y-8 pb-20">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 border-b border-border">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors text-emerald-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="font-bold text-foreground text-lg">ຮາດີດ ນະບະວີ 40 ບົດ</h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookMarked className="w-20 h-20" />
          </div>
          <div className="relative z-10">
            <h1 className="text-xl font-bold mb-2">ລວມຮາດີດ ນະບະວີ</h1>
            <p className="text-emerald-50 text-sm">ບົດຮາດີດຄັດສັນ 40 ບົດ ໂດຍ ອີມາມ ອັນ-ນະວະວີ (ຂໍອັລລໍຫ໌ຊົງເມດຕາທ່ານ)</p>
          </div>
        </div>

        <div className="space-y-4">
          {nawawiHadiths.map((hadith) => (
            <div key={hadith.id} className="bg-card rounded-2xl p-6 border border-border shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-none px-2 font-bold text-[10px]">
                  ບົດທີ {hadith.id}
                </Badge>
                <span className="text-[10px] text-muted-foreground font-bold">{hadith.title}</span>
              </div>
              <p className="arabic-text text-sm text-right leading-loose text-emerald-600" dir="rtl">
                {hadith.arabic}
              </p>
              <p className="text-foreground text-sm leading-relaxed font-medium">
                "{hadith.lao}"
              </p>
              <p className="text-[10px] text-muted-foreground text-right italic font-bold">
                — {hadith.narrator}
              </p>
            </div>
          ))}
          
          <div className="text-center py-8">
            <p className="text-muted-foreground text-xs italic">ກຳລັງອັບເດດເນື້ອຫາເພີ່ມເຕີມໃຫ້ຄົບ 40 ບົດ...</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
