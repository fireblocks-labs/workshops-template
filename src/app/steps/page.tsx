import path from "path";
import fs from "fs";
import {unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import StepsClient from "./StepsClient";
import Navbar from "../components/Navbar";
import React from "react";
import { stepsPageConfig } from "@/config";



async function getStepContent(fileName: string) {
  const filePath = path.join(process.cwd(), "src/guides", fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(fileContent);

  return processedContent.toString();
}

export default async function Steps() {
  const steps = await Promise.all(
    stepsPageConfig.stepsData.map(async (step) => ({
      ...step,
      content: await getStepContent(step.file),
    }))
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-24">
        <StepsClient steps={steps} />
      </div>
    </>
  );
}
