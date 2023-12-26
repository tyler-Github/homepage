console.log("Development server started at http://localhost:3000")

const script = await Bun.build({
    entrypoints: ["./src/script.ts"],
    minify: true
});
const scriptText = script.outputs[0];

Bun.serve({
    fetch(req) {
        const path = new URL(req.url).pathname;

        if (path === "/script.js") return new Response(scriptText);
        if (path === "/") return new Response(Bun.file("./src/index.html"));

        return new Response(Bun.file(`./src${ path }`));
    }
});
