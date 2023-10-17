import React from "react";
// import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { Chat, OverlayProvider } from "stream-chat-expo";

import { AppProvider } from "~/contexts/AppContext";
import { chatClient } from "~/hooks/useChatClient";

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OverlayProvider>
        <AppProvider>
          <Chat client={chatClient}>
            <Stack
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#6c47ff",
                },
                headerTintColor: "#fff",
              }}
            >
              <Stack.Screen
                name="index"
                options={{
                  title: "Chats",
                }}
              />
              <Stack.Screen
                name="chat"
                options={
                  {
                    // headerBackVisible: false,
                    // headerLeft(props) {
                    //   return (
                    //     <Text
                    //       {...props}
                    //       style={{ marginLeft: 15 }}
                    //       onPress={() => {
                    //         setChannel(undefined);
                    //         setThread(undefined);
                    //         router.back();
                    //       }}
                    //     >
                    //       Back
                    //     </Text>
                    //   );
                    // },
                  }
                }
              />
              <Stack.Screen
                name="newChat"
                options={{
                  title: "NewChat",
                }}
              />
            </Stack>
          </Chat>
        </AppProvider>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
}
