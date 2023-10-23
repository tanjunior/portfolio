import { useState } from "react";
import { Button, Modal, Pressable, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import type { ImagePickerAsset } from "expo-image-picker";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { useUser } from "@clerk/clerk-expo";
import { OverlayProvider, UserDelete } from "stream-chat-expo";

import { chatClient } from "~/hooks/useChatClient";
import { api } from "~/utils/api";

// import { log } from "~/utils/logger";

const Profile = () => {
  const { user } = useUser();
  // const { signOut } = useAuth();
  const [firstName, setFirstName] = useState(user?.firstName!);
  const [lastName, setLastName] = useState(user?.lastName!);
  const [pickedImage, setPickedImage] = useState<ImagePickerAsset>();
  const [pickImageModal, setPickImageModal] = useState(false);

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult = await requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
      // allowsMultipleSelection: true,
    });

    result.assets &&
      result.assets.length > 0 &&
      updatePickedImage(result.assets[0]!);
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await launchCameraAsync();
    result.assets &&
      result.assets.length > 0 &&
      updatePickedImage(result.assets[0]!);
  };

  function updatePickedImage(asset: ImagePickerAsset) {
    setPickedImage(asset);
    setPickImageModal(false);
  }

  const onSaveUser = async () => {
    try {
      await user?.update({
        firstName: firstName,
        lastName: lastName,
      });

      const fileName =
        pickedImage?.fileName ??
        pickedImage?.uri.split("/").pop() ??
        "image.jpeg";

      await user?.setProfileImage({
        file: {
          uri: pickedImage?.uri,
          name: fileName,
          type: `image/${fileName.split(".").pop()}`,
        } as unknown as File,
      });
    } catch (e) {
      console.log(
        "🚀 ~ file: profile.tsx:18 ~ onSaveUser ~ e",
        JSON.stringify(e),
      );
    }
  };

  return (
    <View className="flex flex-1 flex-col">
      <View className="flex flex-row justify-evenly gap-2 p-2">
        <Image
          onTouchEnd={() => {
            setPickImageModal(true);
          }}
          className="h-28 w-28 rounded-full border-2 border-accent"
          source={{ uri: user?.imageUrl }}
          contentFit="cover"
        />
        <View className="flex flex-1 flex-col items-center justify-center gap-2 p-2">
          <TextInput
            className="h-12 w-full rounded-2xl border border-border bg-white px-4"
            placeholder="First Name"
            value={firstName ?? ""}
            onChangeText={setFirstName}
          />
          <TextInput
            className="h-12 w-full rounded-2xl border border-border bg-white px-4"
            placeholder="Last Name"
            value={lastName ?? ""}
            onChangeText={setLastName}
          />
        </View>
      </View>

      <Button onPress={onSaveUser} title="Update account" color={"#6c47ff"} />
      <Button
        onPress={async () => {
          await user?.delete();
          await chatClient.disconnectUser();
        }}
        title="Delete account"
        color={"red"}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={pickImageModal}
        onRequestClose={() => {
          setPickImageModal(false);
        }}
      >
        <Pressable
          className="flex-1 justify-end rounded bg-white/50 pb-8 blur-sm"
          onPress={(e) => {
            e.stopPropagation();
            setPickImageModal(false);
          }}
        >
          <View className="shadow-[0 -25px 25px -12px rgb(0, 0, 0, 0.25)] flex w-full flex-col items-center justify-center gap-1 rounded bg-white">
            <Pressable className="py-3" onPress={showImagePicker}>
              <Text className="text-lg">Gallery</Text>
            </Pressable>

            <Pressable className="py-3" onPress={openCamera}>
              <Text className="text-lg">Camera</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Profile;
