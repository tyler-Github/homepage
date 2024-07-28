import type { Serve } from "bun";
import { watch } from "node:fs";

const serverOptions: Serve = {
  async fetch({ url }) {
    const path = new URL(url).pathname;

    switch (path) {
      case "/":
        return new Response(Bun.file("src/index.html"));
      case "/style.css":
        return new Response(Bun.file("src/style.css"));
      case "/script.js":
        const { outputs } = await Bun.build({
          entrypoints: ["src/script.ts"],
          minify: true,
        });
        return new Response(await outputs[0].text(), {
          headers: { "Content-Type": "application/javascript" },
        });
      case "/favicon.ico":
        return new Response(Bun.file("src/favicon.ico"));
      default:
        return new Response("Not found", { status: 404 });
    }
  },
};

const server = Bun.serve(serverOptions);
console.log(`Server started at ${server.url}`);

watch("src", { recursive: true }, (event, filename) => {
  console.log(`Detected ${event} on ${filename}.`);
  server.reload(serverOptions);
});
