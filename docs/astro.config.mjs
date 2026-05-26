import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://nene-records.dev',
  output: 'static',
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
})
