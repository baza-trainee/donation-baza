/* eslint-disable init-declarations */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

// Import * as schema from './schema';
// Import { drizzle } from 'drizzle-orm/postgres-js';
// Import postgres from 'postgres';

// Const connectionString = process.env.DATABASE_URL;

// // Disable prefetch as it is not supported for "Transaction" pool mode
// Export const client = postgres(connectionString!, { prepare: false });
// Export const db = drizzle(client, { schema });

import * as schema from './schema';
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;

const drizzleClient = drizzle(
  postgres(connectionString!, {
    prepare: false,
  }),
  { schema }
);

declare global {
  var database: PostgresJsDatabase<typeof schema> | undefined;
}

export const db = global.database || drizzleClient;
if (process.env.NODE_ENV !== 'production') global.database = db;
