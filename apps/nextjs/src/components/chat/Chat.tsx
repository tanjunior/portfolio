"use client";

import React, { useContext, useRef, useState } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

import type { ChatMessage } from "~/contexts/websocket-context";
import { ChatContext } from "~/contexts/websocket-context";
import Loading from "./Loading";
import Message from "./Message";
import Username from "./Username";

export default function Chat() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messageInput, setMessageInput] = useState<string>("");
  const ctx = useContext(ChatContext);
  const { connected, messages, send, userName } = ctx!;

  const handleSend = () => {
    if (messageInput) {
      const chatMessage: ChatMessage = { userName, message: messageInput };
      send(chatMessage);
      setMessageInput("");
    }
    inputRef.current?.focus();
  };

  return (
    <section className="mx-auto max-w-3xl p-5 sm:pt-4 md:p-0">
      <div className="bg-accent py-4 text-accent-foreground">
        <h1 className="text-center text-2xl font-semibold">Realtime Chat</h1>
        <div className="mt-2 text-center">
          <span>using </span>
          <a
            href="https://github.com/tanjunior/websocket-go"
            className="underline"
          >
            My Websocket Server
          </a>
          <span> and </span>
          <a
            href="https://github.com/robtaussig/react-use-websocket"
            className="underline"
          >
            react-use-websocket
          </a>
        </div>
      </div>

      {!connected && <Loading />}

      {!userName && <Username ctx={ctx!} />}

      {connected && userName && (
        <div className="flex h-screen w-full flex-1 flex-col justify-between bg-accent">
          <div className="flex flex-col gap-y-2 p-4 font-mono">
            {messages.length ? (
              messages.map((chatMessage, i) => (
                <Message
                  key={"msg_" + i}
                  chatMessage={chatMessage}
                  currentUser={userName}
                />
              ))
            ) : (
              <div className="py-6 text-center text-sm text-accent-foreground">
                No chat messages
              </div>
            )}
          </div>

          <div className="sticky bottom-0 flex h-16 items-center gap-1 bg-accent p-2">
            <Input
              ref={inputRef}
              type="text"
              value={messageInput}
              placeholder={connected ? "Type a message..." : "Connecting..."}
              disabled={!connected}
              onChange={(e) => {
                setMessageInput(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <Button
              variant={"secondary"}
              onClick={() => {
                handleSend();
              }}
              disabled={!connected}
            >
              SEND
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
