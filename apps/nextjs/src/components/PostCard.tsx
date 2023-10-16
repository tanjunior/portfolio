"use client";

import type { RouterOutputs } from "@acme/api";

import { api } from "~/utils/client";

export default function PostCard(props: {
  post: RouterOutputs["post"]["all"][number];
}) {
  const context = api.useContext();
  const deletePost = api.post.delete.useMutation({
    onError(err) {
      if (err.data?.code === "UNAUTHORIZED") alert("You must be logged in");
    },
  });

  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-pink-400">{props.post.title}</h2>
        <p className="mt-2 text-sm">{props.post.content}</p>
      </div>
      <div>
        <button
          className="cursor-pointer text-sm font-bold uppercase text-pink-400"
          onClick={async () => {
            await deletePost.mutateAsync(props.post.id);
            await context.post.all.invalidate();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export function PostCardSkeleton(props: { pulse?: boolean }) {
  const { pulse = true } = props;
  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2
          className={`w-1/4 rounded bg-pink-400 text-2xl font-bold ${
            pulse && "animate-pulse"
          }`}
        >
          &nbsp;
        </h2>
        <p
          className={`mt-2 w-1/3 rounded bg-current text-sm ${
            pulse && "animate-pulse"
          }`}
        >
          &nbsp;
        </p>
      </div>
    </div>
  );
}
