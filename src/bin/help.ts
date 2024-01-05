export default function help(arg: string | undefined) {
    const html =
        `
COMMANDS
    help        Display this help menu
    clear       Clear the screen
    about       Show details about the site
    ls          List sections
`;

    const args: { [index: string]: string; } = {
        help: `help        Display this help menu`,
        clear: `clear       Clear the screen`,
        about: `about       Show details about the site`,
        ls: `ls          List sections`
    };

    if (arg) {
        return args[arg];
    }

    return html.trim();
}