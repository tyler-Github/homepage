export default function help(args: string[]) {
  if (args.length > 1) {
    return `Incorrect usage of the help command. Use "help help" to see how to use this command.`;
  }

  const arg = args[0];

  const html = `
COMMANDS
  about                   Show details about the site
  commit                  List the conventional commits specification
  cd [directory]          Change directory
  clear                   Clear the screen
  color [color] [format]  Convert colors from one format to another
  help [command]          Display help menu
  ls [directory]          List contents of directory
`;

  const commands: { [index: string]: string } = {
    about: `
NAME: about – Show details about the site
USAGE: about
`,
    commit: `
NAME: commit – List the conventional commits specification
USAGE: commit
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
    color: `
NAME: color – Convert colors from one format to another
USAGE: color [color] [format]
ARGUMENTS:
  color         The color that you would like to convert to another format.
                This can be in any existing format, such as hex, RGB, LCH, etc.
  format        The format that you would like to convert to. This can be in
                any existing format, such as hex, RGB, LCH, etc.
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

  if (arg && commands[arg]) {
    return commands[arg].trim();
  }

  return html.trim();
}
