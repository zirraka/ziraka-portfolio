import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// In production the HTML is pre-rendered at build time, so attach to it; in dev, render fresh.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
