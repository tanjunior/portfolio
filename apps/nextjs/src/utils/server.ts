import { headers } from "next/headers";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
// import { experimental_nextHttpLink } from "@trpc/next/app-dir/links/nextHttp";
import { experimental_createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";
import superjson from "superjson";

import type { AppRouter } from "@acme/api";

import { getUrl } from "./shared";

export const api = experimental_createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          // experimental_nextHttpLink({
          // batch: true,
          url: getUrl(),
          // headers() {
          //   return {
          //     cookie: cookies().toString(),
          //     "x-trpc-source": "nextjs-server",
          //   };
          // },
          headers() {
            const heads = new Map(headers());
            heads.set("x-trpc-source", "nextjs-server");
            return Object.fromEntries(heads);
          },
        }),
      ],
    };
  },
});
