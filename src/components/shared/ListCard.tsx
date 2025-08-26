import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import React from 'react';

interface ListCardProps {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export default function ListCard({ icon, title, subtitle, onClick }: ListCardProps) {
  return (
    <Card onClick={onClick} className="shadow-sm cursor-pointer hover:bg-secondary">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
             {React.cloneElement(icon, { className: "text-primary w-7 h-7" })}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-card-foreground">{title}</span>
            <span className="text-xs text-muted-foreground">{subtitle}</span>
          </div>
        </div>
        <ChevronRight className="text-muted-foreground" />
      </CardContent>
    </Card>
  );
}
