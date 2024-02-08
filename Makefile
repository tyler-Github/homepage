build:
	@echo "Building..."
	@mkdir -p ./dist
	@cp ./src/style.css ./dist/style.css
	@cp ./src/index.html ./dist/index.html
	@cp ./src/favicon.ico ./dist/favicon.ico
	@bun build ./src/script.ts --minify --outfile ./dist/script.js

dev:
	@make build
	@bunx serve dist
