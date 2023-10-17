import React from "react";
import { Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";

import Posts from "~/components/Posts";

const Home = () => {
  const { user } = useUser();

  return (
    <View className="flex flex-1 items-center justify-center">
      <Text>Welcome, {user?.emailAddresses[0]?.emailAddress} 🎉</Text>
      <Posts />
    </View>
  );
};

export default Home;
