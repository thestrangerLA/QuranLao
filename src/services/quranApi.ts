
import { Surah, Verse, Tafsir } from '../types/quran';

const BASE_URL = 'https://api.quran.com/api/v4';

export const getSurahs = async (): Promise<Surah[]> => {
  const response = await fetch(`${BASE_URL}/chapters?language=en`);
  const data = await response.json();
  return data.chapters;
};

export const getSurahVerses = async (chapterId: number, translationIds: string): Promise<Verse[]> => {
  const response = await fetch(
    `${BASE_URL}/verses/by_chapter/${chapterId}?language=en&words=false&translations=${translationIds}&fields=text_uthmani`
  );
  const data = await response.json();
  return data.verses;
};

export const getTafsir = async (tafsirId: number, verseKey: string): Promise<Tafsir> => {
  const response = await fetch(`${BASE_URL}/tafsirs/${tafsirId}/by_verse_key/${verseKey}`);
  const data = await response.json();
  return data.tafsir;
};
