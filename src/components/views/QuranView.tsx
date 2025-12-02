'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { BookOpen } from 'lucide-react';

interface QuranViewProps {
  goBack: () => void;
}

export default function QuranView({ goBack }: QuranViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ກຸຣອານ" onBack={goBack} />
      <main className="p-4 text-center flex-grow flex flex-col justify-center items-center">
        <BookOpen className="w-16 h-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
        <p className="text-muted-foreground mt-2">
          The Quran section is under construction.
        </p>
      </main>
    </div>
  );
}
