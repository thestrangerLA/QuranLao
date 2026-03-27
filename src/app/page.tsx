
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Heart, Moon, Sun, Sparkles } from 'lucide-react';
import { SurahList } from '@/components/quran/SurahList';
import { SurahDetail } from '@/components/quran/SurahDetail';
import { Surah } from '@/types/quran';
import { cn } from '@/lib/utils';

// Simple data for the Names of Allah view
const namesOfAllah = [
  { id: 1, arabic: 'الرحمن', transliteration: 'Ar-Rahman', lao: 'ພຣະຜູ້ຊົງກະລຸນາປານີ' },
  { id: 2, arabic: 'الرحيم', transliteration: 'Ar-Rahim', lao: 'ພຣະຜູ້ຊົງເມດຕາສະເໝີ' },
  { id: 3, arabic: 'الملك', transliteration: 'Al-Malik', lao: 'ພຣະຜູ້ຊົງອຳນາດຍິ່ງໃຫຍ່' },
  { id: 4, arabic: 'القدوس', transliteration: 'Al-Quddus', lao: 'ພຣະຜູ້ຊົງບໍລິສຸດຍິ່ງ' },
  { id: 5, arabic: 'السلام', transliteration: 'As-Salam', lao: 'ພຣະຜູ້ຊົງປະທານຄວາມສັນຕິ' },
  // More names can be added here
];

export default function App() {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [activeTab, setActiveTab] = useState('quran');
  const [surahs, setSurahs] = useState<Surah[] | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(initialTheme);
  }, []);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const { getSurahs } = await import('@/services/quranApi');
        const data = await getSurahs();
        setSurahs(data);
        
        const hash = window.location.hash;
        if (hash.startsWith('#surah-')) {
          const id = parseInt(hash.replace('#surah-', ''));
          const surah = data.find(s => s.id === id);
          if (surah) {
            setSelectedSurah(surah);
          }
        }
      } catch (error) {
        console.error('Error fetching surahs:', error);
      }
    };
    fetchSurahs();
  }, []);

  useEffect(() => {
    if (!surahs) return;

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.surahId) {
        const surah = surahs.find(s => s.id === event.state.surahId);
        if (surah) {
          setSelectedSurah(surah);
        }
      } else {
        setSelectedSurah(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [surahs]);

  useEffect(() => {
    if (!mounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, mounted]);

  const handleSelectSurah = (surah: Surah) => {
    setSelectedSurah(surah);
    window.history.pushState({ surahId: surah.id }, '', `#surah-${surah.id}`);
  };

  const handleBack = () => {
    if (window.history.state?.surahId) {
      window.history.back();
    } else {
      setSelectedSurah(null);
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-md mx-auto px-4 pt-8 pb-32">
        <AnimatePresence mode="wait">
          {selectedSurah ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SurahDetail 
                surah={selectedSurah} 
                onBack={handleBack} 
              />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <header className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    {activeTab === 'quran' ? 'ອັລກຸຣ໌ອານ' : 'ພະນາມຂອງອັລລໍຫ໌'}
                  </h1>
                  <p className="text-muted-foreground mt-1">ສະບາຍດີ, ຂໍໃຫ້ເປັນມື້ທີ່ດີ</p>
                </div>
                <button 
                  onClick={toggleTheme}
                  className="p-2 bg-card rounded-full shadow-sm text-muted-foreground hover:text-emerald-600 transition-all active:scale-95 border border-border"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </header>

              {activeTab === 'quran' ? (
                <>
                  <div className="flex gap-4 border-b border-border">
                    <button className="pb-4 border-b-2 border-emerald-600 text-emerald-600 font-bold text-sm">
                      ຊູເຣາະ
                    </button>
                  </div>
                  <SurahList onSelectSurah={handleSelectSurah} surahs={surahs} />
                </>
              ) : (
                <div className="grid gap-4">
                  {namesOfAllah.map((name) => (
                    <div key={name.id} className="p-6 bg-card rounded-2xl border border-border flex justify-between items-center shadow-sm">
                      <div className="space-y-1">
                        <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">{name.transliteration}</p>
                        <h3 className="text-lg font-bold">{name.lao}</h3>
                      </div>
                      <div className="arabic-text text-2xl text-emerald-600" dir="rtl">{name.arabic}</div>
                    </div>
                  ))}
                  <p className="text-center text-xs text-muted-foreground py-8 italic">99 ພະນາມຈະມາໃນໄວໆນີ້...</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!selectedSurah && (
        <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border px-8 py-4 z-50">
          <div className="max-w-md mx-auto flex justify-around items-center">
            <NavButton 
              active={activeTab === 'quran'} 
              onClick={() => setActiveTab('quran')}
              icon={<Book className="w-6 h-6" />}
              label="ກຸຣອານ"
            />
            <NavButton 
              active={activeTab === 'names'} 
              onClick={() => setActiveTab('names')}
              icon={<Sparkles className="w-6 h-6" />}
              label="ພະນາມ"
            />
          </div>
        </nav>
      )}
    </div>
  );
}

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 transition-all",
        active ? "text-emerald-600 scale-110" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-indicator"
          className="w-1 h-1 bg-emerald-600 rounded-full mt-0.5"
        />
      )}
    </button>
  );
}
