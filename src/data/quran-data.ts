export interface Verse {
  number: string;
  arabic: string;
  lao: string;
  english: string;
}

export interface Surah {
  number: number;
  name: string;
  arabicName: string;
  translation: string;
  revelationType: 'Meccan' | 'Medinan';
  numberOfAyahs: number;
}

export const quranData: Surah[] = [
  {
    number: 1,
    name: 'Al-Fatihah',
    arabicName: 'ٱلْفَاتِحَة',
    translation: 'The Opener',
    revelationType: 'Meccan',
    numberOfAyahs: 7,
  },
  {
    number: 78,
    name: 'An-Naba',
    arabicName: 'ٱلنَّبَإِ',
    translation: 'The Tidings',
    revelationType: 'Meccan',
    numberOfAyahs: 40,
  },
];
