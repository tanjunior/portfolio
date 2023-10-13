import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Slot } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";

import { TRPCProvider } from "~/utils/api";
import { tokenCache } from "~/utils/cache";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <TRPCProvider>
      <ClerkProvider
        publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}
        tokenCache={tokenCache}
      >
        <SafeAreaProvider>
          <ClerkLoaded>
            <Slot />
          </ClerkLoaded>
        </SafeAreaProvider>
      </ClerkProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
