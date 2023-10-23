import { z } from "zod";

import { insertUserSchema, user } from "@acme/db/schema/user";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(insertUserSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .insert(user)
        .values(input)
        .onDuplicateKeyUpdate({
          set: {
            email: input.email,
            firstName: input.firstName,
            lastName: input.lastName,
            username: input.username,
            imageUrl: input.imageUrl,
          },
        });
    }),
});
