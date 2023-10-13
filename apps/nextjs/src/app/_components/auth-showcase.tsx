import { currentUser  } from "@clerk/nextjs";
import { SignIn, SignOut } from "~/components/auth";

export async function AuthShowcase() {
  const user = await currentUser ();

  if (!user) {
    return (
      <SignIn className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20" />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {user && <span>Logged in as {user.username}</span>}
      </p>

      <SignOut className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20">
        Sign out
      </SignOut>
    </div>
  );
}
