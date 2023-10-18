import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

const $timestamp = (name) => {
  // https://github.com/drizzle-team/drizzle-orm/blob/a7dc7e8bbdc3784f67ff32ce39bee3283f080751/examples/libsql/src/schema.ts
  return integer(name, { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`);
};

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  user: text('user').notNull().unique(),
  data: text('data', { mode: 'json' }),
  createdAt: $timestamp('created_at'),
  updatedAt: $timestamp('updated_at')
});
