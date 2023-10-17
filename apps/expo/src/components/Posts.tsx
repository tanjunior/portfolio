import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { api } from "~/utils/api";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

export default function Posts() {
  const { data } = api.post.all.useQuery();
  const utils = api.useContext();
  const deletePostMutation = api.post.delete.useMutation({
    onSettled: () => utils.post.all.invalidate(),
  });

  return (
    <View className="flex h-full w-full flex-col">
      <CreatePost />
      <FlashList
        data={data}
        estimatedItemSize={20}
        ItemSeparatorComponent={() => <View className="h-2" />}
        renderItem={(p) => (
          <PostCard
            post={p.item}
            onDelete={() => deletePostMutation.mutate(p.item.id)}
          />
        )}
      />
    </View>
  );
}
