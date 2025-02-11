// starlf.github.io/src/pages/docs/[docName].tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';

const DocPage: React.FC<{ docName: string }> = ({ docName }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    const filePath = path.join(__dirname, '..', 'files', docName);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        setMarkdownContent(data);
      }
    });
  }, [docName]);

  return (
    <div className="markdown-content">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default DocPage;
