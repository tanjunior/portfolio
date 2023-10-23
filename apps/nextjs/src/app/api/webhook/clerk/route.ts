import { headers } from "next/headers";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import { Webhook } from "svix";

import { appRouter } from "@acme/api";
import { createInnerTRPCContext } from "@acme/api/src/trpc";

import { env } from "~/env.mjs";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload: WebhookEvent = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const eventType = evt.type;

  console.log(`Webhook with type of ${eventType}`);
  console.log("Webhook body:", body);

  if (eventType === "user.created" || eventType === "user.updated") {
    const {
      id,
      first_name,
      last_name,
      username,
      email_addresses,
      primary_email_address_id,
      image_url,
      // birthday,
      // gender,
      // created_at,
      // updated_at,
      // last_sign_in_at,
    } = evt.data;

    const emailObject = email_addresses?.find((email) => {
      return email.id === primary_email_address_id;
    });

    if (!emailObject) {
      return new Response("Error locating user", {
        status: 400,
      });
    }

    const ctx = await createInnerTRPCContext({
      headers: new Headers(),
    });
    const caller = appRouter.createCaller(ctx);

    const email = email_addresses[0]!.email_address;
    console.log("doing something");
    try {
      console.log("attempt to call trpc");
      await caller.user.create({
        id,
        email,
        firstName: first_name,
        lastName: last_name,
        username: username!,
        imageUrl: image_url,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof TRPCError) {
        // An error from tRPC occured
        const httpCode = getHTTPStatusCodeFromError(error);
        return new Response(error.message, { status: httpCode });
      }
      // Another error occured
      return new Response("Internal server error", { status: 500 });
    }
  }

  return new Response("", { status: 201 });
}
