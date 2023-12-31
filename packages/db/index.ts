import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as post from "./schema/post";
import * as todo from "./schema/todo";
import * as user from "./schema/user";

export const schema = { ...post, ...todo, ...user };

export * from "drizzle-orm";

export const db = drizzle(
  new Client({
    url: process.env.DATABASE_URL,
  }).connection(),
  { schema },
);
