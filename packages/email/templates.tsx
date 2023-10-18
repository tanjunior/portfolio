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
import { Tailwind } from "@react-email/tailwind";

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
      <Tailwind>
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
      </Tailwind>
    </Html>
  );
}

export function ContactFormEmail2({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) {
  return (
    <div>
      <h1>You received the following message from the contact form</h1>
      <p>{message}</p>
      <p>The sender's email is: {senderEmail}</p>
    </div>
  );
}
