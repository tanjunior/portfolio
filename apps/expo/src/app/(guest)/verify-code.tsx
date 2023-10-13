import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

import { log } from "~/utils/logger";

export default function Page() {
  const { isLoaded, signUp, setSession } = useSignUp();

  const [code, setCode] = React.useState("");

  const onPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setSession(completeSignUp.createdSessionId);
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  }, [isLoaded, code]);

  return (
    <View className="flex items-center justify-start bg-black pt-5">
      <Stack.Screen
        options={{
          title: "Verify Code",
        }}
      />

      <View className="mb-5 h-11 w-11/12 rounded-md border border-solid border-white">
        <TextInput
          value={code}
          className="p-2, ml-5 flex h-12"
          placeholder="Code..."
          placeholderTextColor="#000"
          onChangeText={(code) => setCode(code)}
        />
      </View>
      <TouchableOpacity
        className="mt-10 h-[50px] w-4/5 items-center justify-center rounded-md bg-white"
        onPress={onPress}
      >
        <Text className="font-bold text-black">Verify Email</Text>
      </TouchableOpacity>
    </View>
  );
}
