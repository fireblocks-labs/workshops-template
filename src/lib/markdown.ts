import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import path from 'path';
import fs from 'fs';

export async function getMarkdownContent(fileName) {
  const filePath = path.join(process.cwd(), 'src/guides', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(fileContent);

  return processedContent.toString();
}
