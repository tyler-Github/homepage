export default function ls(arg: string | undefined) {
    const html = `
OPTIONS
    projects        ZeroLimits.dev - <a href="https://zerolimits.dev">Link</a> - <a href="https://github.com/noClaps/ZeroLimits.dev">Source</a>
                    The Blog of Random - <a href="https://blog.zerolimits.dev">Link</a> - <a href="https://github.com/noClaps/blog">Source</a>
                    Aperturic Focus - <a href="https://gallery.zerolimits.dev">Link</a> - <a href="https://github.com/noClaps/gallery">Source</a>
    contact         Email - <a href="mailto:contact@zerolimits.dev">contact@zerolimits.dev</a>
`;
    const args: { [index: string]: string; } = {
        projects: `
ZeroLimits.dev - <a href="https://zerolimits.dev">Link</a> - <a href="https://github.com/noClaps/ZeroLimits.dev">Source</a>
The Blog of Random - <a href="https://blog.zerolimits.dev">Link</a> - <a href="https://github.com/noClaps/blog">Source</a>
Aperturic Focus - <a href="https://gallery.zerolimits.dev">Link</a> - <a href="https://github.com/noClaps/gallery">Source</a>
`,
        contact: `
Email - <a href="mailto:contact@zerolimits.dev">contact@zerolimits.dev</a>
`
    };

    if (!arg) {
        return html.trim();
    }

    return args[arg].trim();
}
