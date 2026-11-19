// Injects the server-rendered app into dist/index.html, then removes the temporary SSR build.
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const dist = resolve("dist");
const ssrDir = resolve("dist-ssr");
const { render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);

const file = resolve(dist, "index.html");
const html = readFileSync(file, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("prerender: #root placeholder not found");

writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log("prerender: injected static HTML into dist/index.html");
