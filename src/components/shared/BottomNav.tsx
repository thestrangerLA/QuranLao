'use client';

import { Home, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { View } from '@/app/page';

interface BottomNavProps {
  activeTab: string;
  navigateTo: (view: View) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'ໜ້າຫຼັກ' },
  { id: 'qa', icon: HelpCircle, label: 'ຖາມ ຕອບ' },
];

export default function BottomNav({ activeTab, navigateTo }: BottomNavProps) {
  const handleNavigation = (view: View) => {
    const newHistory: View[] = [view];
    // A simplified navigation reset when using bottom nav
    navigateTo(view);
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[70px] bg-card flex justify-around items-center rounded-t-2xl shadow-[0_-4px_6px_rgba(0,0,0,0.05)] z-50">
      {navItems.map((item) => (
        <div
          key={item.id}
          onClick={() => navigateTo(item.id as View)}
          className={cn(
            'flex flex-col items-center justify-center p-2 text-muted-foreground transition-colors cursor-pointer w-24',
            { 'text-primary': activeTab === item.id }
          )}
        >
          <item.icon className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
