import { Resend } from "resend";
import { z } from "zod";

import { ContactFormEmail, NotifyTemplate, resumeSchema } from "@acme/email";

import { env } from "../../env.mjs";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const resend = new Resend(env.RESEND_API_KEY);

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
          react: ContactFormEmail({ message, senderEmail }),
        });

        return true;
      } catch (error) {
        console.log("error", error);
        return { error };
      }
    }),

  sendResume: publicProcedure
    .input(resumeSchema)
    .mutation(async ({ input }) => {
      const { name, email, message } = input;

      try {
        // await resend.sendEmail({
        //   from: "Tan Jing Ren <contact@tanjingren.me>",
        //   to: email,
        //   subject: 'Resume',
        //   attachments: [
        //     {
        //       filename: 'Resume.pdf',
        //       content: '/static/Resume.pdf',
        //     }
        //   ],
        //   react: EmailTemplate({ name }),
        // });

        await resend.sendEmail({
          from: "Playground <contact@tanjingren.me>",
          to: "junior.tan@live.com",
          subject: `${name} just requested for a resume`,
          react: NotifyTemplate({ email, message }),
        });

        return true;
      } catch (error) {
        console.log("error", error);
        return false;
      }
    }),
});
