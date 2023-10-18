import { z } from "zod";

import { ContactFormEmail2, resend } from "@acme/email";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const emailRouter = createTRPCRouter({
  contact: publicProcedure
    .input(
      z.object({
        message: z.string(),
        senderEmail: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { senderEmail, message } = input;

      try {
        await resend.sendEmail({
          from: "Contact Form <contact@tanjingren.me>",
          to: "junior.tan@live.com",
          subject: "Message from contact form",
          reply_to: senderEmail,
          // react: React.createElement(ContactFormEmail, {
          //   message: message,
          //   senderEmail: senderEmail,
          // }),
          react: ContactFormEmail2({ message, senderEmail }),
        });

        return true;
      } catch (error) {
        console.log("error", error);
        return { error };
      }
    }),
});
