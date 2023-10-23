import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";

export const post = mysqlTable("posts", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 64 }).notNull(),
  content: varchar("content", { length: 256 }).notNull(),
  imageUrl: varchar("image_url", { length: 256 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
});

export type SelectPost = InferSelectModel<typeof post>;
export type InsertPost = InferInsertModel<typeof post>;
const insertSchema = createInsertSchema(post);

export const insertPostSchema = insertSchema.pick({
  content: true,
  imageUrl: true,
});
