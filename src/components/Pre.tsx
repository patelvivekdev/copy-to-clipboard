"use client";
import { useState } from "react";
import { Clipboard } from "lucide-react";
import { toast } from "react-hot-toast";

const Pre = (props: any) => {
  const textInput = props.children;
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput);
    toast.success("Copied to clipboard!", {
      position: "bottom-center",
      duration: 2500,
    });
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="relative">
      <button
        aria-label="Copy code"
        type="button"
        className="h-4 w-4"
        onClick={onCopy}
      >
        {copied ? (
          <Clipboard className="text-[#80d1a9]" />
        ) : (
          <Clipboard className="dark:text-white text-[#333]" />
        )}
      </button>
    </div>
  );
};

export default Pre;
