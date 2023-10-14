import { auth } from "@clerk/nextjs/server";
import type { inferAsyncReturnType } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

import { db } from "@acme/db";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type AuthSession = {
  session: {
    user: {
      id: string;
      name?: string;
      email?: string;
    };
  } | null;
};

function getUserAuth(): AuthSession {
  const { userId } = auth();
  if (userId) {
    return {
      session: {
        user: {
          id: userId,
        },
      },
    } as AuthSession;
  } else {
    return { session: null };
  }
}

export const createContext = (opts?: FetchCreateContextFnOptions) => {
  const { session } = getUserAuth();

  const source = opts?.req?.headers.get("x-trpc-source") ?? "unknown";
  console.log(
    ">>> tRPC Request from",
    source,
    "by",
    session ? session.user.id : "public",
  );

  return {
    session: session,
    headers: opts && Object.fromEntries(opts.req.headers),
    db,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
