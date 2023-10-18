/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";
import useWebSocket from "react-use-websocket";
import type { SendJsonMessage } from "react-use-websocket/dist/lib/types";

import { env } from "~/env.mjs";

export interface ChatMessage {
  userName: string;
  message: string;
}

export interface ChatCtx {
  messages: ChatMessage[];
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  connected: boolean;
  send: SendJsonMessage;
}

export const ChatContext = createContext<ChatCtx | null>(null);

export default function WebSocketProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [connected, setConnected] = useState<boolean>(false);
  const { session } = useClerk();

  const { sendJsonMessage, lastMessage } = useWebSocket(
    env.NEXT_PUBLIC_WEBSOCKET_URL,
    {
      //Will attempt to reconnect on all close events, such as server shutting down
      shouldReconnect: (event) => {
        console.log("shouldReconnect", event);
        return true;
      },
      onError: (event) => {
        console.log("onError", event);
      },
      onMessage: (event) => {
        const data = JSON.parse(event.data);
        console.log("onMessage", data);
        setMessages((prev) => [...prev, data]);
      },
      onOpen: (_event) => {
        setConnected(true);
        if (lastMessage) {
          const data = JSON.parse(lastMessage.data);
          setMessages((prev) => [...prev, data]);
        }
      },
      onClose(_event) {
        const chatMessage: ChatMessage = {
          userName: "",
          message: `${userName} left`,
        };
        sendJsonMessage(chatMessage);
        setConnected(false);
      },
      queryParams: {
        user_id: "test",
      },
      share: true,
      reconnectAttempts: 3,
    },
  );

  const sendEnterRoomMessage = () => {
    const chatMessage: ChatMessage = {
      userName: "",
      message: `${userName} joined`,
    };
    sendJsonMessage(chatMessage);
  };

  useEffect((): any => {
    if (!session) {
      setUserName("");
    }

    if (session?.isAuthorized) {
      setUserName(session.user.username!);
    }
  }, [session]);

  useEffect((): any => {
    if (!userName) return;
    sendEnterRoomMessage();
  }, [userName]);

  const value: ChatCtx = {
    messages,
    userName,
    setUserName,
    connected,
    send: sendJsonMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
