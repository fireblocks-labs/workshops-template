import React, { useEffect } from "react";

interface CodeWithCopyProps {
  htmlContent: string;
}

const CodeWithCopy: React.FC<CodeWithCopyProps> = ({ htmlContent }) => {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach((block) => {
      const button = document.createElement("button");
      button.innerText = "Copy";
      button.className =
        "absolute right-2 top-2 bg-gray-700 text-white px-2 py-1 rounded text-sm";

      button.onclick = () => {
        navigator.clipboard.writeText(block.textContent || "");
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
      };

      const pre = block.parentNode as HTMLElement;
      pre.className = "relative overflow-x-auto"; // Ensure scrollable on small screens
      pre.style.position = "relative";
      pre.appendChild(button);
    });
  }, [htmlContent]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default CodeWithCopy;
