// Copy static files
Bun.write("dist/index.html", Bun.file("src/index.html"));
Bun.write("dist/favicon.ico", Bun.file("src/favicon.ico"));

// Build script and CSS
Bun.build({
  entrypoints: ["src/script.ts", "src/style.css"],
  outdir: "dist/",
  minify: true,
  experimentalCss: true,
});
