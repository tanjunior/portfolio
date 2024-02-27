import { int, mysqlEnum, mysqlTable } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";

export const keepAlive = mysqlTable("keep_alive", {
  id: mysqlEnum("id", ["1"]).primaryKey(),
  count: int("count").notNull().default(0),
});

export const updateKeepAliveSchema = createInsertSchema(keepAlive);
