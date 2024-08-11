/// <reference lib="dom" />

import about from "./bin/about";
import cd from "./bin/cd";
import color from "./bin/color";
import fallback from "./bin/fallback";
import help from "./bin/help";
import ls from "./bin/ls";

const history: string[] = [];
let currentPos = history.length - 1;

const input = document.querySelector("input")!;
const log = document.getElementById("log")!;
const cwdElem = document.querySelector("#cwd")!;

log.innerHTML += `${about()}\n`;
log.innerHTML += `Type "help" to see all available commands.\n`;

let cwd = "/";
cwdElem.innerHTML = cwd;

document.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).id === "log") return;
  input.focus();
});

const Commands = {
  about,
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

    if (Object.hasOwn(Commands, command)) {
      if (command === "about") returnVal = Commands.about();
      if (command === "cd") {
        cwd = Commands.cd(args, cwd);
        if (!cwd.endsWith("/")) {
          returnVal = cwd;
          cwd = originalCwd;
        } else {
          cwdElem.innerHTML = cwd;
          returnVal = "";
        }
      }
      if (command === "clear") {
        Commands.clear();
        return;
      }
      if (command === "color") returnVal = Commands.color(args);
      if (command === "help") returnVal = Commands.help(args);
      if (command === "ls") returnVal = Commands.ls(args, cwd);
    } else {
      returnVal = Commands.fallback(cmd);
    }

    log.innerHTML += `${originalCwd} > ${input.value}\n`;
    log.innerHTML += !returnVal ? returnVal : `${returnVal}\n`;

    scrollTo(0, document.body.scrollHeight);
    input.value = "";
  }
};
