import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  // Schema as a function so Astro can pass in the image() helper
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      stack: z.array(z.string()),
      // Path relative to the Markdown file, e.g. ../../assets/projects/docflow.png
      image: image().optional(),
      repo: z.url(),
      demo: z.url().optional(),
      order: z.number(),
    }),
});

export const collections = { projects };
