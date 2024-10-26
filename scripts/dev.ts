import type { Serve } from "bun";
import { watch } from "node:fs";
import { buildHtml } from "./build.ts";

const serverOptions: Serve = {
  async fetch({ url }) {
    const path = new URL(url).pathname;

    switch (path) {
      case "/":
        return new Response(await buildHtml(), {
          headers: { "content-type": "text/html" },
        });
      case "/favicon.ico":
        return new Response(Bun.file("src/favicon.ico"));
      default:
        return new Response("Not found", { status: 404 });
    }
  },
};

const server = Bun.serve(serverOptions);

console.log(`Server started on ${server.url}`);

watch(".", { recursive: true }, (event, filename) => {
  console.log(`Detected ${event} on ${filename}`);
  server.reload(serverOptions);
  console.log("Reloaded.");
});
