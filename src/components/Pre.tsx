"use client";
import { useState } from "react";
import { Copy, Check } from 'lucide-react';

const Pre = (props: any) => {
  const textInput = props.children;
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative top-[20px] right-[20px]">
      <button
        aria-label="Copy code"
        type="button"
        className="h-4 w-4"
        onClick={onCopy}
      >
        {copied ? <Check className='text-[#80d1a9]' /> : <Copy className='text-white' />}
      </button>
    </div>
  );
};

export default Pre;
