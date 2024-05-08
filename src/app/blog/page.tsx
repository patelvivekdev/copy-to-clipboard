import getBlogs from "@/db/get-blogs";
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Read all the blogs I have written",
  description:
    "Get practical tips and insights on React, Next.js, and modern web development techniques from my blog.",
  keywords:
    "blogs, writing, articles, nextjs, react, javascript, web development, modern web development",
};

const BlogPage = () => {
  let allBlogs = getBlogs();

  allBlogs = allBlogs.filter((blog) => blog.metadata.published);

  // sort by date
  allBlogs = allBlogs.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt!);
    const dateB = new Date(b.metadata.publishedAt!);
    return dateB.getTime() - dateA.getTime();
  });
  return (
    <div className="min-h-screen mx-auto w-4/5 flex justify-center items-center">
      <h1 className="text-3xl font-bold">All Blogs</h1>

      <div className='flex flex-col gap-4'>
        {allBlogs.map((blog) => (
          <div key={blog.slug} className='flex flex-col gap-2 border rounded-md p-4'>
            <Link href={`/blog/${blog.slug}`}>
              <h3 className='text-xl font-bold'>{blog.metadata.title}</h3>
            </Link>
            <p>{blog.metadata.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
