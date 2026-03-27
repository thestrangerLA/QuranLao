'use server';

import { explainVerse, VerseExplanationInput } from '@/ai/flows/verse-explanation-flow';

/**
 * Server action to get AI-powered explanation for a specific verse.
 */
export async function getVerseAIExplanation(input: VerseExplanationInput) {
  try {
    const explanation = await explainVerse(input);
    return explanation;
  } catch (error) {
    console.error('Error in getVerseAIExplanation:', error);
    throw new Error('Failed to generate AI explanation. Please try again later.');
  }
}
