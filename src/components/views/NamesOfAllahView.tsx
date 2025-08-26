'use client';
import ViewHeader from '@/components/shared/ViewHeader';

interface NamesOfAllahViewProps {
  goBack: () => void;
}

export default function NamesOfAllahView({ goBack }: NamesOfAllahViewProps) {
  return (
    <div className="flex flex-col">
      <ViewHeader title="ຊື່ຂອງອັລລໍຮ໌" onBack={goBack} />
      <main className="p-4 text-center">
        <p>Coming soon...</p>
      </main>
    </div>
  );
}
