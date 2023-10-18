"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, error, isSuccess, isError, status } = useQuery(
    ["test"],
    async (query) => {
      console.log(query);
      const result = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "user", email: "junior.tan@live.com" }),
      });

      return result.json();
    },
  );

  return <div>{status}</div>;
}
