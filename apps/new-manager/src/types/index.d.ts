export {};

declare global {
  interface Window {
    REACT_API_URL: string;
    REACT_BASE_URL: string;
  }
}