import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as keepAlive from "./schema/keep_alive";
import * as post from "./schema/post";
import * as todo from "./schema/todo";
import * as user from "./schema/user";

export const schema = { ...post, ...todo, ...user, ...keepAlive };

export * from "drizzle-orm";

export const db = drizzle(
  new Client({
    url: process.env.DATABASE_URL,
  }).connection(),
  { schema },
);
