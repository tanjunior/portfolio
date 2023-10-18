import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { boolean, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const todo = mysqlTable("todos", {
  id: serial("id").primaryKey(),
  text: varchar("text", { length: 256 }).notNull(),
  done: boolean("done").default(false).notNull(),
});

export type SelectTodo = InferSelectModel<typeof todo>;
export type InsertTodo = InferInsertModel<typeof todo>;

// Schema for todos - used to validate API requests
export const insertTodoSchema = createInsertSchema(todo);

export const insertTodoParams = createSelectSchema(todo, {
  text: z.coerce.string(),
}).omit({
  done: true,
  id: true,
});

export const updateTodoSchema = createSelectSchema(todo);

export const updateTodoParams = createSelectSchema(todo, {
  done: z.coerce.boolean(),
  text: z.coerce.string(),
});

export const todoIdSchema = updateTodoSchema.pick({ id: true });

// Types for todos - used to type API request params and within Components
export type Todo = z.infer<typeof updateTodoSchema>;
export type NewTodo = z.infer<typeof insertTodoSchema>;
export type NewTodoParams = z.infer<typeof insertTodoParams>;
export type UpdateTodoParams = z.infer<typeof updateTodoParams>;
export type TodoId = z.infer<typeof todoIdSchema>["id"];
