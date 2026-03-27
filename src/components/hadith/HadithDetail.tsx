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
        <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookMarked className="w-24 h-24 rotate-12" />
          </div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold mb-2">ຄຳສອນທີ່ເປັນຮາກຖານ</h1>
            <p className="text-emerald-50 text-base leading-relaxed">ລວມບົດຮາດີດຄັດສັນ 42 ບົດ ໂດຍ ອີມາມ ອັນ-ນະວະວີ ທີ່ຮວບຮວມຫຼັກການສຳຄັນຂອງອິດສະລາມໄວ້ທັງໝົດ.</p>
          </div>
        </div>

        <div className="space-y-6">
          {nawawiHadiths.map((hadith, index) => (
            <motion.div 
              key={hadith.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm space-y-5"
            >
              <div className="flex justify-between items-center border-b border-border pb-4">
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-none px-3 py-1 font-bold text-xs">
                  ບົດທີ {hadith.id}
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-emerald-600 leading-tight">
                  {hadith.title}
                </h3>
                <div className="prose prose-emerald dark:prose-invert max-w-none">
                  <p className="text-foreground text-base leading-[1.8] font-medium whitespace-pre-line">
                    {hadith.lao}
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <p className="text-xs text-muted-foreground italic font-bold bg-muted/30 px-3 py-1 rounded-lg">
                    — {hadith.narrator}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="text-center py-16 px-6 bg-emerald-500/5 rounded-3xl border border-dashed border-emerald-500/20">
            <div className="inline-block p-4 rounded-full bg-emerald-500/10 mb-4">
              <BookMarked className="w-8 h-8 text-emerald-600" />
            </div>
            <p className="text-emerald-700 dark:text-emerald-400 text-sm font-bold leading-relaxed">
              ອັລຮຳດຸລິລລໍຫ໌! ເນື້ອຫາຄົບຖ້ວນທັງ 42 ບົດແລ້ວ.<br/>
              ຂໍໃຫ້ການສຶກສານີ້ນຳພາທ່ານໄປສູ່ຄວາມເຂົ້າໃຈ ແລະ ຄວາມດີງາມ.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
