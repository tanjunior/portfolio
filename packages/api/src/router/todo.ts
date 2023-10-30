import { z } from "zod";

import { desc, eq, schema } from "@acme/db";
import type { InsertTodo } from "@acme/db/schema/todo";
import {
  todoIdSchema,
  updateTodoParams,
  updateTodoSchema,
} from "@acme/db/schema/todo";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const todoRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.todo.findMany();
  }),

  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));

      return ctx.db.query.todo.findFirst({
        where: eq(schema.todo.id, input.id),
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        text: z.string().min(1),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(schema.todo).values(input);
    }),

  update: publicProcedure
    .input(updateTodoParams)
    .mutation(async ({ ctx, input }) => {
      const newTodo: InsertTodo = updateTodoSchema.parse({ ...input });
      const { id } = todoIdSchema.parse({ id: input.id });

      try {
        const todo = await ctx.db
          .update(schema.todo)
          .set(newTodo)
          .where(eq(schema.todo.id, id));

        return { todo };
      } catch (err) {
        const message = (err as Error).message ?? "Error, please try again";
        console.error(message);
        return { error: message };
      }
    }),

  delete: publicProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.db.delete(schema.todo).where(eq(schema.todo.id, input));
  }),
});
