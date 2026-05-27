/// <reference types="vite/client" />

declare module "*.html?raw" {
  const value: string;
  export default value;
}
