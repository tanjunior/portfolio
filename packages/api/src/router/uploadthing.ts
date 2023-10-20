import { Resend } from "resend";
import { genUploader } from "uploadthing/client";
// import type { FileRouter, inferEndpointInput } from "uploadthing/server";
import { z } from "zod";

import type { OurFileRouter } from "@acme/nextjs/src/app/api/uploadthing/core";

import { env } from "../../env.mjs";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const resend = new Resend(env.RESEND_API_KEY);

export const uploadthingRouter = createTRPCRouter({
  uploadImages: protectedProcedure
    .input(
      z.object({
        url: z.string().url(),
        files: z
          .object({
            uri: z.string(),
            fileName: z.string(),
          })
          .array(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const uploadFiles = genUploader<OurFileRouter>();

      const { url, files } = input;

      const config = {
        url: `${url}/api/uploadthing`,
      };
      const results = await uploadFiles(
        {
          endpoint: "imageUploader",
          files: files.map((asset) => {
            const fileName =
              asset.fileName || asset.uri.split("/").pop() || "image.jpeg";

            return {
              uri: asset.uri,
              name: fileName,
              type: `image/${fileName.split(".").pop()}`,
            } as unknown as File;
          }),
        },
        config,
      );

      const imageUrls = results.map((result) => {
        return result.url;
      });

      return imageUrls;
    }),
});
