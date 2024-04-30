import type { Metadata } from "next";
import { Suspense, cache } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import getBlogs from "@/db/get-blogs";
import { CustomMDX } from "@/components/mdx";

export default function Blog({ params }: { params: any }) {
  const blog = getBlogs().find((post) => post.slug === params.slug);

  if (!blog) {
    return notFound();
  }
  return (
    <div className="mx-auto mt-40 w-11/12 sm:w-3/4">
      <h1 className="text-start text-xl sm:text-4xl font-bold">
        {blog.metadata.title}
      </h1>
      <div className="mb-4 mt-2 flex items-center justify-between">
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          <span className="flex flex-row items-center gap-2">
            {blog.metadata.summary}
          </span>
        </p>
      </div>
      <article className="prose prose-zinc mx-auto my-10 max-w-none dark:prose-invert md:prose-lg lg:prose-xl">
        <CustomMDX components={{}}>{blog.content}</CustomMDX>
      </article>
    </div>
  );
}
