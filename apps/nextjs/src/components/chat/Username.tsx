"use client";

import React, { useState } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Separator } from "@/ui/separator";

import type { ChatCtx } from "~/contexts/websocket-context";
import { SignIn } from "../auth";

type ctx = Pick<ChatCtx, "connected" | "setUserName">;

export default function Username({ ctx }: { ctx: ctx }) {
  const [userNameInput, setUserNameInput] = useState<string>("");
  const { connected, setUserName } = ctx;

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2 rounded-lg  bg-accent p-4">
        <div className="flex gap-2">
          <Input
            type="text"
            value={userNameInput}
            placeholder={connected ? "Your Name" : "Connecting..."}
            disabled={!connected}
            onChange={(e) => setUserNameInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setUserName(userNameInput);
              }
            }}
          />
          <Button
            onClick={() => {
              setUserName(userNameInput);
            }}
            disabled={!connected}
          >
            Enter
          </Button>
        </div>
        <Separator />
        or
        <SignIn />
      </div>
    </div>
  );
}
