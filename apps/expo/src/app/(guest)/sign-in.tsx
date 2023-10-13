import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link, Stack } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";

import { OAuthButtons } from "~/components/OAuth";
import { log } from "~/utils/logger";

export default function Page() {
  const { signIn, setSession, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setSession(completeSignIn.createdSessionId);
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View className="flex items-center justify-start bg-black pt-5">
      <Stack.Screen
        options={{
          title: "Sign In",
        }}
      />
      <View className="mb-5 w-11/12 border-b border-b-white">
        <OAuthButtons />
      </View>

      <View className="mb-5 h-11 w-11/12 rounded-md border border-solid border-white">
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          className="p-2, ml-5 flex h-12"
          placeholder="Email..."
          placeholderTextColor="#000"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View className="mb-5 h-11 w-11/12 rounded-md border border-solid border-white">
        <TextInput
          value={password}
          className="p-2, ml-5 flex h-12"
          placeholder="Password..."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        className="mt-10 h-[50px] w-4/5 items-center justify-center rounded-md bg-white"
        onPress={onSignInPress}
      >
        <Text className="font-bold text-black">Sign in</Text>
      </TouchableOpacity>

      <View className="mt-5 flex items-center justify-center bg-black">
        <Text>Have an account?</Text>

        <Link href="/sign-up" asChild>
          <TouchableOpacity className="mt-3, rounded-md, p-3, items-center justify-center border border-white bg-black">
            <Text className="font-bold text-white">Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
