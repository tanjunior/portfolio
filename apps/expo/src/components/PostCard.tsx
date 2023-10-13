import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

import type { RouterOutputs } from "@acme/api";

export default function PostCard(props: {
  post: RouterOutputs["post"]["all"][number];
  onDelete: () => void;
}) {
  return (
    <View className="flex flex-row rounded-lg bg-white/10 p-4">
      <SignedIn>
        <View className="flex-grow">
          <Link
            asChild
            href={{
              pathname: "/post/[id]",
              params: { id: props.post.id },
            }}
          >
            <TouchableOpacity>
              <Text className="text-xl font-semibold text-pink-400">
                {props.post.title}
              </Text>
              <Text className="mt-2 text-white">{props.post.content}</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <TouchableOpacity onPress={props.onDelete}>
          <Text className="font-bold uppercase text-pink-400">Delete</Text>
        </TouchableOpacity>
      </SignedIn>
      <SignedOut>
        <Text className="text-xl font-semibold text-pink-400">sign in</Text>
      </SignedOut>
    </View>
  );
}
