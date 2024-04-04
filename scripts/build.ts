import { $ } from "bun";

await $`mkdir -p dist`;
await $`cp src/style.css dist/style.css`;
await $`cp src/index.html dist/index.html`;
await $`cp src/favicon.ico dist/favicon.ico`;

Bun.build({
  entrypoints: [`src/script.ts`],
  minify: true,
  outdir: `dist`,
});
