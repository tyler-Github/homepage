export default function help(arg: string | undefined) {
    const html = `
<pre>
COMMANDS
    help        Display this help menu
    clear       Clear the screen
    about       Show details about the site
    ls          List sections
</pre>
    `;

    const args: { [index: string]: string; } = {
        help: `<pre>help        Display this help menu</pre>`,
        clear: `<pre>clear       Clear the screen</pre>`,
        about: `<pre>about       Show details about the site</pre>`,
        ls: `<pre>ls          List sections</pre>`
    };

    if (arg) {
        return args[arg];
    }

    return html;
}