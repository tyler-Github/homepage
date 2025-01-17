import homepage from "../src/index.html";

const server = Bun.serve({
  static: {
    "/": homepage,
  },
  development: true,
  fetch() {
    return new Response("Not found", { status: 404 });
  },
});

console.log(`Server started on ${server.url}`);
