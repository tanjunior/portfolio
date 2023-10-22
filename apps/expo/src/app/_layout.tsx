import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, useRouter, useSegments } from "expo-router";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";

import { env } from "~/env";
// import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";
import { tokenCache } from "~/utils/cache";

const publishableKey = env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
// This is the main layout of the app
// It wraps your pages with the providers they need

const InitialLayout = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inTabsGroup = segments[0] === "(auth)";

    if (isSignedIn && !inTabsGroup) {
      router.replace("/(auth)/(home)");
    } else if (!isSignedIn) {
      router.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);

  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
