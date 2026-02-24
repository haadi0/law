'use server';
/**
 * @fileOverview A Genkit flow that acts as a legal resource assistant for G'ADROIT ATTORNEYS.
 *
 * - legalResourceAssistant - A function that handles user queries about legal issues.
 * - LegalResourceAssistantInput - The input type for the legalResourceAssistant function.
 * - LegalResourceAssistantOutput - The return type for the legalResourceAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const LegalResourceAssistantInputSchema = z.object({
  question: z.string().describe(
    "The user's question about common legal issues relevant to G'ADROIT ATTORNEYS' practice areas (e.g., 'What are the steps for foreign investors to set up a business in Tanzania?')."
  ),
});
export type LegalResourceAssistantInput = z.infer<
  typeof LegalResourceAssistantInputSchema
>;

const LegalResourceAssistantOutputSchema = z.object({
  answer: z
    .string()
    .describe(
      "A concise, relevant answer derived from G'ADROIT ATTORNEYS' insights and investor resources, directly addressing the user's question without providing specific legal advice."
    ),
});
export type LegalResourceAssistantOutput = z.infer<
  typeof LegalResourceAssistantOutputSchema
>;

export async function legalResourceAssistant(
  input: LegalResourceAssistantInput
): Promise<LegalResourceAssistantOutput> {
  return legalResourceAssistantFlow(input);
}

const legalResourceAssistantPrompt = ai.definePrompt({
  name: 'legalResourceAssistantPrompt',
  input: { schema: LegalResourceAssistantInputSchema },
  output: { schema: LegalResourceAssistantOutputSchema },
  prompt: `You are an expert legal resource assistant for G'ADROIT ATTORNEYS, a premium, authority-driven law firm specializing in Tanzanian, East African, and international business law, including investment law, employment law, commercial litigation, arbitration, and corporate & regulatory compliance.

Your task is to provide concise, relevant, and informative answers to user questions about common legal issues within these practice areas. Base your responses on the general insights and investor resources typically found on a top-tier law firm's website.

Crucially, you MUST NOT provide specific legal advice or guidance tailored to an individual's situation. Your role is to offer general information and insights that would encourage serious inquiries to the firm.

Question: {{{question}}}

Provide a concise and relevant answer:`,
});

const legalResourceAssistantFlow = ai.defineFlow(
  {
    name: 'legalResourceAssistantFlow',
    inputSchema: LegalResourceAssistantInputSchema,
    outputSchema: LegalResourceAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await legalResourceAssistantPrompt(input);
    return output!;
  }
);
