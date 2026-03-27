// Data cleared
export interface Verse {
  number: string;
  arabic: string;
  lao: string;
  english: string;
  explanation?: string;
}

export interface Surah {
  number: number;
  name: string;
  arabicName: string;
  translation: string;
  revelationType: 'Meccan' | 'Medinan';
  numberOfAyahs: number;
}

export const quranData: Surah[] = [];
