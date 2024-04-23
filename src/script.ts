/// <reference lib="dom" />

import help from "./bin/help";
import about from "./bin/about";
import ls from "./bin/ls";
import cd from "./bin/cd";
import fallback from "./bin/fallback";

const history: string[] = [];
let currentPos = history.length - 1;

const input = document.querySelector("input")!;
const log = document.getElementById("log")!;
const cwdElem = document.querySelector("#cwd")!;

log.innerHTML += `${about()}\n`;
log.innerHTML += `Type "help" to see all available commands.\n`;

let cwd = "/";
cwdElem.innerHTML = cwd;

document.addEventListener("click", () => input.focus());

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

    let returnVal = fallback(cmd);

    const originalCwd = cwd;
    if (cmd.startsWith("cd ") || cmd === "cd") {
      cwd = cd(cmd.split(" ")[1], cwd);

      if (!cwd.endsWith("/")) {
        returnVal = cwd;
        cwd = originalCwd;
      } else {
        cwdElem.innerHTML = cwd;
        returnVal = "";
      }
    }

    if (cmd.startsWith("help ") || cmd === "help")
      returnVal = help(cmd.split(" ")[1]);

    if (cmd === "about") returnVal = about();

    if (cmd.startsWith("ls ") || cmd === "ls")
      returnVal = ls(cmd.split(" ")[1], cwd);

    if (cmd === "") returnVal = "";

    log.innerHTML += `${originalCwd} > ${input.value}\n`;
    log.innerHTML += !returnVal ? returnVal : `${returnVal}\n`;

    scrollTo(0, document.body.scrollHeight);
    input.value = "";
  }
};
