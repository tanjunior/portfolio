"use client";

import type { SelectPost } from "@acme/db/schema/post";

import { api } from "~/utils/client";
import PostCard, { PostCardSkeleton } from "./PostCard";

export default function PostList({ data }: { data: SelectPost[] }) {
  const { data: posts } = api.post.all.useQuery(undefined, {
    initialData: data,
  });

  if (posts.length === 0) {
    return (
      <div className="relative flex w-full flex-col gap-4">
        <PostCardSkeleton pulse={false} />
        <PostCardSkeleton pulse={false} />
        <PostCardSkeleton pulse={false} />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
          <p className="text-2xl font-bold text-white">No posts yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {posts.map((p) => {
        return <PostCard key={p.id} post={p} />;
      })}
    </div>
  );
}
