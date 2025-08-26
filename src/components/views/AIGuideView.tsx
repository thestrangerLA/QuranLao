'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { Bot } from 'lucide-react';

interface AIGuideViewProps {
  goBack: () => void;
}

export default function AIGuideView({ goBack }: AIGuideViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="AI ແນະນຳ" onBack={goBack} />
      <main className="p-4 text-center">
        <div className="flex flex-col items-center justify-center h-full">
            <Bot className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">AI Islamic Guide</h2>
            <p className="text-muted-foreground">This feature is coming soon.</p>
        </div>
      </main>
    </div>
  );
}
