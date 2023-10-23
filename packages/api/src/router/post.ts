import { z } from "zod";

import { and, desc, eq, schema } from "@acme/db";
import { insertPostSchema } from "@acme/db/schema/post";
import type { InsertPost } from "@acme/db/schema/post";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return await ctx.db.query.post.findMany({
      orderBy: desc(schema.post.createdAt),
    });
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
    .input(insertPostSchema)
    .mutation(({ ctx, input }) => {
      const newPost: InsertPost = {
        content: input.content,
        imageUrl: input.imageUrl ?? undefined,
        authorId: ctx.session.user!.id,
      };

      return ctx.db.insert(schema.post).values(newPost);
    }),

  delete: protectedProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.db
      .delete(schema.post)
      .where(
        and(
          eq(schema.post.id, input),
          eq(schema.post.authorId, ctx.session.user!.id),
        ),
      );
  }),
});
