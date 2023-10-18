// import { Suspense } from "react";
// import { AuthShowcase } from "@/auth-showcase";
// import CreatePostForm from "@/CreatePostForm";
import About from "@/portfolio/about";
import Contact from "@/portfolio/contact";
import Experience from "@/portfolio/experience";
import Intro from "@/portfolio/intro";
import Projects from "@/portfolio/projects";
import SectionDivider from "@/portfolio/section-divider";
import Skills from "@/portfolio/skills";

// import { PostCardSkeleton } from "@/PostCard";
// import PostList from "@/PostList";

// import { api } from "~/utils/server";

export const runtime = "edge";

// export default async function HomePage() {
//   const posts = await api.post.all.query();
//   return (
//     <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
//       <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
//         <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
//           Create <span className="text-pink-400">T3</span> Turbo
//         </h1>
//         <AuthShowcase />

//         <CreatePostForm />
//         <div className="h-[40vh] w-full max-w-2xl overflow-y-scroll">
//           <Suspense
//             fallback={
//               <div className="flex w-full flex-col gap-4">
//                 <PostCardSkeleton />
//                 <PostCardSkeleton />
//                 <PostCardSkeleton />
//               </div>
//             }
//           >
//             <PostList data={posts} />
//           </Suspense>
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
