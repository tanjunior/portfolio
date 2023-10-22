import { createEnv } from "@t3-oss/env-core";
import Constants from "expo-constants";
import { z } from "zod";

const extra = Constants.expoConfig?.extra!

console.log("extra", extra);

export const env = createEnv({
  clientPrefix: "EXPO_PUBLIC_",
  client: {
    EXPO_PUBLIC_STREAM_API_KEY: z.string().min(1),
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    EXPO_PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnv: {
    // EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    // EXPO_PUBLIC_STREAM_API_KEY: process.env.EXPO_PUBLIC_STREAM_API_KEY,
    // EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: extra.CLERK_PUBLISHABLE_KEY,
    EXPO_PUBLIC_STREAM_API_KEY: extra.STREAM_API_KEY,
    EXPO_PUBLIC_API_URL: extra.API_URL,
  },
});
