import { MDXComponents } from "mdx/types";
import { Tweet } from "react-tweet";
import { MDXRemote } from "next-mdx-remote/rsc";
import Pre from "./Pre";

export const mdxComponents: MDXComponents = {
  pre: Pre,
  Tweet: (props) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tweet {...props} />
    </div>
  ),
};

export function CustomMDX({
  children,
  components,
}: {
  children: string;
  components: MDXComponents;
}) {
  return (
    <MDXRemote
      source={children}
      components={{ ...mdxComponents, ...(components || {}) }}
    />
  );
}
