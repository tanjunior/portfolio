import { emailRouter } from "./router/email";
import { postRouter } from "./router/post";
import { todoRouter } from "./router/todo";
import { uploadthingRouter } from "./router/uploadthing";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  email: emailRouter,
  todo: todoRouter,
  uploadthing: uploadthingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
