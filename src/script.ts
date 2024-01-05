/// <reference lib="dom" />

import help from "./bin/help";
import about from "./bin/about";
import ls from "./bin/ls";

const input = document.querySelector("input")!;
const log = document.getElementById("log")!;

log.insertAdjacentHTML("beforeend", about());
log.insertAdjacentHTML("beforeend", `<pre>Type "help" to see all available commands.</pre>`);

document.addEventListener("click", () => input.focus());

input.onkeyup = (e) => {
    if (e.key === "Enter") {
        const cmd = input.value.toLowerCase().trim();

        if (cmd === "clear") {
            log.innerHTML = "";
            input.value = "";
            return;
        };

        let returnVal = `<pre>Not a valid command. Type "help" to see all available commands.</pre>`;

        if (cmd.startsWith("help")) returnVal = help(cmd.split(" ")[1]);
        if (cmd === "about") returnVal = about();
        if (cmd.startsWith("ls")) returnVal = ls(cmd.split(" ")[1]);
        if (cmd === "") returnVal = "";

        log.insertAdjacentHTML("beforeend", `<pre>> ${ input.value }</pre>`);
        log.insertAdjacentHTML("beforeend", returnVal);

        scrollTo(0, document.body.scrollHeight);
        input.value = "";
    }
};
