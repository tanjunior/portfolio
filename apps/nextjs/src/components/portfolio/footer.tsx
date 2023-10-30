import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Tan Jing Ren. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js 13(App Router & React Server Components), TypeScript,
        Tailwind CSS, Framer Motion, Resend, Vercel hosting.
      </p>
    </footer>
  );
}
