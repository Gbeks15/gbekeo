import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per project in src/content/projects/.
// Add a file, rebuild, and it appears on the site.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    summary: z.string(),
    // 'solo' = Built solo, 'vista' = Shipped at Vista
    group: z.enum(['solo', 'vista']),
    status: z.enum(['Live', 'Running', 'In progress', 'Shipped', 'On hold']).optional(),
    // Lower number shows first
    order: z.number().default(100),
    metric: z.string().optional(),
    stack: z.array(z.string()).default([]),
    // Path inside /public, e.g. /screens/rift-dashboard.png
    cover: z.string().optional(),
    screens: z.array(z.object({ src: z.string(), caption: z.string().optional() })).default([]),
    link: z.object({ label: z.string(), url: z.string() }).optional(),
    // Set to true to hide a project without deleting it
    draft: z.boolean().default(false),
  }),
});

// Short dated updates for the "Now building" log in src/content/now/.
const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    date: z.coerce.date(),
    project: z.string(),
    note: z.string(),
  }),
});

export const collections = { projects, now };
