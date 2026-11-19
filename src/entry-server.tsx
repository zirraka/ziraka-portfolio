import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

/** Used at build time only: renders the page to static HTML so crawlers see real content. */
export const render = () =>
  renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
