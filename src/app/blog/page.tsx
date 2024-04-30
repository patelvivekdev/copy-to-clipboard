import getBlogs from "@/db/get-blogs";
import type { Metadata } from "next";

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
    <div>
      <h1>All Blogs</h1>
    </div>
  );
};

export default BlogPage;
