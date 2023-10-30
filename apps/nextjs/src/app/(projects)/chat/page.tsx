import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

import Chat from "~/components/chat/Chat";
import WebSocketProvider from "~/contexts/websocket-context";
import { env } from "~/env.mjs";

export default function page() {
  return (
    <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <WebSocketProvider>
        <Chat />
      </WebSocketProvider>
    </ClerkProvider>
  );
}
