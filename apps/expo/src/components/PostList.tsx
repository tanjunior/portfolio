import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import type { RouterOutputs } from "@acme/api";

import { api } from "~/utils/api";
import PostCard from "./PostCard";

export default function PostList({
  data,
}: {
  data: RouterOutputs["post"]["all"];
}) {
  const utils = api.useContext();
  const deletePostMutation = api.post.delete.useMutation({
    onSettled: () => utils.post.all.invalidate(),
  });

  return (
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
  );
}
