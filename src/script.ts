/// <reference lib="dom" />

import about from "./bin/about";
import commit from "./bin/commit";
import cd from "./bin/cd";
import color from "./bin/color";
import fallback from "./bin/fallback";
import help from "./bin/help";
import ls from "./bin/ls";

const history: string[] = [];
let currentPos = history.length - 1;

const input = document.querySelector("input");
if (!input) throw new Error("Input element not found");

const log = document.getElementById("log");
if (!log) throw new Error("Log element not found");

const cwdElem = document.querySelector("#cwd");
if (!cwdElem) throw new Error("CWD element not found");

log.innerHTML += `${about()}\n`;
log.innerHTML += `Type "help" to see all available commands.\n`;

let cwd = "/";

document.addEventListener("click", (ev) => {
	if ((ev.target as HTMLElement).id === "log") return;
	input.focus();
});

const Commands = {
	about,
	commit,
	cd,
	clear() {
		log.innerHTML = "";
		input.value = "";
	},
	color,
	help,
	ls,
	fallback,
};

input.onkeyup = (e) => {
	if (e.key === "ArrowUp") {
		e.preventDefault();
		if (currentPos >= 0) {
			input.value = history[currentPos];
			currentPos -= 1;
		}
	}

	if (e.key === "ArrowDown") {
		e.preventDefault();
		if (currentPos < history.length - 1) {
			currentPos += 1;
			input.value = history[currentPos];
		} else {
			input.value = "";
		}
	}

	if (e.key === "Enter") {
		const cmd = input.value.toLowerCase().trim();
		history.push(cmd);
		currentPos = history.length - 1;

		if (cmd === "clear") {
			log.innerHTML = "";
			input.value = "";
			return;
		}

		let returnVal: string = "";
		const command = cmd.split(" ")[0];
		const args = cmd.split(" ").slice(1);
		const originalCwd = cwd;

		switch (command) {
			case "about":
				returnVal = Commands.about();
				break;
			case "commit":
				returnVal = Commands.commit();
				break;
			case "cd":
				cwd = Commands.cd(args, cwd);
				if (!cwd.endsWith("/")) {
					returnVal = cwd;
					cwd = originalCwd;
				} else {
					cwdElem.innerHTML = cwd;
					returnVal = "";
				}
				break;
			case "clear":
				Commands.clear();
				return;
			case "color":
				returnVal = Commands.color(args);
				break;
			case "help":
				returnVal = Commands.help(args);
				break;
			case "ls":
				returnVal = Commands.ls(args, cwd);
				break;
			default:
				returnVal = Commands.fallback(cmd);
		}

		log.innerHTML += `${originalCwd} > ${input.value}\n`;
		log.innerHTML += !returnVal ? returnVal : `${returnVal}\n`;

		scrollTo(0, document.body.scrollHeight);
		input.value = "";
	}
};
