import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bookmarks = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/bookmarks",
  }),
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()).nullable(),
    category: z.enum(["Bookmark"]),
  }),
});

const quotes = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/quotes",
  }),
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()).nullable(),
    category: z.enum(["Quote"]),
  }),
});

const other = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content",
  }),
  schema: z.object({
    date: z.date(),
    tags: z.array(z.string()).nullable(),
    category: z.string().nullable(),
  }),
});

export const collections = { bookmarks, quotes, other };
