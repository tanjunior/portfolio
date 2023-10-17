import { Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { api } from "~/utils/api";

export default function Post() {
  const { id } = useLocalSearchParams();
  if (!id || typeof id !== "string") throw new Error("unreachable");
  const { data } = api.post.byId.useQuery({ id: parseInt(id) });

  if (!data) return null;

  return (
    <View className="h-full w-full p-4">
      <Stack.Screen
        options={{
          title: data.title,
        }}
      />
      <Text className="py-2 text-3xl font-bold text-black">{data.title}</Text>
      <Text className="py-4 text-black">{data.content}</Text>
    </View>
  );
}
