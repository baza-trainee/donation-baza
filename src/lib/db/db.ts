import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString!, { prepare: false });
export const db = drizzle(client, { schema });

// Import * as schema from './schema';
// Import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
// Import postgres from 'postgres';

// Const connectionString = process.env.DATABASE_URL;

// Const drizzleClient = drizzle(
//   Postgres(connectionString!, {
//     Prepare: false,
//   }),
//   { schema }
// );

// Declare global {
//   Var database: PostgresJsDatabase<typeof schema> | undefined;
// }

// Export const db = global.database || drizzleClient;
// If (process.env.NODE_ENV !== 'production') global.database = db;
