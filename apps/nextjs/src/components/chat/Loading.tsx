import React from "react";
import { Icons } from "@/icons";

export default function Loading() {
  return (
    <div className="mx-auto flex min-h-screen items-center justify-center p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <Icons.spinner className="animate-spin" />
      </div>
    </div>
  );
}
