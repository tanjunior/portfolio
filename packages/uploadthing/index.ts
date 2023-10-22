import { generateReactHelpers } from "@uploadthing/react/hooks";
import type { FileRouter } from "uploadthing/server";
import { createUploadthing } from "uploadthing/server";

// import type { FileRouter } from "uploadthing/next";
// import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(({ file }) => {
      // This code RUNS ON YOUR SERVER after upload

      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();