import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "EXPO_PUBLIC_",
  client: {
    EXPO_PUBLIC_STREAM_API_KEY: z.string().min(1),
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    EXPO_PUBLIC_STREAM_API_KEY: process.env.EXPO_PUBLIC_STREAM_API_KEY,
  },
});
