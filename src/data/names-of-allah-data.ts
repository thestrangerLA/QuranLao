// Data cleared
export interface DescriptionSection {
  title: string;
  content: string;
}

export interface NameOfAllah {
  number: number;
  arabic: string;
  transliteration: string;
  translation: string;
  description?: DescriptionSection[];
}

export const namesOfAllahData: NameOfAllah[] = [];
