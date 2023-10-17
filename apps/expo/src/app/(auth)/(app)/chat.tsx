import React from "react";
// import { Text, View } from "react-native";
import { Channel, MessageInput, MessageList, Thread } from "stream-chat-expo";

import { useAppContext } from "~/contexts/AppContext";

export default function Chat() {
  const { channel, thread, setThread } = useAppContext();

  // if (!channel) return null

  return (
    // <Text className="flex items-center justify-center">chat.tsx</Text>
    <Channel
      channel={channel!}
      keyboardVerticalOffset={0}
      thread={thread ?? undefined ?? null}
      threadList={!!thread}
    >
      {thread ? (
        <Thread />
      ) : (
        <>
          <MessageList onThreadSelect={(m) => setThread(m!)} />
          <MessageInput />
        </>
      )}
    </Channel>
  );
}
