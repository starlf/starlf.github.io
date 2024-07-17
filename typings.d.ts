declare module '*.css';
declare module '*.less';
declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';


declare module '*.md' {
  const content: string;
  export default content;
}

declare interface Window {
  AMap: any;
  loginRedirect: any;
  iconFontUrl: any;
  msCrypto: any;
  vskStorage?: {
    utils: { getSystemProductCode: () => any };
    services: string[];
  };
}
