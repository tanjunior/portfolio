import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Link, Stack } from "expo-router";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

import PostList from "~/components/PostList";
import { api } from "~/utils/api";

export default function Page() {
  const { data, isError, isLoading } = api.post.all.useQuery();
  return (
    <View className="flex items-center justify-start bg-white pt-5">
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <Text>Welcome!</Text>
      <SignedIn>
        <Link href={"/profile"} asChild>
          <TouchableOpacity className="mt-3, rounded-md, p-3, items-center justify-center border border-white bg-black">
            <Text className="font-bold text-white">Go to Profile</Text>
          </TouchableOpacity>
        </Link>
      </SignedIn>
      <SignedOut>
        <Link href={"/sign-in"} asChild>
          <TouchableOpacity className="mt-3, rounded-md, p-3, items-center justify-center border border-black bg-white">
            <Text className="font-bold text-black">Sign In</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/sign-up"} asChild>
          <TouchableOpacity className="mt-3, rounded-md, p-3, items-center justify-center border border-black bg-white">
            <Text className="font-bold text-black">Sign Up</Text>
          </TouchableOpacity>
        </Link>

        <View className="h-full w-full p-4">
          {isError ? (
            <Text className="font-semibold italic text-red-900">Error</Text>
          ) : isLoading ? (
            <Text className="font-semibold italic text-green-400">
              Loading...
            </Text>
          ) : (
            <PostList data={data} />
          )}
        </View>
      </SignedOut>
    </View>
  );
}
