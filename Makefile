build:
	@mkdir -p dist
	@cp src/style.css src/index.html src/favicon.ico dist/
	@bun build src/script.ts --outdir dist/ --minify

dev:
	@watchexec -r "make build && bunx serve dist"
