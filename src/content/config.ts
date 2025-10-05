import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string().optional(),
  }),
});

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    categorySlug: z.string().optional(),
    postSlug: z.string().optional(),
  }),
});

export const collections = { services, blogs };