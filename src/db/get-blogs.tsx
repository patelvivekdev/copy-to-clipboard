import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

const BLOGS_FOLDER = path.join(process.cwd(), "content", "blogs");

type Metadata = {
  title: string;
  publishedAt: string;
  description: string;
  image?: string;
  tags: string;
  published: boolean;
};

function getBlogFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export const getBlogs = cache(() => {
  const posts = getBlogFiles(BLOGS_FOLDER);

  return posts.map((post) => {
    const filePath = path.join(BLOGS_FOLDER, post);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
      metadata: data as Partial<Metadata>,
      content,
      slug: post.replace(/\.mdx?$/, ""),
    };
  });
});

export function getBlog(slug: string) {
  let blogs = getBlogs();
  if (process.env.APP_ENV !== "development") {
    blogs = blogs.filter(
      (blog) => blog.metadata && blog.metadata.published === true
    );
  }
  const blog = blogs.find((blog) => blog.slug === slug);
  return blog;
}

export default getBlogs;
