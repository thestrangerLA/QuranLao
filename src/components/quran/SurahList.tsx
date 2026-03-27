'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import { getSurahs } from '@/services/quranApi';
import { Surah } from '@/types/quran';

interface SurahListProps {
  onSelectSurah: (surah: Surah) => void;
  surahs?: Surah[] | null;
}

export const SurahList: React.FC<SurahListProps> = ({ onSelectSurah, surahs: initialSurahs }) => {
  const [surahs, setSurahs] = useState<Surah[]>(initialSurahs || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(!initialSurahs || initialSurahs.length === 0);

  useEffect(() => {
    if (initialSurahs && initialSurahs.length > 0) {
      setSurahs(initialSurahs);
      setLoading(false);
      return;
    }
    const fetchSurahs = async () => {
      try {
        const data = await getSurahs();
        setSurahs(data);
      } catch (error) {
        console.error('Error fetching surahs:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (!initialSurahs || initialSurahs.length === 0) {
      fetchSurahs();
    }
  }, [initialSurahs]);

  const filteredSurahs = surahs.filter(
    (s) =>
      s.name_simple.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.toString() === searchQuery
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-emerald-800 font-medium">ກຳລັງໂຫລດ...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5" />
        <input
          type="text"
          placeholder="ຄົ້ນຫາຊື່ຊູເຣາະ ຫຼື ເລກທີ..."
          className="w-full pl-12 pr-4 py-4 bg-card border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-lg text-foreground placeholder:text-muted-foreground"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredSurahs.map((surah, index) => (
          <motion.button
            key={surah.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            onClick={() => onSelectSurah(surah)}
            className="flex items-center p-5 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all group text-left border border-transparent hover:border-emerald-500/30"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-lg mr-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              {surah.id}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-foreground">{surah.name_simple}</h3>
              <p className="text-sm text-foreground font-medium">
                {surah.revelation_place === 'makkah' ? 'ມັກກາ' : 'ມາດີນາ'} • {surah.verses_count} ອາຍັດ
              </p>
            </div>
            <div className="text-right mr-4">
              <div className="arabic-text text-base text-emerald-600" dir="rtl">{surah.name_arabic}</div>
            </div>
            <ChevronRight className="text-foreground group-hover:text-emerald-500 transition-colors" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};
