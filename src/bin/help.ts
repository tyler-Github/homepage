export default function help(arg: string | undefined) {
  const html = `
COMMANDS
  about        Show details about the site
  cd           Change directory
  clear        Clear the screen
  help         Display this help menu
  ls           List contents of directory
`;

  const args: { [index: string]: string } = {
    about: `about          Show details about the site`,
    cd: `cd           Change directory`,
    clear: `clear          Clear the screen`,
    help: `help           Display this help menu`,
    ls: `ls             List sections`,
  };

  if (arg) {
    return args[arg];
  }

  return html.trim();
}
