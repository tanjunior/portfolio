import React from "react";

import type { ChatMessage } from "~/contexts/websocket-context";

export default function Message({
  chatMessage,
  currentUser,
}: {
  chatMessage: ChatMessage;
  currentUser: string;
}) {
  const style =
    chatMessage.userName === currentUser ? "text-primary" : "text-foreground";
  const name =
    chatMessage.userName === currentUser ? "Me" : `${chatMessage.userName}`;
  return (
    <div className="flex items-baseline gap-1">
      {chatMessage.userName != "" && <div className={style}>{`${name}:`}</div>}
      <div className="text-foreground">{chatMessage.message}</div>
    </div>
  );
}
