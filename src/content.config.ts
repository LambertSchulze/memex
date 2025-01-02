import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const all = defineCollection({
    loader: glob({
        pattern: "*.md",
        base: "./src/content"
    }),
    schema: z.object({
        date: z.date(),
        tags: z.array(z.string()).nullable(),
        category: z.string().nullable(),
    })
});

export const collections = { all };