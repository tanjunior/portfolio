import { z } from "zod";

import { and, desc, eq, schema } from "@acme/db";
import type { InsertPost } from "@acme/db/schema/post";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return ctx.db.query.post.findMany({ orderBy: desc(schema.post.createdAt) });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));

      return ctx.db.query.post.findFirst({
        where: eq(schema.post.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(z.string().min(1).max(256))
    .mutation(({ ctx, input }) => {
      console.log("post.create");
      console.log(ctx.session.user);
      const newPost: InsertPost = {
        content: input,
        userId: ctx.session.user!.id,
      };

      console.log(newPost);
      return ctx.db.insert(schema.post).values(newPost);
    }),

  delete: protectedProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.db
      .delete(schema.post)
      .where(
        and(
          eq(schema.post.id, input),
          eq(schema.post.userId, ctx.session.user!.id),
        ),
      );
  }),
});
