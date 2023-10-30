import { headers } from "next/headers";

import { Toaster } from "~/components/ui/toaster";
import ThemeContextProvider from "~/contexts/theme-context";
import { TRPCReactProvider } from "~/contexts/trpc-context";

import "~/styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <TRPCReactProvider headers={headers()}>
            {children}

            <Toaster />
          </TRPCReactProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}