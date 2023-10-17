import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import type { TokenCache } from "@clerk/clerk-expo/dist/cache";

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key) => {
      return SecureStore.getItemAsync(key);
    },
    saveToken: async (key, value) => {
      return SecureStore.setItemAsync(key, value);
    },
  };
};

// SecureStore is not supported on the web
// https://github.com/expo/expo/issues/7744#issuecomment-611093485
export const tokenCache =
  Platform.OS !== "web" ? createTokenCache() : undefined;
