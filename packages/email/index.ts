import { Resend } from "resend";

import { env } from "./env.mjs";

export * from "./templates";

export const resend = new Resend(env.RESEND_API_KEY);
export type { ErrorResponse } from "resend";
