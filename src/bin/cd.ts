export default function cd(args: string[], cwd: string) {
	if (args.length > 1)
		return `Incorrect usage of the cd command. Use "help cd" to see how to use this command.`;

	const arg = args[0];

	switch (cwd) {
		case "/": {
			if (!arg || arg === "." || arg === ".." || arg === "/") return "/";
			if (arg.match(/^(\.?\/)?projects\/?$/)) return "/projects/";
			if (arg.match(/^(\.?\/)?contact\/?$/)) return "/contact/";
			break;
		}

		case "/projects/": {
			if (!arg || arg === "." || arg.match(/^(\.\.)?\/projects\/?$/))
				return "/projects/";
			if (arg.match(/^(\.\.)?\/?$/)) return "/";
			if (arg.match(/^(\.\.)?\/contact\/?$/)) return "/contact/";
			break;
		}

		case "/contact/": {
			if (!arg || arg === "." || arg.match(/^(\.\.)?\/contact\/?$/))
				return "/contact/";
			if (arg.match(/^(\.\.)?\/?$/)) return "/";
			if (arg.match(/^(\.\.)?\/projects\/?$/)) return "/projects/";
			break;
		}
	}

	return `${arg}: Directory not found`;
}
