import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { StreamChat } from "stream-chat";
import type { User } from "stream-chat";
import type { DefaultStreamChatGenerics } from "stream-chat-expo";

import { env } from "~/env";
// import useToken from "./useToken";
import { getBaseUrl } from "~/utils/api";

// import { api, getBaseUrl } from "~/utils/api";
// import { log } from "~/utils/logger";

const streamAPIkey = env.EXPO_PUBLIC_STREAM_API_KEY

export const chatClient: StreamChat<DefaultStreamChatGenerics> =
  StreamChat.getInstance(streamAPIkey);

export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState<boolean>(false);
  const { user } = useUser();

  // const { data: token } = useToken(streamChatUser.id);

  useEffect(() => {
    async function generateToken(id: string) {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify({
        id,
      });

      const response = await fetch(`${getBaseUrl()}/api/stream`, {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const token: string = data.token as string;
      return token;
    }

    const setupClient = async () => {
      try {
        if (!user) return;
        const streamChatUser: User = {
          id: user.id,
          name: user.fullName ?? user.firstName ?? user.lastName ?? undefined,
          image: user.imageUrl,
          username: user.username ?? undefined,
        };
        const token = await generateToken(streamChatUser.id);
        await chatClient.connectUser(streamChatUser, token);
        console.log(`User ${chatClient.userID} connected to Stream Chat`);
        setClientIsReady(true);

        // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
        // But in case you need the chat to load from offline storage first then you should render chat components
        // immediately after calling `connectUser()`.
        // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            `An error occurred while connecting the user: ${error.message}`,
          );
        }
      }
    };

    if (!user) return;

    // If the chat client has a value in the field `userID`, a user is already connected
    // and we can skip trying to connect the user again.
    if (!chatClient.userID) {
      void setupClient();
    }
  }, [user]);

  return {
    clientIsReady,
  };
};
