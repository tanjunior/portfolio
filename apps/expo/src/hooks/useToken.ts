import { useQuery } from "@tanstack/react-query";

import { getBaseUrl } from "~/utils/api";

async function generateToken(id: string) {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    id,
  });

  const response = await fetch(`${getBaseUrl()}/api/stream`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const token: string = data.token as string;
  return token;
}

const useToken = (id: string) =>
  useQuery({
    queryKey: ["token"],
    queryFn: () => generateToken(id),
  });

export default useToken;
