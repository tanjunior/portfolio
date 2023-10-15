import { currentUser } from "@clerk/nextjs/server";
import type { inferAsyncReturnType } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

import { db } from "@acme/db";

interface CreateContextOptions {
  headers: Headers;
}

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

async function getUserAuth(): Promise<AuthSession> {
  const user = await currentUser();
  if (user) {
    return {
      session: {
        user: {
          id: user.id,
        },
      },
    } as AuthSession;
  } else {
    return { session: null };
  }
}

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
async function createInnerContext({ headers }: CreateContextOptions) {
  const { session } = await getUserAuth();
  const source = headers.get("x-trpc-source") ?? "unknown";
  console.log(">>> tRPC Request from", source, "by", session?.user.id);

  return {
    session,
    headers,
    db,
  };
}

export async function createContext(opts: FetchCreateContextFnOptions) {
  return await createInnerContext({
    headers: opts.req.headers,
  });
}

export type Context = inferAsyncReturnType<typeof createContext>;
// export type Context = Awaited<ReturnType<typeof createContext>>;
