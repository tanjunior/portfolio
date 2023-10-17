/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import type { Channel as ChannelType } from "stream-chat";
import type { MessageType } from "stream-chat-expo";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ctx = {
  channel: ChannelType | undefined;
  setChannel: (channel: ChannelType) => void;
  thread: MessageType | null | undefined;
  setThread: (thread: MessageType) => void;
};

export const AppContext = React.createContext<ctx>({
  channel: undefined,
  setChannel: () => {},
  thread: null,
  setThread: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [channel, setChannel] = useState<ChannelType>();
  const [thread, setThread] = useState<MessageType | null>();

  return (
    <AppContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
