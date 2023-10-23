import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
// import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

import type { RouterOutputs } from "@acme/api";

import { api } from "~/utils/api";

export default function PostCard({
  post,
  onDelete,
}: {
  post: RouterOutputs["post"]["all"][number];
  onDelete: () => void;
}) {
  const { user } = useUser();
  // const router = useRouter();
  const { data: author } = api.user.get.useQuery(post.authorId);

  return (
    <View className="flex flex-1 flex-col">
      <View className="flex flex-row items-center justify-between p-2">
        <View className="flex flex-row items-center justify-evenly gap-2">
          <Image
            source={{ uri: author?.imageUrl }}
            className="h-14 w-14 rounded-full"
            contentFit="cover"
            contentPosition="center"
          />
          <Text className="text-lg font-semibold text-black">
            {author?.username}
          </Text>
        </View>
        {user?.id == post.authorId && (
          <TouchableOpacity onPress={onDelete}>
            <Text className="font-bold uppercase text-pink-400">Delete</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text className="p-2 text-base text-black">{post.content}</Text>
      <TouchableOpacity className="flex flex-row">
        {post.imageUrl && (
          <Image
            className="aspect-square w-full flex-1"
            contentFit="cover"
            source={{ uri: post.imageUrl }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
