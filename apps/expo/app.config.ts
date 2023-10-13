import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  owner: "juniortan",
  name: "expo",
  slug: "expo",
  scheme: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    // useClassicUpdates: true
    url: "https://u.expo.dev/76753785-62f2-4741-b18a-ecc9a63b67e1",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "your.bundle.identifier",
    supportsTablet: true,
  },
  android: {
    package: "your.bundle.identifier",
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  extra: {
    eas: {
      projectId: "76753785-62f2-4741-b18a-ecc9a63b67e1",
    },
    clerkPublishableKey:
      "pk_test_ZmluZS1zdGFyZmlzaC04NS5jbGVyay5hY2NvdW50cy5kZXYk",
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  plugins: ["expo-router", "./expo-plugins/with-modify-gradle.js"],
  runtimeVersion: {
    policy: "appVersion",
  },
});

export default defineConfig;
