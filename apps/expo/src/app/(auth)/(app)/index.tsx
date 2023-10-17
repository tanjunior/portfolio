import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import type { Channel } from "stream-chat";
import { ChannelList } from "stream-chat-expo";

import { useAppContext } from "~/contexts/AppContext";

export default function TabOneScreen() {
  const { setChannel } = useAppContext();
  const router = useRouter();

  return (
    <View className="flex-1">
      <ChannelList
        onSelect={(channel: Channel) => {
          setChannel(channel);
          router.push("/chat");
        }}
      />
      <View className="absolute bottom-8 right-8 h-16 w-16 flex-1 items-center justify-center">
        <TouchableOpacity
          onPress={() => {
            router.push("/newChat");
          }}
        >
          <Ionicons name="add-circle" size={64} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
