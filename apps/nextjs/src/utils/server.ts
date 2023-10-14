// import { createTRPCReact } from "@trpc/react-query";

import { headers } from "next/headers";
// import { currentUser } from "@clerk/nextjs";
import { httpBatchLink, loggerLink } from "@trpc/client";
// import { experimental_nextCacheLink as nextCacheLink } from "@trpc/next/app-dir/links/nextCache";
import { experimental_createTRPCNextAppDirServer as createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";

// import { appRouter } from "@acme/api";
import type { AppRouter } from "@acme/api";

import { getUrl, transformer } from "./shared";

// import { db } from "@acme/db";

export const api = createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      transformer,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchLink({
          url: getUrl(),
          headers() {
            // Forward headers from the browser to the API
            return {
              ...Object.fromEntries(headers()),
              "x-trpc-source": "nextjs-rsc",
            };
          },
        }),
      ],
    };
  },
});

export { type RouterInputs, type RouterOutputs } from "@acme/api";
