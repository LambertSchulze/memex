import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const test = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content"
    }),
    schema: z.object({
        date: z.date(),
    })
});

export const collections = { test };