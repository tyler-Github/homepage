export default function help(arg: string | undefined) {
  const html = `
COMMANDS
  about            Show details about the site
  cd [directory]   Change directory
  clear            Clear the screen
  help [command]   Display help menu
  ls [directory]   List contents of directory
`;

  const args: { [index: string]: string } = {
    about: `
NAME: about – Show details about the site
USAGE: about
`,
    cd: `
NAME: cd – Change directory
USAGE: cd [directory]
ARGUMENTS:
  directory        The directory to change to. The available directories can be
                   listed with "ls". If this argument is not provided, the
                   directory does not change.
`,
    clear: `
NAME: clear – Clear the screen
USAGE: clear
`,
    help: `
NAME: help – Display help menu
USAGE: help [command]
ARGUMENTS:
  command        The command to list the help guide for. If this argument is
                 not provided, the list of commands and their descriptions is
                 displayed.
`,
    ls: `
NAME: ls – List contents of directory
USAGE: ls [directory]
ARGUMENTS:
  directory        The directory for which to list contents for. If this
                   argument is not provided, the contents of the current
                   directory are listed. Directory names end with a
                   backslash (/).
`,
  };

  if (arg && args[arg]) {
    return args[arg].trim();
  }

  return html.trim();
}
