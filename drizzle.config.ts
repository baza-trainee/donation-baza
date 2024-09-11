import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('Database is required');

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
