'use client';

import React, { useState, useMemo } from 'react';
import HomeView from '@/components/views/HomeView';
import FaithView from '@/components/views/FaithView';
import PracticeView from '@/components/views/PracticeView';
import QuranView from '@/components/views/QuranView';
import HadithView from '@/components/views/HadithView';
import ArticlesView from '@/components/views/ArticlesView';
import HalalFoodView from '@/components/views/HalalFoodView';
import WhatIsIslamView from '@/components/views/WhatIsIslamView';
import WhoIsAMuslimView from '@/components/views/WhoIsAMuslimView';
import BeliefInAllahView from '@/components/views/BeliefInAllahView';
import BeliefInAngelsView from '@/components/views/BeliefInAngelsView';
import BeliefInBooksView from '@/components/views/BeliefInBooksView';
import ProphetView from '@/components/views/ProphetView';
import SurahAlFatihahView from '@/components/views/SurahAlFatihahView';
import SurahAlBaqarahView from '@/components/views/SurahAlBaqarahView';
import BottomNav from '@/components/shared/BottomNav';
import { Toaster } from '@/components/ui/toaster';
import BeliefInProphetsView from '@/components/views/BeliefInProphetsView';
import BeliefInLastDayView from '@/components/views/BeliefInLastDayView';
import BeliefInDestinyView from '@/components/views/BeliefInDestinyView';
import ShahadaView from '@/components/views/ShahadaView';
import SalatView from '@/components/views/SalatView';
import ZakatView from '@/components/views/ZakatView';
import SawmView from '@/components/views/SawmView';
import HajjView from '@/components/views/HajjView';
import FortyHadithView from '@/components/views/FortyHadithView';
import HadithDetailView from '@/components/views/HadithDetailView';
import AfterlifeView from '@/components/views/AfterlifeView';
import GodExistsView from '@/components/views/GodExistsView';
import SurahFussilatView from '@/components/views/SurahFussilatView';
import SurahAalImranView from '@/components/views/SurahAalImranView';
import SurahAnNabaView from '@/components/views/SurahAnNabaView';
import SurahAnNisaView from '@/components/views/SurahAnNisaView';
import SurahAlMaidahView from '@/components/views/SurahAlMaidahView';
import SurahAlAnamView from '@/components/views/SurahAlAnamView';
import SurahAlArafView from '@/components/views/SurahAlArafView';
import SurahAlAnfalView from '@/components/views/SurahAlAnfalView';
import SurahAtTawbahView from '@/components/views/SurahAtTawbahView';
import SurahYunusView from '@/components/views/SurahYunusView';
import SurahHudView from '@/components/views/SurahHudView';

export type View =
  | 'home'
  | 'quran'
  | 'hadith'
  | 'faith'
  | 'practice'
  | 'articles'
  | 'halal-food'
  | 'afterlife'
  | 'god-exists'
  | 'islam-what-is-it'
  | 'belief-in-allah'
  | 'belief-in-angels'
  | 'belief-in-books'
  | 'belief-in-prophets'
  | 'belief-in-last-day'
  | 'belief-in-destiny'
  | 'prophet-who-is-he'
  | 'who-is-a-muslim'
  | 'al-fatihah'
  | 'al-baqarah'
  | 'fussilat'
  | 'aal-imran'
  | 'an-naba'
  | 'an-nisa'
  | 'al-maidah'
  | 'al-anam'
  | 'al-araf'
  | 'al-anfal'
  | 'at-tawbah'
  | 'yunus'
  | 'hud'
  | 'shahada'
  | 'salat'
  | 'zakat'
  | 'sawm'
  | 'hajj'
  | 'forty-hadith'
  | 'hadith-detail'
  | 'glossary'
  | 'duas'
  | 'prophet-history';

export type HadithDetail = {
  id: string;
  title: string;
  arabic: string;
  lao: string;
  explanation: string[];
};

export default function App() {
  const [history, setHistory] = useState<View[]>(['home']);
  const [selectedHadith, setSelectedHadith] = useState<HadithDetail | null>(null);
  const currentView = history[history.length - 1];

  const navigateTo = (view: View, hadith?: HadithDetail) => {
    if (hadith) {
      setSelectedHadith(hadith);
    }
    setHistory(prev => [...prev, view]);
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, -1));
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView navigateTo={navigateTo} />;
      case 'faith':
        return <FaithView navigateTo={navigateTo} goBack={goBack} />;
      case 'practice':
        return <PracticeView navigateTo={navigateTo} goBack={goBack} />;
      case 'quran':
        return <QuranView navigateTo={navigateTo} goBack={goBack} />;
      case 'hadith':
        return <HadithView goBack={goBack} navigateTo={navigateTo} />;
      case 'articles':
        return <ArticlesView navigateTo={navigateTo} goBack={goBack} />;
      case 'halal-food':
        return <HalalFoodView goBack={goBack} />;
      case 'afterlife':
        return <AfterlifeView goBack={goBack} />;
      case 'god-exists':
        return <GodExistsView goBack={goBack} />;
      case 'islam-what-is-it':
        return <WhatIsIslamView goBack={goBack} />;
      case 'who-is-a-muslim':
        return <WhoIsAMuslimView goBack={goBack} />;
      case 'belief-in-allah':
        return <BeliefInAllahView goBack={goBack} />;
      case 'belief-in-angels':
        return <BeliefInAngelsView goBack={goBack} />;
      case 'belief-in-books':
        return <BeliefInBooksView goBack={goBack} />;
      case 'belief-in-prophets':
        return <BeliefInProphetsView goBack={goBack} />;
      case 'belief-in-last-day':
        return <BeliefInLastDayView goBack={goBack} />;
      case 'belief-in-destiny':
        return <BeliefInDestinyView goBack={goBack} />;
      case 'prophet-who-is-he':
        return <ProphetView goBack={goBack} />;
      case 'al-fatihah':
        return <SurahAlFatihahView goBack={goBack} />;
      case 'al-baqarah':
        return <SurahAlBaqarahView goBack={goBack} />;
      case 'fussilat':
        return <SurahFussilatView goBack={goBack} />;
      case 'aal-imran':
        return <SurahAalImranView goBack={goBack} />;
      case 'an-naba':
        return <SurahAnNabaView goBack={goBack} />;
      case 'an-nisa':
        return <SurahAnNisaView goBack={goBack} />;
      case 'al-maidah':
        return <SurahAlMaidahView goBack={goBack} />;
      case 'al-anam':
        return <SurahAlAnamView goBack={goBack} />;
      case 'al-araf':
        return <SurahAlArafView goBack={goBack} />;
      case 'al-anfal':
        return <SurahAlAnfalView goBack={goBack} />;
      case 'at-tawbah':
        return <SurahAtTawbahView goBack={goBack} />;
      case 'yunus':
        return <SurahYunusView goBack={goBack} />;
      case 'hud':
        return <SurahHudView goBack={goBack} />;
      case 'shahada':
        return <ShahadaView goBack={goBack} />;
      case 'salat':
        return <SalatView goBack={goBack} />;
      case 'zakat':
        return <ZakatView goBack={goBack} />;
      case 'sawm':
        return <SawmView goBack={goBack} />;
      case 'hajj':
        return <HajjView goBack={goBack} />;
      case 'forty-hadith':
        return <FortyHadithView goBack={goBack} navigateTo={navigateTo} />;
      case 'hadith-detail':
        return <HadithDetailView goBack={goBack} hadith={selectedHadith} />;
      default:
        return <HomeView navigateTo={navigateTo} />;
    }
  };
  
  const activeTab = useMemo(() => {
    if (['faith', 'practice', 'articles', 'halal-food', 'afterlife', 'god-exists', 'islam-what-is-it', 'who-is-a-muslim', 'belief-in-allah', 'belief-in-angels', 'belief-in-books', 'belief-in-prophets', 'belief-in-last-day', 'belief-in-destiny', 'shahada', 'salat', 'zakat', 'sawm', 'hajj', 'prophet-who-is-he', 'glossary', 'duas', 'prophet-history'].includes(currentView)) {
      return 'home';
    }
    if (['al-fatihah', 'al-baqarah', 'fussilat', 'aal-imran', 'an-naba', 'an-nisa', 'al-maidah', 'al-anam', 'al-araf', 'al-anfal', 'at-tawbah', 'yunus', 'hud'].includes(currentView)) {
      return 'quran';
    }
    if (['forty-hadith', 'hadith-detail'].includes(currentView)) {
      return 'hadith';
    }
    return currentView;
  }, [currentView]);


  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-body">
      <div className="flex-grow overflow-y-auto pb-[70px]">
        {renderView()}
      </div>
      <BottomNav activeTab={activeTab} navigateTo={navigateTo} />
      <Toaster />
    </div>
  );
}
