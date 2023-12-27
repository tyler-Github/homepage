/// <reference lib="dom" />

import data from "./data.json";

const input = document.querySelector("input")!;
const log = document.getElementById("log")!;

log.insertAdjacentHTML("beforeend", about());
log.insertAdjacentHTML("beforeend", help(""));

document.addEventListener("click", () => input.focus());

input.onkeyup = (e) => {
    if (e.key === "Enter") {
        const cmd = input.value.toLowerCase();

        if (cmd === "clear") {
            log.innerHTML = "";
            input.value = "";
            return;
        };

        let returnVal = "<p>Not a valid command</p>";

        if (cmd.startsWith("help")) returnVal = help(cmd.split(" ")[1]);
        if (cmd === "about") returnVal = about();
        if (cmd.startsWith("ls")) returnVal = ls(cmd.split(" ")[1]);
        if (cmd === "") returnVal = "";

        log.insertAdjacentHTML("beforeend", `<p>> ${ input.value }</p>`);
        log.insertAdjacentHTML("beforeend", returnVal);

        scrollTo(0, document.body.scrollHeight);
        input.value = "";
    }
};

function help(arg: string | undefined) {
    const args: { [index: string]: string; } = {
        help: `<dt>help</dt><dd>Display this help menu</dd>`,
        clear: `<dt>clear</dt><dd>Clear the screen</dd>`,
        about: `<dt>about</dt><dd>Show details about the site</dd>`,
        ls: `<dt>ls</dt><dd>List sections</dd>`
    };

    if (arg) {
        return `<dl>${ args[arg] }</dl>`;
    }

    return `
        <p>Commands</p>    
        <dl>${ Object.values(args).join("") }</dl>
    `;
}

function about() {
    return `<p>ZeroLimits.dev - Made by <a href="https://github.com/noClaps">noClaps</a></p>`;
}

function ls(arg: string | undefined) {
    const args: { [index: string]: string; } = {
        projects: data.projects.map(project => (
            `<p>${ project.name } - ${ project.url ? `<a href=${ project.url }>Link</a> - ` : "" } <a href="${ project.source }">Source</a></p>`
        )).join(""),
        contact: data.contact.map(c => (
            `<p>${ c.name } - <a href="${ c.url }">${ c.content }</a></p>`
        )).join("")
    };

    if (!arg) {
        let output = "<dl>";
        for (const val in args) {
            output += `<dt>${ val }</dt>`;
            output += `<dd>${ args[val] }<dd>`;
        }
        output += "</dl>";

        return output;
    }

    return args[arg];
}
