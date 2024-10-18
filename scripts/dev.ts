import type { Serve } from "bun";
import { watch } from "node:fs";

const serverOptions: Serve = {
  async fetch({ url }) {
    const path = new URL(url).pathname;

    switch (path) {
      case "/":
        return new Response(Bun.file("src/index.html"));
      case "/favicon.ico":
        return new Response(Bun.file("src/favicon.ico"));
      case "/style.css":
        return new Response(Bun.file("src/style.css"));
      case "/script.js": {
        const script = await Bun.build({
          entrypoints: ["src/script.ts"],
        }).then((bo) => bo.outputs[0].arrayBuffer());
        return new Response(script, {
          headers: { "content-type": "application/javascript" },
        });
      }
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
