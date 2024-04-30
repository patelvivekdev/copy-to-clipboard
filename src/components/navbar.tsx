import React from "react";
import Link from "next/link";

export default function Component() {
  return (
    <header className="flex bg-neutral-500 h-16 w-full items-center justify-between px-4 md:px-6">
      <Link className="flex items-center gap-2" href="/">
        <span className="text-lg font-bold">Home</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium ">
        <Link className="hover:underline" href="/blog">
          Blog
        </Link>
      </nav>
    </header>
  );
}
