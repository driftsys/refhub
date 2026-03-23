#!/usr/bin/env -S deno run --allow-net --allow-read
// scripts/dev-server.ts — Static file server for _site/

const port = 8000;
const root = new URL("../_site", import.meta.url).pathname;

const mimeTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

function contentType(path: string): string {
  const ext = path.match(/\.[^.]+$/)?.[0] ?? "";
  return mimeTypes[ext] ?? "application/octet-stream";
}

Deno.serve({ port }, async (req: Request) => {
  const url = new URL(req.url);
  let path = decodeURIComponent(url.pathname);

  // Resolve directory to index.html
  if (path.endsWith("/")) path += "index.html";

  const filePath = root + path;
  try {
    const file = await Deno.open(filePath, { read: true });
    return new Response(file.readable, {
      headers: { "content-type": contentType(filePath) },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
});

console.log(`Serving ${root} at http://localhost:${port}`);
