import { defineConfig } from "astro/config";
import wikiLinkPlugin from "remark-wiki-link";
import wikiLinkImages from "./src/plugins/wikiLinkImages.mjs";
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  site: 'https://lambertschulze.github.io',
  base: '/memex',

  markdown: {
    remarkPlugins: [
      wikiLinkImages,
      [
        wikiLinkPlugin,
        {
          permalinks: ["./"],
          aliasDivider: "|",
          hrefTemplate: (link) => `./${link}`,
          wikiLinkClassName: " ",
          newClassName: " ",
        },
      ],
    ],
  },

  integrations: [htmlBeautifier()],
});
