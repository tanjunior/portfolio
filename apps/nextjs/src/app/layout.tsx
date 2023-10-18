import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import { headers } from "next/headers";
import Footer from "@/portfolio/footer";
import Header from "@/portfolio/header";
import ThemeSwitch from "@/portfolio/theme-switch";
import { Toaster } from "@/ui/toaster";

// import { ClerkProvider } from "@clerk/nextjs";

import ActiveSectionContextProvider from "~/contexts/active-section-context";
import ThemeContextProvider from "~/contexts/theme-context";
// import { env } from "~/env.mjs";
import { TRPCReactProvider } from "./providers";

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

// export default function Layout(props: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={["font-sans", fontSans.variable].join(" ")}>
//         <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
//           <TRPCReactProvider headers={headers()}>
//             {props.children}
//           </TRPCReactProvider>
//         </ClerkProvider>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${fontSans.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <TRPCReactProvider headers={headers()}>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />

              <Toaster />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </TRPCReactProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
