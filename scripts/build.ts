// Copy static files
Bun.write("dist/favicon.ico", Bun.file("src/favicon.ico"));

export async function buildHtml() {
  const html = await Bun.file("src/index.html").text();
  const rw = new HTMLRewriter()
    .on("link[rel=stylesheet]", {
      async element(el) {
        const href = el.getAttribute("href")!;
        const css = await Bun.build({
          experimentalCss: true,
          entrypoints: [`src/${href}`],
          minify: true,
        }).then((bo) => bo.outputs[0].text());
        el.replace(`<style>${css}</style>`, { html: true });
      },
    })
    .on("script[src]", {
      async element(el) {
        const src = el.getAttribute("src")!;
        const script = await Bun.build({
          entrypoints: [`src/${src}`],
          minify: true,
        }).then((bo) => bo.outputs[0].text());
        el.replace(`<script>${script}</script>`, { html: true });
      },
    });

  return rw.transform(html);
}
Bun.write("dist/index.html", await buildHtml());
