import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { api } from "~/utils/api";

export default function Post() {
  const { id } = useLocalSearchParams();
  if (!id || typeof id !== "string") throw new Error("unreachable");
  const { data } = api.post.byId.useQuery({ id: parseInt(id) });

  if (!data) return null;

  return (
    <View className="flex-1">
      <Text className="py-4 text-black">{data.content}</Text>
    </View>
  );
}
