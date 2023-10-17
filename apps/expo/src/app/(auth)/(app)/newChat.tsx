import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import type { UserResponse } from "stream-chat";

import { chatClient } from "~/hooks/useChatClient";
import userQueryUsers from "~/hooks/useQueryUsers";

export default function NewChat() {
  const users = userQueryUsers();
  const [selected, setSelected] = useState<string[]>([]);

  async function handleCreateNerwChat() {
    await chatClient
      .channel("messaging", {
        members: [chatClient.userID!, ...selected],
      })
      .create();

    router.back();
  }

  return (
    <View className="flex-1">
      {/* <TextInput placeholder="chat name" />
      <Text>NewChat</Text> */}

      <FlashList
        data={users}
        extraData={selected}
        estimatedItemSize={20}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListHeaderComponent={() => <TextInput placeholder="search" />}
        renderItem={({ item }) => {
          return (
            <ListItem
              isSelected={selected.includes(item.id)}
              user={item}
              onPress={() => {
                setSelected((prev) => {
                  if (prev.includes(item.id)) {
                    return prev.filter((id) => id !== item.id);
                  } else {
                    return [...prev, item.id];
                  }
                });
              }}
            />
          );
        }}
      />
      <Button title="Create" onPress={handleCreateNerwChat} />
    </View>
  );
}

function ListItem({
  user,
  isSelected,
  onPress,
}: {
  user: UserResponse;
  isSelected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className={isSelected ? "h-8 bg-blue-800" : "h-5"}
      onPress={onPress}
    >
      <Text className="text-lg font-semibold">{user.name}</Text>
    </TouchableOpacity>
  );
}
