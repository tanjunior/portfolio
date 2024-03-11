import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { relations, sql } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import { user } from "./user";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolio_${name}`);

export const post = createTable("posts", {
  id: serial("id").primaryKey(),
  authorId: varchar("author_id", { length: 64 }).notNull(),
  content: varchar("content", { length: 256 }).notNull(),
  imageUrl: varchar("image_url", { length: 256 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const postRelations = relations(post, ({ one }) => ({
  author: one(user, {
    fields: [post.authorId],
    references: [user.id],
  }),
}));

export type SelectPost = InferSelectModel<typeof post>;
export type InsertPost = InferInsertModel<typeof post>;
const insertSchema = createInsertSchema(post);

export const insertPostSchema = insertSchema.pick({
  content: true,
  imageUrl: true,
});
