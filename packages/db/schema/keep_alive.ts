import { int, mysqlEnum, mysqlTableCreator } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `portfolio_${name}`);

export const keepAlive = createTable("keep_alive", {
  id: mysqlEnum("id", ["1"]).primaryKey(),
  count: int("count").notNull().default(0),
});

export const updateKeepAliveSchema = createInsertSchema(keepAlive);
