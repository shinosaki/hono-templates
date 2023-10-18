import { exists, eq } from "drizzle-orm";
import { users } from '$db';

export const allUsers = ({ db }) =>
  db.select()
    .from(users)
    .all();

export const getUser = ({ db }, user) =>
  db.select()
    .from(users)
    .where(eq(users.user, user))
    .limit(1)
    .then(r => (r.length) ? r[0] : null);

export const updateUser = ({ db }, user, values) =>
  db.update(users)
    .set(values)
    .where(eq(users.user, user));

export const deleteUser = ({ db }, user) =>
  db.delete(users)
    .where(eq(users.user, user));

export const createUser = ({ db }, values) =>
  db.insert(users)
    .values(values)
    .onConflictDoNothing({ target: users.user });
