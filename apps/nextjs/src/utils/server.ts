import { cookies, headers } from "next/headers";
// import { currentUser } from "@clerk/nextjs";
import { httpBatchLink, loggerLink } from "@trpc/client";
// import { experimental_nextCacheLink as nextCacheLink } from "@trpc/next/app-dir/links/nextCache";
import { experimental_nextHttpLink as nextHttpLink } from "@trpc/next/app-dir/links/nextHttp";
import { experimental_createTRPCNextAppDirServer as createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";

// import { appRouter } from "@acme/api";
import type { AppRouter } from "@acme/api";

// import { db } from "@acme/db";

import { getUrl, transformer } from "./shared";

// interface AuthSession {
//   session: {
//     user: {
//       id: string;
//       name?: string;
//       email?: string;
//     };
//   } | null;
// }

// const getUserAuth = async () => {
//   const user = await currentUser();
//   if (user) {
//     return {
//       session: {
//         user: {
//           id: user.id,
//         },
//       },
//     } as AuthSession;
//   } else {
//     return { session: null };
//   }
// };

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
        nextHttpLink({
          batch: true,
          url: getUrl(),
          headers() {
            // Forward headers from the browser to the API
            return {
              ...Object.fromEntries(headers()),
              "x-trpc-source": "nextjs-rsc",
            };
          },
        }),
        // nextCacheLink({
        //   revalidate: 1,
        //   router: appRouter,
        //   async createContext() {
        //     const { session } = await getUserAuth();
        //     return {
        //       session,
        //       db,
        //       headers: {
        //         cookie: cookies().toString(),
        //         "x-trpc-source": "rsc-invoke",
        //       },
        //       // headers() {
        //       //   // Forward headers from the browser to the API
        //       //   return {
        //       //     ...Object.fromEntries(headers()),
        //       //     "x-trpc-source": "nextjs-rsc",
        //       //   };
        //       // },
        //     };
        //   },
        // }),
        // httpBatchLink({
        //   url: getUrl(),
        //   headers() {
        //     // Forward headers from the browser to the API
        //     return {
        //       ...Object.fromEntries(headers()),
        //       "x-trpc-source": "nextjs-rsc",
        //     };
        //   },
        // }),
      ],
    };
  },
});

// export { type RouterInputs, type RouterOutputs } from "@acme/api";
