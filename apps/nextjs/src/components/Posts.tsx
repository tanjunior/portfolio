import { api } from "~/utils/server";
import CreatePostForm from "./CreatePostForm";
import PostList from "./PostList";

export default async function Posts() {
  const posts = await api.post.all.query();
  // console.log(posts);
  return (
    <div className="h-[50vh] w-full max-w-2xl overflow-y-scroll">
      <CreatePostForm />
      <PostList posts={posts} />
      {/* <PostList /> */}
    </div>
  );
}
