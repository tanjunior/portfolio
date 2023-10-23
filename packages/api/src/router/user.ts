import { StreamChat } from "stream-chat";
import { z } from "zod";

import { and, desc, eq, schema } from "@acme/db";
import { insertUserSchema, user } from "@acme/db/schema/user";

import { env } from "../../env.mjs";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.string().min(1))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.query.user.findFirst({
        where: eq(schema.user.id, input),
      });

      return user;
    }),

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

  delete: publicProcedure
    .input(z.string().min(1))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(user).where(eq(schema.user.id, input));

      try {
        const serverClient = StreamChat.getInstance(
          env.STREAM_API_KEY,
          env.STREAM_API_SECRET,
        );

        await serverClient.deleteUser(input, {
          hard_delete: true,
          delete_conversation_channels: true,
        });
      } catch (err) {
        console.error(err);
      }
    }),
});
