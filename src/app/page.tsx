'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Heart, Moon, Sun } from 'lucide-react';
import { SurahList } from '@/components/quran/SurahList';
import { SurahDetail } from '@/components/quran/SurahDetail';
import { Surah } from '@/types/quran';
import { cn } from '@/lib/utils';

export default function App() {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [surahs, setSurahs] = useState<Surah[] | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
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
        
        // Handle initial load from hash
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
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

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

  return (
    <div className="min-h-screen bg-app-background text-app-foreground selection:bg-emerald-100 selection:text-emerald-900 transition-colors duration-300">
      <div className="max-w-md mx-auto px-4 pt-8 pb-32">
        <AnimatePresence mode="wait">
          {!selectedSurah ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <header className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    ອັລກຸຣ໌ອານ
                  </h1>
                  <p className="text-muted mt-1">ສະບາຍດີ, ຂໍໃຫ້ເປັນມື້ທີ່ດີ</p>
                </div>
                <button 
                  onClick={toggleTheme}
                  className="p-2 bg-app-card rounded-full shadow-sm text-muted hover:text-emerald-600 transition-all active:scale-95"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </header>

              <div className="flex gap-4 border-b border-app-border">
                <button className="pb-4 border-b-2 border-emerald-600 text-emerald-600 font-bold text-sm">
                  ຊູເຣາະ
                </button>
              </div>

              <SurahList onSelectSurah={handleSelectSurah} surahs={surahs} />
            </motion.div>
          ) : (
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
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      {!selectedSurah && (
        <nav className="fixed bottom-0 left-0 right-0 bg-app-card/80 backdrop-blur-lg border-t border-app-border px-8 py-4 z-50">
          <div className="max-w-md mx-auto flex justify-around items-center">
            <NavButton 
              active={activeTab === 'home'} 
              onClick={() => setActiveTab('home')}
              icon={<Book className="w-6 h-6" />}
              label="ອ່ານ"
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
        active ? "text-emerald-600 scale-110" : "text-gray-400 hover:text-gray-600"
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
