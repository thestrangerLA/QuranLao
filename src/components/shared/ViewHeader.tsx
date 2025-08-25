'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewHeaderProps {
  title: string;
  onBack: () => void;
}

export default function ViewHeader({ title, onBack }: ViewHeaderProps) {
  return (
    <header className="flex items-center p-4">
      <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
        <ArrowLeft className="w-6 h-6 text-foreground" />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="text-xl font-bold text-foreground text-center flex-grow">
        {title}
      </h1>
      <div className="w-10"></div>
    </header>
  );
}
