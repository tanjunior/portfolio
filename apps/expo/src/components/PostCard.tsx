import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

import type { RouterOutputs } from "@acme/api";

export default function PostCard({
  post,
  onDelete,
}: {
  post: RouterOutputs["post"]["all"][number];
  onDelete: () => void;
}) {
  const { user } = useUser();
  const router = useRouter();
  return (
    <View className="flex flex-row rounded-lg bg-white/10 p-4">
      <View className="flex-grow">
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "[id]",
              params: { id: post.id },
            })
          }
        >
          <Text className="text-xl font-semibold text-black">
            {post.content}
          </Text>
        </TouchableOpacity>
      </View>
      {user?.id == post.userId && (
        <TouchableOpacity onPress={onDelete}>
          <Text className="font-bold uppercase text-pink-400">Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
