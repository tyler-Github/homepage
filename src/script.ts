import about from "./bin/about.ts";
import commit from "./bin/commit.ts";
import color from "./bin/color.ts";
import fallback from "./bin/fallback.ts";
import help from "./bin/help.ts";
import ls from "./bin/ls.ts";
import { open } from "./bin/open.ts";

const cmdHistory: string[] = [];
let currentPos = cmdHistory.length - 1;

const input = document.querySelector("input");
if (!input) throw new Error("Input element not found");

const log = document.getElementById("log");
if (!log) throw new Error("Log element not found");

log.innerHTML += `${about()}\n`;
log.innerHTML += `Type "help" to see all available commands.\n`;

document.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).id === "log") return;
  input.focus();
});

const Commands = {
  about,
  commit,
  clear() {
    log.innerHTML = "";
    input.value = "";
  },
  color,
  help,
  ls,
  open,
  fallback,
};

input.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp": {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (currentPos >= 0) {
          input.value = cmdHistory[currentPos];
          currentPos -= 1;
        }
      }
      break;
    }

    case "ArrowDown": {
      e.preventDefault();
      if (currentPos < cmdHistory.length - 1) {
        currentPos += 1;
        input.value = cmdHistory[currentPos];
      } else {
        input.value = "";
      }

      break;
    }

    case "Enter": {
      const cmd = input.value.toLowerCase().trim();
      cmdHistory.push(cmd);
      currentPos = cmdHistory.length - 1;

      if (cmd === "clear") {
        log.innerHTML = "";
        input.value = "";
        return;
      }

      let returnVal: string = "";
      const command = cmd.split(" ")[0];
      const args = cmd.split(" ").slice(1);

      switch (command) {
        case "about": {
          returnVal = Commands.about();
          break;
        }
        case "commit": {
          returnVal = Commands.commit();
          break;
        }
        case "clear": {
          Commands.clear();
          return;
        }
        case "color": {
          returnVal = Commands.color(args);
          break;
        }
        case "help": {
          returnVal = Commands.help(args);
          break;
        }
        case "ls": {
          returnVal = Commands.ls(args);
          break;
        }
        case "open": {
          returnVal = Commands.open(args);
          break;
        }
        default:
          returnVal = Commands.fallback(cmd);
      }

      log.innerHTML += `user@zerolimits.dev / > ${input.value}\n`;
      log.innerHTML += !returnVal ? returnVal : `${returnVal}\n`;

      scrollTo(0, document.body.scrollHeight);
      input.value = "";
    }
  }
});
