import type * as ImagePicker from "expo-image-picker";
import { genUploader } from "uploadthing/client";
import type { FileRouter, inferEndpointInput } from "uploadthing/server";
export type { OurFileRouter } from "@acme/uploadthing";
import { getBaseUrl } from "~/utils/api";

type FileType = {
  uri: string;
} & NonNullable<ImagePicker.ImagePickerResult["assets"]>[number];

export function useUploadThing<RouterType extends FileRouter>() {
  const uploadFiles = genUploader<RouterType>();

  const uploadThing = async ({
    files,
    endpoint,
    input,
    onUploadProgress,
  }: {
    files: ImagePicker.ImagePickerAsset[];
    endpoint: keyof RouterType;
    input?: inferEndpointInput<RouterType[typeof endpoint]>;
    onUploadProgress?: ({
      file,
      progress,
    }: {
      file: string;
      progress: number;
    }) => void;
  }) => {
    return await uploadFiles(
      {
        endpoint,
        files: files.map((asset) => {
          const fileName =
            asset.fileName || asset.uri.split("/").pop() || "image.jpeg";

            console.log("fileName", fileName);

          return {
            uri: asset.uri,
            name: fileName,
            type: `image/${fileName.split(".").pop()}`,
          } as unknown as File;
        }),
        input,
        onUploadProgress,
      },
      {
        url: `${getBaseUrl()}/api/uploadthing`,
      },
    );
  };

  return {
    uploadThing,
  };
}
