'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Moon, Sun, Sparkles, LayoutList, ChevronRight, Quote } from 'lucide-react';
import { SurahList } from '@/components/quran/SurahList';
import { SurahDetail } from '@/components/quran/SurahDetail';
import { ArticleDetail } from '@/components/articles/ArticleDetail';
import { Surah } from '@/types/quran';
import { cn } from '@/lib/utils';
import { namesOfAllah } from '@/data/namesOfAllah';
import { articles } from '@/data/articles';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
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
        } else if (hash.startsWith('#article-')) {
          const id = parseInt(hash.replace('#article-', ''));
          const article = articles.find(a => a.id === id);
          if (article) {
            setSelectedArticle(article);
          }
        }
      } catch (error) {
        console.error('Error fetching surahs:', error);
      }
    };
    fetchSurahs();
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.surahId && surahs) {
        const surah = surahs.find(s => s.id === event.state.surahId);
        if (surah) {
          setSelectedSurah(surah);
          setSelectedArticle(null);
        }
      } else if (event.state?.articleId) {
        const article = articles.find(a => a.id === event.state.articleId);
        if (article) {
          setSelectedArticle(article);
          setSelectedSurah(null);
        }
      } else {
        setSelectedSurah(null);
        setSelectedArticle(null);
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
    setSelectedArticle(null);
    window.history.pushState({ surahId: surah.id }, '', `#surah-${surah.id}`);
  };

  const handleSelectArticle = (article: any) => {
    setSelectedArticle(article);
    setSelectedSurah(null);
    window.history.pushState({ articleId: article.id }, '', `#article-${article.id}`);
  };

  const handleBack = () => {
    if (window.history.state?.surahId || window.history.state?.articleId) {
      window.history.back();
    } else {
      setSelectedSurah(null);
      setSelectedArticle(null);
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (!mounted) return null;

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'quran': return 'ອັລກຸຣ໌ອານ';
      case 'names': return 'ພະນາມຂອງອັລລໍຫ໌';
      case 'articles': return 'ບົດຄວາມຮູ້';
      default: return 'ອັລກຸຣ໌ອານ';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-md mx-auto px-4 pt-8 pb-32">
        <AnimatePresence mode="wait">
          {selectedSurah ? (
            <motion.div
              key="surah-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SurahDetail 
                surah={selectedSurah} 
                onBack={handleBack} 
              />
            </motion.div>
          ) : selectedArticle ? (
            <motion.div
              key="article-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ArticleDetail 
                article={selectedArticle} 
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
                    {getHeaderTitle()}
                  </h1>
                  <p className="text-muted-foreground mt-1 text-sm font-medium">ສະບາຍດີ, ຂໍໃຫ້ເປັນມື້ທີ່ດີ</p>
                </div>
                <button 
                  onClick={toggleTheme}
                  className="p-2 bg-card rounded-full shadow-sm text-muted-foreground hover:text-emerald-600 transition-all active:scale-95 border border-border"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </header>

              {activeTab === 'quran' && (
                <>
                  <div className="flex gap-4 border-b border-border">
                    <button className="pb-4 border-b-2 border-emerald-600 text-emerald-600 font-bold text-sm">
                      ຊູເຣາະ
                    </button>
                  </div>
                  <SurahList onSelectSurah={handleSelectSurah} surahs={surahs} />
                </>
              )}

              {activeTab === 'names' && (
                <div className="space-y-6">
                  {/* Hadith Section */}
                  <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Quote className="w-16 h-16" />
                    </div>
                    <div className="relative z-10">
                      <p className="arabic-text text-sm text-center mb-4 leading-relaxed" dir="rtl">
                        إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا مِائَةً إِلَّا وَاحِدًا مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ
                      </p>
                      <p className="text-xs font-medium leading-relaxed italic border-l-2 border-white/30 pl-3">
                        "ແທ້ຈິງແລ້ວ ອັລລໍຫ໌ມີ 99 ພະນາມ, ໜຶ່ງຮ້ອຍລົບໜຶ່ງ. ຜູ້ໃດກໍຕາມທີ່ທ່ອງຈຳ (ຫຼື ເຂົ້າໃຈ ແລະ ປະຕິບັດຕາມ) ພວກມັນ ຈະໄດ້ເຂົ້າສວນສະຫວັນ."
                      </p>
                      <p className="text-[10px] mt-2 opacity-70 text-right">
                        — ບັນທຶກໂດຍ ບຸຄໍຣີ ແລະ ມຸສລິມ
                      </p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {namesOfAllah.map((name) => (
                      <AccordionItem 
                        key={name.id} 
                        value={`item-${name.id}`}
                        className="bg-card rounded-2xl border border-border shadow-sm px-4 overflow-hidden"
                      >
                        <AccordionTrigger className="hover:no-underline py-6">
                          <div className="flex justify-between items-center w-full pr-4">
                            <div className="text-left">
                              <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest">{name.transliteration}</p>
                              <h3 className="text-lg font-bold">{name.lao}</h3>
                            </div>
                            <div className="arabic-text text-xl text-emerald-600" dir="rtl">{name.arabic}</div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 text-foreground leading-relaxed text-sm font-medium">
                          <div className="pt-2 border-t border-border mt-2">
                            {name.description}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {activeTab === 'articles' && (
                <div className="space-y-6">
                   <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-lg mb-8">
                    <h2 className="text-xl font-bold mb-2">ຍິນດີຕ້ອນຮັບ</h2>
                    <p className="text-emerald-50 text-sm">ບົດຄວາມພື້ນຖານສຳລັບຜູ້ທີ່ສົນໃຈສຶກສາອິສລາມ ແລະ ມຸສລິມໃໝ່.</p>
                  </div>
                  <div className="grid gap-4">
                    {articles.map((article, index) => (
                      <motion.button
                        key={article.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSelectArticle(article)}
                        className="flex items-center p-5 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all group text-left border border-border hover:border-emerald-500/30"
                      >
                        <div className="flex-1 space-y-2">
                          <Badge variant="secondary" className="text-[10px] bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-none px-2 font-bold">
                            {article.category}
                          </Badge>
                          <h3 className="text-lg font-bold text-foreground leading-snug">{article.title}</h3>
                          <p className="text-muted-foreground text-xs line-clamp-2 font-medium">
                            {article.content}
                          </p>
                        </div>
                        <ChevronRight className="ml-4 text-muted-foreground group-hover:text-emerald-600 transition-colors w-5 h-5 flex-shrink-0" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!selectedSurah && !selectedArticle && (
        <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border px-8 py-4 z-50">
          <div className="max-w-md mx-auto flex justify-around items-center">
            <NavButton 
              active={activeTab === 'quran'} 
              onClick={() => setActiveTab('quran')}
              icon={<Book className="w-5 h-5" />}
              label="ກຸຣອານ"
            />
            <NavButton 
              active={activeTab === 'names'} 
              onClick={() => setActiveTab('names')}
              icon={<Sparkles className="w-5 h-5" />}
              label="ພະນາມ"
            />
            <NavButton 
              active={activeTab === 'articles'} 
              onClick={() => setActiveTab('articles')}
              icon={<LayoutList className="w-5 h-5" />}
              label="ບົດຄວາມ"
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
