import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
// import { Tailwind } from "@react-email/tailwind";
import { z } from "zod";

export function ContactFormEmail({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      {/* <Tailwind> */}
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="my-10 rounded-md  border border-black/10 bg-white px-10 py-4">
            <Heading className="leading-tight">
              You received the following message from the contact form
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
      {/* </Tailwind> */}
    </Html>
  );
}

export function EmailTemplate({ name }: { name: string }) {
  return (
    <div>
      <h1>Hello {name},</h1>
      <p>Thank you for showing interest in my resume.</p>
      <p>Best Regards,</p>
      <p>Jing Ren</p>
    </div>
  );
}

export function NotifyTemplate({
  email,
  message,
}: {
  email: string;
  message?: string;
}) {
  return (
    <div>
      <p>{message}</p>
      <a href={`mailto:${email}`}>Send Email</a>
    </div>
  );
}

export const resumeSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().optional(),
});

export type Resume = z.infer<typeof resumeSchema>;
