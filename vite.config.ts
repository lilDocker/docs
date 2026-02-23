import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";

import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",

        /* ---------- REMARK ---------- */
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
        ],

        /* ---------- REHYPE ---------- */
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      }),
    },

    tailwindcss(),

    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
  ],
});