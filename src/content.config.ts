import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Er. Pramod Kumar'),
    category: z.enum([
      'home-electrical-guide',
      'electrical-safety',
      'solar-smart-energy',
      'electricity-bill-guide',
      'home-appliances-guide'
    ]),
    readTime: z.string().default('5 min read'),
    fieldVerified: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    // Added image fields below:
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { articles };