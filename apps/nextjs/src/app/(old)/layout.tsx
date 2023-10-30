import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import { headers } from "next/headers";
import { Toaster } from "@/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

import Header from "~/components/Header";
import { TRPCReactProvider } from "~/contexts/trpc-context";
import WebSocketProvider from "~/contexts/websocket-context";
import { env } from "~/env.mjs";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

/**
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
  // openGraph: {
  //   title: "Create T3 Turbo",
  //   description: "Simple monorepo with shared backend for web & mobile apps",
  //   url: "https://create-t3-turbo.vercel.app",
  //   siteName: "Create T3 Turbo",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@jullerino",
  //   creator: "@jullerino",
  // },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={["font-sans", fontSans.variable].join(" ")}>
        <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          <Header />
          <TRPCReactProvider headers={headers()}>
            <WebSocketProvider>
              <main className="md:min-h[calc(100dvh-5rem)] flex min-h-[calc(100dvh-4rem)] flex-col gap-4 space-x-6 space-y-6">
                {children}
              </main>
              <Toaster />
            </WebSocketProvider>
          </TRPCReactProvider>
        </ClerkProvider>
        <footer>
          <div className="bg-accent">
            <p>
              Fullstack framework{" "}
              <a href="https://github.com/vercel/next.js" className="underline">
                Next.js
              </a>{" "}
              13(App Router) hosted on{" "}
              <a href="https://vercel.com/" className="underline">
                Vercel
              </a>
            </p>
            <p>
              Styled with{" "}
              <a
                href="https://github.com/tailwindlabs/tailwindcss"
                className="underline"
              >
                Tailwind CSS
              </a>{" "}
              and{" "}
              <a href="https://github.com/shadcn-ui/ui" className="underline">
                shadcn-ui
              </a>
            </p>
            <p>
              Auth by{" "}
              <a
                href="https://github.com/nextauthjs/next-auth"
                className="underline"
              >
                Auth.js
              </a>
              (next-auth)
            </p>
            <p>
              Database(Postgres) hosted on{" "}
              <a href="https://neon.tech/" className="underline">
                Neon
              </a>
            </p>
            <pre>
              <a
                href="https://github.com/tanjunior/playground"
                className="underline"
              >
                Github repository for this project
              </a>
            </pre>
          </div>
        </footer>
      </body>
    </html>
  );
}
