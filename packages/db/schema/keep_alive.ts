import { integer, pgEnum, pgTableCreator } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolio_${name}`);

export const keepAliveEnum = pgEnum("id", ["1"]);

export const keepAlive = createTable("keep_alive", {
  id: keepAliveEnum("id").primaryKey(),
  count: integer("count").notNull().default(0),
});

export const updateKeepAliveSchema = createInsertSchema(keepAlive);
