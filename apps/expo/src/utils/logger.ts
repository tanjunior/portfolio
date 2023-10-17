import type { ClerkAPIError } from "@clerk/types";

export function log(msg = "") {
  const date = new Date().toDateString();
  return console.log(`${date}:>${msg}`);
}

export const instanceOfClerkError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: any,
): object is { errors: ClerkAPIError } => {
  return "errors" in object;
};
