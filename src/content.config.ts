import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    image: z.string().optional(),
    repo: z.url(),
    demo: z.url().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };
