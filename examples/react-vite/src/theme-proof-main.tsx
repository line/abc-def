import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import ThemeProofPage from "./pages/theme-proof";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing #root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProofPage />
  </StrictMode>,
);
