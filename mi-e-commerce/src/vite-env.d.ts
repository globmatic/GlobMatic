/// <reference types="vite/client" />

// Definir módulos para archivos CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}