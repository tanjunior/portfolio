import { NextResponse } from "next/server";

import { db, eq, schema, sql } from "@acme/db";

export async function handler() {
  try {
    await db
      .update(schema.keepAlive)
      .set({
        count: sql`${schema.keepAlive.count} + 1`,
      })
      .where(eq(schema.keepAlive.id, "1"));

    const data = await db.query.keepAlive.findFirst({
      where: eq(schema.keepAlive.id, "1"),
    });

    return NextResponse.json(data?.count);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export { handler as GET, handler as POST };
