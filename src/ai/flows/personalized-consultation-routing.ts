'use server';
/**
 * @fileOverview This file implements a Genkit flow for routing client inquiries to the most relevant practice area and attorney.
 *
 * - personalizeConsultationRouting - A function that handles the consultation routing process.
 * - PersonalizedConsultationRoutingInput - The input type for the personalizeConsultationRouting function.
 * - PersonalizedConsultationRoutingOutput - The return type for the personalizeConsultationRouting function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const practiceAreas = [
  'International Business & Investment Law',
  'Employment & HR Compliance',
  'Commercial Litigation',
  'Arbitration & Dispute Resolution',
  'Corporate & Regulatory Compliance',
];

// Mock attorney data, in a real app this would come from a database or service.
const attorneys = [
  {
    name: 'Aisha Juma',
    specializations: [
      'International Business & Investment Law',
      'Corporate & Regulatory Compliance',
    ],
  },
  {
    name: 'David Mwangi',
    specializations: ['Commercial Litigation', 'Arbitration & Dispute Resolution'],
  },
  {
    name: 'Sophia Hassan',
    specializations: ['Employment & HR Compliance', 'Corporate & Regulatory Compliance'],
  },
  {
    name: 'Omar Said',
    specializations: ['International Business & Investment Law', 'Arbitration & Dispute Resolution'],
  },
];

const PersonalizedConsultationRoutingInputSchema = z.object({
  name: z.string().describe('The name of the potential client.'),
  email: z.string().email().describe('The email address of the potential client.'),
  phone: z.string().optional().describe('The phone number of the potential client.'),
  company: z.string().optional().describe('The company of the potential client.'),
  message: z.string().describe('The inquiry message from the potential client.'),
});
export type PersonalizedConsultationRoutingInput = z.infer<
  typeof PersonalizedConsultationRoutingInputSchema
>;

const PersonalizedConsultationRoutingOutputSchema = z.object({
  suggestedPracticeArea: z
    .string()
    .describe(
      'The most relevant practice area based on the client\'s inquiry. Must be one of: ' +
        practiceAreas.join(', ') + '.'
    ),
  suggestedAttorney: z
    .string()
    .describe(
      'The name of the attorney best suited for the inquiry, based on their specializations.'
    ),
  reasoning: z
    .string()
    .describe('A brief explanation of why this practice area and attorney were suggested.'),
});
export type PersonalizedConsultationRoutingOutput = z.infer<
  typeof PersonalizedConsultationRoutingOutputSchema
>;

export async function personalizeConsultationRouting(
  input: PersonalizedConsultationRoutingInput
): Promise<PersonalizedConsultationRoutingOutput> {
  return personalizedConsultationRoutingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedConsultationRoutingPrompt',
  input: { schema: PersonalizedConsultationRoutingInputSchema },
  output: { schema: PersonalizedConsultationRoutingOutputSchema },
  prompt: `You are an expert legal assistant for G'ADROIT ATTORNEYS, a law firm specializing in international business and dispute resolution.
Your task is to analyze a potential client's inquiry and suggest the most relevant practice area and a suitable attorney from our team.

Here are our available practice areas:
{{#each practiceAreas}}- {{this}}
{{/each}}

Here are our attorneys and their specializations:
{{#each attorneys}}- Name: {{this.name}}, Specializations: {{#each this.specializations}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Client Inquiry Details:
Name: {{{name}}}
Email: {{{email}}}
Company: {{{company}}}
Message: {{{message}}}

Based on the client's message, identify the primary practice area that best matches their needs. Then, select an attorney who specializes in that area and provide a brief reasoning for your choices.

Ensure the suggestedPracticeArea is exactly one of the listed practice areas.`,
});

const personalizedConsultationRoutingFlow = ai.defineFlow(
  {
    name: 'personalizedConsultationRoutingFlow',
    inputSchema: PersonalizedConsultationRoutingInputSchema,
    outputSchema: PersonalizedConsultationRoutingOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({ ...input, practiceAreas, attorneys });
    if (!output) {
      throw new Error('Failed to get a response from the AI model.');
    }
    return output;
  }
);
