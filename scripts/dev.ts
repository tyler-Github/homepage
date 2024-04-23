import { $ } from "bun";
import { watch } from "fs";

async function serve() {
  await $`bun run build`;

  Bun.serve({
    fetch(req) {
      const path = new URL(req.url).pathname;

      if (path === "/") return new Response(Bun.file("dist/index.html"));

      return new Response(Bun.file(`dist${path}`));
    },
    reusePort: true,
  });
}

serve().then(() => {
  console.log("Server running on http://localhost:3000");
});

watch(`${import.meta.dir}/../src`, { recursive: true }, (event, filename) => {
  console.log(`Detected ${event} on ${filename}.`);
  serve();
});
