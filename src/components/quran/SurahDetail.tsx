'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { getSurahVerses } from '@/services/quranApi';
import { Surah, Verse } from '@/types/quran';
import { laoTranslations } from '@/data/laoTranslations';

interface SurahDetailProps {
  surah: Surah;
  onBack: () => void;
}

export const SurahDetail: React.FC<SurahDetailProps> = ({ surah, onBack }) => {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showArabic, setShowArabic] = useState(true);
  const [showLao, setShowLao] = useState(true);
  const [showEnglish, setShowEnglish] = useState(false);
  const [showThai, setShowThai] = useState(false);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const data = await getSurahVerses(surah.id, '20,51');
        setVerses(data);
      } catch (error) {
        console.error('Error fetching verses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVerses();
    window.scrollTo(0, 0);
  }, [surah.id]);

  const filteredVerses = verses.filter(verse => {
    const query = searchQuery.toLowerCase();
    const laoText = laoTranslations[surah.id]?.[verse.verse_number - 1] || '';
    const engText = verse.translations?.find(t => t.resource_id === 20)?.text.replace(/<[^>]*>?/gm, '') || '';
    const thaiText = verse.translations?.find(t => t.resource_id === 51)?.text.replace(/<[^>]*>?/gm, '') || '';
    
    return (
      verse.verse_number.toString().includes(query) ||
      verse.text_uthmani.includes(query) ||
      laoText.toLowerCase().includes(query) ||
      engText.toLowerCase().includes(query) ||
      thaiText.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-primary font-medium">ກຳລັງໂຫລດເນື້ອຫາ...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h2 className="font-bold">{surah.name_simple}</h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              {surah.revelation_place === 'makkah' ? 'MAKKAH' : 'MADINAH'} • {surah.verses_count} VERSES
            </p>
          </div>
          <div className="w-10" />
        </div>

        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search verses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Search className="w-4 h-4" />
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            <ToggleButton active={showArabic} onClick={() => setShowArabic(!showArabic)} label="Arabic" />
            <ToggleButton active={showLao} onClick={() => setShowLao(!showLao)} label="Lao" />
            <ToggleButton active={showEnglish} onClick={() => setShowEnglish(!showEnglish)} label="English" />
            <ToggleButton active={showThai} onClick={() => setShowThai(!showThai)} label="Thai" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl"
      >
        <div className="relative z-10 text-center space-y-4">
          <div className="font-arabic text-5xl mb-2">{surah.name_arabic}</div>
          <div className="h-px bg-primary-foreground/20 w-24 mx-auto" />
          <p className="text-primary-foreground/90 font-medium italic">
            {surah.translated_name?.name}
          </p>
        </div>
      </motion.div>

      {surah.id !== 1 && surah.id !== 9 && (
        <div className="text-center py-8">
          <div className="font-arabic text-3xl text-primary">
            بِسْمِ اللَّهِ الرَّحْمَٰນِ الرَّحِيمِ
          </div>
          <p className="text-muted-foreground text-sm mt-2">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>
      )}

      <div className="space-y-12">
        {filteredVerses.length > 0 ? (
          filteredVerses.map((verse) => (
            <motion.div
              key={verse.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold text-primary bg-card">
                  {verse.verse_number}
                </div>
                {showArabic && (
                  <div className="flex-1 text-right">
                    <p className="font-arabic text-3xl leading-[2.5] text-foreground">
                      {highlightText(verse.text_uthmani, searchQuery)}
                    </p>
                  </div>
                )}
              </div>

              <div className="pl-14 space-y-4">
                {showLao && (
                  <p className="text-foreground leading-relaxed text-lg font-medium">
                    {laoTranslations[surah.id] && laoTranslations[surah.id][verse.verse_number - 1] 
                      ? highlightText(laoTranslations[surah.id][verse.verse_number - 1], searchQuery)
                      : 'Lao translation not available'}
                  </p>
                )}
                {showEnglish && (
                  <p className="text-muted-foreground text-sm italic">
                    {verse.translations?.find(t => t.resource_id === 20)
                      ? highlightText(verse.translations.find(t => t.resource_id === 20)!.text.replace(/<[^>]*>?/gm, ''), searchQuery)
                      : 'English translation not available'}
                  </p>
                )}
                {showThai && (
                  <p className="text-muted-foreground text-sm italic">
                    {verse.translations?.find(t => t.resource_id === 51)
                      ? highlightText(verse.translations.find(t => t.resource_id === 51)!.text.replace(/<[^>]*>?/gm, ''), searchQuery)
                      : 'Thai translation not available'}
                  </p>
                )}
              </div>
              
              <div className="mt-12 border-b w-full opacity-50" />
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p>No verses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ToggleButton: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
      active 
        ? 'bg-primary text-primary-foreground shadow-md' 
        : 'bg-card text-muted-foreground border border-border hover:border-primary/50'
    }`}
  >
    {label}
  </button>
);
