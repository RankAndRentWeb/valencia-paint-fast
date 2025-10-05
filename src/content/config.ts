import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: ({ slug }) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    badges: z.array(z.string()).optional(),
    priceFrom: z.string().optional(),
    priceUnit: z.string().optional(),
    heroImage: z.string().optional(),
    bullets: z.array(z.object({
      icon: z.string().optional(),
      label: z.string()
    })).optional(),
    problem: z.object({
      title: z.string(),
      items: z.array(z.string())
    }).optional(),
    solution: z.object({
      title: z.string(),
      items: z.array(z.string())
    }).optional(),
    process: z.array(z.string()).optional(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string()
    })).optional(),
    slug: z.string().optional().default(slug)
  })
});

const blogCategories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().optional()
  })
});

const blogs = defineCollection({
  type: 'content',
  schema: ({ slug }) => z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    categorySlug: z.string(), // "gotele" | "impermeabilizacion" | "colores" | "fachadas" | "barnices"
    postSlug: z.string().optional(),
    cover: z.string().optional(), // URL/asset hero
    date: z.coerce.date().optional(), // fecha publicación
    tags: z.array(z.string()).optional(),
    description: z.string().optional()
  }).transform((data) => ({
    ...data,
    slug: `${data.categorySlug.toLowerCase()}/${(data.postSlug ?? slug.split('/').pop()!).toLowerCase()}`
  }))
});

export const collections = {
  services,
  blogCategories,
  blogs,
};