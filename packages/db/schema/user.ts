import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { relations } from "drizzle-orm";
import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";

import { post } from "./post";

export const user = mysqlTable("users", {
  id: varchar("id", { length: 64 }).primaryKey(),
  email: varchar("email", { length: 64 }).unique().notNull(),
  firstName: varchar("first_name", { length: 64 }),
  lastName: varchar("last_name", { length: 64 }),
  username: varchar("username", { length: 64 }).unique().notNull(),
  imageUrl: varchar("image_url", { length: 256 }).notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  posts: many(post),
}));

export type SelectUser = InferSelectModel<typeof user>;
export type InsertUser = InferInsertModel<typeof user>;
const insertSchema = createInsertSchema(user);

export const insertUserSchema = insertSchema.omit({});
