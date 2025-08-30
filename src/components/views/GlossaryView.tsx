'use client';
import ViewHeader from '@/components/shared/ViewHeader';
import { glossaryData } from '@/data/glossary-data';
import { Card, CardContent } from '@/components/ui/card';

interface GlossaryViewProps {
  goBack: () => void;
}

export default function GlossaryView({ goBack }: GlossaryViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຄວາມໝາຍຄຳສັບ" onBack={goBack} />
      <main className="p-4 space-y-6">
        {glossaryData.map((category) => (
          <div key={category.category}>
            <h2 className="text-xl font-bold text-primary mb-3">{category.category}</h2>
            <div className="space-y-3">
              {category.terms.map((term) => (
                <Card key={term.term} className="shadow-sm">
                  <CardContent className="p-4">
                    <p className="font-semibold text-card-foreground">{term.term}</p>
                    <p className="text-muted-foreground mt-1">{term.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
