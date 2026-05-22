import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsItem = z.object({
  title: z.string(),
  source: z.string(),
  url: z.string(),
  threeLines: z.array(z.string()),
  simpleExplain: z.string(),
  whyItMatters: z.string(),
});

const promptItem = z.object({
  context: z.string(),
  title: z.string(),
  prompt: z.string(),
  howToUse: z.string(),
});

const daily = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/daily' }),
  schema: z.object({
    issue: z.number(),
    date: z.string(),
    keywords: z.array(z.string()),
    tools: z.array(newsItem),
    policy: z.array(newsItem),
    prompts: z.array(promptItem),
  }),
});

export const collections = { daily };
