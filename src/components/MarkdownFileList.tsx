import React, { useEffect, useState } from 'react';
import { Link } from 'umi';
import fs from 'fs';
import path from 'path';

const MarkdownFileList: React.FC = () => {
  const [markdownFiles, setMarkdownFiles] = useState<string[]>([]);

  useEffect(() => {
    const filesDir = path.join(__dirname, '..', 'files');
    fs.readdir(filesDir, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
      } else {
        const mdFiles = files.filter(file => path.extname(file) === '.md');
        setMarkdownFiles(mdFiles);
      }
    });
  }, []);

  return (
    <div className="markdown-file-list">
      {markdownFiles.map((file, index) => (
        <Link key={index} to={`/docs/${file}`}>{file}</Link>
      ))}
    </div>
  );
};

export default MarkdownFileList;
