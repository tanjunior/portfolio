import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link, router, Stack } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

import { OAuthButtons } from "~/components/OAuth";
import { log } from "~/utils/logger";

export default function Page() {
  const { isLoaded, signUp } = useSignUp();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignUpPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // https://docs.clerk.dev/popular-guides/passwordless-authentication
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      router.replace("/verify-code");
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  }, [isLoaded, firstName, lastName, emailAddress, password]);

  return (
    <View className="flex items-center justify-start bg-white pt-5">
      <Stack.Screen
        options={{
          title: "Sign Up",
        }}
      />
      <View className="mb-5 w-11/12 border-b border-b-black">
        <OAuthButtons />
      </View>

      <View className="mb-5 h-11 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          value={firstName}
          className="p-2, ml-5 flex h-12"
          placeholder="First name..."
          placeholderTextColor="#000"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <View className="mb-5 h-11 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          value={lastName}
          className="p-2, ml-5 flex h-12"
          placeholder="Last name..."
          placeholderTextColor="#000"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>

      <View className="mb-5 h-11 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          className="p-2, ml-5 flex h-12"
          placeholder="Email..."
          placeholderTextColor="#000"
          onChangeText={(email) => setEmailAddress(email)}
        />
      </View>

      <View className="mb-5 h-11 w-11/12 rounded-md border border-solid border-black">
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
        className="mt-10 h-[50px] w-4/5 items-center justify-center rounded-md bg-slate-500"
        onPress={onSignUpPress}
      >
        <Text className="font-bold text-white">Sign up</Text>
      </TouchableOpacity>

      <View className="mt-5 flex items-center justify-center bg-white">
        <Text>Have an account?</Text>

        <Link href="/sign-in" asChild>
          <TouchableOpacity className="mt-3, rounded-md, p-3, items-center justify-center border border-black bg-white">
            <Text className="font-bold text-black">Sign in</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
