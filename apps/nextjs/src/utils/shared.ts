// import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";

// import type { AppRouter } from "@acme/api";

import { env } from "~/env.mjs";

export const transformer = superjson;

export function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`;
  return `http://localhost:${env.PORT}`;
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}

// /**
//  * Inference helper for inputs.
//  *
//  * @example type HelloInput = RouterInputs['example']['hello']
//  */
// export type RouterInputs = inferRouterInputs<AppRouter>;

// /**
//  * Inference helper for outputs.
//  *
//  * @example type HelloOutput = RouterOutputs['example']['hello']
//  */
// export type RouterOutputs = inferRouterOutputs<AppRouter>;
