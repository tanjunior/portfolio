import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import CreatePost from "~/components/CreatePost";
import PostList from "~/components/PostList";
import { api } from "~/utils/api";

const Index = () => {
  const utils = api.useContext();
  const { data, isError, isLoading } = api.post.all.useQuery();

  return (
    <SafeAreaView className="bg-[#1F104A]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-pink-400">T3</Text> Turbo
        </Text>

        <Button
          onPress={() => void utils.post.all.invalidate()}
          title="Refresh posts"
          color={"#f472b6"}
        />

        <View className="py-2">
          {isError ? (
            <Text className="font-semibold italic text-red-900">Error</Text>
          ) : isLoading ? (
            <Text className="font-semibold italic text-green-400">
              Loading...
            </Text>
          ) : (
            <Text className="font-semibold italic text-white">
              Press on a post
            </Text>
          )}
        </View>

        {data && <PostList data={data} />}

        <CreatePost />
      </View>
    </SafeAreaView>
  );
};

export default Index;
