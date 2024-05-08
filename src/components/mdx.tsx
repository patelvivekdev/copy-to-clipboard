import { MDXComponents } from "mdx/types";
import { Tweet } from "react-tweet";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Code } from "bright";
import Pre from "./Pre";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
};

export const mdxComponents: MDXComponents = {
  pre: (props) => (
    <div className="flex flex-row gap-2 bg-[#0d1117]">
      <Code className="w-full">{props.children}</Code>
      <Pre {...props} />
    </div>
  ),
  // code: (props) => <Code {...props}>{props.children}</Code>,
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
