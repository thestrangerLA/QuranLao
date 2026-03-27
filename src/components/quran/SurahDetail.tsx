'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Sparkles, X, Loader2 } from 'lucide-react';
import { getSurahVerses } from '@/services/quranApi';
import { Surah, Verse } from '@/types/quran';
import { laoTranslations } from '@/data/laoTranslations';
import { getVerseAIExplanation } from '@/app/actions';

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

  // AI Modal State
  const [aiExplanation, setAiExplanation] = useState<{ verseNumber: number; text: string } | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

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

  const handleExplainWithAI = async (verse: Verse) => {
    setAiLoading(true);
    try {
      const laoText = laoTranslations[surah.id]?.[verse.verse_number - 1] || '';
      const explanation = await getVerseAIExplanation({
        surahName: surah.name_simple,
        verseNumber: verse.verse_number,
        arabicText: verse.text_uthmani,
        laoTranslation: laoText
      });
      setAiExplanation({ verseNumber: verse.verse_number, text: explanation });
    } catch (error) {
      console.error('AI Explanation Error:', error);
    } finally {
      setAiLoading(false);
    }
  };

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
        <div className="animate-pulse text-emerald-600 font-medium">ກຳລັງໂຫລດເນື້ອຫາ...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors text-emerald-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h2 className="font-bold text-foreground">{surah.name_simple}</h2>
            <p className="text-[10px] text-foreground uppercase tracking-widest font-bold">
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
              className="w-full bg-card border border-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-foreground placeholder:text-muted-foreground"
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
        className="relative overflow-hidden rounded-3xl bg-emerald-600 p-8 text-white shadow-xl"
      >
        <div className="relative z-10 text-center space-y-4">
          <div className="arabic-text text-xl mb-2" dir="rtl">{surah.name_arabic}</div>
          <div className="h-px bg-white/20 w-24 mx-auto" />
          <p className="text-emerald-100 font-medium italic">
            {surah.translated_name?.name}
          </p>
        </div>
      </motion.div>

      {surah.id !== 1 && surah.id !== 9 && (
        <div className="text-center py-8">
          <div className="arabic-text text-lg text-emerald-600" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <p className="text-foreground text-sm mt-2 font-medium">In the name of Allah, the Most Gracious, the Most Merciful</p>
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs font-bold text-emerald-600 bg-card">
                  {verse.verse_number}
                </div>
                {showArabic && (
                  <div className="flex-1 text-right" dir="rtl">
                    <p className="arabic-text text-base leading-[2.5] text-foreground">
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
                  <p className="text-foreground text-sm font-medium italic">
                    {verse.translations?.find(t => t.resource_id === 20)
                      ? highlightText(verse.translations.find(t => t.resource_id === 20)!.text.replace(/<[^>]*>?/gm, ''), searchQuery)
                      : 'English translation not available'}
                  </p>
                )}
                {showThai && (
                  <p className="text-foreground text-sm font-medium italic">
                    {verse.translations?.find(t => t.resource_id === 51)
                      ? highlightText(verse.translations.find(t => t.resource_id === 51)!.text.replace(/<[^>]*>?/gm, ''), searchQuery)
                      : 'Thai translation not available'}
                  </p>
                )}
                
                <button
                  onClick={() => handleExplainWithAI(verse)}
                  className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-lg hover:bg-emerald-500/20 transition-all active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  AI ອະທິບາຍ
                </button>
              </div>
              
              <div className="mt-12 border-b border-border w-full opacity-50" />
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 text-foreground">
            <p>No verses found matching your search.</p>
          </div>
        )}
      </div>

      {/* AI Explanation Modal */}
      <AnimatePresence>
        {(aiLoading || aiExplanation) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-card w-full max-w-lg max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-border"
            >
              <div className="p-6 border-b border-border flex items-center justify-between bg-emerald-600 text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-bold text-lg">AI ອະທິບາຍ</h3>
                </div>
                <button 
                  onClick={() => {
                    setAiExplanation(null);
                    setAiLoading(false);
                  }}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                {aiLoading ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
                    <p className="text-sm font-medium animate-pulse text-foreground">AI ກຳລັງວິເຄາະ...</p>
                  </div>
                ) : (
                  <div className="text-foreground leading-relaxed whitespace-pre-wrap text-sm font-medium">
                    {aiExplanation?.text}
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-border bg-background/50">
                <button
                  onClick={() => setAiExplanation(null)}
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg hover:bg-emerald-700 transition-colors"
                >
                  ເຂົ້າໃຈແລ້ວ
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ToggleButton: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
      active 
        ? 'bg-emerald-600 text-white shadow-md' 
        : 'bg-card text-foreground border border-border hover:border-emerald-500/50'
    }`}
  >
    {label}
  </button>
);
