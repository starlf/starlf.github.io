const fs = require('fs');
const path = require('path');

const readMarkdownFile = (filePath) => {
  try {
    const content = fs.readFileSync(path.resolve(filePath), 'utf8');
    return content;
  } catch (error) {
    console.error('读取文件出错：', error);
    return null;
  }
};
