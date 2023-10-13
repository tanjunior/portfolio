import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// import { appRouter, createContext } from "@acme/api";
// // import { auth } from "@acme/auth";

// export const runtime = "edge";

// /**
//  * Configure basic CORS headers
//  * You should extend this to match your needs
//  */
// function setCorsHeaders(res: Response) {
//   res.headers.set("Access-Control-Allow-Origin", "*");
//   res.headers.set("Access-Control-Request-Method", "*");
//   res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
//   res.headers.set("Access-Control-Allow-Headers", "*");
// }

// export function OPTIONS() {
//   const response = new Response(null, {
//     status: 204,
//   });
//   setCorsHeaders(response);
//   return response;
// }

// const handler = (req: Request) => {
//   const response = fetchRequestHandler({
//     endpoint: "/api/trpc",
//     router: appRouter,
//     req,
//     createContext,
//     onError({ error, path }) {
//       console.error(`>>> tRPC Error on '${path}'`, error);
//     },
//   });

//   setCorsHeaders(response);
//   return response;
// };

import { appRouter, createContext } from "@acme/api";

// import { createNextApiHandler } from "@trpc/server/adapters/next";

// export API handler
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext,
    onError({ error, path }) {
      console.error(`>>> tRPC Error on '${path}'`, error);
    },
  });

export { handler as GET, handler as POST };

// If you need to enable cors, you can do so like this:
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Enable cors
//   await cors(req, res);

//   // Let the tRPC handler do its magic
//   return createNextApiHandler({
//     router: appRouter,
//     createContext,
//   })(req, res);
// };

// export default handler;
