import 'umi/typings';

declare module '*.css';
declare module '*.less';

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';
