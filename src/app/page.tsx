'use client';

import React, { useState, useMemo } from 'react';
import HomeView from '@/components/views/HomeView';
import FaithView from '@/components/views/FaithView';
import PracticeView from '@/components/views/PracticeView';
import ArticlesView from '@/components/views/ArticlesView';
import HalalFoodView from '@/components/views/HalalFoodView';
import WhatIsIslamView from '@/components/views/WhatIsIslamView';
import BeliefInAllahView from '@/components/views/BeliefInAllahView';
import BeliefInAngelsView from '@/components/views/BeliefInAngelsView';
import BeliefInBooksView from '@/components/views/BeliefInBooksView';
import ProphetView from '@/components/views/ProphetView';
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
import AfterlifeView from '@/components/views/AfterlifeView';
import GodExistsView from '@/components/views/GodExistsView';
import NamesOfAllahView from '@/components/views/NamesOfAllahView';
import ProphetHistoryView from '@/components/views/ProphetHistoryView';
import AdamView from '@/components/views/prophets/AdamView';
import IdrisView from '@/components/views/prophets/IdrisView';
import NuhView from '@/components/views/prophets/NuhView';
import HudView from '@/components/views/prophets/HudView';
import NameDetailView from '@/components/views/NameDetailView';
import type { NameOfAllah } from '@/data/names-of-allah-data';
import QaView from '@/components/views/QaView';

export type View =
  | 'home'
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
  | 'shahada'
  | 'salat'
  | 'zakat'
  | 'sawm'
  | 'hajj'
  | 'prophet-history'
  | 'names-of-allah'
  | 'name-detail'
  | 'prophet-adam'
  | 'prophet-idris'
  | 'prophet-nuh'
  | 'prophet-hud'
  | 'qa';


export type HadithDetail = {
  id: string;
  title: string;
  arabic: string;
  lao: string;
  explanation: string[];
};

export default function App() {
  const [history, setHistory] = useState<View[]>(['home']);
  const [selectedName, setSelectedName] = useState<NameOfAllah | null>(null);
  const currentView = history[history.length - 1];

  const navigateTo = (view: View, data?: NameOfAllah) => {
    if (view === 'name-detail' && data && 'description' in data) {
      setSelectedName(data as NameOfAllah);
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
      case 'articles':
        return <ArticlesView navigateTo={navigateTo} goBack={goBack} />;
      case 'qa':
        return <QaView goBack={() => setHistory(['home'])} />;
      case 'halal-food':
        return <HalalFoodView goBack={goBack} />;
      case 'afterlife':
        return <AfterlifeView goBack={goBack} />;
      case 'god-exists':
        return <GodExistsView goBack={goBack} />;
      case 'islam-what-is-it':
        return <WhatIsIslamView goBack={goBack} />;
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
      case 'names-of-allah':
        return <NamesOfAllahView goBack={goBack} navigateTo={navigateTo} />;
      case 'name-detail':
        return <NameDetailView goBack={goBack} name={selectedName} />;
      case 'prophet-history':
        return <ProphetHistoryView goBack={goBack} navigateTo={navigateTo}/>;
      case 'prophet-adam':
        return <AdamView goBack={goBack} />;
      case 'prophet-idris':
        return <IdrisView goBack={goBack} />;
      case 'prophet-nuh':
        return <NuhView goBack={goBack} />;
      case 'prophet-hud':
        return <HudView goBack={goBack} />;
      default:
        return <HomeView navigateTo={navigateTo} />;
    }
  };
  
  const activeTab = useMemo(() => {
    if ([
      'faith', 'practice', 'articles', 'halal-food', 'afterlife', 
      'god-exists', 'islam-what-is-it', 'belief-in-allah', 'belief-in-angels', 
      'belief-in-books', 'belief-in-prophets', 'belief-in-last-day', 
      'belief-in-destiny', 'shahada', 'salat', 'zakat', 'sawm', 'hajj', 
      'prophet-who-is-he', 'prophet-history', 
      'names-of-allah', 'name-detail', 'prophet-adam', 'prophet-idris', 'prophet-nuh',
      'prophet-hud'
    ].includes(currentView)) {
      return 'home';
    }
    if(currentView === 'qa') return 'qa';
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
