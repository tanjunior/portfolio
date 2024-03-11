import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

import * as keepAlive from "./schema/keep_alive";
import * as post from "./schema/post";
import * as todo from "./schema/todo";
import * as user from "./schema/user";

export const schema = { ...post, ...todo, ...user, ...keepAlive };

export * from "drizzle-orm";


const sql = neon(process.env.DATABASE_URL!);


export const db = drizzle(
  sql,
  { schema },
);
