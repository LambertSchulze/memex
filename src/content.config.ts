import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const Bookmarks = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/Bookmarks",
  }),
  schema: z.object({
    category: z.enum(["Bookmarks"]),
    tags: z.array(z.string()).nullable(),
    source: z.string().url().optional(),
  }),
});

const Quotes = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/Quotes",
  }),
  schema: z.object({
    category: z.enum(["Quotes"]),
    tags: z.array(z.string()).nullable(),
  }),
});

const Songs = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/Songs",
  }),
  schema: z.object({
    category: z.enum(["Songs"]),
    tags: z.array(z.string()).nullable(),
    title: z.string(),
    artist: z.string(),
    album: z.string(),
  }),
});

const Things = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/things",
  }),
  schema: z.object({
    category: z.enum(["Things"]),
    tags: z.array(z.string()).nullable(),
  }),
});

export const collections = { Bookmarks, Quotes, Songs, Things };
