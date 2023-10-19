import React from "react";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
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
          title: "Feed",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
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
        }}
      />
    </Stack>
  );
}
