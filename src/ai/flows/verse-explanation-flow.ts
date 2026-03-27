'use server';
/**
 * @fileOverview A flow to generate AI-powered explanations for Quranic verses in Lao.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const VerseExplanationInputSchema = z.object({
  surahName: z.string().describe('The name of the Surah.'),
  verseNumber: z.number().describe('The verse number.'),
  arabicText: z.string().describe('The original Arabic text of the verse.'),
  laoTranslation: z.string().describe('The Lao translation of the verse.'),
});

export type VerseExplanationInput = z.infer<typeof VerseExplanationInputSchema>;

const prompt = ai.definePrompt({
  name: 'verseExplanationPrompt',
  input: { schema: VerseExplanationInputSchema },
  output: { schema: z.string() },
  prompt: `You are a knowledgeable and compassionate Islamic scholar specializing in Tafsir (interpretation).
    Your goal is to provide a deep, easy-to-understand explanation of a Quranic verse in the Lao language.

    Context:
    - Surah: {{{surahName}}}
    - Verse Number: {{{verseNumber}}}
    - Arabic Text: {{{arabicText}}}
    - Lao Translation: {{{laoTranslation}}}

    Please provide a response in Lao that includes:
    1. A brief overview of the verse's meaning.
    2. Historical context or reason for revelation (Sabab al-Nuzul) if relevant.
    3. Practical lessons or spiritual reflections that Lao Muslims can apply in their daily lives.

    Use a friendly and respectful tone. Format the response with clear headings or bullet points for readability. Use Lao language exclusively.`,
});

export async function explainVerse(input: VerseExplanationInput): Promise<string> {
  return verseExplanationFlow(input);
}

const verseExplanationFlow = ai.defineFlow(
  {
    name: 'verseExplanationFlow',
    inputSchema: VerseExplanationInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { text } = await prompt(input);
    return text || "ຂໍອະໄພ, ບໍ່ສາມາດສ້າງຄຳອະທິບາຍໄດ້ໃນເວລານີ້.";
  }
);
