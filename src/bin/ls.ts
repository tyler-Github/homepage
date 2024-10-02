import directory from "../directory.json";

export default function ls(args: string[], cwd: string) {
	if (args.length > 1) {
		return `Incorrect usage of the ls command. Use "help ls" to see how to use this command.`;
	}

	const arg = args[0];

	if (cwd === "/") {
		if (!arg || arg.match(/^(\.\.?)?\/?$/))
			return Object.keys(directory["/"]).join("\n");

		if (arg.match(/^(\.?\/)?projects\/?$/)) return ls([""], "/projects/");

		if (arg.match(/^(\.?\/)?contact\/?$/)) return ls([""], "/contact/");
	}

	if (cwd === "/projects/") {
		if (!arg || arg === "." || arg.match(/^(\.\.)?\/projects\/?$/))
			return Object.values(directory["/"]["projects/"]).join("\n");

		if (arg.match(/^(\.\.)?\/?$/)) return ls([""], "/");

		if (arg.match(/^(\.\.)?\/contact\/?$/)) return ls([""], "/contact/");
	}

	if (cwd === "/contact/") {
		if (!arg || arg === "." || arg.match(/^(\.\.)?\/contact\/?$/))
			return Object.values(directory["/"]["contact/"]).join("\n");

		if (arg.match(/^(\.\.)?\/?$/)) return ls([""], "/");

		if (arg.match(/^(\.\.)?\/projects\/?$/)) return ls([""], "/projects/");
	}

	return `${arg}: Directory not found`;
}
