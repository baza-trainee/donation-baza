/* eslint-disable init-declarations */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

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
