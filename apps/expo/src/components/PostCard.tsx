import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

import type { RouterOutputs } from "@acme/api";

export default function PostCard(props: {
  post: RouterOutputs["post"]["all"][number];
  onDelete: () => void;
}) {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  return (
    <View className="flex flex-row rounded-lg bg-white/10 p-4">
      <View className="flex-grow">
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "[id]",
              params: { id: props.post.id },
            })
          }
        >
          <Text className="text-xl font-semibold text-black">
            {props.post.title}
          </Text>
          <Text className="mt-2 text-black">{props.post.content}</Text>
        </TouchableOpacity>
      </View>
      {isSignedIn && (
        <TouchableOpacity onPress={props.onDelete}>
          <Text className="font-bold uppercase text-pink-400">Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
