import { defineConfig } from "astro/config";
import wikiLinkPlugin from "remark-wiki-link";

import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
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