import { NextResponse } from "next/server";

import { db, eq, schema, sql } from "@acme/db";

export async function handler() {
  try {
    const update = await db
      .update(schema.keepAlive)
      .set({
        count: sql`${schema.keepAlive.count} + 1`,
      })
      .where(eq(schema.keepAlive.id, "1"));
    return NextResponse.json(update.time);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export { handler as GET, handler as POST };
