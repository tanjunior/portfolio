import React from "react";
import { View } from "react-native";
// import { useUser } from "@clerk/clerk-expo";
import { FlashList } from "@shopify/flash-list";

import CreatePost from "~/components/CreatePost";
import PostCard from "~/components/PostCard";
import { api } from "~/utils/api";

const Home = () => {
  // const { user } = useUser();
  const { data } = api.post.all.useQuery();
  const utils = api.useUtils();
  const deletePostMutation = api.post.delete.useMutation({
    onSettled: () => utils.post.all.invalidate(),
  });

  return (
    <View className="flex-1">
      <CreatePost />
      <FlashList
        data={data}
        estimatedItemSize={112}
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
};

export default Home;
