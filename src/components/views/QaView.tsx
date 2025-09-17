'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { HelpCircle } from 'lucide-react';

interface QaViewProps {
  goBack: () => void;
}

export default function QaView({ goBack }: QaViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຖາມ ຕອບ" onBack={goBack} />
      <main className="p-4 text-center flex-grow flex flex-col justify-center items-center">
        <HelpCircle className="w-16 h-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
        <p className="text-muted-foreground mt-2">
          The Question & Answer section is under construction.
        </p>
      </main>
    </div>
  );
}
