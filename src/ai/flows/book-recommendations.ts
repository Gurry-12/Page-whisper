'use server';

/**
 * @fileOverview Recommends books based on a description of reading preferences.
 *
 * - getBookRecommendations - A function that returns book recommendations based on a description.
 * - BookRecommendationsInput - The input type for the getBookRecommendations function.
 * - BookRecommendationsOutput - The return type for the getBookRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BookRecommendationsInputSchema = z.object({
  readingDescription: z
    .string()
    .describe(
      'A description of the users reading preferences, including genres, authors, and themes they enjoy.'
    ),
});
export type BookRecommendationsInput = z.infer<typeof BookRecommendationsInputSchema>;

const BookRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of book recommendations based on the reading description.'),
});
export type BookRecommendationsOutput = z.infer<typeof BookRecommendationsOutputSchema>;

export async function getBookRecommendations(input: BookRecommendationsInput): Promise<BookRecommendationsOutput> {
  return bookRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'bookRecommendationsPrompt',
  input: {schema: BookRecommendationsInputSchema},
  output: {schema: BookRecommendationsOutputSchema},
  prompt: `You are a book recommendation expert. Given the following description of a user's reading preferences, provide a list of book recommendations that align with their interests.

Reading Description: {{{readingDescription}}}

Please provide the recommendations as a list of book titles.`, // Removed triple braces
});

const bookRecommendationsFlow = ai.defineFlow(
  {
    name: 'bookRecommendationsFlow',
    inputSchema: BookRecommendationsInputSchema,
    outputSchema: BookRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
