import React, { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import type { ImagePickerAsset } from "expo-image-picker";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import { api } from "~/utils/api";

export default function CreatePost() {
  const utils = api.useContext();

  const [content, setContent] = useState("");

  const [pickedImage, setPickedImage] = useState<ImagePickerAsset[]>([]);
  const [pickImageModal, setPickImageModal] = useState(false);

  const { mutate, error, isError } = api.post.create.useMutation({
    async onSuccess() {
      setContent("");
      await utils.post.all.invalidate();
    },
  });

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult = await requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      // allowsEditing: true,
      quality: 0.5,
      allowsMultipleSelection: true,
    });

    if (result.assets) updatePickedImage(result.assets);
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await launchCameraAsync();
    if (result.assets) updatePickedImage(result.assets);
  };

  function updatePickedImage(assets: ImagePickerAsset[]) {
    setPickedImage((prev) => [...prev, ...assets]);
    setPickImageModal(false);
  }

  return (
    <View className="">
      <TextInput
        className="mb-2 rounded bg-white/10 p-2 text-black placeholder-gray-500"
        value={content}
        onChangeText={setContent}
        placeholder="Content"
        multiline={true}
      />
      {isError && (
        <Text className="mb-2 text-red-500">
          {error.data?.zodError?.formErrors}
        </Text>
      )}

      <View className="flex flex-row flex-wrap">
        {pickedImage.map((image) => (
          <Image
            key={image.uri}
            className="h-16 w-16"
            contentFit="cover"
            source={{ uri: image.uri }}
          />
        ))}
      </View>

      <View className="flex flex-row items-center justify-evenly gap-2 px-2">
        <Pressable
          onPress={() => {
            setPickImageModal(true);
          }}
        >
          <Ionicons name="image-outline" size={24} color="black" />
        </Pressable>
        <TouchableOpacity
          className="flex-1 rounded bg-pink-400 p-2"
          onPress={() => {
            mutate(content);
          }}
        >
          <Text className="font-semibold text-white">Publish post</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={pickImageModal}
        onRequestClose={() => {
          setPickImageModal(!pickImageModal);
        }}
      >
        <Pressable
          className="flex-1 justify-end rounded bg-white/50 pb-8 blur-sm"
          onPress={(e) => {
            e.stopPropagation();
            setPickImageModal(!pickImageModal);
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
}
