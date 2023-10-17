/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import type { UserResponse } from "stream-chat";

import { chatClient } from "~/hooks/useChatClient";

export default function userQueryUsers() {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;
    const getUsers = async () => {
      const { users } = await chatClient.queryUsers(
        { role: { $in: ["user", "admin"] }, id: { $ne: user.id } },
        { username: 1 },
      );

      // console.log(users);
      setUsers(users);
    };
    void getUsers();
  }, [user]);

  return users;
}
