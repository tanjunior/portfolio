import React, { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";

import { env } from "~/env";
import { TRPCProvider } from "~/utils/api";
import { tokenCache } from "~/utils/cache";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const publishableKey = env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// This is the main layout of the app
// It wraps your pages with the providers they need
function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
}

function InitialLayout() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inTabsGroup = segments[0] === "(auth)";

    if (isSignedIn && !inTabsGroup) {
      router.replace("(home)");
    } else if (!isSignedIn) {
      router.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);

  return (
    <TRPCProvider>
      <Slot />
    </TRPCProvider>
  );
}

export default RootLayout;
