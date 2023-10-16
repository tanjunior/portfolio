import { StreamChat } from "stream-chat";

import { env } from "~/env.mjs";

// export const runtime = "edge";

/**
 * Configure basic CORS headers
 * You should extend this to match your needs
 */
function setCorsHeaders(res: Response) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Request-Method", "*");
  res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.headers.set("Access-Control-Allow-Headers", "*");
}

export function OPTIONS() {
  const response = new Response(null, {
    status: 204,
  });
  setCorsHeaders(response);
  return response;
}

const handler = async (req: Request) => {
  const body = await req.json();

  try {
    const serverClient = StreamChat.getInstance(
      env.STREAM_API_KEY,
      env.STREAM_API_SECRET,
    );

    const token = serverClient.createToken(body.id);
    const response = new Response(JSON.stringify({ token }));

    setCorsHeaders(response);
    return response;
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export { handler as GET, handler as POST };
