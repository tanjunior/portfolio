import { NextResponse } from "next/server";
import { Resend } from "resend";

import { emailSchema, EmailTemplate } from "~/components/emails/FirstEmail";
import { env } from "~/env.mjs";

export async function POST(request: Request) {
  const resend = new Resend(env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email } = emailSchema.parse(body);
  try {
    const data = await resend.emails.send({
      from: "Tan Jing Ren <contact@tanjingren.me>",
      to: [email],
      subject: "Hello world!",
      react: EmailTemplate({ firstName: name }),
      text: "Email powered by Resend.",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
